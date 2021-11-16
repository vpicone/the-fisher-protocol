/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'
import { useLoader } from '@react-three/fiber'
import environmentImage from './environment.jpg'

type GLTFResult = GLTF & {
  nodes: {
    dresser: THREE.Mesh
    ovalLight: THREE.Mesh
    shelves: THREE.Mesh
    flag: THREE.Mesh
    doorMolding: THREE.Mesh
    resoluteChair: THREE.Mesh
    prop: THREE.Mesh
    clock: THREE.Mesh
    table: THREE.Mesh
    hangingFrame: THREE.Mesh
    resoluteDesk: THREE.Mesh
    fireplace: THREE.Mesh
    sofa: THREE.Mesh
    clawChair: THREE.Mesh
    pot: THREE.Mesh
    books: THREE.Mesh
    lamp: THREE.Mesh
    squareChair: THREE.Mesh
    office: THREE.Mesh
    dresserFrame: THREE.Mesh
    environment: THREE.Mesh
    clawChair001: THREE.Mesh
    curtain001: THREE.Mesh
    curtain002: THREE.Mesh
    curtain003: THREE.Mesh
    curtain004: THREE.Mesh
    curtain: THREE.Mesh
    doorMolding001: THREE.Mesh
    dresser001: THREE.Mesh
    flag001: THREE.Mesh
    flag002: THREE.Mesh
    flag003: THREE.Mesh
    hangingFrame001: THREE.Mesh
    hangingFrame002: THREE.Mesh
    hangingFrame003: THREE.Mesh
    hangingFrame004: THREE.Mesh
    hangingFrame005: THREE.Mesh
    lamp001: THREE.Mesh
    pot001: THREE.Mesh
    prop001: THREE.Mesh
    prop002: THREE.Mesh
    prop003: THREE.Mesh
    prop004: THREE.Mesh
    prop005: THREE.Mesh
    shelves001: THREE.Mesh
    shelves002: THREE.Mesh
    shelves003: THREE.Mesh
    sofa001: THREE.Mesh
    squareChair001: THREE.Mesh
    squareChair002: THREE.Mesh
    squareChair003: THREE.Mesh
    squareChair004: THREE.Mesh
    squareChair005: THREE.Mesh
    table001: THREE.Mesh
    table002: THREE.Mesh
    table003: THREE.Mesh
    table004: THREE.Mesh
    table005: THREE.Mesh
    window001: THREE.Mesh
    window002: THREE.Mesh
    window003: THREE.Mesh
    window004: THREE.Mesh
    window005: THREE.Mesh
    window006: THREE.Mesh
    window: THREE.Mesh
    books001: THREE.Mesh
  }
  materials: {
    commode: THREE.MeshBasicMaterial
    light: THREE.MeshBasicMaterial
    shelves: THREE.MeshBasicMaterial
    flags: THREE.MeshBasicMaterial
    molding: THREE.MeshBasicMaterial
    principal_chair: THREE.MeshBasicMaterial
    props_A: THREE.MeshBasicMaterial
    clock: THREE.MeshBasicMaterial
    tables_A: THREE.MeshBasicMaterial
    pictures_A: THREE.MeshBasicMaterial
    resolute_desk: THREE.MeshBasicMaterial
    fireplace: THREE.MeshBasicMaterial
    sofa: THREE.MeshBasicMaterial
    chair_S1: THREE.MeshBasicMaterial
    flowers_pots: THREE.MeshBasicMaterial
    props_B: THREE.MeshBasicMaterial
    lamps: THREE.MeshBasicMaterial
    chair_S2: THREE.MeshBasicMaterial
    office: THREE.MeshBasicMaterial
    pictures_B: THREE.MeshBasicMaterial
    enviroment: THREE.MeshBasicMaterial
    curtains: THREE.MeshBasicMaterial
    door_S1: THREE.MeshBasicMaterial
  }
}

