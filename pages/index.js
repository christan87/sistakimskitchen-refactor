import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import LandingNav from './components/common/LandingNav';

export default function Home() {
  return (
    <div>
      <LandingNav />
      <h1>Sista Kim’s Kitchen</h1>
    </div>
  )
}
