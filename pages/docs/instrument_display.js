/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Sidebar from '../../components/Sidebar'

export default function instrument_display() {
  return (
    <div>
    <div className='doc_wrapper'>
      <Sidebar active={'instrument_display'} />
      <div>
      <div>
      <h1>Instrument Display</h1>
            <img className='image' src="/images/docs/Instrument Display Full.png" alt="" />
                <h2> Instrument Options</h2>
                <div>Click on Gear icon next to the instrument name to show the options for that instrument </div>
                    <h3> Strings</h3>
                        <div> Decreasing the amount of strings will remove the lowest string currently displayed. Increasing the amount of strings will cause a string to be added a perfect fourth lower than the current lowest string. There is no hard limit on the amount of strings that an instrument can support, only that no string can be tuned lower than C0. </div>
                    <h3> Instrument Type</h3>
                        <div>Changing the instrument type changes the sound of the instrument. When changing to/from a bass instrument, the display will also change.</div>
                    <h3>Tuning</h3>
                        <div>Changing the tuning can also change the amount of strings on an instrument. Custom tunings will be available in the next update.</div>
                    <h3>Frets</h3>
                        <div>Change the amount of frets on the instrument. The maximum amount of frets is 36, and the minimum is 1. </div>
                <h2>Instrument Name</h2>
                    <div>Click on the name in order to change it</div>
                <h2>Instrument Board Display</h2>
                    <div>Displays the notes that are sent by the Player (add link to player)</div>
                <h2>Media Control Symbols</h2>
                <div>From left to right</div>
                    <h3>Stop</h3>
                        <div> Stops the playback and sets playback time to 0 (the beginning of the track)</div>
                    <h3>Pause</h3>
                        <div>pauses the playback - position remains the same</div>
                    <h3>Play</h3>
                        <div> plays modules from the player</div>
                    <h3>Loop</h3>
                        <div>Toggles loop on/off for the entire song</div>
                    <h3>Previous Module (previous track symbol)</h3>
                        <div>Sets playback time to beginning of the current module</div>
                    <h3>Current module (eject symbol)</h3>
                        <div> sets playback time to the beginning of the current module</div>
                    <h3>Next Module (next track symbol)</h3>
                        <div>sets playback time to the beginning of the next module</div>
                    <h3>Lower position (down arrow)</h3>
                        <div>changes the position of the notes to be lower on the fretboard (i.e. closer to the nut)</div>
                    <h3>Higher position (up arrow)</h3>
                        <div> changes the position of the notes to be higher on the fretboard (i.e. closer to the bridge)</div>
                    <h3>All positions</h3>
                        <div>Show all positions of the notes or chord</div>
                <div>*Notes on the instrument display</div>
                    <div>Any instrument can play any note. Whether that note is displayed depends on the range of the instrument (i.e., the number of frets, tuning, and strings on your instrument). You can hide instruments by clicking the name of that instrument on the center bar (see center bar for more details). You can mute an instrument through the player section (see player for more details)</div>
      </div>
      </div>
  </div>

  </div>
  )
}
