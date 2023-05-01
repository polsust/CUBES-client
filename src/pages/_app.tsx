import BottomTabs from "@cubes/common/components/BottomTabs";
import Mobile from "@cubes/common/components/MediaQueries/Mobile";
import "@cubes/common/styles/globals.scss";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import type { AppProps } from "next/app";
import Providers from "@cubes/common/providers/Providers";
import AuthInterceptor from "@cubes/modules/auth/components/AuthInterceptor";
import Desktop from "@cubes/common/components/MediaQueries/Desktop";
import Header from "@cubes/common/components/Header";
import Footer from "@cubes/common/components/Footer";
import { RessourceApiFp } from "cubes-api-client";

export default function App({ Component, pageProps }: AppProps) {


  // RessourceApiFp().


  return (
    <Providers>
      <AuthInterceptor>
        <Desktop>
          <Header />
        </Desktop>
        <div className="flex justify-center items-center w-full h-screen bg-primary">
          <Component {...pageProps} />
        </div>

        <Mobile>
          <BottomTabs />
        </Mobile>
        <Desktop>
          <Footer />
        </Desktop>
      </AuthInterceptor>
    </Providers>
  );
}
