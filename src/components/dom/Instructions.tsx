import useStore from '@/helpers/store'

export default function Instructions() {
  const locked = useStore((state) => state.locked)

  return (
    <div
      className='absolute px-8 py-8 shadow-xl select-none md:text-base top-8 left-1/2 text-gray-50 transform -translate-x-1/2'
      style={{
        backgroundColor: 'rgb(27, 30, 40)',
        maxWidth: 'calc(100% - 28px)',
        display: locked ? 'none' : 'block',
      }}
    >
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
    </div>
  )
}
