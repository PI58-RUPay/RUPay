import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
	output: "export",
	trailingSlash: true,
	basePath: isProd ? "/RUPay" : undefined,
	images: {
		unoptimized: true,
	},
	transpilePackages: ["@workspace/ui"],
};

export default nextConfig;
