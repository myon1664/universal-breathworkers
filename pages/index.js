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
        <center><h2><img src="https://souldimension.org/wp-content/uploads/2022/10/Universal-Breathworkers.jpg" alt="" width="1200" height="600" /></h2></center>
        <Header title="Welcome to the Universal Breathworkers!" />
      </main>

      <Footer />
    </div>
  )
}
