import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Home, Landing } from "./pages";
import { useAuth0 } from "@auth0/auth0-react";
import Profile from "./pages/Profile";

function App() {
  const { isAuthenticated } = useAuth0();
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={isAuthenticated ? <Landing /> : <Home />} exact />
          <Route path="/profile" element={<Profile />} />

        </Routes>
      </Router>
    </div>
  );
}

export default App;
