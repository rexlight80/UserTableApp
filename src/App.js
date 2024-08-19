import {Route, Routes} from 'react-router-dom'
import UsersTable from './pages/UsersTable';
import UsersProfile from './pages/UsersProfile';
import SideBar from './components/SideBar';


function App() {
  return (
  <div className='container'>
      <SideBar/>

    <Routes>
      <Route  path={`/`} element={<UsersTable/>}/>
      <Route path={`/:id`} element={<UsersProfile/>}/>
    </Routes>

  </div>
  );
}

export default App;
