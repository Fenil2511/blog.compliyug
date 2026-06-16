import { MetadataRoute } from 'next';

const SITE_URL = 'https://blog.compliyug.com';

// AI/answer-engine crawlers explicitly allowed for GEO/AEO visibility
// (ChatGPT, Claude, Perplexity, Google AI Overviews, Bing Copilot, Amazon, Common Crawl-based LLM training sets).
const AI_CRAWLERS = [
    'GPTBot',
    'ChatGPT-User',
    'OAI-SearchBot',
    'ClaudeBot',
    'Claude-Web',
    'anthropic-ai',
    'PerplexityBot',
    'Perplexity-User',
    'Google-Extended',
    'Bingbot',
    'CCBot',
    'Applebot-Extended',
    'Amazonbot',
];

export default function robots(): MetadataRoute.Robots {
    return {
        rules: [
            {
                userAgent: '*',
                allow: '/',
            },
            ...AI_CRAWLERS.map((userAgent) => ({
                userAgent,
                allow: '/',
            })),
        ],
        sitemap: `${SITE_URL}/sitemap.xml`,
        host: SITE_URL,
    };
}
