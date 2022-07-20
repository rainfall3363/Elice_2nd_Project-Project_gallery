import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState, useMemo } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './home/home';
//import Footer from './footer/Footer';
import { ExhibitionDetail } from './exhibition/exhibitionDetailt';

import { Login, Register, DeleteUser, ReviseUser } from './user';

//const Login=lazy(()=>import('./user/login'))
//const User = lazy(() => import('./user'));
import './App.css';
import HomeNav from './home/homenav';
import ProposalList from './proposal/proposalList';
import ExhibitionList from './exhibition/exhibitionListPages';
import exhibitionProject from './data/data';
import { exhibition } from './api/exhibition/exhibitionProject';
import { PropsalDetail } from './proposal/proposalDetail';
import { useSelect } from '@mui/base';
import { useSelector, useDispatch } from 'react-redux';
// import { exhProjects } from './store/userStore';

function App() {
  let state = useSelector((state) => state.project);
  console.log(state);
  const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(exhProjects());
  // }, []);

  const [exhibitionProject, setExhibitionProject] = useState([]);

  useEffect(() => {});
  exhibition.exhibitionProjects().then((res) => {
    setExhibitionProject(res.data);
  }, []);

  console.log(exhibitionProject);
  return (
    <BrowserRouter>
      <div className="App">
        <HomeNav />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/proposalList" element={<ProposalList />} />
          <Route
            path="/proposalDetail/:id"
            element={<PropsalDetail exhibitionProject={exhibitionProject} />}
          />
          <Route path="/register" element={<Register />} />
          <Route
            path="/exhibitionList"
            element={<ExhibitionList exhibitionProject={exhibitionProject} />}
          />
          <Route
            path="/exhibitionDetail/:id"
            element={<ExhibitionDetail exhibitionProject={exhibitionProject} />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
export default App;
