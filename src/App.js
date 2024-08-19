import {Route, Routes} from 'react-router-dom'
import UsersTable from './pages/UsersTable';
import UsersProfile from './pages/UsersProfile';
import SideBar from './components/SideBar';
import Header from './components/Header';


function App() {
  
  return (
    <>
  <div className='container'>
 
    <Header/>
    
    <div className='contentWrapper'>

      <SideBar/>

    <Routes>
      <Route  path={`/`} element={<UsersTable/>}/>
      <Route path={`/:id`} element={<UsersProfile/>}/>
    </Routes>
    </div>

  </div>
    </>
  );
}

export default App;
