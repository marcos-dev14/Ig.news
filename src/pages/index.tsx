import Head from 'next/head';

import { Container } from './_styles';

export default function Home() {
  return (
    <> 
      <Head>
        <title>Home | ig.news</title>
      </Head>

     <Container>
        <section>
          <span>👏 Hey, welcome</span>
          <h1>News about <br /> the <span>React</span> World</h1>
          <p>
            Get access to all publications <br />
            <span>for $9.90 month</span>
          </p>
        </section>

        <img src="/images/avatar.svg" alt="Girl codding" />
     </Container>

    </>
  )
}
