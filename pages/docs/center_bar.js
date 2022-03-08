/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Sidebar from '../../components/Sidebar'

export default function center_bar() {
  return (
    <div>
    <div className='doc_wrapper'>
        <Sidebar active={'center_bar'} />
        <div>
        <h1>3.Center Bar</h1>
            <img className='image' src="/images/docs/Center Bar.png" alt="" />
                <div>The center bar is mainly for toggling visibility between components</div>
                <div>From left to right</div>
                    <h2>3.1 Explorer Display</h2>
                        <div>Toggles the explorer, which is used to find rhythms, patterns, songs, etc.</div>
                    <h2>3.2 Lab Display</h2>
                        <div>Toggles the Lab, which is used to create and analyze, rhythms, patterns, scales, chords, etc...</div>
                    <h2>3.3 Palette Display</h2>
                        <div>Toggles the Palette, which is used for temporary storage</div>
                    <h2>3.4 Player Display</h2>
                        <div>Toggles the Player, which is used for creating songs and changing playback options</div>
                    <h2>3.5 Instrument Display</h2>
                        <div>Clicking on any of the instrument names on right side of the bar will toggle their visability</div>
                    <h2>3.6 Add/Remove Instrument</h2>
            <div>Add or Remove an instrument. New instruments will be creating will be Acoustic Guitar Nylon, 6 strings, with EADGBE tuning (custom default options coming soon).</div>
        </div>
    </div>
    </div>
  )
}
