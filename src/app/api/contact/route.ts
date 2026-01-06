import { NextRequest, NextResponse } from 'next/server';

interface ContactFormData {
  name: string;
  email?: string;
  phone: string;
  service: string;
  location?: string;
  message?: string;
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

    // Here you would typically:
    // 1. Send an email notification
    // 2. Save to a database
    // 3. Send to a CRM
    // 4. Send SMS notification

    // For now, just log the submission (replace with actual integration)
    console.log('New contact form submission:', {
      timestamp: new Date().toISOString(),
      ...data,
    });

    // Example: Send email using a service like SendGrid, Resend, or Nodemailer
    // await sendEmail({
    //   to: 'info@best-refinishing.com',
    //   subject: `New Quote Request from ${data.name}`,
    //   body: `
    //     Name: ${data.name}
    //     Phone: ${data.phone}
    //     Email: ${data.email || 'Not provided'}
    //     Service: ${data.service}
    //     Location: ${data.location || 'Not specified'}
    //     Message: ${data.message || 'None'}
    //   `,
    // });

    // Example: Send SMS notification using Twilio
    // await sendSMS({
    //   to: '+12067869915',
    //   body: `New lead: ${data.name} - ${data.phone} - ${data.service}`,
    // });

    return NextResponse.json({
      success: true,
      message: 'Thank you! We will contact you within 30 minutes.',
    });
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Failed to process request' },
      { status: 500 }
    );
  }
}
