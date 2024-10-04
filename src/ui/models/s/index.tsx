import { useMediaQuery } from "@mantine/hooks";
import { Box, MeshTransmissionMaterial, Sphere, Text, useGLTF } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { Leva, useControls } from "leva";
import { useRef } from "react";

// function Model() {
//   const gltf = useGLTF('https://thinkuldeep.com/modelviewer/Astronaut.glb')
//   return (<primitive object={gltf.scene} />)
// }

const S = () => {
  const mesh = useRef()
  const x = useGLTF('/media/models/s/model.glb');
  const y = useGLTF('/media/models/planet/model.glb');
  const z = useGLTF('/media/models/torus/model.glb');
  // const { nodes } = useGLTF('/media/models/laptop/laptop-colors.glb');
  const { viewport } = useThree()

  const isDesktop = useMediaQuery('(min-width: 1024px)');

  useFrame(() => {
    // mesh.current.rotation.z += 0.02
    // mesh.current.rotation.z -= 0.005
    // mesh.current.rotation.x += 0.005
    // mesh.current.rotation.x = Math.PI / 2
    mesh.current.rotation.z += 0.005
    mesh.current.rotation.x = 1
    // mesh.current.rotation.y += 0.005


    // mesh.current.scale.set(0.25, 0.25, 0.25)
    // mesh.current.scale.set(0.25, 0.25, 0.25)


    // mesh.current.scale.set(1.5, 1.5, 1.5)

  })

  const materialProps = useControls({
    thickness: { value: 0.6, min: 0, max: 3, step: 0.05 }, 
    roughness: { value: 0.3, min: 0, max: 1, step: 0.1 }, 
    transmission: {value: 1, min: 0, max: 1, step: 0.1}, 
    ior: { value: 1.1, min: 0, max: 3, step: 0.1 }, 
    chromaticAberration: { value: 1, min: 0, max: 1}, 
    backside: { value: true},
  })

  console.log(y)

  return (
    <group >
      {/* <Text fontSize={1} 
        font="/fonts/MonumentExtended-Regular.otf"
        position={[0, 0, -3]}
        color={'white'}
      >
        Scriptive
      </Text> */}

      {/* <Text fontSize={5} 
        font="/fonts/MonumentExtended-Regular.otf"
        position={[0, 0, -3]}
        color={'white'}
      >
        S
      </Text> */}

      <Leva hidden={true} />

      
      {/* <mesh ref={mesh} {...x.nodes.S} position={[0, 0, 0]}>
        <MeshTransmissionMaterial {...materialProps} />
      </mesh> */}

<mesh ref={mesh} position={[0, 0, 0]} scale={isDesktop ? 2.5 : 2.5}>
      <octahedronGeometry  args={[1, 0]} />
      <MeshTransmissionMaterial {...materialProps} />
    </mesh>

      {/* <Box ref={mesh} rotation={[45, 45,45 ]} scale={2}>
        <MeshTransmissionMaterial {...materialProps} />
      </Box> */}

      {/* <Sphere  ref={mesh} rotation={[45, 45,45 ]} scale={1}>
      <MeshTransmissionMaterial {...materialProps} />
      </Sphere> */}


      {/* <mesh ref={mesh} {...z.nodes.Torus} scale={1} position={[0, 0, 0]}>
        <MeshTransmissionMaterial {...materialProps} />
      </mesh> */}

      <mesh {...y.nodes.Curve} scale={[0.25, 0.25, 0.25]} position={[0, 0, -2]} />
    </group>
  )
}

export default S;