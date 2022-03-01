import { useRouter } from 'next/router';

const ProductDetail = () => {
  const router = useRouter();
  const id = router.query.id;
  return <h1>Product Details {id}</h1>
}

export default ProductDetail;