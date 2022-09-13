import "/styles.css"
import type { AppProps } from "next/app"

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="font-montserrat text-gray-200">
      <Component {...pageProps} />
    </div>
  )
}
