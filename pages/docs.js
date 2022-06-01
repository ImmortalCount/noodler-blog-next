/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Sidebar from '../components/Sidebar'
import Head from 'next/head'

export default function docs() {
  return (
    <>      
      <Head>
        <title>Noodler Docs</title>
        <link rel="icon" href="/NoodlerLogo.png" />
      </Head>
            <div className='doc_wrapper'>
            <Sidebar active={'overview'}/>
            <div>
            <h1>Overview</h1>
            <h2>What is Noodler?</h2>
            <p>Noodler is lighweight online daw specifically designed to for guitarists and bassists to create and share musical ideas. </p>
            <h2>Using Noodler</h2>
            <p>Noodler is based on a drag and drop design. Almost every part of the interface can be dragged and dropped into another area. 
              To get started, you can use the explorer to search for a scale, chord, rhythm, pattern, or module. 
              When using the explorer, you can choose between different pools. 
              For now there is 
              -the global pool, which is public and open to everyone
              -the local pool, which is your private pool (for registered users only)
              Once you have your component, (that is not a song) you can 
              -drag it into the LAB to hear it, analyze it, and edit it 
              -drag it into the PALETTE to store it for later
              -drag it into the PLAYER in order to change an element of your song
             </p>
             <img className='image' src="/images/docs/Noodler Full.png" alt="" />
            </div>
            </div>

    </>

  )
}
