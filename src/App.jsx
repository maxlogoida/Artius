import { BrowserRouter } from 'react-router-dom';

import Footer from './components/footer/footer';
import Header from './components/header/header';
import RouteComponent from './components/routes/routes';
import { Wrapper } from './components/wrapper/wrapper';
import { AuthProvider } from './providers/authProvider';

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
