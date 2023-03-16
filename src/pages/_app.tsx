import BottomTabs from "@cubes/common/components/BottomTabs";
import Mobile from "@cubes/common/components/MediaQueries/Mobile";
import "@styles/globals.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import type { AppProps } from "next/app";
import Providers from "@cubes/common/providers/Providers";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Providers>
        <Component {...pageProps} />
        <Mobile>
          <BottomTabs />
        </Mobile>
      </Providers>
    </>
  );
}
