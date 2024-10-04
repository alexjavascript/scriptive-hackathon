import { Canvas } from "@react-three/fiber";
import Torus from "@/ui/models/torus";
import styles from './index.module.scss';
import { Environment } from "@react-three/drei";
import Laptop from "@/ui/models/laptop";
import S from "@/ui/models/s";
import Link from 'next/link'

const Hero = () => {
  return (
    <section className={styles.section}>
      <Canvas className={styles.canvas}>
        <directionalLight intensity={3} position={[0, 3, 2]} />
        <Environment preset="city" />
        {/* <Torus />   */}

        {/* <Laptop />     */}
        <S />
      </Canvas>

      <div className={styles.content}>
      <p>
        01 / Intro

        </p>

        <h2>
          Your Digital  <br />
          Success <br />
          is Scriptive
        </h2>

        <p>
        As dedicated innovators, we specialise in crafting advanced, purpose-driven solutions that simplify technology.

        </p>

        <ul>
            <li>
            <Link className={styles.x} href="/">
          
          Let's talk
          </Link>
            </li>
            <li>
            <Link className={styles.x} href="/">
          
          Learn more
          </Link>
            </li>
            
          </ul>
      </div>
    </section>
  )
}

export default Hero;