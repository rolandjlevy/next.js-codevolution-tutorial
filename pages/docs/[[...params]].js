// catch all dynamic routes (lesson 9)
// pass filter parameters for a page

import { useRouter } from 'next/router';

export default function Doc () {
  const router = useRouter();
  const { params = [] } = router.query;
  return (
    <main>
      <h1>Docs Homepage</h1>
      <p>Params array: {JSON.stringify(params, null, 2)}</p>
    </main>
  )
}