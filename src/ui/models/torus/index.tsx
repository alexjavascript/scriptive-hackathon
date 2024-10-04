import { MeshTransmissionMaterial, Text, useGLTF } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { useControls } from "leva";
import { useRef } from "react";

const Torus = () => {
  const mesh = useRef()
  const { nodes } = useGLTF('/media/models/torus/model.glb');
  const { viewport } = useThree()

  useFrame(() => {
    mesh.current.rotation.z += 0.02
  })

  const materialProps = useControls({
    thickness: { value: 0.2, min: 0, max: 3, step: 0.05 }, 
    roughness: { value: 0, min: 0, max: 1, step: 0.1 }, 
    transmission: {value: 1, min: 0, max: 1, step: 0.1}, 
    ior: { value: 1.2, min: 0, max: 3, step: 0.1 }, 
    chromaticAberration: { value: 0.02, min: 0, max: 1}, 
    backside: { value: true},
  })

  return (
    <group >
      <Text fontSize={1} 
        font="/fonts/MonumentExtended-Regular.otf"
        position={[0, 0, -1]}
        color={'white'}
      >
        Scriptive
      </Text>
      {/* scale={viewport.width / 1} */}
      <mesh ref={mesh} {...nodes.Torus}>
        <MeshTransmissionMaterial {...materialProps} />
      </mesh>
    </group>
  )
}

export default Torus;