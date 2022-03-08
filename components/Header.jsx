import Link from 'next/link'

export default function Header() {
  return (
    <header>
        {/* <link rel="icon" href="/noodler_icon.svg" /> */}
        <div className='container'>
          <Link href='/' passHref>
            <h2>Noodler Play Docs Shop Blog</h2>
          </Link>
        </div>
    </header>
  )
}
