import './globals.css';

export const metadata = {
  title: 'Eco Vista',
  description: 'One Place Dashboard for Eco Information',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
