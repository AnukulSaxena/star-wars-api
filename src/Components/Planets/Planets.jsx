import React, { useEffect, useState } from 'react'
import PlanetCard from './PlanetCard.jsx';
import { useDispatch, useSelector } from 'react-redux';
import {  setUrl } from '../../store/homeSlice.js';

const Planets = () => {
    const [planetsData,setPlanetsData] = useState(null);
    const {planets} = useSelector(state => state.home)
    
    useEffect(() => {
        setPlanetsData(planets?.results)
        window.scroll(0,0)
    },[planets])

    return (
    <div className='w-full h-fit flex justify-center flex-wrap gap-5'>
    {
        planetsData ?
        planetsData.map((item) => (
            <PlanetCard
                key={item.url}
                planet={item}
            /> 
        )): <div>Loding...</div>
    }
    <Pagination/>
    </div>
  )
}

export default Planets


const Pagination = () => {
    const {planets} = useSelector(state => state.home)
    const dispatch = useDispatch()

    function handleNext(){
        if(planets?.next)
            dispatch(setUrl(planets?.next))
    }
    function handlePrevious(){
        if(planets?.previous)
        dispatch(setUrl(planets?.previous))
    }
    return (
        <div className='w-full p-2 h-12 flex justify-center items-center'>
            <div className='h-full w-fit flex'>
            <button className=' flex items-center dark:hover:bg-neutral-400 rounded-l-md border-r-0 border dark:border-neutral-900' onClick={handlePrevious}>
                <svg viewBox="0 0 24 24" className='h-10 w-10'  xmlns="http://www.w3.org/2000/svg">
                    <path className='dark:fill-neutral-900' d="M12.9268 18.8389C13.7351 19.5461 15 18.9721 15 17.8982L15 6.10192C15 5.02797 13.7351 4.454 12.9268 5.1612L6.61617 10.683C5.81935 11.3802 5.81935 12.6198 6.61617 13.317L12.9268 18.8389ZM13.5 17.3472L7.60393 12.1882C7.4901 12.0886 7.4901 11.9115 7.60393 11.8119L13.5 6.65286L13.5 17.3472Z" fill="#212121"/>
                </svg>
            </button>
            <button className=' dark:hover:bg-neutral-400 flex items-center rounded-r-md  border-l-0  border dark:border-neutral-900' onClick={handleNext}>
                <svg viewBox="0 0 24 24" className='h-10 w-10' xmlns="http://www.w3.org/2000/svg">
                    <path className='dark:fill-neutral-900' d="M11.0731 18.8389C10.2649 19.5461 9 18.9721 9 17.8982L9 6.10192C9 5.02797 10.2649 4.454 11.0731 5.1612L17.3838 10.683C18.1806 11.3802 18.1806 12.6198 17.3838 13.317L11.0731 18.8389ZM10.5 17.3472L16.396 12.1882C16.5099 12.0886 16.5099 11.9115 16.396 11.8119L10.5 6.65286L10.5 17.3472Z" fill="#212121"/>
                </svg>
            </button>
            </div>
        </div>
    )
}