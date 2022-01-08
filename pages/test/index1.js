import fs from 'fs'
import path from 'path'
import frontMatter from 'front-matter'

export default function Home ({ posts }) {
  return (
    <div >
      <main >
        <ul>
          {
            posts.map((post,index) => (
              <li key={index}>
                <span >
                  <a >{post.meta.title}</a>
                </span>
                <span >{post.meta.date}</span>
             </li>
            ))
          }
        </ul>
      </main>
    </div>
  )
}

const postsDir = 'posts';
export async function getStaticProps () {

  const postsDirectory = path.resolve(process.cwd(), 'posts')
  const posts = fs.readdirSync(postsDirectory).filter(name => {
    return /\.md$/.test(path.extname(name))
  }).map(name => {
    const post = fs.readFileSync(`${postsDirectory}/${name}`, 'utf8')
    let { attributes, body } = frontMatter(post)
    
    // 确保title存在
    if (Object.prototype.toString.call(attributes) !== '[object Object]') {
      attributes = { title: path.basename(name, path.extname(name)) }
    } else if (!attributes.title) {
      attributes.title = path.basename(name, path.extname(name))
    }

    return {
      meta: attributes,
      content: body
    }
  })

  return {
    props: {
      posts
    }
  }
}