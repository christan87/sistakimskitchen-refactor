/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    GOOGLE_MAPS_API_KEY: process.env.GOOGLE_MAPS_API_KEY,
    SENDGRID_API_KEY: process.env.SENDGRID_API_KEY,
    DEFAULE_FORM_EMAIL: process.env.DEFAULE_FORM_EMAIL,
  },
  images: {
    domains: ['res.cloudinary.com'],
  }
}

module.exports = nextConfig
