/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import Sidebar from '../../components/Sidebar'

export default function lab() {
  return (
    <div>
    <div className='doc_wrapper'>
      <Sidebar active={'lab'} />
      <div>
      <div>
      <h1>Lab</h1>
            <img className='image' src="/images/docs/Lab.png" alt="" />
                <div>The lab is where you can create, inspect, and edit pieces of musical data</div>
                <div>Importing data into the lab</div>
                    <div>You can import any scale, chord, pattern, rhythm or module from the Explorer, Palette, or Player by dragging that data over the lab dropping it in. </div>
                    <div>All scales, chords, patterns, rhythms, and modules creating in the Lab can also be dragged out of the lab and dropped into The Explorer, Palette, or Player</div>
      </div>
      
      </div>
  </div>

  </div>
  )
}
