import type { NextConfig } from "next";

//CONFIGURAR TODA A VEZ QUE UTILIZAR IMAGENS FORNECIDAS POR UMA API (PERMISSÃO DE SEGURANÇA)
const nextConfig: NextConfig = {
    images: {
      remotePatterns: [new URL('https://web.codans.com.br/airbnb/**')],
    },
  }

export default nextConfig;

