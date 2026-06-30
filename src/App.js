import './App.css'
import { useState } from 'react';
import MainDash from './components/MainDash/MainDash';
import RightSide from './components/RigtSide/RightSide';
import Sidebar from './components/Sidebar';

function App() {
  const [activePage, setActivePage] = useState(0);

  return (
    <div className="App">
      <div className="AppGlass">
        <Sidebar activePage={activePage} setActivePage={setActivePage} />
        <MainDash activePage={activePage} />
        <RightSide/>
      </div>
    </div>
  );
}

export default App;
