import { OrbitControls } from "@react-three/drei";
import { button, useControls } from "leva";
import { Perf } from "r3f-perf";

const Experience = () => {
const { perfVisible } = useControls({
  perfVisible: true
})

  const { position, color, visible } = useControls("sphere", {
    position: {
      value: { x: -2, y: 0 },
      step: 0.01,
      joystick: "invertY",
    },
    color: "#ff0000",
    visible: true,
    clickMe: button(() => {
      console.log("okokokokok");
    }),
  });
  return (
    <>
      { perfVisible && <Perf position="top-left" /> }
      <OrbitControls makeDefault />

      <directionalLight position={[1, 2, 3]} intensity={2.5} />
      <ambientLight intensity={1.5} />

      <mesh position={[position.x, position.y, 0]} visible={visible}>
        <sphereGeometry />
        <meshStandardMaterial color={color} />
      </mesh>
      <mesh position-x={2} scale={1.5}>
        <boxGeometry />
        <meshStandardMaterial color="mediumpurple" />
      </mesh>
      <mesh position-y={-2} rotation-x={-Math.PI * 0.5} scale={10}>
        <planeGeometry />
        <meshStandardMaterial color="greenyellow" />
      </mesh>
    </>
  );
};

export default Experience;
