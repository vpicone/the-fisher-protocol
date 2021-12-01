import { useEffect, useRef } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import * as THREE from 'three'
import useStore from '@/helpers/store'
import { Object3D } from 'three'

const useKeyboardControls = ({ allowJumping = true }) => {
  const three = useThree()
  const locked = useStore((state) => state.locked)
  const moveForward = useRef(false)
  const moveLeft = useRef(false)
  const moveBackward = useRef(false)
  const moveRight = useRef(false)
  const canJump = useRef(false)
  const { current: playerSize } = useRef(
    new THREE.Vector3(0.5, three.camera.position.y, 0.5)
  )

  const velocity = useRef(new THREE.Vector3())
  const direction = useRef(new THREE.Vector3())

  const playerBox = new THREE.Box3().setFromCenterAndSize(
    three.camera.position,
    playerSize
  )

  const collisions = three.scene.children.filter(
    (obj) => obj.userData.canCollide
  )

  // Box helpers
  // three.scene.traverse((obj) => {
  //   if (obj.userData.canCollide) {
  //     three.scene.add(new THREE.BoxHelper(obj, 'red'))
  //   }
  // })

  useFrame((state, delta) => {
    // const [group] = three.scene.children
    if (locked) {
      // const { x, z } = state.camera.position
      playerBox.setFromCenterAndSize(state.camera.position, playerSize)
      const isColliding = collisions.filter((obj: THREE.Mesh) => {
        return playerBox.intersectsBox(obj.geometry.boundingBox)
      })

      if (isColliding.length) {
        // stop all movement
        velocity.current.x = velocity.current.x * -0.5
        velocity.current.z = velocity.current.z * -0.5
        // @ts-ignore
        state.controls.moveRight(-0.1 * direction.current.x)
        // @ts-ignore
        state.controls.moveForward(-0.1 * direction.current.z)
      } else {
        velocity.current.x -= velocity.current.x * 10.0 * delta
        velocity.current.z -= velocity.current.z * 10.0 * delta
        velocity.current.y -= 9.8 * 100.0 * delta // 100.0 = mass

        direction.current.z =
          Number(moveForward.current) - Number(moveBackward.current)
        direction.current.x =
          Number(moveRight.current) - Number(moveLeft.current)
        direction.current.normalize()

        if (moveForward.current || moveBackward.current)
          velocity.current.z -= direction.current.z * 15.0 * delta
        if (moveLeft.current || moveRight.current)
          velocity.current.x -= direction.current.x * 15.0 * delta
      }

      if (state.controls) {
        // @ts-ignore
        state.controls.moveRight(-velocity.current.x * delta)
        // @ts-ignore
        state.controls.moveForward(-velocity.current.z * delta)
      }
    }
  })

  useEffect(() => {
    document.addEventListener('keydown', onKeyDown)
    document.addEventListener('keyup', onKeyUp)
  })

  const onKeyDown = function (event) {
    switch (event.code) {
      case 'ArrowUp':
      case 'KeyW':
        moveForward.current = true
        break

      case 'ArrowLeft':
      case 'KeyA':
        moveLeft.current = true
        break

      case 'ArrowDown':
      case 'KeyS':
        moveBackward.current = true
        break

      case 'ArrowRight':
      case 'KeyD':
        moveRight.current = true
        break

      case 'Space':
        if (canJump.current === true) velocity.current.y += 350
        canJump.current = false
        break
    }
  }

  const onKeyUp = function (event) {
    switch (event.code) {
      case 'ArrowUp':
      case 'KeyW':
        moveForward.current = false
        break

      case 'ArrowLeft':
      case 'KeyA':
        moveLeft.current = false
        break

      case 'ArrowDown':
      case 'KeyS':
        moveBackward.current = false
        break

      case 'ArrowRight':
      case 'KeyD':
        moveRight.current = false
        break
    }
  }
}

export default useKeyboardControls
