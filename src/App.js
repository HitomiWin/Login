import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home"
import Navbar from "./components/Navbar"
import UserContextProvider from "./contexts/UserContext";

function App() {
  return (
    <div className="App">
      <Router>
        <UserContextProvider>
        <Navbar />
        <Route exact path ="/" component={Home} />
        </UserContextProvider>
      </Router>
    </div>
  );
}

export default App;
