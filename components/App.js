import Head from 'next/head'

export default ({ children }) => (
  <main>
    <Head>
      <link rel='stylesheet' href='//cdnjs.cloudflare.com/ajax/libs/antd/2.9.3/antd.min.css' />
    </Head>
    {children}
  </main>
)