import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Igor`s Portfolio",
  description: "Generated with ❣️",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
