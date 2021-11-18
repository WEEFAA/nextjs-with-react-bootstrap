// Custom App
import "@styles/vendor.scss"
import "@styles/main.scss"
import 'bootstrap-icons/font/bootstrap-icons.css'

function App({ Component, pageProps }) {
  // Custom layout
  const getLayout = Component.getLayout || (page => page)

  return getLayout(<Component {...pageProps} />)
}

export default App
