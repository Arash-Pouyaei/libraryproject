import React , {Fragment} from 'react';
import 'devextreme/dist/css/dx.light.css';
import './App.css';
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/style.css'
import '../src/lib/owlcarousel/assets/owl.carousel.min.css';
import {BrowserRouter ,Routes, Router, Route, Link, NavLink, Redirect} from 'react-router-dom';
import { useState } from 'react';
import {data} from './data/data';
import {routes} from "./routes";import {generateAppRoutes} from "./navigation/utils";
import Page from "./navigation/Page";
import {Header} from "./components/header";

function App() {
  const [datas,setdata] = useState([...data])
  const appRoutes = generateAppRoutes(routes);

  return (

<>
<BrowserRouter basename={process.env.PUBLIC_URL}>
   <div>
       <Header appRoutes={appRoutes}/>
       <Routes>
           {appRoutes.map(item => (
         <Route exact key={item.path} path={item.path} element={<Page item={item} datas={datas}/>}>
          </Route>
            ))}
       </Routes>
   </div>
</BrowserRouter>
</>

  );
}

export default App;


