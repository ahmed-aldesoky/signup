import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Navbar';
import HomeofRegistretion from './component/HomeofRigesterion/HomeofRegistretion';
import Login from './component/Login/Login';
import SignUp from './component/Sign Up/SignUp';
import { Route, Routes,Navigate } from 'react-router-dom';
import BecomeATasker from './component/BecomeATasker/BecomeATasker';
import Help from './component/Help/Help';
import Notfound from './component/Notfound';


function App() {
  return <>
  <Navbar> </Navbar>
      <Routes>  
        <Route path='home' element={<HomeofRegistretion></HomeofRegistretion>}/>
        <Route path='' element={<HomeofRegistretion></HomeofRegistretion>}/>
          <Route path='login' element={<Login></Login>}/>
          <Route path='signup' element={<SignUp></SignUp>}/>
          <Route path='BecomeATasker' element={<BecomeATasker/>}/>
          <Route path='/*' element={<Notfound></Notfound>}/>
         


      </Routes> 
      <Help></Help>
  </>;
}

export default App;
