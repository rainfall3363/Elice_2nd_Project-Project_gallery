import 'bootstrap/dist/css/bootstrap.min.css';
import { useParams } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './home/home';
import Footer from './footer/Footer';
import { ExhibitionDetail } from './exhibition/exhibitionDetailt';

import { Login, Register, DeleteUser, ReviseUser } from './user';

//const Login=lazy(()=>import('./user/login'))
//const User = lazy(() => import('./user'));
import './App.css';
import HomeNav from './home/homenav';
import Proposal from './Proposal/proposal';
import ExhibitionList from './exhibition/exhibitionListPages';
import exhibitionProject from './data/data';

import InputProject from './inputProject/inputProject';

console.log(exhibitionProject);
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <HomeNav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/Proposal" element={<Proposal />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/exhibitionDetail/:id"
            element={
              <ExhibitionDetail
                exhibitionProject={exhibitionProject}
                useParams={useParams}
              />
            }
          />
          <Route path="/Exhibition" element={<ExhibitionList />} />
          <Route path="/inputTest" element={<InputProject />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
export default App;
