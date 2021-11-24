import { useRef } from 'react'
import * as THREE from 'three'
import { Billboard as DreiBillboard, Text } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

export const Billboard: React.FC = ({ children }) => {
  const textRef = useRef<any>()
  const cameraDirection = new THREE.Vector3()
  const relativePosition = new THREE.Vector3(0, 0, 0)
  useFrame(({ camera }) => {
    camera.getWorldDirection(cameraDirection)
    relativePosition.copy(cameraDirection.add(camera.position))
    if (textRef.current) {
      textRef.current.position.set(
        relativePosition.x - 1,
        relativePosition.y,
        relativePosition.z
      )
    }
  })
  return (
    <DreiBillboard ref={textRef}>
      <Text>{children}</Text>
    </DreiBillboard>
  )
}

const StoryBoards = () => {
  return <Text>Hello</Text>
}

export default StoryBoards
