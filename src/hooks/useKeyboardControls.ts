import { useEffect, useState, useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

const useKeyboardControls = ({ allowJumping = true }) => {
  const moveForward = useRef(false)
  const moveLeft = useRef(false)
  const moveBackward = useRef(false)
  const moveRight = useRef(false)
  const canJump = useRef(false)

  const velocity = useRef(new THREE.Vector3())
  const direction = useRef(new THREE.Vector3())

  useFrame(({ controls }, delta) => {
    velocity.current.x -= velocity.current.x * 10.0 * delta
    velocity.current.z -= velocity.current.z * 10.0 * delta
    velocity.current.y -= 9.8 * 100.0 * delta // 100.0 = mass

    direction.current.z =
      Number(moveForward.current) - Number(moveBackward.current)
    direction.current.x = Number(moveRight.current) - Number(moveLeft.current)
    direction.current.normalize()

    if (moveForward.current || moveBackward.current)
      velocity.current.z -= direction.current.z * 15.0 * delta
    if (moveLeft.current || moveRight.current)
      velocity.current.x -= direction.current.x * 15.0 * delta

    if (controls) {
      controls.moveRight(-velocity.current.x * delta)
      controls.moveForward(-velocity.current.z * delta)
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
    console.log(event.code)
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
