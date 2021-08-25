import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/global/Header";
import Home from "./components/home/Homepage";
import Footer from "./components/global/Footer";
import Farms from "./components/farms/Farms";
import About from "./components/about/About";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Contact from "./components/contact/Contact";
import Trades from "./components/trades/Trades";

function App() {
  return (
    <Router>
    <div className="bg-black font-roboto h-screen text-white">
      <Header />
      <Switch>
        <Route exact path="/" component={Home}>
        </Route>
        <Route path="/farms/:farm" component={Farms}></Route>
        <Route exact path="/about" component={About}></Route>
        <Route exact path="/contact" component={Contact}></Route>
      </Switch>
      <Footer />
    </div>
    </Router>
  );
}

export default App;
