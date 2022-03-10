/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Sidebar from '../../components/Sidebar'

export default function rhythm_lab() {
  return (
    <div>
    <div className='doc_wrapper'>
      <Sidebar active={'rhythm_lab'} />
      <div>
      <div>
      <h1> Rhythm Lab</h1>
            <img className='image' src="/images/docs/Rhythm Lab Edit.png" alt="" style={{width: '50%'}}/>
                <div>What is a rhythm</div>
                    <div> A rhythm is the space in time in which the notes are played. In the rhythm lab, X's are silent while O's are played. Each 'block' of notes represents 1 beat. The blocks remain the same length, no matter how many notes insert. For instance, if you put 3 notes into a block, those three notes in the length of one beat as 'triplets'. Rhythm lab allows for nested tuplets up to four levels deep. I.E. you can put a triplets.</div>
                <h2> Rhythm Lab Options</h2>
                    <h3> Play</h3>
                        <div>Play the rhythm</div>
                    <h3> Generate</h3>
                        <div>Generate a random rhythm</div>
                    <h3> Edit</h3> 
                        <div>Toggle the edit option controls</div>

                    <h3> Stretch/Compress</h3>
                        <div> Toggle Stretch/Compress controls</div>
                    <div> Desc</div>
                        <div>Create a description for your rhythm. Try to include genre and feel: I.e. 'Caribbean rhythm in 9/8'</div>
                    <div> Export</div>
                        <div>Export the rhythm</div>
                    <div>Export Options</div>
                        <div>Choose which pool to export to</div>
                <h2>Rhythm Display</h2>
                    <div>Notes are grouped together by beats. Adding more notes to a group will increase the speed at which each note is played. I.e. 3 notes in a group create a triplet.</div>
                    <div>Notes marked O will sound, while notes marked X will be silent</div>
                    <h3>Length of Phrase in Beats</h3>
                    <div>Displays the length of the rhythmic phrase in beats</div>
                    <div>Beats are in quarter notes, and are determined by bpm. 1 beat/ quarter note at 60 bpm is 1 second long. 1 beat/ quarter note at 120 bpm is 0.5 seconds long</div>
                    <h3>Sounded Notes in Phrase</h3>
                    <div>Displays how many notes in the rhythm are sounded. If a rhythm has more sounded notes than the pattern fed into it, unused sounded notes will be silent.</div>
                    <div>If a pattern has more notes than the rhythm, the effect will be that the pattern will be cut short.</div>
      </div>

      </div>
  </div>

  </div>
  )
}
