import "@/styles/globals.css"
import "@/styles/Offcanvas.css"
import "@/styles/Header.css"
import "@/styles/Pattern.css"
import "@fontsource/alegreya"
import "@fontsource/alegreya/500.css"
import "@fontsource/alegreya/600.css"
import "@fontsource/alegreya-sc"
import "@fontsource/alegreya-sans"
import "@fontsource/alegreya-sans/500.css"
import "@fontsource/alegreya-sans-sc"
import "@fontsource/alegreya-sans-sc/500.css"
import { AnimatePresence } from "framer-motion"

function MyApp({ Component, pageProps, router }) {
  
  return (
    <AnimatePresence exitBeforeEnter>
      <Component {...pageProps} key={router.route}/>
    </AnimatePresence>
  )
}

export default MyApp