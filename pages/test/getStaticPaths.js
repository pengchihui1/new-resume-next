export const getStaticPaths = async () => {
  const res = await fetch('https://reqres.in/api/users');
  const { data } = await res.json();
  const paths = data.map(user => {  return { params: { id: user.id.toString() }}  })
    return {
        paths,
        fallback: false
  }
}

const Blog=({ posts })=> {
  return(
      <div>欢迎来到我的世界</div>
  )
}

export default Blog
