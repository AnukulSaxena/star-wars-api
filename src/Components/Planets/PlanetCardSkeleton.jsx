import React from 'react'

const PlanetCardSkeleton = () => {
  return (

    <div role="status" className="w-80 h-80 p-4 border border-neutral-400 rounded shadow animate-pulse md:p-6 dark:border-neutral-700">
      <div className="flex items-center justify-center h-24 mb-4 bg-neutral-500 rounded dark:bg-neutral-700">

      </div>
      <div className="h-2.5 bg-neutral-400 rounded-full dark:bg-neutral-700 w-48 mb-4"></div>
      <div className="h-2 bg-neutral-400 rounded-full dark:bg-neutral-700 mb-2.5"></div>
      <div className="h-2 bg-neutral-400 rounded-full dark:bg-neutral-700 mb-2.5"></div>
      <div className="h-2 bg-neutral-400 rounded-full dark:bg-neutral-700"></div>
      <div className="flex items-center my-4">

        <div>
          <div className="h-2.5 bg-neutral-400 rounded-full dark:bg-neutral-700 w-32 mb-2"></div>
          <div className="w-48 h-2 bg-neutral-400 rounded-full dark:bg-neutral-700"></div>
        </div>
      </div>
      <div className="h-2 bg-neutral-400 rounded-full dark:bg-neutral-700 mb-2.5"></div>
      <div className="h-2 bg-neutral-400 rounded-full dark:bg-neutral-700 mb-2.5"></div>
      <span className="sr-only">Loading...</span>
    </div>

  )
}

export default PlanetCardSkeleton