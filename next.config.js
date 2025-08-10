/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  experimental: {
    // Enable the app directory (Next.js 13+). This allows us to use
    // the new file‑based routing and React Server Components.
    appDir: true
  },
  // Configure internationalization. The MVP will support Hebrew, English
  // and Russian with English as the default language.
  i18n: {
    locales: ['he', 'en', 'ru'],
    defaultLocale: 'en'
  }
};

module.exports = nextConfig;
