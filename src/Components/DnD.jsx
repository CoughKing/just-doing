import React from 'react'

function DnD() {
  return (
    <div className="max-w-md m-auto p-4 bg-green-800 mt-5" >
    <div className=" flex flex-col justify-center items-center gap-6 mx-1 sm:mx-6 py-2">
        <h3 className="text-4xl font-serif text-center font-bold"> Upload Multiple Images of an Object for 3d Scene Reconstruction
        </h3>    
        <button className="text-2xl font-bold rounded-3xl p-2 bg-red-800">
            Upload Images
        </button>
        <div className="flex flex-col border-dashed border border-black">
            OR, Drop Files Here
           
        </div>
        
        
        
    </div>
    </div>
  )
}

export default DnD