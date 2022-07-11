import Document, {DocumentContext, Head, Html, Main, NextScript} from 'next/document'

export default class MyDocument extends Document {
    static async getInitialProps(ctx: DocumentContext) {
        return ctx.renderPage();
    }

    render () {
        return (
            <Html>
                <Head>
                    <title>Voting</title>
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}
