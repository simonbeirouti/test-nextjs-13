import "../styles/globals.css";
import Header from "../components/utilities/Header";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Simon Beirouti | Home</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
