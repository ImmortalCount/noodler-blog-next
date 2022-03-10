/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import Sidebar from '../../components/Sidebar'

export default function player() {
  return (
    <div>
    <div className='doc_wrapper'>
      <Sidebar active={'player'} />
      <div>
      <h1>Player</h1>
            <img className='image' src="/images/docs/Player.png" alt="" style={{width: '50%'}}/>
                <div>The player is where modules are played in sequential order in order to become songs. </div>
                <div>Modules, and musical data can all be dragged and dropped in order to rearrange parts on the fly.</div>
                <div>Player Options</div>
                    <div>Instrument Selector</div>
                        <div>Select which instrument the Player is focusing on. The instrument that is highlighted is the one that is being changed. </div>
                        <div>*Note when creating a new instrument, the new instrument is a clone of the first instrument, which is treated as 'Master Instrument'. </div>
                    <div>Mode Selector</div>
                        <div>Select which mode that instrument is going to be played as</div>
                            <div>Mode: Off</div>
                                <div>Instrument display and sound is off</div>
                            <div>Mode: Melody</div>
                                <div>The Scale, Pattern, and Rhythm Data are combined in order to play a melody</div>
                            <div>Mode: Chord</div>
                                <div>The Chord and Pattern Data are combined in order to play a chordal accompaniment</div>
                            <div>Mode: Display Scale</div>
                                <div>The Scale in each module is displayed and the sound is off</div>
                            <div>Mode: Display Chord Tones</div>
                                <div>The Chord Tones in each module are displayed and the sound is off</div>
                    <div>Edit</div>
                        <div>Display edit options</div>
                    <div>BPM</div>
                        <div>Change global bpm</div>
                    <div>Desc</div>
                        <div>Add a description for your song</div>
                    <div>Export</div>
                        <div>Export your song. Includes instrument data as well as player data</div>
                    <div>Export Options</div>
                        <div>Choose where to Export your song</div>
                    <div>Song Title</div>
                        <div>Click to change song title</div>
                    <div>Edit Options</div>
                            <div>Swap</div>
                                <div>Swap the starting music data or module with the ending piece or module.</div>
                            <div>Replace</div>
                                <div>replce the starting music data or module with the ending music data or module</div>
                            <div>Reorder</div>
                                <div>Only works with modules. Move the module in front of another module by shiting the remaining modules back in line</div>
                            <div>Fill</div>
                                <div>(Use with Caution) Replace all pieces of similar music data or modules with the selected music data or module. Fill either left or right.</div>
                            <div>Delete</div>
                                <div>(Use with Caution) Delete the selected module</div>
                            <div>Module--</div>
                                <div>Remove the last module in the sequence</div>
                            <div>Module++</div>
                                <div>Add another module to the sequence by cloning the last module</div>
                    <div>Player Display</div>
                        <div>Modules highlight as they are played, you </div>


      </div>
  </div>

  </div>
    
  )
}
