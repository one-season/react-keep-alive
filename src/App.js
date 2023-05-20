import { 
  Routes,
  Route,
  Link,
  useNavigate
} from "react-router-dom";

import Home from "./views/home";
import About from "./views/about";
import Profile from "./views/profile";

import { KeepAlive, KeepAliveTrans } from "./keep-alive";

/**
 * 使用高阶组件
*/
const AliveHome = KeepAliveTrans(Home, 'home');
const AliveAbout = KeepAliveTrans(About, 'about');
const AliveProfile = KeepAliveTrans(Profile, 'profile');
// console.log(<AliveHome />, <AliveAbout/>, <AliveProfile></AliveProfile>);

function App() {
  const navigate = useNavigate();

  return (
    <KeepAlive>
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
        <Route path="/" element={ <AliveHome /> } />
        <Route path="/about" element={ <AliveAbout /> } />
        <Route path="/profile" element={ <AliveProfile /> } />
      </Routes>
    </KeepAlive>
  )
}

export default App;
