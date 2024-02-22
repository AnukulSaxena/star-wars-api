import React from 'react'

const PlanetCard = ({planet}) => {
  return (
    <div className='w-80 h-96 dark:bg-neutral-700'>
        <h1>{planet.name}</h1>
        

        <div className='flex justify-between p-2'>
            <button>Residents</button>
            <button>Films</button>
        </div>
    </div>
  )
}

export default PlanetCard