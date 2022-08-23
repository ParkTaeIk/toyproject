import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from "./layouts/Layout";
import Layout2 from "./layouts/Layout2";
import Layout3 from "./layouts/Layout3";
import Layout4 from "./layouts/Layout4";

import Layout6 from "./layouts/Layout6";
import Login from './pages/Login';
import Menu from './pages/Menu';
import Main from './pages/Main';
import Signup from './pages/Signup';
import Like from './pages/Like';

function App() {

  return (

    <BrowserRouter>
      <Routes>
        <Route path ="/" element = { <Layout/> }>
          <Route index element = { <Main/> }/>
          </Route>
          <Route path ="/" element = { <Layout2/> }>
          <Route path = "menu" element = { <Menu/> }/>
          </Route>
          <Route path = "/" element = { <Layout3/>}>
          <Route path = "login" element = { <Login/> }/>
        </Route>
        <Route path = "/" element = { <Layout4/>}>
          <Route path = "signup" element = { <Signup/> }/>
        </Route>
        <Route path = "/" element = { <Layout6/>}>
          <Route path = "like" element = { <Like/> }/>
        </Route>
      </Routes>
    </BrowserRouter>

  );
}

export default App;
