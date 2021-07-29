import React, { Suspense } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
// components
const Home = React.lazy(() => import('./components/Home'));
const About = React.lazy(() => import('./components/About'));
const Download = React.lazy(() => import('./components/Download'));
// import Home from './components/Home';
// import About from './components/About';
// import Download from './components/Download';

export default function Routes() {
  return (
    <Suspense fallback={<p>Loading ...</p>}>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/download" component={Download} />
        </Switch>
      </Router>
    </Suspense>
  )
}
