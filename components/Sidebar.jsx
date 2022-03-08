import React from 'react'
import Link from 'next/link'

export default function Sidebar({active}) {
  return (
    <div className='sidebar'>

      <Link href='/docs' passHref>
      <h3>Overview</h3>
      </Link>
      {active === 'overview' && 
      <ul>
        <li>What is Noodler</li>
        <li>Using Noodler</li>
        </ul>}
      <Link href='/docs/musical_components' passHref>
      <h3>Musical Components</h3>
      </Link>
      {active === 'musical_components' && 
      <ul>  
        <li>Scale</li>
        <li>Chord</li>
        <li>Pattern</li>
        <li>Rhythm</li>
        <li>Chord</li>
        <li>Module</li>
        <li>Song</li>
        </ul>}
        <Link href='/docs/navbar' passHref>
        <h3>Navbar</h3>
        </Link>
        {active === 'navbar' && <ul>
          <li>Login</li>
          <li>Register</li>
        </ul>}
        <Link href='/docs/instrument_display' passHref>
        <h3>Instrument Display</h3>
        </Link>
      {active === 'instrument_display' && 
      <ul>
        <li>Options</li>
        <li>Board</li>
        <li>Player Controls</li>
      </ul>}
      <Link href='/docs/center_bar' passHref>
        <h3>Center Bar</h3>
        </Link>
      {active === 'center_bar' && <ul>
        <li>Toggle Visiblity</li>
        <li>Add/Remove Instruments</li>
      </ul>}
      <Link href='/docs/explorer' passHref>
        <h3>Explorer</h3>
        </Link>
      <Link href='/docs/palette' passHref>
        <h3>Palette</h3>
        </Link>
      <Link href='/docs/lab' passHref>
        <h3>Lab</h3>
        </Link>
      <Link href='/docs/scale_lab' passHref>
        <h3>Scale Lab</h3>
        </Link>
      {active === 'scale_lab' && <ul>
        <li>Controls</li>
        <li>Display</li>
      </ul>}
      <Link href='chord_lab' passHref>
        <h3>Chord Lab</h3>
      </Link>
      {active === 'chord_lab' && <ul>
        <li>Controls</li>
        <li>Display</li>
      </ul>}
      <Link href='pattern_lab' passHref>
        <h3>Pattern Lab</h3>
      </Link>
      {active === 'pattern_lab' && <ul>
        <li>Controls</li>
        <li>Display</li>
      </ul>}
      <Link href='rhythm_lab' passHref>
        <h3>Pattern Lab</h3>
      </Link>
      {active === 'rhythm_lab' && <ul>
        <li>Controls</li>
        <li>Display</li>
      </ul>}
      <Link href='module_lab' passHref>
        <h3>Module_lab</h3>
      </Link>
      <Link href='player' passHref>
        <h3>Player</h3>
      </Link>
      {active === 'player' && <ul>
        <li>Controls</li>
        <li>Display</li>
      </ul>}
      </div>
  )
}
