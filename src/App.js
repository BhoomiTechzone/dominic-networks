import './App.css';
import Footer from './Components/Footer';
import Home from './Components/Home';
import Overview from './Pages/Overview';
import Plans from './Pages/Plans';
import Streaming from './Pages/Streaming';

function App() {
  return (
    <div className="app">
      <Home />
      <Overview /> 
      <Plans /> 
      <Streaming />
      <Footer/>
    </div>
  );
}

export default App;
