import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home"
import Navbar from "./components/Navbar"

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Route exact path ="/" component={Home} />
      </Router>
    </div>
  );
}

export default App;
