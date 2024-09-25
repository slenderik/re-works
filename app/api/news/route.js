// app/api/news/route.js

import { fetchNews } from '@/lib/data';
import { NextResponse } from 'next/server';

export const dynamic = 'force-static';

export async function GET() {
  const news = await fetchNews();
  return NextResponse.json(news);
}
