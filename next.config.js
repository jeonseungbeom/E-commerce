/** @type {import('next').NextConfig} */
const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = {
    images: {
        domains: ['firebasestorage.googleapis.com', 'lh3.googleusercontent.com'],
    },
    async rewrites() {
        return [
            {
                source: '/app/api/register/:path*', // 추가된 경로
                destination: 'http://localhost:3000/app/api/register/:path*', // 추가된 경로의 대상 서버 주소
            },
        ];
    },
};
