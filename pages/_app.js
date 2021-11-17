// Custom App
import "./../styles/vendor.scss"
import "./../styles/main.scss"

function App({ Component, pageProps }) {
  // Custom layout
  const getLayout = Component.getLayout || (page => page)

  return getLayout(<Component {...pageProps} />)
}

export default App
