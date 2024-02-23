import React, { useEffect, useState } from 'react'
import PlanetCard from './PlanetCard.jsx';
import { useSelector } from 'react-redux';
import PlanetCardSkeleton from './PlanetCardSkeleton.jsx';
import Pagination from '../Pagination.jsx';

const Planets = () => {
    const [planetsData, setPlanetsData] = useState(null);
    const { planets } = useSelector(state => state.home)

    useEffect(() => {
        setPlanetsData(planets?.results)
    }, [planets])

    return planetsData ? (
        <div className='w-full h-fit flex justify-center flex-wrap gap-5'>
            {

                planetsData.map((item) => (
                    <PlanetCard
                        key={item.url}
                        planet={item}
                    />
                ))
            }
            <Pagination
                setPlanetsData={setPlanetsData}
            />
        </div>
    ) : (
        <div
            className='w-full h-fit flex flex-wrap justify-center gap-5'
        >
            {
                Array.from({ length: 10 }).map((_, index) => (
                    <PlanetCardSkeleton key={index} />
                ))
            }
        </div>
    )
}

export default Planets


