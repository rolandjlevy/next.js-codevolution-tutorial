// catch all dynamic routes
// https://www.youtube.com/watch?v=ZHn726VDoIY&list=PLC3y8-rFHvwgC9mj0qv972IO5DmD-H0ZH&index=9

// pass filter parameters for a page

import { useRouter } from 'next/router';

function Doc () {
  const router = useRouter();
  const { params = [] } = router.query;
  return (
    <main>
      <h1>Docs Homepage</h1>
      Params array: {JSON.stringify(params, null, 2)}
    </main>
  )
}

export default Doc;