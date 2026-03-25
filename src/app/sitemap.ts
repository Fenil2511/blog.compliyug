import { MetadataRoute } from 'next';
import { ARTICLES } from '@/data/blogData';

const SITE_URL = 'https://blog.compliyug.com';

export default function sitemap(): MetadataRoute.Sitemap {
    const articleRoutes: MetadataRoute.Sitemap = ARTICLES.map((article) => ({
        url: `${SITE_URL}/article/${article.slug}`,
        lastModified: new Date(article.date),
        changeFrequency: 'monthly',
        priority: 0.8,
    }));

    return [
        {
            url: SITE_URL,
            lastModified: new Date(),
            changeFrequency: 'daily',
            priority: 1,
        },
        ...articleRoutes,
    ];
}
