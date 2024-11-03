import { BrowserRouter } from 'react-router-dom';

import Footer from './components/footer/footer';
import Header from './components/header/header';
import { Wrapper } from './components/wrapper/wrapper';
import { AuthProvider } from './providers/authProvider';
import RouteComponent from './routes/routes';

const App = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Wrapper>
          <Header />
          <RouteComponent />
          <Footer />
        </Wrapper>
      </BrowserRouter>
    </AuthProvider>
  );
};
export default App;
