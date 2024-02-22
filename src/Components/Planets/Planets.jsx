import React, { useEffect, useState } from 'react'
import PlanetCard from './PlanetCard.jsx';

const Planets = () => {
    const [planetsData,setPlanetsData] = useState(null);
    const [url, setUrl] = useState("https://swapi.dev/api/planets/");
    useEffect(() => {
        fetch(url)
        .then(res => res.json())
        .then(res => setPlanetsData(res?.results))
        return ()=> { console.log("returning")}
    },[])

    return (
    <div className='w-full h-fit flex flex-wrap gap-5'>
    {
        planetsData ?
        planetsData.map((item) => (
            <PlanetCard
                key={item.url}
                planet={item}
            /> 
        )): <div>Loding...</div>
    }
    </div>
  )
}

export default Planets