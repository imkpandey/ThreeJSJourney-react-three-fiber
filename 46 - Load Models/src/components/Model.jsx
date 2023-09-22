import { useGLTF, Clone } from "@react-three/drei";

const Model = () => {
  const { scene } = useGLTF("./hamburger.glb");
  return <>
    <Clone object={scene} scale={0.35} position-x={ 4 } />;
    <Clone object={scene} scale={0.35} position-x={ 0 } />;
    <Clone object={scene} scale={0.35} position-x={ -4 } />;
  </>
};

export default Model;
useGLTF.preload('./hamburger.glb')
