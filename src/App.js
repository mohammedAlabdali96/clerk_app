import LandingPage from "./pages/landingPage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
      <Router>
          <header className="my-4">
              <h3 className="text-center">Clerk App</h3>
          </header>
        <Switch>
          <Route exact path="/" component={() => <LandingPage />} />
        </Switch>
      </Router>
  );
}

export default App;
