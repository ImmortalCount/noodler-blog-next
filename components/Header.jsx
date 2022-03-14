import Link from 'next/link'

export default function Header() {
  return (
    <header>
        <div className='header_wrapper'>
        <Link href='/' passHref>
        <h2 className='link'>Noodler</h2>
          </Link>
        <Link href='https://play.noodler.io/' target="_blank" rel="noopener noreferrer" passHref>
        <h2 className='link'>Play</h2>
          </Link>
        <Link href='/shop' passHref>
        <h2 className='link'>Shop</h2>
          </Link>
        <Link href='/blog' passHref>
        <h2 className='link'>Blog</h2>
          </Link>
        <Link href='/docs' passHref>
        <h2 className='link'>Docs</h2>
        </Link>
        </div>
    </header>
  )
}
