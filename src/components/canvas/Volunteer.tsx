/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef, useEffect } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    man: THREE.SkinnedMesh
    Hips: THREE.Bone
  }
  materials: {
    man: THREE.MeshStandardMaterial
  }
}

type ActionName =
  | 'breathing'
  | 'idle_long'
  | 'idle_short'
  | 'idle_tired'
  | 'interact'
  | 'interact_ground'
  | 'jump'
  | 'pickup'
  | 'run'
  | 'sit'
  | 'sitting_idle'
  | 'stand'
  | 'talk'
  | 'walk'

export default function Model({ ...props }: JSX.IntrinsicElements['group']) {
  const group = useRef<THREE.Group>()
  const { nodes, materials, animations } = useGLTF(
    '/volunteer-transformed.glb'
  ) as GLTFResult
  const { actions } = useAnimations(animations, group)

  useEffect(() => {
    if (actions.jump) {
      actions.idle_tired.play()
      group.current.scale.set(1.3, 1.3, 1.3)
    }
  }, [actions])

  if (group.current) {
    group.current.rotation.set(0, Math.PI / 2 + 0.1, 0)
  }

  return (
    <group
      rotation={[0, Math.PI / 2 + 0.1, 0]}
      ref={group}
      {...props}
      dispose={null}
    >
      <primitive object={nodes.Hips} />
      <skinnedMesh
        castShadow
        name='man'
        geometry={nodes.man.geometry}
        material={materials.man}
        skeleton={nodes.man.skeleton}
        morphTargetDictionary={nodes.man.morphTargetDictionary}
        morphTargetInfluences={nodes.man.morphTargetInfluences}
      />
    </group>
  )
}

useGLTF.preload('/volunteer-transformed.glb')