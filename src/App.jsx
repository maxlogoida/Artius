import { BrowserRouter } from 'react-router-dom';

import Footer from './components/footer/footer';
import Header from './components/header/header';
import RouteComponent from './components/routes/routes';
import { Wrapper } from './components/wrapper/wrapper';

const App = () => {
  return (
    <BrowserRouter>
      <Wrapper>
        <Header />
        <RouteComponent />
        <Footer />
      </Wrapper>
    </BrowserRouter>
  );
};
export default App;
