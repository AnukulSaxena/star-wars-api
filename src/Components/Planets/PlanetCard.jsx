import React from 'react'

const PlanetCard = ({planet}) => {
  return (
    <div className='dark:text-neutral-400 p-5 w-80 h-96 hover:shadow-2xl rounded-md'>
        <h1
        className='  text-5xl pb-5 border-b dark:border-neutral-500'
        >{planet.name}</h1>

        <div className='flex py-2 w-full no-scrollbar overflow-x-scroll'>
          Terrain: 
          {
            planet.terrain.split(",").map((item,index) =>(
              <div
                className={`${index !== 0 ? "border-l dark:border-neutral-500 " : ""} px-2 capitalize whitespace-nowrap`}
                key={index}
              >{item}</div>
            ))
          }
        </div>
        <div className='flex py-2 w-full no-scrollbar overflow-x-scroll'>
          Cliamte: 
          {
            planet.climate.split(",").map((item,index) =>(
              <div
                className={`${index !== 0 ? "border-l dark:border-neutral-500 " : ""} px-2 capitalize whitespace-nowrap`}
                key={index}
              >{item}</div>
            ))
          }
        </div>
        <p>Population: {planet.population}</p>
        <div className='flex px-5 justify-between pt-5 border-t dark:border-neutral-500'>
            <button className='dark:bg-neutral-700 w-24 py-1 rounded-sm'>Residents</button>
            <button className='dark:bg-neutral-700 w-24 py-1 rounded-sm'>Films</button>
        </div>
    </div>
  )
}

export default PlanetCard