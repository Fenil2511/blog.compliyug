import { Metadata } from 'next';
import { ARTICLES } from '@/data/blogData';
import ArticlePageClient from './ArticlePageClient';
import { notFound } from 'next/navigation';

const SITE_URL = 'https://blog.compliyug.com';

interface Props {
    params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const article = ARTICLES.find((a) => a.slug === slug);
    if (!article) return {};

    const ogImage = article.image || `${SITE_URL}/og-default.png`;

    return {
        title: article.title,
        description: article.summary || article.excerpt,
        keywords: [article.category, article.sector !== 'None' ? article.sector : '', 'DPDP', 'compliance', 'CompliYUG'],
        authors: [{ name: article.author }],
        openGraph: {
            title: article.title,
            description: article.summary || article.excerpt,
            url: `${SITE_URL}/article/${article.slug}`,
            type: 'article',
            publishedTime: article.date,
            authors: [article.author],
            images: [{ url: ogImage, width: 1200, height: 630, alt: article.title }],
        },
        twitter: {
            card: 'summary_large_image',
            title: article.title,
            description: article.summary || article.excerpt,
            images: [ogImage],
        },
    };
}

export function generateStaticParams() {
    return ARTICLES.map((article) => ({ slug: article.slug }));
}

export default async function ArticlePage({ params }: Props) {
    const { slug } = await params;
    const article = ARTICLES.find((a) => a.slug === slug);
    if (!article) return notFound();

    const relatedArticles = ARTICLES
        .filter(a => a.slug !== slug && (a.category === article.category || a.sector === article.sector))
        .slice(0, 3);

    const blogPostingJsonLd = {
        '@context': 'https://schema.org',
        '@type': 'BlogPosting',
        headline: article.title,
        description: article.summary || article.excerpt,
        image: article.image,
        datePublished: article.date,
        author: {
            '@type': 'Organization',
            name: article.author,
            url: SITE_URL,
        },
        publisher: {
            '@type': 'Organization',
            name: 'CompliYUG',
            url: 'https://www.compliyug.com',
            logo: {
                '@type': 'ImageObject',
                url: 'https://ik.imagekit.io/ib9n0o3ps/only%20logo.png?updatedAt=1770716238806',
            },
        },
        mainEntityOfPage: {
            '@type': 'WebPage',
            '@id': `${SITE_URL}/article/${article.slug}`,
        },
        keywords: article.keyTakeaways.join(', '),
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingJsonLd) }}
            />
            <ArticlePageClient article={article} relatedArticles={relatedArticles} />
        </>
    );
}
