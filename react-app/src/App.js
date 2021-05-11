import logo from './logo.svg';
import './App.css';
import Background from './components/background/background'
import Light from './components/sliders/light'
import CrowdNoise from './components/sliders/crowdNoise'
import Player from './components/player/index.js'
function App() {
  return (
    <div className="App">
        {/* <Background></Background> */}
        <Light></Light>
        <CrowdNoise></CrowdNoise>
        <Player></Player>
    </div>
  );
}

export default App;
