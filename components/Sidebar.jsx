import React from 'react'
import Link from 'next/link'

export default function Sidebar({active}) {
  return (
    <div className='sidebar'>
      <Link href='/'>
          <a className='btn btn-back'>{`<--`}</a>
      </Link>
      <h2>Noodler Docs</h2>
      <Link href='/docs' passHref>
      <h3 className='link'>Overview</h3>
      </Link>
      {active === 'overview' && 
      <ul>
        <li>What is Noodler</li>
        <li>Using Noodler</li>
        </ul>}
      <Link href='/docs/musical_components' passHref>
      <h3 className='link'>Musical Components</h3>
      </Link>
      {active === 'musical_components' && 
      <ul>  
        {/* <li>Scale</li>
        <li>Chord</li>
        <li>Pattern</li>
        <li>Rhythm</li>
        <li>Chord</li>
        <li>Module</li>
        <li>Song</li> */}
        </ul>}
        <Link href='/docs/navbar' passHref>
        <h3 className='link'>Navbar</h3>
        </Link>
        {active === 'navbar' && <ul>
          {/* <li>Login</li>
          <li>Register</li> */}
        </ul>}
        <Link href='/docs/instrument_display' passHref>
        <h3 className='link'>Instrument Display</h3>
        </Link>
      {active === 'instrument_display' && 
      <ul>
        <li>Options</li>
        <li>Board</li>
        <li>Player Controls</li>
      </ul>}
      <Link href='/docs/center_bar' passHref>
        <h3 className='link'>Center Bar</h3>
        </Link>
      {active === 'center_bar' && <ul>
        <li>Toggle Visiblity</li>
        <li>Add/Remove Instruments</li>
      </ul>}
      <Link href='/docs/explorer' passHref>
        <h3 className='link'>Explorer</h3>
        </Link>
      <Link href='/docs/palette' passHref>
        <h3 className='link'>Palette</h3>
        </Link>
      <Link href='/docs/lab' passHref>
        <h3 className='link'>Lab</h3>
        </Link>
      <Link href='/docs/scale_lab' passHref>
        <h3 className='link'>Scale Lab</h3>
        </Link>
      {active === 'scale_lab' && <ul>
        <li>Controls</li>
        <li>Display</li>
      </ul>}
      <Link href='/docs/chord_lab' passHref>
        <h3 className='link'>Chord Lab</h3>
      </Link>
      {active === 'chord_lab' && <ul>
        <li>Controls</li>
        <li>Display</li>
      </ul>}
      <Link href='/docs/pattern_lab' passHref>
        <h3 className='link'>Pattern Lab</h3>
      </Link>
      {active === 'pattern_lab' && <ul>
        <li>Controls</li>
        <li>Display</li>
      </ul>}
      <Link href='/docs/rhythm_lab' passHref>
        <h3>Rhythm Lab</h3>
      </Link>
      {active === 'rhythm_lab' && <ul>
        <li>Controls</li>
        <li>Display</li>
      </ul>}
      <Link href='/docs/module_lab' passHref>
        <h3 className='link'>Module_lab</h3>
      </Link>
      <Link href='/docs/player' passHref>
        <h3 className='link'>Player</h3>
      </Link>
      {active === 'player' && <ul>
        <li>Controls</li>
        <li>Display</li>
      </ul>}
      </div>
  )
}
