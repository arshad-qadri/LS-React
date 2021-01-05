
import './App.css';
import Home from './pages/Home';
import { Route, Switch } from 'react-router-dom';
import Contact from "./pages/Contact"
import About from './pages/About';
import Blog from './pages/Blog';
import BlogView from './pages/BlogView';
import Services from './pages/Services';
import Career from './pages/Career';


function App() {
  return (
    <div >
     
     
     <Switch>
     <Route exact path="/" component={Home} />
       <Route  path="/Contact" component={Contact} />
       <Route  path="/about" component={About} />
       <Route  path="/blog" component={Blog} />
       <Route  path="/blogview" component={BlogView} />
       <Route  path="/services" component={Services} />
       <Route  path="/career" component={Career} />
     </Switch>
    </div>
  );
}

export default App;
