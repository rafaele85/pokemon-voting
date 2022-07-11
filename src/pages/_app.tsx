import type { AppProps } from 'next/app'
import {withTRPC} from "@trpc/next";
import { AppRouter } from "../backend/router";
import {NextPageContext} from "next";

const MyAppInternal = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />
}

const getBaseUrl = () => {
  if (process.browser) {
    return ''
  }
  return process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`
      : 'http://localhost:3000';
}

const url = getBaseUrl() + '/api/trpc'
type ConfigParams = { ctx?: NextPageContext }

const config = (_params: ConfigParams) => {
  console.log('----url = ', url)
  return {
    url,
  };
}

const MyApp = withTRPC<AppRouter>({config, ssr: false})(MyAppInternal)

export default MyApp
