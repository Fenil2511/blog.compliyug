import { ARTICLES } from '@/data/blogData';

const SITE_URL = 'https://blog.compliyug.com';

// Self-updating llms.txt (https://llmstxt.org) — generated from ARTICLES at request time
// so every article the weekly automation publishes is included automatically, with no manual upkeep.
export async function GET() {
    const sections: Record<string, typeof ARTICLES> = {};
    for (const article of ARTICLES) {
        const key = article.sector !== 'None' ? article.sector : article.category;
        if (!sections[key]) sections[key] = [];
        sections[key].push(article);
    }

    const articleLines = Object.entries(sections)
        .map(([section, articles]) => {
            const links = articles
                .map((a) => `- [${a.title}](${SITE_URL}/article/${a.slug}): ${a.excerpt}`)
                .join('\n');
            return `## ${section}\n\n${links}`;
        })
        .join('\n\n');

    const body = `# CompliYUG Intelligence Hub

> India's leading RegTech intelligence hub for DPDP Act 2023 compliance. Expert insights on data breach reporting (Rule 7(2)(b)), sectoral governance (Healthcare, BFSI, Ed-Tech, E-commerce), and BreachBlitz — an automated 72-hour breach reporting engine.

CompliYUG publishes new compliance research weekly. This file lists every published article for use by AI assistants, answer engines, and LLM-based research tools. For the canonical list, see ${SITE_URL}/sitemap.xml.

${articleLines}

## About CompliYUG

- [CompliYUG](https://www.compliyug.com): India's RegTech platform for DPDP Act 2023 compliance automation, including the BreachBlitz breach-reporting engine.
`;

    return new Response(body, {
        headers: {
            'Content-Type': 'text/markdown; charset=utf-8',
            'Cache-Control': 'public, max-age=3600, stale-while-revalidate=86400',
        },
    });
}
