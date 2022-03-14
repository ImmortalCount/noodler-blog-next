import Head from 'next/head'
import path from 'path'
import fs from 'fs'
import matter from 'gray-matter'
import Post from '../components/Post'
import {sortByDate} from '../utils'

export default function Home({posts}) {
  return (
    <div>
      <Head>
        <title>Noodler Dev Blog</title>
        <link rel="icon" href="/noodler_icon.svg" />

      </Head>
      <div className='blog_wrapper'>
      <div className='posts'>
        {posts.map((post, index) => (
          <Post key={index} post={post}/>
        ))}
      </div>
      </div>
    </div>
  )
}

export async function getStaticProps(){
  //Get files from the posts dir
  const files = fs.readdirSync(path.join('posts'))

  // Get slug and frontmatter from posts
  const posts = files.map((filename) => {
    // Create slug
    const slug = filename.replace('.md', '')

    // Get frontmatter
    const markdownWithMeta = fs.readFileSync(
      path.join('posts', filename),
      'utf-8'
    )

    const { data: frontmatter } = matter(markdownWithMeta)
      
    return {
      slug,
      frontmatter,
    }
  })

  //get slug and frontmatter from posts
  return {
    props: {
      posts: posts.sort(sortByDate),
    }
  }
}