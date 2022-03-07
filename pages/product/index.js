import Link from 'next/link';

const ProductHome = ({ productId = 100 }) => {
  return (
    <>
      <h1>Product Home Page</h1>
      <Link href="/product/1"><a>Product 1</a></Link>
      <Link href="/product/2"><a>Product 2</a></Link>
      <Link href="/product/3"><a>Product 3</a></Link>
      <Link href={`/product/${productId}`}><a>Product {productId}</a></Link>
      <Link href="/">
        <a>Back home</a>
      </Link>
    </>
  )
}

export default ProductHome;