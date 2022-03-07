import { useRouter } from 'next/router';

const BlogPage = () => {
  const router = useRouter();
  const { id } = router.query;
  return <h1>Blog page: {id}</h1>
}

export default BlogPage;