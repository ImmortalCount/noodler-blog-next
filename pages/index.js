/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import Head from 'next/head'
import React from 'react'
import Link from 'next/link'
import matter from 'gray-matter'
import {marked} from 'marked'
import fs from 'fs'
import path from 'path'

export default function index({frontmatter: {title, excerpt, cover_image}, content}) {
  return (
    <>
        <Head>
        <title>Noodler</title>
        <link rel="icon" href="/noodler_icon.svg" />
        </Head>
          <div className='home_page_element home_page_intro'>
           <div className='home_page_element_left'>
             <div className='home_page_element_left_content'>
             <h2>
              Noodler is a free lightweight online DAW for creating and sharing pieces of musical information.
            </h2>
            <div>
              With Noodler you can:
              <ul>
              <li>Quickly create chord progressions</li>
              <li>Display scales and chord tones that you can use over those chord progressions</li>
              <li>Create patterns and use them over any chord</li>
              <li>Create songs and share them with your friends</li>
              <li>Explore every scale in existence and derive chords and riffs from them</li>
              <li>Customize your Instrument Display</li>
              <li>Export Tabs (coming soon)</li>
              <li>Export mp3 (coming soon)</li>
              </ul>
            </div>
             </div>
           </div>
           <div className='home_page_element_right'>
            <div className='home_element_play'>
            <a href='https://play.noodler.io/'>
            <h2 className='post-title'>Noodler App</h2>
              <div>
              <img className='image' src="/images/docs/Noodler Full.png" alt="" style={{width:'400px', marginTop: '10px'}} />
              </div>
            </a>
            <a href='https://play.noodler.io/' className='btn' style={{display:'default'}}>Play Now</a>
            </div>
            <div className='home_element_demo'>
              <a target="_blank" rel="noopener noreferrer" href='https://www.youtube.com/'>
              {/* <div className='link' >Demo Video</div> */}
              </a>
            </div>
            </div>
          </div>
          <div className='home_page_element home_page_shop'>
            <div className='home_page_element_left'>
            <h2>
              Shop Noodler
            </h2>
            <div>
              Check out our:
              <ul>
              <li>Customizable Posters</li>
              <li>Practice Materials</li>
              <li>T-Shirts</li>
              <li>Mugs</li>
              <li>...And More</li>
              </ul>
            </div>
            </div>
            <div className='home_page_element_right'>
              <Link href='/shop' passHref>
              <div className='link'>
              <div className='home_page_featured_item'>
                <h2 className='post-title'>Cat Shredding Guitar</h2>
                <img src='/images/shop/Noodler Shirt Demo.png' alt='' style={{width:'400px'}}/>
                <div className='post-body'>
                    <div dangerouslySetInnerHTML={{__html: marked('This cat can shred')}}></div>
                </div>
              </div>
              <div>
                <a className='btn'>Coming soon</a>
              </div>
                </div>
              </Link>
            </div>
          </div>
          <div className='home_page_element home_page_blog'>
          <div className='home_page_element_left'>
            <h2>
              Noodler Blog
            </h2>
            <div>
              For:
              <ul>
              <li>development updates</li>
              <li>tip and tricks</li>
              <li>noodler uses</li>
              <li>playing tips</li>
              </ul>
            </div>
            </div>
            <div className='home_page_element_right'>
              <Link href='/blog' passHref>
              <div className='link'>
              <div className='home_page_featured_blog'>
                <h2 className='post-title'>{title}</h2>
                <img src={cover_image} alt='' style={{width:'400px'}}/>
                <div className='post-body'>
                    <div dangerouslySetInnerHTML={{__html: marked(excerpt)}}></div>
                </div>
              </div>
                <div>
                <a className='btn'>Read More</a>
              </div>
              </div>
              </Link>
            </div>
          </div>
          <div className='home_page_element home_page_docs'>
          <div className='home_page_element_left'>
            <h2>
              Noodler Docs
            </h2>
            <div>
              For:
              <ul>
              <li>How to use Noodler</li>
              <li>FAQS</li>
              </ul>
            </div>
            </div>
            <div className='home_page_element_right'>
              <Link href='/docs' passHref>
              <div className='link'>
              <div className='home_page_docs'>
                <h2 className='post-title'>Noodler Docs</h2>
                <img src='/images/Noodler Docs.png' alt='' style={{width:'300px'}}/>
                <div className='post-body'>
                    <div>learn more about Noodler</div>
                </div>
              </div>
                <div>
                <a className='btn'>Read More</a>
              </div>
              </div>
              </Link>
            </div>
          </div>
    </>

  )
}

export async function getStaticProps(){
  //Get latest blog post
  const markdownWithMeta = fs.readFileSync(path.join('posts', 'noodler-first-post' + '.md'), 'utf-8')

  const {data: frontmatter, content} = matter(markdownWithMeta)

  return {
      props: {
          frontmatter,
          content,
      },
  }
}
