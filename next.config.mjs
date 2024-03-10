/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['ipgrp.ir'], // اضافه کردن hostname به لیست تصاویر مجاز
  },
};

export default nextConfig;
