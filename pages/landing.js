import Link from 'next/link'
import React, {useState} from 'react'
import MailChimpForm from '../components/MailChimpForm'
import YoutubeEmbed from '../components/YoutubeEmbed'

export default function landing() {
  return (
      <>
      <div className='landing'>
           <div className='demo'>
               <YoutubeEmbed embedId={'PntnIeZzyqk'}/>
           </div>
           <div className='landing_body'>
           <h1>Noodler is a free online DAW where you can create and share musical ideas and turn those ideas into tabs, midi, and audio</h1>
           <div className='landing_head'>With Noodler you can: </div>
           <ul className='landing_list'>
            <li className='landing_points'>Create songs, midi, and tabs</li>
            <li className='landing_points'>Customize tab positions</li>
            <li className='landing_points'> navigate chord changes with chord display and scale display</li>
             <li className='landing_points'>Store files in your personal account or share ideas with the Noodler community</li>
             <li className='landing_points'>Explore every possible scale </li>
             <li className='landing_points'>Create chord progressions from any scale, using any voicing</li>
             <li className='landing_points'>Create arpeggios and patterns to adapt with chord changes</li>
             <li className='landing_points'>Create nested rhythms and rhythms in odd time</li>
             <li className='landing_points'>Use the {`'Map`} function to turn chords into songs quickly</li>
           </ul>

           <div className='landing_head'>Noodler is For </div>
           <ul className='landing_list'>
            <li className='landing_points'>Self taught guitarists and bassists who want to learn the fretboard better</li>
            <li className='landing_points'>Music Instructors who never want to run out of material</li>
            <li className='landing_points'>Songwriters want to generate ideas fast</li>
             <li className='landing_points'>Music nerds who want to catalogue every possible chord, rhythm, and scale</li>
             <li className='landing_points'>People who like free stuff</li>
           </ul>

           <div className='landing_head'>These features are coming to Noodler 0.3 </div>
           <ul className='landing_list'>
            <li className='landing_points'>Private {`'pools'`} to share your music with a select group of people</li>
            <li className='landing_points'>Chord progression modules, which will make it even easier to work with chord progresisons</li>
            <li className='landing_points'>Audio uploads</li>
             <li className='landing_points'>Smart position lock, which will allow for 3-note per string, 2-note-per string etc tabs to be generated more accurately </li>
             <li className='landing_points'>Updated full song tab editor</li>
             <li className='landing_points'>And more...</li>
           </ul>

           <div className='landing_head'>Sign up to join the Noodler community and stay updated!  </div>
          <MailChimpForm/>
          <h2>By signing up today, you guarantee that your personal Noodler account is free for life!</h2>
          <div className='wrapper'>
          <h2>Happy Noodling</h2>
          </div>
          <div className='wrapper'>
          <h2>dev@noodler.io</h2>
          </div>

          <div className='wrapper bottom_link'>
          <Link href='/'>
            <div className='landing_head'>
            Noodler Main Page
            </div>
          </Link>
          </div>
          <div className='wrapper'>
          <Link href='http://playnoodler.io/'>
            <div className='landing_head'>
            Noodler App Page (desktop recommended)
            </div>
          </Link>
            </div>

        </div>
      </div>
      </>

  )
}
