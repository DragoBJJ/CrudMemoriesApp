import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import GlobalTemplate from 'template/globalTemplate';
import NavBar from 'components/NavBar/NavBar';
import HeroSection from 'components/HeroSection/HeroSection';
import AuthPage from 'Views/AuthPage';

function App() {
  return (
    <GlobalTemplate>
      <Router>
        <NavBar />
        <Switch>
          <Route path="/auth" component={AuthPage} />
          <Route path="/" component={HeroSection} />
        </Switch>
      </Router>
    </GlobalTemplate>
  );
}

export default App;
