/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import Sidebar from '../../components/Sidebar'

export default function chord_lab() {
  return (
    <div>
    <div className='doc_wrapper'>
        <Sidebar active={'chord_lab'} />
        <div>
        <h1>Chord Lab</h1>
                <img className='image' src="/images/docs/Chord Lab Edit.png" alt="" style={{width: '50%'}} />
                <div>The chord lab is used for creating and editing chords. The first chord of the chord lab is the only one that gets exported when you click the export button or write a description, so keep that in mind. All chords in the chord lab are draggable</div>
                <h2>Chord Lab Controls</h2>
                    <h3>Play</h3>
                        <div>Plays the chord progression</div>
                    <h3> Generate</h3>
                        <div>Generates a chord progression based on the current scale in Scale Lab</div>
                    <h3> Generating Controls</h3>
                        <h4>-Character</h4>
                            <div>Determines the 'character' of the chord</div>
                        <h4> -Interval Size</h4>
                            <div>What intervals are used to create the chord</div>
                            <div>Set to 3, and you'll generate regular triads, set to  and you'll generate quartal chords, Etc...</div>
                        <h4>-# of notes</h4>
                            <div>How many notes will comprise a single chord? Set to 4, and you'll generate 7th chords, set to 5 an you'll get 9th chords, Etc...</div>
                    <h3>Edit Display</h3>
                        <div>Toggle on/off the edit controls</div>
                <h3>Desc</h3>
                    <div>Toggles on/off the description. Description in the chord lab is only meant for the first chord displayed. If you have a really strange chord, please name it and give suggestions on its usage and possible scales to play over it (if possible).</div>
                <h3>Export</h3>
                    <div>Export the chord (the chord in first position)</div>
                <h3>Export Options</h3>
                    <div>Determines where the chord will be exported</div>
                <h2> Edit Options</h2>
                        <div>Selecting the editing options will change the behavior of the arrows on the notes of the chord.</div>
                        <div>The arrows next to each note will only adjust that note, but the arrows at the bottom of the chord will adjust all of the notes within the chord. Chords can be moved in a drag or drop fashion. </div>
                    <h3>-Octave</h3>
                        <div>change note/chord by octave</div>
                    <h3>-Scale</h3>
                        <div>change note/chord by scale</div>
                    <h3>-Chromatic</h3>
                        <div>Change note/chord chromatically</div>
                    <h3>-Insert</h3>
                        <div>Make a clone of the note/chord</div>
                    <h3>-Delete</h3>
                        <div>Delete the note/chord</div>
                <h2>Chord Display</h2>
                        <h3>-Notes</h3>
                            <div>Notes are displayed stacked on top of each other. When chords are generated, higher notes appear on top.</div>
                        <h3>-Editing Arrows (notes)</h3>
                            <div>These Editing Arrows can only be seen when Edit is on. These arrows change the nature of the note</div>
                        <h3>-Trash (notes)</h3>
                            <div>Only when delete is selected, a trash icon will appear that, when selected will delete the note</div>
                        <h3>-Editing Arrows (chord)</h3>
                        <div>These Editing Arrows can only be seen when Edit is on. These arrows change the nature of the entire chord </div>
                        <h3>-Trash (chord)</h3>
                        <div>Only when delete is selected, this trash icon will appear to delete the entire chord.</div>
                <h2>Chord name</h2>
                    <div>Click on it to change the name of the chord</div>

        </div>
    </div>
    </div>
  )
}
