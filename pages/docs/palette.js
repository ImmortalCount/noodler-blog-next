/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Sidebar from '../../components/Sidebar'

export default function palette() {
  return (
    <div>
    <div className='doc_wrapper'>
      <Sidebar active={'palette'} />
      <div>
      <div>
      <h2>Palette</h2>
            <img className='image' src="/images/docs/Palette Small.png" alt="" style={{width: '25%'}} />
           <div>
           The Palette is for temporary storage. Drag and drop any piece of musical data into the palette or out from the palette. Use the selector arrows to toggle between the different categories of musical data
           </div>
        </div>
      </div>
  </div>

  </div>
  )
}
