import './App.css';
import Footer from './Components/Footer';
import Home from './Components/Home';
import Contact from './Pages/Contact';
import About from './Pages/About';
import Ott from './Pages/Ott'
import { Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';  
import Broadband from './Pages/Broadband';
import InternetLeaseLine from './Pages/InternetLeaseLine';
import CloudTelephony from './Pages/CloudTelephony';
import Iptv from './Pages/Iptv';
import Privacy from './Pages/Privacy';
import Termandconditions from './Pages/Termandconditions';
import Ourcompany from './Pages/Ourcompany';


function App() {
  return (
    <div className="app">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contact' element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/broadband" element={<Broadband />} />
        <Route path='/ott' element={<Ott />} />
        <Route path='/internetleaseline' element={<InternetLeaseLine/>} />
        <Route path='/cloudtelephony' element={<CloudTelephony/>} />
        <Route path='/iptv' element={<Iptv/>} />
        <Route path='/privacy' element={<Privacy />} />
        <Route path='/terms-conditions' element={<Termandconditions />} />
        <Route path='/ourcompany' element={<Ourcompany />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
