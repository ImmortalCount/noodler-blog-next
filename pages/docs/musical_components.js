/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import Sidebar from '../../components/Sidebar'

export default function musical_components() {
  return (
    <>
            <div className='doc_wrapper'>
            <Sidebar active={'musical_components'}/>
            <div>
            <h1> Musical Components </h1>
            <img className='image' src="/images/docs/Module.png" alt="" style={{width: '20%'}} />
             <h2>Noodler's Main functionality comes from creating, combining, and sharing musical components.  </h2>
             <h2>You can think of musical components like the elemental building blocks of musical phrases</h2>
                    <h2> Scale</h2>
                    <div>A scale is a collection of notes. For example C Major is C, D, E, F, G, A, B. Scales can be used to create chords and melodies.</div>
                    <h2> Chord</h2>
                    <div>A chord is made from a subsection of notes from a scale that are played together. For example, a chord of C major consists of C, E, and G which are played at the same time. Chords form the bedrock of all modern music.</div>
                    <h2> Pattern</h2>
                    <div>The Patterns in Noodler are Instructions for the Scale, and function mostly like arpeggios in other programs. There are not static, and mutate depending on the scale that they are coupled with. 
                      Patterns start at 0 and can include negative numbers. 
                      For instance, a pattern of 0, 2, 4 will play the first, third, and fifth note of a scale. When used in conjunction with a C major scale, the resulting melody produced would be C3, E3, G3. 
                      The 0 position of a pattern is always the first note of the parent scale in the third octave. 
                      For instance, a 0 pattern position coupled with a G major scale would produce a G3 note, while a -7 would produce a G2 note, a -14 would produce a G1 note, and a -21 would produce a G0 note.
                      Consequently a pattern position of 7 would produce a G4 note, while a 14 pattern position will produce a G5, etc...
                      Patterns are not limited to notes that are contained within the scale, and can include non-scale notes. 
                      Non-scale notes are represented by an asterisk in front of their number, such as *3.
                      Non-scale notes represent the distance from the root in the third octave of the parent scale (i.e. C3) to the current note in using chromatic steps.
                      For instance, when coupled with any scale that begins with a C note, *3 would produce a D#, as D# is three chromatic steps away from the root. 
                      **Coming in V 2.0: Static patterns, which ignore the scale data completely and just represent a set of notes.
    
                    </div>
                    <h2> Rhythm</h2>
                    <div>The rhythm in Noodler determines at what time the pattern note is played
                      Rhythms in Noodler are in a block arrangement, with each block representing 1 beat. If you place 3 notes inside of one block, each rhythmic note would have a duration of 1/3 of a beat.
                      You can treat rhythmic notes like 'blocks' and divide those notes into smaller pieces as well. Noodler supports nesting of 3 layers. I.e., you can put a triplet inside of the first beat of a triplet, inside of the first beat of that triplet, and so forth. 
                      In noodler, O represents a rhythm note that is played, while X represents a silent note. 
                      When patterns and rhythms are coupled together, if the rhythm has more notes than the pattern, leftover notes will be silent. If a rhythm has less notes than a pattern, that pattern will be trucated.
                    </div>
                    <h2> Module</h2>
                    <div>A module is a supercomponent that contains all of the subcomponents. 
                      It combines the pattern, rhythm, scale, and chord information into one piece of musical data.
                      The very top of the module is the name of that module. It can give data about what kind of module it is.
                      The next position is the roman numeral data, which is detemrined by the type of chord in the chord position and the key.
                      Below that is the scale data.
                      Then pattern data.
                      The rhythm data.
                      Then the Key (which does not determine major or minor, just the tonic)
                      Then at the bottom is the length of the pattern in beats.
                      All parts of the module can be transferred into other parts of other modules.
                      When in the Player during Melody Mode:
                      -The module will produce a melody by combining the scale, pattern, and rhythm components.
                      When in the Player during Chord Mode:
                      -The module will play the chord in a rhythmic fashion by combing the chord, and rhythm components.
                      </div>
                <h2> Song</h2>
                    <div>A song is a collection of module and instrument data.
                      Songs can only be transferred to and from the Explorer and Player.
                    </div>
            </div>
            </div>

    </>

  )
}
