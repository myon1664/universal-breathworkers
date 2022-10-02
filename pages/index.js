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
        <center><h2><img src="https://souldimension.org/wp-content/uploads/2022/10/Universal-Breathworkers.jpg" alt="Universal Breathworkers" class="responsive" /></h2></center>
        <Header title="Welcome to the Universal Breathworkers!" />
        <p><strong>Learn a simple and powerful breathing technique</strong> to increase your physical, mental, emotional and spiritual health &amp; well-being.</p>
        <p>Join us to learn and practice the <strong><a href="https://souldimension.org/joy-of-breathing/" target="_blank" rel="nofollow ugc">Joy of Breathing</a></strong>.</p>
        <h2><strong>EVERY WEDNESDAY WE BREATHE TOGETHER AND GENERATE A GLOBAL HEALING CURRENT</strong></h2>
        <p><strong><a href="https://souldimension.org/breathe/" target="_blank">Join the Zoom Meeting</a></strong>, breathe and heal with us.</p>
        <p><em>Organized by <a href="https://souldimension.org/" target="_blank">Soul Dimension</a></em></p>
      </main>

      <Footer />
    </div>
  )
}
