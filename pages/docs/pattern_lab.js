/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Sidebar from '../../components/Sidebar'

export default function pattern_lab() {
  return (
    <div>
    <div className='doc_wrapper'>
      <Sidebar active={'pattern_lab'} />
      <div>
      <div>
      <h1>Pattern Lab </h1>
            <img className='image' src="/images/docs/Pattern Lab Edit On.png" alt="" style={{width: '50%'}} />
            <h2>Pattern Lab Controls</h2>
                <h3> Play</h3>
                    <div>Play the pattern</div>
                <h3> Generate</h3>
                    <div>Create a new pattern (only random patterns as of now)</div>
                <h3> Generate Dropdown</h3>
                    <h4> Length of pattern</h4>
                        <div>Adjust length of pattern in notes</div>
                <h3> Toggle Edit</h3>
                    <div>Toggle between off, Edit: on for single note editing, and Edit: all for editing all notes at once</div>
                <h3> Toggle Manipulate</h3>
                    <div>Toggle between pattern manipulation being turned on and off. Manipulate:On shows the manipulation controls which are advanced editing controls for the entire pattern</div>
                <h3> Options</h3>
                    <h3> View</h3>
                        <div>Toggle between View: Notes and View: Pattern</div>
                    <h3> Toggle View</h3>
                        <div>Toggle between seeing the pattern as notes played (View: Notes)  or their position in relation to the master scale (View: Pattern) </div>
                    <h3> Play on Keypress</h3>
                        <div>When on: Allows the use of the keyboard to input notes manually</div>
                    <img className='image' src="/QWERTY_keyboard_diagram.svg.png" alt="" style={{width: '50%'}}/>
                    <h3> Scale Lock</h3>
                        <div>Only applicable when Play on Keypress is On. With Scale Lock Enabled, you can only play notes that are within the selected scale</div>
                    <div> Play Note on Click</div>
                        <div>When on, notes in the pattern lab will be played on clicking them</div>
                <h3> Desc</h3>
                    <div>Create a description of the pattern that you are creating. The description should be something like 'Arp Up' or 'Play over a minor ii chord'.</div>
                <h3> Export</h3>
                    <div>Export the pattern</div>
                <h3> Export Options</h3>
                    <div>Choose where to export your pattern</div>
            <h2>Edit Controls</h2>
                <div>Like the edit mode in the chord lab section, use the buttons to change the action of each arrow. </div>
                    <h3>Octave</h3>
                        <div>Change note by octave</div>
                    <h3>Scale</h3>
                        <div>Change note by scale degree (determined by scale lab)</div>
                    <h3>Chromatic</h3>
                        <div>change note chromatically</div>
                    <h3>Insert</h3>
                        <div>clone the note by inserting it</div>
                    <h3>Delete</h3>
                        <div>Delete the note</div> 
            <h2>Edit All Controls</h2>
                <img className='image' src="/images/docs/Pattern Lab Edit All.png" alt="" style={{width: '50%'}}/>
                    <div>Changes all notes at once. Toggle between modes and then use the Up Down buttons to change all notes</div>
                    <h3>Octave</h3>
                        <div>Change all notes by octave</div>
                    <h3>Scale</h3>
                        <div>Change all notes by scale (determined by scale lab)</div>
                    <h3>Chromatic</h3>
                        <div>Change all notes chromatically</div>
                    <h3>Delete</h3>
                        <div>delete all notes (!!!)</div>
            <h2>Manipulate Controls</h2>
            <img className='image' src="/images/docs/Pattern Lab Manipulate.png" alt="" style={{width: '50%'}}/>
                    <div>Alter the pattern on a large scale</div>
                    <h3> Shuffle</h3>
                        <div>randomly arrange notes</div>
                    <div> Reverse Melody</div>
                        <div>Reverse the melody</div>
                    <div> Invert Melody</div>
                        <div>Inverts the melody by pivoting on the chromatic axis</div>
                    <div> Fit Pattern To Scale</div>
                        <div>Updates the pattern to fit the scale (if scale was changed without updating the pattern first)</div>
            <h2>Pattern Display</h2>
                <h3>Notes</h3>
                    <div>Displays each individual note on the pattern, notes can be dragged and dropped</div>
                <h3>Note Arrows</h3>
                    <div>When edit is on (but not Edit:all or manipulate), you can use these arrows in order to perform actions on the notes in a similar way as the chord lab</div>
                <h3>Trash Can</h3>
                    <div>When edit is on (but not Edit:all or manipulate), you can click this can on a note to delete it</div>
            <h2>Note Amount</h2>
                <div>Displays the amount of notes there are in the pattern</div>
            <h2>Pattern Name</h2>
                <div>Simply click on the pattern name to rename it</div>
            
      </div>

      </div>
  </div>

  </div>
  )
}
