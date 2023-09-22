import { Canvas } from "@react-three/fiber";
import "./App.css";
import Experience from "./components/Experience";

function App() {
  return (
    <Canvas flat camera={ {
      fov: 45,
      near: 0.1,
      far: 200,
      position: [1, 2, 3]
    } }>
      <Experience />
    </Canvas>
  );
}

export default App;
