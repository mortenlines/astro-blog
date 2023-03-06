import rss, { pagesGlobToRssItems } from '@astrojs/rss';

export async function get() {
  return rss({
    title: 'Morten Lines\' blogg',
    description: 'Mine skriblerier',
    site: 'https://luxury-marshmallow-fd4f3b.netlify.app/',
    items: await pagesGlobToRssItems(import.meta.glob('./**/*.md')),
    customData: `<language>nb</language>`,
  });
}