import useStore from '@/helpers/store'

export default function Instructions() {
  const locked = useStore((state) => state.locked)

  return (
    <div className='root'>
      <blockquote className='max-w-xl text-xl italic'>
        <p className='mb-4'>
          My suggestion was quite simple: Put that needed code number in a
          little capsule, and then implant that capsule right next to the heart
          of a volunteer. The volunteer would carry with him a big, heavy
          butcher knife as he accompanied the President.
        </p>
        <p className='mb-4'>
          If ever the President wanted to fire nuclear weapons, the only way he
          could do so would be for him first, with his own hands, to kill one
          human being. He has to look at someone and realize what death is—what
          an innocent death is. Blood on the White House carpet. It‘s reality
          brought home.
        </p>
        <p className='mb-4'>
          When I suggested this to friends in the Pentagon they said, “My God,
          that‘s terrible. Having to kill someone would distort the President‘s
          judgment. He might never push the button.”
        </p>
        <cite className='ml-4'>
          — Roger Fisher, Bulletin of the Atomic Scientists, March 1981
        </cite>
      </blockquote>
      <p className='my-8'>W, A, S, D = Move, MOUSE = Look, ESC = Menu</p>
      <button id='start-button'>Begin</button>
      <style jsx>
        {`
          .root {
            position: absolute;
            z-index: 1;
            padding: 8px;
            top: 8px;
            left: 50%;
            transform: translateX(-50%);
            display: ${locked ? 'none' : 'block'};
            width: 100%;
            max-width: 600px;
            background: rgba(0, 0, 0, 0.2);
            background-filter: blur(10px);
            -webkit-backdrop-filter: blur(10px);
            border-radius: 8px;
            color: white;
            text-shadow: 2px 2px 2px black;
          }
        `}
      </style>
    </div>
  )
}
