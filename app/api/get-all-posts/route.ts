import { NextResponse } from 'next/server';
import { getAllPublished } from '../../lib/notion';

export async function GET(request: { json: () => any }) {
  try {
    const posts = await getAllPublished();
    return NextResponse.json({
      success: 'Product added successfully',
      status: true,
      posts: posts,
    });
  } catch (error) {
    console.error('Error creating product:', error);
    return new Response(JSON.stringify({ error: 'Failed to create product' }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
}
