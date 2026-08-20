import type { Metadata } from "next";
import { headers } from "next/headers";
import "./globals.css";

const title = "Guía para sobrevivir al SERUMS de Obstetricia";
const description = "Curso virtual de preparación para el SERUMS de Obstetricia en Perú.";

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host = requestHeaders.get("x-forwarded-host") ?? requestHeaders.get("host");
  const protocol = requestHeaders.get("x-forwarded-proto") ?? "https";
  const socialImage = host ? `${protocol}://${host}/og.png` : undefined;

  return {
    title,
    description,
    icons: { icon: "/logo-guia-serums.png" },
    openGraph: {
      title,
      description,
      type: "website",
      images: socialImage ? [{ url: socialImage, width: 1200, height: 630, alt: title }] : [],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: socialImage ? [socialImage] : [],
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
