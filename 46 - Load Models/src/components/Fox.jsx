import { useGLTF, useAnimations } from "@react-three/drei";
import { useControls } from "leva";
import { useEffect } from "react";

const Fox = () => {
  const { animations, scene } = useGLTF("./Fox/glTF/Fox.gltf");
  const animation = useAnimations(animations, scene);

  const { animationName } = useControls({
    animationName: { options: animation.names },
  });

  useEffect(() => {
    const action = animation.actions[animationName];
    action.reset().fadeIn(0.5).play();
    return () => {
      action.fadeOut(0.5);
    };
  }, [animationName]);

  return (
    <primitive
      object={scene}
      scale={0.02}
      position={[-2.5, 0, 2.5]}
      rotation-y={0.3}
    />
  );
};

export default Fox;
