/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Sidebar from '../../components/Sidebar'

export default function module_lab() {
  return (
    <div>
    <div className='doc_wrapper'>
      <Sidebar active={'module_lab'} />
      <div>
      <div>
      <h1>Module Lab</h1>
            <img className='image' src="/images/docs/Module Lab.png" alt="" style={{width: '50%'}} />
                <div>What is a module?</div>
                    <div>A Module is a unit of musical information that contains a scale, a chord, a pattern, a rhythm, and a key.</div>
                    <div>Modules are the building blocks of Songs which can be played in the Player.</div>
                <h2>Module Lab Options</h2>
                    <h3>Play</h3>
                        <div>Plays the module</div>
                    <h3>Key</h3>
                        <div>Changes the key of the module. Useful for establishing musical context, i.e. Is this chord being used to change into another key or is it a borrowed chord?</div>
                    <h3>Desc</h3>
                        <div>Creates a description of the module</div>
                    <h3>Export</h3>
                        <div>Export the module</div>
                    <h3>Export Options</h3>
                        <div>Choose where the module is exported</div>
                <h2>Module Display</h2>
                    <h3>Module Display Name</h3>
                        <div>Displays the name of the module</div>
                    <h3>Roman Numeral Position</h3>
                        <div>Displays the roman numeral position of the chord</div>
                        <div>The roman numeral position of chord is determined by the type of chord displayed and the key.</div>
                    <h3>Chord Name</h3>
                        <div>Displays the chord name</div>
                    <h3>Pattern Name</h3>
                        <div>Displays the pattern name</div>
                    <h3>Rhythm Name</h3>
                        <div>Displays the rhythm name</div>
                    <h3>Key Name</h3>
                        <div>Displays the key</div>
                    <h3>Beat Length</h3>
                        <div>The beat length is determined by length of the rhythm pattern</div>
                <h2>Module Name</h2>
                    <div>Click to change name of the module</div>
                    <div>Dragging it will have the same effect as dragging the module</div>
      </div>

      </div>
  </div>

  </div>
  )
}
