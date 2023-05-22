import { 
  Routes,
  Route,
  Link,
  useNavigate
} from "react-router-dom";

import Home from "./views/home";
import About from "./views/about";
import Profile from "./views/profile";
import List from "./views/list";

import { KeepAlive, KeepAliveTrans } from "./keep-alive";

/**
 * 使用高阶组件
*/
const AliveHome = KeepAliveTrans(Home, { 
  keepAliveId: 'home'
});
const AliveAbout = KeepAliveTrans(About, { 
  keepAliveId: 'about'
});
const AliveProfile = KeepAliveTrans(Profile, { 
  keepAliveId: 'profile'
});
const AliveList = KeepAliveTrans(List, { 
  keepAliveId: 'list',
  saveScroll: true
});

function App() {
  const navigate = useNavigate();

  return (
    <KeepAlive>
      <h2 onClick={() => navigate('/')}>
        My App
      </h2>

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
        <li>
          <Link to={'/list'}>
            Go List
          </Link>
        </li>
      </ul>

      <Routes>
        <Route path="/" element={ <AliveHome /> } />
        <Route path="/about" element={ <AliveAbout /> } />
        <Route path="/profile" element={ <AliveProfile /> } />
        <Route path="/list" element={ <AliveList /> } />
      </Routes>
    </KeepAlive>
  )
}

export default App;
