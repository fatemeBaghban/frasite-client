import "@/styles/globals.css";
import { ThemeProvider } from "@material-tailwind/react";

export default function App({ Component, pageProps }) {
  return (
    <main className="">
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
    </main>
  );
}
