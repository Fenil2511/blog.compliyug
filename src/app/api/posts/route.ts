import { NextRequest, NextResponse } from 'next/server';
import { ARTICLES } from '@/data/blogData';

/**
 * GET /api/posts
 * Returns all articles with optional filtering by category, sector, and search.
 * Used by n8n workflows and external integrations to verify published content.
 */
export async function GET(request: NextRequest) {
    const { searchParams } = new URL(request.url);
    const category = searchParams.get('category');
    const sector = searchParams.get('sector');
    const search = searchParams.get('search');

    let filtered = [...ARTICLES];

    if (category) {
        filtered = filtered.filter(a => a.category === category);
    }
    if (sector) {
        filtered = filtered.filter(a => a.sector === sector);
    }
    if (search) {
        const q = search.toLowerCase();
        filtered = filtered.filter(a =>
            a.title.toLowerCase().includes(q) ||
            a.excerpt.toLowerCase().includes(q) ||
            a.content.sections.some(s => s.body.toLowerCase().includes(q))
        );
    }

    return NextResponse.json({
        total: filtered.length,
        articles: filtered.map(a => ({
            id: a.id,
            slug: a.slug,
            title: a.title,
            excerpt: a.excerpt,
            category: a.category,
            sector: a.sector,
            date: a.date,
            readTime: a.readTime,
            image: a.image,
            author: a.author,
            featured: a.featured || false,
        })),
    });
}