export default function Model({ ...props }: JSX.IntrinsicElements['group']) {
  const [environmentTexture] = useLoader(THREE.TextureLoader, [
    environmentImage.src,
  ])

  console.log(environmentTexture)
  environmentTexture.flipY = false
  const { nodes, materials } = useGLTF('/scene-transformed.glb') as GLTFResult

  materials.enviroment.side = THREE.BackSide

  return (
    <>
      <mesh
        userData={{ canCollide: true }}
        matrixAutoUpdate={false}
        geometry={nodes.dresser.geometry}
        material={nodes.dresser.material}
      />
      <mesh
        matrixAutoUpdate={false}
        geometry={nodes.ovalLight.geometry}
        material={materials.light}
      />
      <mesh
        matrixAutoUpdate={false}
        geometry={nodes.shelves.geometry}
        material={nodes.shelves.material}
      />
      <mesh
        userData={{ canCollide: true }}
        matrixAutoUpdate={false}
        geometry={nodes.flag.geometry}
        material={nodes.flag.material}
      />
      <mesh
        userData={{ canCollide: true }}
        matrixAutoUpdate={false}
        geometry={nodes.doorMolding.geometry}
        material={nodes.doorMolding.material}
      />
      <mesh
        matrixAutoUpdate={false}
        geometry={nodes.resoluteChair.geometry}
        material={materials.principal_chair}
      />
      <mesh
        matrixAutoUpdate={false}
        geometry={nodes.prop.geometry}
        material={nodes.prop.material}
      />
      <mesh
        userData={{ canCollide: true }}
        matrixAutoUpdate={false}
        geometry={nodes.clock.geometry}
        material={materials.clock}
      />
      <mesh
        userData={{ canCollide: true }}
        matrixAutoUpdate={false}
        geometry={nodes.table.geometry}
        material={nodes.table.material}
      />
      <mesh
        matrixAutoUpdate={false}
        geometry={nodes.hangingFrame.geometry}
        material={nodes.hangingFrame.material}
      />
      <mesh
        // userData={{ canCollide: true }}
        matrixAutoUpdate={false}
        geometry={nodes.resoluteDesk.geometry}
        material={materials.resolute_desk}
      />
      <mesh
        userData={{ canCollide: true }}
        matrixAutoUpdate={false}
        geometry={nodes.fireplace.geometry}
        material={materials.fireplace}
      />
      <mesh
        userData={{ canCollide: true }}
        matrixAutoUpdate={false}
        geometry={nodes.sofa.geometry}
        material={nodes.sofa.material}
      />
      <mesh
        userData={{ canCollide: true }}
        matrixAutoUpdate={false}
        geometry={nodes.clawChair.geometry}
        material={nodes.clawChair.material}
      />
      <mesh
        matrixAutoUpdate={false}
        geometry={nodes.pot.geometry}
        material={nodes.pot.material}
      />
      <mesh
        matrixAutoUpdate={false}
        geometry={nodes.books.geometry}
        material={nodes.books.material}
      />
      <mesh
        matrixAutoUpdate={false}
        geometry={nodes.lamp.geometry}
        material={nodes.lamp.material}
      />
      <mesh
        userData={{ canCollide: true }}
        matrixAutoUpdate={false}
        geometry={nodes.squareChair.geometry}
        material={nodes.squareChair.material}
      />
      <mesh
        matrixAutoUpdate={false}
        geometry={nodes.office.geometry}
        material={materials.office}
      />
      <mesh
        matrixAutoUpdate={false}
        geometry={nodes.dresserFrame.geometry}
        material={materials.pictures_B}
      />
      <mesh matrixAutoUpdate={false} geometry={nodes.environment.geometry}>
        <meshBasicMaterial side={THREE.BackSide} map={environmentTexture} />
      </mesh>
      <mesh
        userData={{ canCollide: true }}
        matrixAutoUpdate={false}
        geometry={nodes.clawChair001.geometry}
        material={nodes.clawChair001.material}
      />
      <mesh
        userData={{ canCollide: true }}
        matrixAutoUpdate={false}
        geometry={nodes.curtain001.geometry}
        material={nodes.curtain001.material}
      />
      <mesh
        userData={{ canCollide: true }}
        matrixAutoUpdate={false}
        geometry={nodes.curtain002.geometry}
        material={nodes.curtain002.material}
      />
      <mesh
        userData={{ canCollide: true }}
        matrixAutoUpdate={false}
        geometry={nodes.curtain003.geometry}
        material={nodes.curtain003.material}
      />
      <mesh
        userData={{ canCollide: true }}
        matrixAutoUpdate={false}
        geometry={nodes.curtain004.geometry}
        material={nodes.curtain004.material}
      />
      <mesh
        matrixAutoUpdate={false}
        geometry={nodes.curtain.geometry}
        material={nodes.curtain.material}
      />
      <mesh
        userData={{ canCollide: true }}
        matrixAutoUpdate={false}
        geometry={nodes.doorMolding001.geometry}
        material={nodes.doorMolding001.material}
      />
      <mesh
        userData={{ canCollide: true }}
        matrixAutoUpdate={false}
        geometry={nodes.dresser001.geometry}
        material={nodes.dresser001.material}
      />
      <mesh
        userData={{ canCollide: true }}
        matrixAutoUpdate={false}
        geometry={nodes.flag001.geometry}
        material={nodes.flag001.material}
      />
      <mesh
        userData={{ canCollide: true }}
        matrixAutoUpdate={false}
        geometry={nodes.flag002.geometry}
        material={nodes.flag002.material}
      />
      <mesh
        userData={{ canCollide: true }}
        matrixAutoUpdate={false}
        geometry={nodes.flag003.geometry}
        material={nodes.flag003.material}
      />
      <mesh
        matrixAutoUpdate={false}
        geometry={nodes.hangingFrame001.geometry}
        material={nodes.hangingFrame001.material}
      />
      <mesh
        matrixAutoUpdate={false}
        geometry={nodes.hangingFrame002.geometry}
        material={nodes.hangingFrame002.material}
      />
      <mesh
        matrixAutoUpdate={false}
        geometry={nodes.hangingFrame003.geometry}
        material={nodes.hangingFrame003.material}
      />
      <mesh
        matrixAutoUpdate={false}
        geometry={nodes.hangingFrame004.geometry}
        material={nodes.hangingFrame004.material}
      />
      <mesh
        matrixAutoUpdate={false}
        geometry={nodes.hangingFrame005.geometry}
        material={nodes.hangingFrame005.material}
      />
      <mesh
        matrixAutoUpdate={false}
        geometry={nodes.lamp001.geometry}
        material={nodes.lamp001.material}
      />
      <mesh
        matrixAutoUpdate={false}
        geometry={nodes.pot001.geometry}
        material={nodes.pot001.material}
      />
      <mesh
        matrixAutoUpdate={false}
        geometry={nodes.prop001.geometry}
        material={nodes.prop001.material}
      />
      <mesh
        matrixAutoUpdate={false}
        geometry={nodes.prop002.geometry}
        material={nodes.prop002.material}
      />
      <mesh
        matrixAutoUpdate={false}
        geometry={nodes.prop003.geometry}
        material={nodes.prop003.material}
      />
      <mesh
        matrixAutoUpdate={false}
        geometry={nodes.prop004.geometry}
        material={nodes.prop004.material}
      />
      <mesh
        matrixAutoUpdate={false}
        geometry={nodes.prop005.geometry}
        material={nodes.prop005.material}
      />
      <mesh
        matrixAutoUpdate={false}
        geometry={nodes.shelves001.geometry}
        material={nodes.shelves001.material}
      />
      <mesh
        matrixAutoUpdate={false}
        geometry={nodes.shelves002.geometry}
        material={nodes.shelves002.material}
      />
      <mesh
        matrixAutoUpdate={false}
        geometry={nodes.shelves003.geometry}
        material={nodes.shelves003.material}
      />
      <mesh
        userData={{ canCollide: true }}
        matrixAutoUpdate={false}
        geometry={nodes.sofa001.geometry}
        material={nodes.sofa001.material}
      />
      {/* <mesh
        userData={{ canCollide: true }}
        matrixAutoUpdate={false}
        geometry={nodes.squareChair001.geometry}
        material={nodes.squareChair001.material}
      /> */}
      <mesh
        userData={{ canCollide: true }}
        matrixAutoUpdate={false}
        geometry={nodes.squareChair002.geometry}
        material={nodes.squareChair002.material}
      />
      <mesh
        userData={{ canCollide: true }}
        matrixAutoUpdate={false}
        geometry={nodes.squareChair003.geometry}
        material={nodes.squareChair003.material}
      />
      <mesh
        userData={{ canCollide: true }}
        matrixAutoUpdate={false}
        geometry={nodes.squareChair004.geometry}
        material={nodes.squareChair004.material}
      />
      <mesh
        userData={{ canCollide: true }}
        matrixAutoUpdate={false}
        geometry={nodes.squareChair005.geometry}
        material={nodes.squareChair005.material}
      />
      <mesh
        userData={{ canCollide: true }}
        matrixAutoUpdate={false}
        geometry={nodes.table001.geometry}
        material={nodes.table001.material}
      />
      <mesh
        userData={{ canCollide: true }}
        matrixAutoUpdate={false}
        geometry={nodes.table002.geometry}
        material={nodes.table002.material}
      />
      <mesh
        userData={{ canCollide: true }}
        matrixAutoUpdate={false}
        geometry={nodes.table003.geometry}
        material={nodes.table003.material}
      />
      <mesh
        userData={{ canCollide: true }}
        matrixAutoUpdate={false}
        geometry={nodes.table004.geometry}
        material={nodes.table004.material}
      />
      <mesh
        userData={{ canCollide: true }}
        matrixAutoUpdate={false}
        geometry={nodes.table005.geometry}
        material={nodes.table005.material}
      />
      <mesh
        userData={{ canCollide: true }}
        matrixAutoUpdate={false}
        geometry={nodes.window001.geometry}
        material={nodes.window001.material}
      />
      <mesh
        userData={{ canCollide: true }}
        matrixAutoUpdate={false}
        geometry={nodes.window002.geometry}
        material={nodes.window002.material}
      />
      <mesh
        userData={{ canCollide: true }}
        matrixAutoUpdate={false}
        geometry={nodes.window003.geometry}
        material={nodes.window003.material}
      />
      <mesh
        userData={{ canCollide: true }}
        matrixAutoUpdate={false}
        geometry={nodes.window004.geometry}
        material={nodes.window004.material}
      />
      <mesh
        userData={{ canCollide: true }}
        matrixAutoUpdate={false}
        geometry={nodes.window005.geometry}
        material={nodes.window005.material}
      />
      <mesh
        userData={{ canCollide: true }}
        matrixAutoUpdate={false}
        geometry={nodes.window006.geometry}
        material={nodes.window006.material}
      />
      <mesh
        userData={{ canCollide: true }}
        matrixAutoUpdate={false}
        geometry={nodes.window.geometry}
        material={nodes.window.material}
      />
      <mesh
        matrixAutoUpdate={false}
        geometry={nodes.books001.geometry}
        material={nodes.books001.material}
      />
    </>
  )
}

useGLTF.preload('/scene-transformed.glb')
