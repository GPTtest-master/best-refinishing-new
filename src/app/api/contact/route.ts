import { NextRequest, NextResponse } from 'next/server';

interface ContactFormData {
  name: string;
  email?: string;
  phone: string;
  zip?: string;
  service: string;
  location?: string;
  message?: string;
  gclid?: string;
}

// Google Sheets webhook URL
const GOOGLE_SHEETS_WEBHOOK = 'https://script.google.com/macros/s/AKfycbyhsIpQy3oWC1MwchLAhEn3NTG4reN4JS4MnoEEfLVKjIzNlySG3uFcRKi2dhI_FnkrDA/exec';

// Twilio credentials from environment variables
const TWILIO_ACCOUNT_SID = process.env.TWILIO_ACCOUNT_SID;
const TWILIO_AUTH_TOKEN = process.env.TWILIO_AUTH_TOKEN;
const TWILIO_PHONE_NUMBER = process.env.TWILIO_PHONE_NUMBER;
const BUSINESS_PHONE = process.env.BUSINESS_PHONE || '+12067869915';

// Send data to Google Sheets
async function sendToGoogleSheets(data: ContactFormData & { timestamp: string; source: string; page: string; transaction_id: string }): Promise<boolean> {
  try {
    const response = await fetch(GOOGLE_SHEETS_WEBHOOK, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: data.name,
        phone: data.phone,
        zip: data.zip || '',
        email: data.email || '',
        services: data.service,
        gclid: data.gclid || '',
        transaction_id: data.transaction_id,
        timestamp: data.timestamp,
        source: data.source,
        page: data.page,
        status: 'new',
      }),
    });

    if (!response.ok) {
      console.error('Google Sheets error:', await response.text());
      return false;
    }

    console.log('Data sent to Google Sheets successfully');
    return true;
  } catch (error) {
    console.error('Google Sheets error:', error);
    return false;
  }
}

async function sendTwilioSMS(to: string, body: string): Promise<boolean> {
  if (!TWILIO_ACCOUNT_SID || !TWILIO_AUTH_TOKEN || !TWILIO_PHONE_NUMBER) {
    console.log('Twilio not configured, skipping SMS');
    return false;
  }

  try {
    const response = await fetch(
      `https://api.twilio.com/2010-04-01/Accounts/${TWILIO_ACCOUNT_SID}/Messages.json`,
      {
        method: 'POST',
        headers: {
          'Authorization': 'Basic ' + Buffer.from(`${TWILIO_ACCOUNT_SID}:${TWILIO_AUTH_TOKEN}`).toString('base64'),
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
          To: to,
          From: TWILIO_PHONE_NUMBER,
          Body: body,
        }),
      }
    );

    if (!response.ok) {
      const error = await response.text();
      console.error('Twilio SMS error:', error);
      return false;
    }

    console.log('SMS sent successfully to:', to);
    return true;
  } catch (error) {
    console.error('Twilio SMS error:', error);
    return false;
  }
}

export async function POST(request: NextRequest) {
  try {
    const data: ContactFormData = await request.json();

    // Validate required fields
    if (!data.name || !data.phone || !data.service) {
      return NextResponse.json(
        { error: 'Name, phone, and service are required' },
        { status: 400 }
      );
    }

    // Basic phone validation
    const phoneRegex = /^[\d\s\-\(\)\+]+$/;
    if (!phoneRegex.test(data.phone)) {
      return NextResponse.json(
        { error: 'Invalid phone number format' },
        { status: 400 }
      );
    }

    // Email validation if provided
    if (data.email) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(data.email)) {
        return NextResponse.json(
          { error: 'Invalid email format' },
          { status: 400 }
        );
      }
    }

    // Generate unique transaction ID
    const transaction_id = `TXN-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
    const timestamp = new Date().toISOString();

    // Log the submission
    console.log('New contact form submission:', {
      timestamp,
      transaction_id,
      ...data,
    });

    // Send to Google Sheets (for qualified leads tracking)
    await sendToGoogleSheets({
      ...data,
      timestamp,
      transaction_id,
      source: 'website',
      page: 'contact-form',
    });

    // Format phone for Twilio (ensure +1 prefix for US numbers)
    let formattedPhone = data.phone.replace(/\D/g, '');
    if (formattedPhone.length === 10) {
      formattedPhone = '+1' + formattedPhone;
    } else if (!formattedPhone.startsWith('+')) {
      formattedPhone = '+' + formattedPhone;
    }

    // 1. Send SMS notification to business owner
    const businessMessage = `🔔 NEW LEAD!\n\n👤 ${data.name}\n📞 ${data.phone}\n🔧 ${data.service}${data.message ? `\n💬 ${data.message}` : ''}\n\n⏰ ${new Date().toLocaleString('en-US', { timeZone: 'America/Los_Angeles' })}`;

    await sendTwilioSMS(BUSINESS_PHONE, businessMessage);

    // 2. Send confirmation SMS to customer with pricing info
    const customerMessage = `Hi ${data.name}! 👋\n\nThank you for contacting Best Refinishing!\n\nHere are our starting prices:\n🛁 Bathtub: from $700\n🚿 Shower: from $900\n🪨 Countertop: from $550\n🚰 Sink: from $400\n\nWe'll call you very soon!\n\n📞 (206) 786-9915\n🌐 best-refinishing.com`;

    await sendTwilioSMS(formattedPhone, customerMessage);

    return NextResponse.json({
      success: true,
      message: 'Thank you! We will contact you very soon.',
    });
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Failed to process request' },
      { status: 500 }
    );
  }
}
