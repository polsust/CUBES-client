import BottomTabs from "@/common/components/BottomTabs";
import Mobile from "@/common/components/MediaQueries/Mobile";
import "@/styles/globals.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <Mobile>
        <BottomTabs />
      </Mobile>
    </>
  );
}
