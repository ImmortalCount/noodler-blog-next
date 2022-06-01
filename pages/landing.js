import Head from 'next/head'
import React from 'react'
import MailchimpFormContainer from '../components/MailchimpFormContainer'
import YoutubeEmbed from '../components/YoutubeEmbed'

export default function landing() {
  return (
      <>
        <title>What Is Noodler?</title>
        <link rel="icon" href="/NoodlerLogo.png" />
      <div>
           <div>Noodler is the video</div>
           <div className='demo'>
               <YoutubeEmbed embedId={'ZeTlVhdCGec'}/>
           </div>
           <div>Noodler is a free online DAW where you can create and share musical ideas</div>
           
           <div>
               Noodler is a colloborative project and database, where musicians give and take knowledge from the global noodler database.
               Instead of other programs boxing you in, Noodler allows you to give and take riffs, rhythmid patterns, songs, and much more...
           </div>
           <div>What Can I use Noodler For?</div>
           <ul>
               <li>master your fretboard, no matter how many strings or what tuning you use*</li>
               <li>learn to navigate chord changes, no matter how crazy</li>
               <li>explore nested rhythms and odd time signatures</li>
               <li>explore the sounds of different scales over chord progressions</li>
               <li>learn how to solo with motivic elements</li>
               <li>turn your song idea into tabs</li>
               <li>download chord progressions, scales, rhythms, and songs as midi files to use in your DAW</li>
               <li>download songs, scales, rhythms, and riffs uploaded by other users</li>
               <li>share your own songs, scales, rhythms, and riffs with other users or store them to your private collection</li>
           </ul>
           <div>Noodler Features</div>
           <h3>Scales</h3>
           <div>Explore all 2048 possible scales</div>
           <div>Create diagrams for every possible tuning* </div>
           <div>Downlod every scale as a midi </div>
            <h3>Chords</h3>
            <div>Create Chords and Chord Progressions from every possible scale</div>
            <div>Explore all possible positions </div>
           <div> </div>
           <div>This is the landing page</div>
           <div>This is the landing page</div>
           <div>This is the landing page</div>
           <MailchimpFormContainer/>
      </div>
      </>

  )
}
