
import './App.css';
import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import Rodape from './components/Rodape';





function App() {

  return (
    <div className="App">

      <Navbar />
      <Outlet />

      <Rodape />



    </div>
  );
}

export default App;
