import { NextResponse } from 'next/server';

const INDEXNOW_KEY = 'b3st-r3f1n1sh1ng-1nd3xn0w-k3y';
const HOST = 'www.best-refinishing.com';

export async function POST(request: Request) {
  const { urls } = await request.json();
  
  const response = await fetch('https://api.indexnow.org/indexnow', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      host: HOST,
      key: INDEXNOW_KEY,
      keyLocation: `https://${HOST}/${INDEXNOW_KEY}.txt`,
      urlList: urls.slice(0, 10000),
    }),
  });

  return NextResponse.json({ 
    status: response.status, 
    submitted: urls.length 
  });
}
