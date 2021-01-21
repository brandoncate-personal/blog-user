// import "../mocks";

import "../styles/globals.css";
import "prismjs/themes/prism-tomorrow.css";

import { ChakraProvider } from "@chakra-ui/react";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
