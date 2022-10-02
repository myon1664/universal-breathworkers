import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
    
      <Head>
        <title>Welcome to the Universal Breathworkers!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to the Universal Breathworkers!" />
      </main>

      <Footer />
    </div>
  )
}
