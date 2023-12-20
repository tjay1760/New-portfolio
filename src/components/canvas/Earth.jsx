import { Canvas } from "@react-three/fiber"
import { Suspense } from "react"
import CanvasLoader from '../Loader'
import { OrbitControls, Preload, useGLTF } from "@react-three/drei"
const Earth = () => {
  const earth = useGLTF('./planet/scene.gltf')
  return (
<primitive
object={earth.scene}
/>
  )
}
const EarthCanvas = ()=>{
  return(
    <Canvas
    shadows
    frameloop ='demand'
    gl = {{preserveDrawingBuffer:true}}
    camera ={{}}
    >
<Suspense fallback={<CanvasLoader/>}>
  <OrbitControls
  autoRotate
  enableZoom = {false}
  maxPolarAngle={Math.PI/2}
  minPolarAngle={Math.PI/2}
  />
  <Earth/>
</Suspense>
    </Canvas>
  )
}

export default EarthCanvas;