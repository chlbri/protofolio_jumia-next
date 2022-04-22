import { Provider } from 'blac-providers';
import type { AppProps } from 'next/app';
import '../styles/global.css';

function App({ Component, pageProps }: AppProps) {
  return (
    <Provider>
      <Component {...pageProps} />
    </Provider>
  );
}

export default App;
