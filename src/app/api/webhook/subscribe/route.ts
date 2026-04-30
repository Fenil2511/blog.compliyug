import { NextRequest, NextResponse } from 'next/server';

/**
 * POST /api/webhook/subscribe
 * Accepts email subscriptions from the blog.
 * This endpoint is called by the newsletter signup form.
 * The n8n workflow polls or receives webhook data to add subscribers.
 *
 * In production, this should forward to your n8n webhook endpoint.
 */
export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const { email, name, source } = body;

        if (!email || !email.includes('@')) {
            return NextResponse.json(
                { error: 'Valid email is required' },
                { status: 400 }
            );
        }

        // Forward to n8n webhook for processing
        const N8N_WEBHOOK_URL = process.env.N8N_SUBSCRIBE_WEBHOOK_URL;

        if (N8N_WEBHOOK_URL) {
            await fetch(N8N_WEBHOOK_URL, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    email,
                    name: name || '',
                    source: source || 'blog-newsletter',
                    subscribedAt: new Date().toISOString(),
                }),
            });
        }

        return NextResponse.json({
            success: true,
            message: 'Successfully subscribed to CompliYUG Intelligence Hub updates.',
        });
    } catch {
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        );
    }
}
