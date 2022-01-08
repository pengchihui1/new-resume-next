import fs from 'fs'
import path from 'path'
import frontMatter from 'front-matter';
import {remark} from 'remark';
import remarkhtml from 'remark-html';
import * as dateformat from './dateformat';

const fileExt = 'md';

// return absolute path to folder
export const absPath= (dir) =>{
  return (
    path.isAbsolute(dir) ? dir : path.resolve(process.cwd(), dir)
  );
}
// getFileIds(dir) 函数返回一个 MD 文件名的数组
export const getFileIds=async(dir = './') =>{
  const postsDirectory =  path.isAbsolute(dir) ? dir : path.resolve(process.cwd(), dir)
  const files = await fs.readdirSync(postsDirectory);
  return files
    .filter((fn) => path.extname(fn) === `.md`)
    .map((fn) => path.basename(fn, path.extname(fn)));
}

// 获取到文件名数组后，我们需要解析 MD 的具体内容，比如文件的标题、描述、创建日期、具体的内容HTML格式化等
export const getFileData= async(dir = './', id)=> {
  const file = path.join(absPath(dir), `${id}.${fileExt}`);
  // let state = await fs.stat(file, (error, stats) => { 
  //     if (error) { 
  //       console.log(error); 
  //     }else { 
  //       console.log("Stats object for:example_directory.md"); 
  //       console.log(stats); 
  //       // Using methods of the Stats object 
  //       console.log("Path is file:", stats.isFile()); 
  //       console.log("Path is directory:", stats.isDirectory()); 
  //     } 
  //   });
  const data = await fs.readFileSync(file, 'utf8');
  const matter = frontMatter(data);
  const html =(await remark().use(remarkhtml).process(matter.body)).toString();

  // date formatting   
  const date = matter.attributes.date;
  // .toUTCString()
  matter.attributes.date = date.toUTCString();
  matter.attributes.dateYMD = dateformat.ymd(date);
  matter.attributes.dateFriendly = dateformat.friendly(date);
  // word count
  const
    roundTo     = 10,
    readPerMin  = 200,
    numFormat   = new Intl.NumberFormat('en'),
    count       = matter.body.replace(/\W/g, ' ').replace(/\s+/g, ' ').split(' ').length,
    words       = Math.ceil(count / roundTo) * roundTo,
    mins        = Math.ceil(count / readPerMin);
  matter.attributes.wordcount = `${ numFormat.format(words) } words, ${ numFormat.format(mins) }-minute read`;
  return {
    id,
    html,
    ...matter.attributes
  };
 }
 