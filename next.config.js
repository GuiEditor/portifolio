/** @type {import('next').NextConfig} */

const nextConfig = {
    basePath: '/portifolio',
    output: "export",
    distDir: "dist",
    images: {
        unoptimized: true,
    },
}

module.exports = nextConfig
