import "../css/globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="nl">
      <body>
        <div className="page">
          <div className="container">{children}</div>
        </div>
      </body>
    </html>
  );
}
