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

    // --- JSON-LD: FAQ (for vendor checklist article — highest rich snippet value) ---
    const faqJsonLd = article.slug === 'bfsi-vendor-compliance-checklist-dpdp-2023' ? {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: [
            {
                '@type': 'Question',
                name: 'What is a Data Processing Agreement (DPA) under DPDP Act 2023?',
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'A Data Processing Agreement (DPA) is a legally binding contract mandated under the DPDP Act 2023 between a Data Fiduciary (the Bank) and a Data Processor (vendor). It governs how the vendor processes personal data, the categories of data involved, permissible purposes, and obligations including "reasonable security safeguards". Without a valid DPA, a bank cannot legally engage a vendor for data processing.',
                },
            },
            {
                '@type': 'Question',
                name: 'What is the penalty for data breach under DPDP Act 2023?',
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'The DPDP Act 2023 prescribes a maximum penalty of ₹250 crore for failure to implement adequate security safeguards that result in a personal data breach. Importantly, under Section 8(1), the Bank (as Data Fiduciary) remains fully liable for breaches caused by its third-party vendors (Data Processors).',
                },
            },
            {
                '@type': 'Question',
                name: 'What does Rule 8(3) of the DPDP Rules require?',
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Rule 8(3) requires Data Processors (including cloud service providers) to retain personal data, associated traffic data, and processing logs for a minimum of one year from the date of processing. This retention is mandatory to enable forensic investigation of unauthorized access events. Banks must contractually and technically enforce this with all vendors.',
                },
            },
            {
                '@type': 'Question',
                name: 'How many hours does a bank have to report a data breach under DPDP Act 2023?',
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Banks must notify the Data Protection Board (DPB) within 72 hours of becoming aware of a personal data breach. This 72-hour window is absolute. If a vendor breach occurs, the bank must receive notification from the vendor within 12-24 hours so it can meet its own DPB reporting deadline.',
                },
            },
            {
                '@type': 'Question',
                name: 'What documents must a bank obtain from vendors under DPDP Act 2023?',
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Banks must obtain: (1) Valid Data Processing Agreement, (2) Contractual security safeguard clauses, (3) Technical security evidence (ISO 27001, SOC 2), (4) Access control documentation, (5) Data backup and continuity plans, (6) 1-year log retention proof, (7) Incident management and breach notification SLAs, and (8) Data erasure confirmations and destruction certificates.',
                },
            },
        ],
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
