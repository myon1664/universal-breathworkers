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
        <h2><img src="https://souldimension.org/wp-content/uploads/2022/10/Universal-Breathworkers.jpg" alt="Universal Breathworkers" class="responsive" /></h2>
        <Header title="Welcome to the Universal Breathworkers!" />
        <h4>Learn a simple and powerful breathing technique.</h4>
        <h4>Increase your physical, mental, emotional and spiritual health &amp; well-being.</h4>
        <p>Join us to learn and practice the <strong><a href="https://souldimension.org/joy-of-breathing/" target="_blank" >Joy of Breathing</a></strong>.</p>
        <p>No previous experience required.</p>
        <h2><strong>EVERY WEDNESDAY</strong></h2>
        <h2><strong>WE BREATHE TOGETHER</strong></h2>
        <h2><strong>AND GENERATE A GLOBAL HEALING CURRENT</strong></h2>
        <p><a href="https://souldimension.org/breathe/" target="_blank">Join the Zoom Meeting</a>, breathe and heal with us.</p>
        <p><em>Organized by <a href="https://souldimension.org/" target="_blank">Soul Dimension</a></em></p>
      </main>

      <Footer />
    </div>
  )
}
