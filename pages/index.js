import Link from 'next/link';

const Home = () => {
  return (
    <main>
      <h1>Home page</h1>
      <Link href="/blog">
        <a>Blog page</a>
      </Link>
      <Link href="/product">
        <a>Product page</a>
      </Link>
    </main>
  );
}

export default Home;