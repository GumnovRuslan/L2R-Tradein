import { useEffect, useState } from "react";
import { Router } from 'next/router';
import type { AppProps } from 'next/app';
import Loading from "@/components/Loading";

import "@/styles/styles.scss";


export default function App({ Component, pageProps }: AppProps) {
    const [loading, setLoading] = useState(false);
    
    useEffect(() => {
      const start = () => {
        setLoading(true);
      };
      const end = () => {
        setLoading(false);
      };
  
      Router.events.on("routeChangeStart", start);
      Router.events.on("routeChangeComplete", end);
      Router.events.on("routeChangeError", end);
      return () => {
        Router.events.off("routeChangeStart", start);
        Router.events.off("routeChangeComplete", end);
        Router.events.off("routeChangeError", end);
      };
    }, []);
  
    // useEffect(() => {
    //   if (typeof window !== "undefined") {
    //     smartlook('init', 'cb826de7bdf3ff9726463cdd0c4258e94b52f6c4', { region: 'eu' });
    //   }
    // }, [])
  
  
    return (
      <>
        <Component {...pageProps} />
        {/* <Loading isLoading={loading} /> */}
      </>
    );
  }
