/** @type {import('next').NextConfig} */
const nextConfig = {};

module.exports = nextConfig;
module.exports = {
  images: {
    domains: ["placehold.jp"],
    domains: ["firebasestorage.googleapis.com"],
  },
  typescript: {
    // !! 警告 !!
    // あなたのプロジェクトに型エラーがあったとしても、プロダクションビルドを正常に完了するために危険な許可をする。
    // !! 警告 !!
    ignoreBuildErrors: true,
  },
};
