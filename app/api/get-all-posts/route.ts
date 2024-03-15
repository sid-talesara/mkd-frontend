import { NextRequest, NextResponse } from 'next/server';
import { getAllPublished } from '../../lib/notion';

export async function GET(request: NextRequest) {
  try {
    const posts = await getAllPublished();
    return new NextResponse(
      JSON.stringify({
        success: 'Data fetched successfully',
        status: true,
        posts: posts,
      }),
      {
        status: 200, // OK status
        headers: {
          'Content-Type': 'application/json',
          'Cache-Control': 'no-store, max-age=0',
        },
      },
    );
  } catch (error) {
    console.error('Error fetching posts:', error);
    return new NextResponse(JSON.stringify({ error: 'Failed to fetch posts' }), {
      status: 500, // Internal Server Error
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
}
