import { useRouter } from 'next/router';

export default function Review () {
  const router = useRouter();
  const { reviewId, productId } = router.query;
  return <h1>Product {productId}, Review {reviewId}</h1>
}