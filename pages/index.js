import fs from 'fs'
import path from 'path'
import frontMatter from 'front-matter'
import ReactMarkdown from 'react-markdown'
import Image from 'next/image'
import * as dateformat from '../lib/dateformat';

export default function Home ({ posts }) {
  return (
  <div className="main-container">
      <div className="update"><label>更新时间</label>  2022年01月8日</div>
      <div className="items">
        <>
        <article className="resume-item person">
          <h1 className="title"> <i className="iconfont resumegeren"></i> 个人信息</h1>
          <div className="content">
            <div className="items">
              <ul>
                <li><span>姓名: </span>彭持辉 / LuckyPeng</li>
                <li><span>性别: </span>男</li>
                <li><span>年龄: </span>24</li>
                <li><span>学历: </span>专科</li>
                <li><span>职位: </span>软件工程师</li>
                <li><span>现居地: </span>广东</li>
                <li><span>邮件: </span>2015430746@qq.com</li>
                <li><span>电话: </span>18674802502</li>
                <li><span>Github: </span>https://github.com/pengchihui1</li>
              </ul>
            </div>
            <div className="items" style={{border:"1px solid rgba(102, 102, 102, 0.267);",width:'200px',height:'240px'}}>
              <Image src="/img/me.jpg" alt="me" width="200" height="240"  />
            </div>
          </div>
        </article>
          {posts.map((post,index) =>{
              return(
                <article className="resume-item" key={index}>
                  <h1 className="title"> <i className="iconfont resumebug"></i> {post.meta.title}</h1>
                  <div className="content"> 
                     {post.content && (<ReactMarkdown children={post.content}></ReactMarkdown>)}
                  </div>
                </article>
              )
          })
          }
        </>
      </div>
  </div>
  )
}

const postsDir = 'posts';
export async function getStaticProps () {
  const postsDirectory = path.isAbsolute(postsDir) ? postsDir : path.resolve(process.cwd(), postsDir)
  const posts = fs.readdirSync(postsDirectory).filter(name => {
    return /\.md$/.test(path.extname(name))
  }).sort((star,next)=>{
    // 按type的指定顺序排序
    var order = [
      "2022-01-08-about-me.md", 
      "2022-01-08-technology.md",
       "2022-01-08-project.md"
      ];
    return order.indexOf(star) - order.indexOf(next)
  }).map(name => {
    const post = fs.readFileSync(`${postsDirectory}/${name}`, 'utf8')
    const matter = frontMatter(post);
    let { attributes, body, bodyBegin,frontmatter } =matter
    // 日期格式化
    const date = matter.attributes.date;
    matter.attributes.date = date.toUTCString();
    matter.attributes.dateYMD = dateformat.ymd(date);
    matter.attributes.dateFriendly = dateformat.friendly(date);
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