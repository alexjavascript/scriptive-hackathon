import { MeshTransmissionMaterial, Text, useGLTF } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { useControls } from "leva";
import { useRef } from "react";

// function Model() {
//   const gltf = useGLTF('https://thinkuldeep.com/modelviewer/Astronaut.glb')
//   return (<primitive object={gltf.scene} />)
// }

const Laptop = () => {
  const mesh = useRef()
  const x = useGLTF('/media/models/laptop/scene.glb');
  // const { nodes } = useGLTF('/media/models/laptop/laptop-colors.glb');
  const { viewport } = useThree()

  useFrame(() => {
    // mesh.current.rotation.z += 0.02
    mesh.current.rotation.y -= 0.02
    mesh.current.scale.set(0.25, 0.25, 0.25)

  })

  const materialProps = useControls({
    thickness: { value: 0.2, min: 0, max: 3, step: 0.05 }, 
    roughness: { value: 0, min: 0, max: 1, step: 0.1 }, 
    transmission: {value: 1, min: 0, max: 1, step: 0.1}, 
    ior: { value: 1.2, min: 0, max: 3, step: 0.1 }, 
    chromaticAberration: { value: 0.02, min: 0, max: 1}, 
    backside: { value: true},
  })

  console.log(x)

  return (
    <group >
      <Text fontSize={1} 
        font="/fonts/MonumentExtended-Regular.otf"
        position={[0, 0, -3]}
        color={'white'}
      >
        Scriptive
      </Text>
      {/* scale={viewport.width / 1} */}
      {/* {Object.values(x.nodes).map((node) => {
        return (<mesh ref={mesh} {...node} position={[0, 0, 0]}>
          <MeshTransmissionMaterial {...materialProps} />
        </mesh>)
      })} */}
      {/* <mesh ref={mesh} {...x.nodes.Plane} position={[0, 0, 0]}>
        <MeshTransmissionMaterial {...materialProps} />
      </mesh> */}

      <primitive ref={mesh}  object={x.scene} position={[0, 0, 0]} />
        {/* <Cube */}
      
    </group>
  )
}

export default Laptop;