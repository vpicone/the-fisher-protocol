import { Suspense } from 'react'
import dynamic from 'next/dynamic'
import Instructions from '@/components/dom/Instructions'

// Dynamic import is used to prevent a payload when the website start that will include threejs r3f etc..
// WARNING ! errors might get obfuscated by using dynamic import.
// If something goes wrong go back to a static import to show the error.
// https://github.com/pmndrs/react-three-next/issues/49
const Scene = dynamic(() => import('@/components/canvas/Scene'), {
  ssr: false,
})

// dom components goes here
const DOM = () => {
  return (
    // Step 5 - delete Instructions components
    <Instructions />
  )
}

// canvas components goes here
const R3F = ({ r3f = true }) => {
  return (
    <Suspense fallback={null}>
      <Scene />
    </Suspense>
  )
}

const Page = () => {
  return (
    <>
      <DOM />
      <R3F r3f />
    </>
  )
}

export default Page

export async function getStaticProps() {
  return {
    props: {
      title: 'The Fisher Protocol',
    },
  }
}
