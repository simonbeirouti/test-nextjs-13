import "../styles/globals.css";
import Header from "../components/utilities/Header";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
