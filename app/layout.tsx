import "@/app/ui/global.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* 将添加 Tailwind antialiased 类，该类可以使字体变得平滑。没有必要使用这个类，但它增加了一个很好的触感。 */}
      <body className={"${inter.className} antialiased"}>{children}</body>
    </html>
  );
}
