import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home"
import Navbar from "./components/Navbar"
import UserContextProvider from "./contexts/UserContext";
import ListContextProvider from "./contexts/ListContext"
function App() {
  return (
    <div className="App">
      <Router>
        <UserContextProvider>
          <ListContextProvider>
            <Navbar />
            <Route exact path ="/" component={Home} />
          </ListContextProvider>
        </UserContextProvider>
      </Router>
    </div>
  );
}

export default App;
