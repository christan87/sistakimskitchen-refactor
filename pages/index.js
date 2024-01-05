import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import LandingNav from '../components/common/LandingNav';
import SimpleSlider from '../components/common/SimpleSlider';

export default function Home() {
  return (
    <div>
      <main>
        <LandingNav />
        <section>
          <SimpleSlider />
          <h1>Sista Kim’s Kitchen</h1>
        </section>
      </main>
    </div>
  )
}
