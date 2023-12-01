import "./App.css";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { interactivity, particleConf } from "./particles.config";
import Dialog from "./Dialog/Dialog";

function App() {
  const particlesInit = async (main) => {
    console.log(main);
    await loadFull(main);
  };
  return (
    <div className="App container">
      <Dialog />
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          fullScreen: {
            enable: true,
          },
          particles: particleConf,
          interactivity: interactivity,
          retina_detect: true,
          background: {},
        }}
      />
    </div>
  );
}

export default App;
