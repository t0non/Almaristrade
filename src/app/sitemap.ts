import { MetadataRoute } from 'next';
import { PRODUCTS } from '@/data/products';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://almaristrade.com';

  const staticPages = [
    '',
    '/a-almaris',
    '/servicos',
    '/produtos',
    '/qualidade-e-credenciais',
    '/alcance-global',
    '/contato',
    '/politica-de-privacidade',
    '/termos-de-uso',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 1.0 : 0.8,
  }));

  const productPages = PRODUCTS.map((product) => ({
    url: `${baseUrl}/produtos/${product.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }));

  return [...staticPages, ...productPages];
}
