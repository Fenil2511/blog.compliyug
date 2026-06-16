import { Metadata } from 'next';
import { ARTICLES } from '@/data/blogData';
import ArticlePageClient from './ArticlePageClient';
import { notFound } from 'next/navigation';

const SITE_URL = 'https://blog.compliyug.com';
const LOGO_URL = 'https://ik.imagekit.io/ib9n0o3ps/only%20logo.png?updatedAt=1770716238806';

interface Props {
    params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const article = ARTICLES.find((a) => a.slug === slug);
    if (!article) return {};

    const ogImage = article.image || LOGO_URL;
    const canonicalUrl = `${SITE_URL}/article/${article.slug}`;

    // Build rich, intent-specific keywords per article
    const articleKeywords = [
        article.title,
        article.category,
        ...(article.sector !== 'None' ? [article.sector, `${article.sector} DPDP compliance`] : []),
        'DPDP Act 2023', 'DPDP compliance India', 'CompliYUG',
        'data fiduciary India', 'data protection India',
        ...article.keyTakeaways.slice(0, 3), // first 3 takeaways as keyword signals
    ].filter(Boolean);

    return {
        title: article.title,
        description: article.summary || article.excerpt,
        keywords: articleKeywords,
        authors: [{ name: article.author, url: SITE_URL }],
        alternates: {
            canonical: canonicalUrl,
        },
        openGraph: {
            title: article.title,
            description: article.summary || article.excerpt,
            url: canonicalUrl,
            type: 'article',
            publishedTime: article.date,
            modifiedTime: article.date,
            section: article.category,
            authors: [article.author],
            tags: [article.category, article.sector !== 'None' ? article.sector : '', 'DPDP', 'CompliYUG'].filter(Boolean),
            images: [{ url: ogImage, width: 1200, height: 630, alt: article.title }],
            siteName: 'CompliYUG Intelligence Hub',
            locale: 'en_IN',
        },
        twitter: {
            card: 'summary_large_image',
            title: article.title,
            description: article.summary || article.excerpt,
            images: [ogImage],
            creator: '@compliyug',
            site: '@compliyug',
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

    const canonicalUrl = `${SITE_URL}/article/${article.slug}`;

    const relatedArticles = ARTICLES
        .filter(a => a.slug !== slug && (a.category === article.category || a.sector === article.sector))
        .slice(0, 3);

    // --- JSON-LD: BlogPosting ---
    const blogPostingJsonLd = {
        '@context': 'https://schema.org',
        '@type': 'BlogPosting',
        headline: article.title,
        description: article.summary || article.excerpt,
        image: {
            '@type': 'ImageObject',
            url: article.image,
            width: 1200,
            height: 630,
        },
        url: canonicalUrl,
        datePublished: `${article.date}T00:00:00+05:30`,
        dateModified: `${article.date}T00:00:00+05:30`,
        inLanguage: 'en-IN',
        author: {
            '@type': 'Organization',
            name: article.author,
            url: 'https://www.compliyug.com',
        },
        publisher: {
            '@type': 'Organization',
            name: 'CompliYUG',
            url: 'https://www.compliyug.com',
            logo: {
                '@type': 'ImageObject',
                url: LOGO_URL,
                width: 512,
                height: 512,
            },
        },
        mainEntityOfPage: {
            '@type': 'WebPage',
            '@id': canonicalUrl,
        },
        articleSection: article.category,
        keywords: article.keyTakeaways.join(', '),
        wordCount: article.content.sections.reduce(
            (acc, s) => acc + s.body.split(' ').length, 0
        ),
        timeRequired: article.readTime,
        isPartOf: {
            '@type': 'Blog',
            name: 'CompliYUG Intelligence Hub',
            url: SITE_URL,
        },
        speakable: {
            '@type': 'SpeakableSpecification',
            cssSelector: ['h1', '[data-speakable="summary"]'],
        },
    };

    // --- JSON-LD: BreadcrumbList ---
    const breadcrumbJsonLd = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
            {
                '@type': 'ListItem',
                position: 1,
                name: 'Intelligence Hub',
                item: SITE_URL,
            },
            {
                '@type': 'ListItem',
                position: 2,
                name: article.category,
                item: `${SITE_URL}/?category=${encodeURIComponent(article.category)}`,
            },
            ...(article.sector !== 'None' ? [{
                '@type': 'ListItem',
                position: 3,
                name: article.sector,
                item: `${SITE_URL}/?category=Sectors`,
            }, {
                '@type': 'ListItem',
                position: 4,
                name: article.title,
                item: canonicalUrl,
            }] : [{
                '@type': 'ListItem',
                position: 3,
                name: article.title,
                item: canonicalUrl,
            }]),
        ],
    };

    // --- JSON-LD: FAQ (generic — applies to any article with a `faqs` array) ---
    const faqJsonLd = article.faqs && article.faqs.length > 0 ? {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: article.faqs.map((faq) => ({
            '@type': 'Question',
            name: faq.question,
            acceptedAnswer: {
                '@type': 'Answer',
                text: faq.answer,
            },
        })),
    } : null;

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingJsonLd) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
            />
            {faqJsonLd && (
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
                />
            )}
            <ArticlePageClient article={article} relatedArticles={relatedArticles} />
        </>
    );
}
