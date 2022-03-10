/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Sidebar from '../../components/Sidebar'

export default function explorer() {
  return (
    <div>
      <div className='doc_wrapper'>
        <Sidebar active={'explorer'} />
       <div>
       <h1>Explorer</h1>
            <img className='image' src="/images/docs/Explorer.png" alt=""  style={{width: '50%'}}/>
                <div>Find patterns, rhythms, chords, scales, modules, and songs to noodle with.</div>
                <h2> Search Bar</h2>
                    <div>Search by author name, data name, or description</div>
                <h2> Pool Selector</h2>
                <div>If you're not logged in, only the global pool of data will be available to you</div>
                    <div>Global: See all pieces of data uploaded to the global pool</div>
                    <div>Local: See only your private pieces of data</div>
                    <div>Other: Custom pools will be available soon</div>
                <h2> Type Selector</h2>
                    <div>Chord</div>
                    <div>Rhythm</div>
                    <div>Scale</div>
                    <div>Module</div>
                    <div>Song</div>
                <h2> Search Display</h2>
                    <div>Displays the results of the parameters you have selected</div>
                    <div>All results in the search display can be dragged and dropped anywhere else</div>
       </div>
    </div>

    </div>
  )
}
