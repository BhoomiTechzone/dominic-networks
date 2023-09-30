import './App.css';
import Footer from './Components/Footer';
import Home from './Components/Home';
import Overview from './Pages/Overview';

function App() {
  return (
    <div className="app">
      <Home />
      <Overview />  
      <Footer/>
    </div>
  );
}

export default App;
