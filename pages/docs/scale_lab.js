/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import Sidebar from '../../components/Sidebar'

export default function scale_lab() {
  return (
    <div>
    <div className='doc_wrapper'>
      <Sidebar active={'scale_lab'} />
      <div>
      <h1>Scale Lab</h1>
                <img className='image' src="/images/docs/Scale Lab.png" alt="" style={{width: '50%'}} />
                    <div>
                        The Scale Lab is used to create and analyze every possible scale in the 12 tone system. 
                    </div>
                    <h2>Scale Controls</h2>
                    <div>From Left to Right</div>
                        <h3>#/b</h3>
                            <div>Toggles between flats and sharps displayed</div>
                        <h3>Root</h3>
                            <div>Set the Root of the Scale</div>
                        <h3>Play Button</h3>
                            <div>Plays the scale</div>
                        <h3>Play Options (down carrot next to play button)</h3>
                            <div>Toggle between forwards, backwards, and random play options</div>
                        <h3>Random Button</h3>
                            <div>Generate a random scale</div>
                        <h3>Random Options (down carrot next to random button)</h3>
                            <div>sets parameters for random generator</div>
                                <h4> Range</h4>
                                    <h5>-Only</h5>
                                        <div> Set the min and max to the same number - generated scales will have only that amount of notes</div>
                                    <h5>-Min</h5>
                                        <div> Set the minimum amount of notes that a randomly generated scale can have</div>
                                    <h5>-Max</h5>
                                        <div>Set the maximum amount of notes that a randomly generated scale can have</div>
                                    <h5>-Full</h5>
                                        <div>Set the minimum to 1 and the maximum to 12, allowing all possible scale lengths to be generated</div>
                                <h4> Randomness</h4>
                                    <h5> -Named scales</h5>
                                        <div> will return only scales that have names</div>
                                    <h5>-True Random</h5>
                                        <div>Will return any scale</div>
                                <h4>Init</h4>
                                    <div>set scale to major</div>
                        <h3> Mode</h3>
                            <div>Left and right arrows shift between different modes of the scale. I.E. {`->`} [A, B, C, D, E, F, G] {`->`} [G, A, B, C, D, E, F]</div>
                        <h3> Desc</h3>
                            <div>Shows the description for a scale. When importing a scale, description should contain hints on situations to use it in. Be sure to put a description on a scale if it is unusual and you plan on exporting it globally.Bad description: 'This scale is bussin LOL'Good description: 'This scale is bussin LOL. Use it over III7 chords, brosky.'</div>
                        <h3> Export Button</h3>
                            <div>Will export the scale to whatever you have set (warning, no feedback yet. It exports instantly, just trust me)</div>
                        <h3> Export Options</h3>
                            <div>Set where you want the scale to be exported to when you hit the Export Button</div>
                    <h2> Scale Name</h2>
                        <div>The scale number is a base 10 version of the scale in binary. Despite what the numbers may say, there are only 2048 possible scales. Scale number is useful when the scale has no name. **Note, the scale numbers in Noodler do not reflect the other scale numbering techniques found on other sites.</div>
                    <h2> Scale display</h2>
                        <div>Displays the scale</div>
                    <h2> Scale Switches</h2>
                        <div>Remove or add pitches to the scale. Only included to show off the 'binary nature' of scales</div>
      </div>
  </div>

  </div>
  )
}
