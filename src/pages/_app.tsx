import type { AppProps } from 'next/app'
import {withTRPC} from "@trpc/next";
import { AppRouter } from "../backend/router";
import {NextPageContext} from "next";

const MyAppInternal = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />
}

const url = process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}/api/trpc`
    : 'http://localhost:3000/api/trpc';

type ConfigParams = { ctx?: NextPageContext }

const config = (_params: ConfigParams) => {
  return {
    url,
  };
}

const MyApp = withTRPC<AppRouter>({config, ssr: false})(MyAppInternal)

export default MyApp
