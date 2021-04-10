import App from 'next/app'
import { Provider as StyletronProvider } from 'styletron-react'
import { styletron } from '../styletron'

if (typeof window !== "undefined") {
  require("popper.js");
  require("baseui");
  require('styletron-engine-atomic');
}

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props
    return (
      <StyletronProvider value={styletron}>
        <Component {...pageProps} />
      </StyletronProvider>
    )
  }
}
