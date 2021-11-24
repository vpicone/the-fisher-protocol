import useStore from '@/helpers/store'
import { useProgress } from '@react-three/drei'

export default function Instructions() {
  const locked = useStore((state) => state.locked)
  const { progress } = useProgress()

  return (
    <div className='root'>
      <p className='my-8'>Use W, A, S, D keys to move,</p>
      <p>mouse to look around,</p>
      <p>and escape key to access this menu</p>
      <button hidden={progress !== 100} id='start-button'>
        Begin
      </button>

      {progress !== 100 && (
        <>
          <progress max='100' value={progress}>
            {progress} % loaded
          </progress>
          <p>Loading...</p>
        </>
      )}
      <style jsx>
        {`
          .root {
            position: absolute;
            z-index: 1;
            padding: 16px;
            top: 30%;
            left: 50%;
            transform: translateX(-50%);
            display: ${locked ? 'none' : 'flex'};
            flex-direction: column;
            justify-content: center;
            align-items: center;
            width: 100%;
            max-width: 300px;
            background: rgba(0, 0, 0, 0.2);
            background-filter: blur(10px);
            -webkit-backdrop-filter: blur(10px);
            border-radius: 8px;
            color: white;
            text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.6);
          }

          p {
            margin-top: 0;
            margin-bottom: 8px;
          }
        `}
      </style>
    </div>
  )
}
