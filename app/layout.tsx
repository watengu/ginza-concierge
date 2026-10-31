import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "銀座エグゼクティブ・コンシェルジュ | プレオープン（テスト公開中）",
  description:
    "銀座での上質なゲーム体験とおもてなしを、知る人ぞ知る方々へ。完全紹介制の掲載プラットフォーム。現在はプレオープン（テスト公開中）で、サービスは開始しておりません。",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
