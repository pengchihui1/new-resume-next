
import { getFileIds, getFileData } from '../../lib/posts-md';
// post directory
const postsDir = 'articles';
// dynamic route IDs
export async function getStaticPaths() {
  const
    paths = (await getFileIds(postsDir))
      .map((id) => ({ params: { id } }));
  return {
    paths,
    fallback: false,
  };


