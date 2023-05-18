import { 
  Routes,
  Route,
  Link,
  useNavigate
} from "react-router-dom";

import Home from "./views/home";
import About from "./views/about";
import Profile from "./views/profile";

function App() {
  const navigate = useNavigate();

  return (
    <div>
      <h2 onClick={() => navigate('/')}>
        My App
      </h2>

      <div>
        <ul>
          <li>
            <Link to={'/about'}>
              Go About
            </Link>
          </li>
          <li>
            <Link to={'/profile'}>
              Go Profile
            </Link>
          </li>
        </ul>
      </div>

      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/about" element={ <About /> } />
        <Route path="/profile" element={ <Profile /> } />
      </Routes>
    </div>
  )
}

export default App;
