import React from 'react'

const PlanetCardSkeleton = () => {
  return (
    
<div role="status" class="w-80 h-80 p-4 border border-neutral-200 rounded shadow animate-pulse md:p-6 dark:border-neutral-700">
    <div class="flex items-center justify-center h-24 mb-4 bg-neutral-300 rounded dark:bg-neutral-700">
     
    </div>
    <div class="h-2.5 bg-neutral-200 rounded-full dark:bg-neutral-700 w-48 mb-4"></div>
    <div class="h-2 bg-neutral-200 rounded-full dark:bg-neutral-700 mb-2.5"></div>
    <div class="h-2 bg-neutral-200 rounded-full dark:bg-neutral-700 mb-2.5"></div>
    <div class="h-2 bg-neutral-200 rounded-full dark:bg-neutral-700"></div>
    <div class="flex items-center my-4">
    
        <div>
            <div class="h-2.5 bg-neutral-200 rounded-full dark:bg-neutral-700 w-32 mb-2"></div>
            <div class="w-48 h-2 bg-neutral-200 rounded-full dark:bg-neutral-700"></div>
        </div>
    </div>
    <div class="h-2 bg-neutral-200 rounded-full dark:bg-neutral-700 mb-2.5"></div>
    <div class="h-2 bg-neutral-200 rounded-full dark:bg-neutral-700 mb-2.5"></div>
    <span class="sr-only">Loading...</span>
</div>

  )
}

export default PlanetCardSkeleton