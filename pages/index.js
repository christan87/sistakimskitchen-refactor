import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import LandingNav from '../components/common/LandingNav';
import SimpleSlider from '../components/common/SimpleSlider';

export default function Home() {
  const tests = [
    "Test", "Test2", "Test3", "Test4", "Test5", "Test6", "Test7", "Test8", "Test9", "Test10",
    "Test", "Test2", "Test3", "Test4", "Test5", "Test6", "Test7", "Test8", "Test9", "Test10"
  ];
  return (
    <div>
      <main>
        <LandingNav />
        <section>
          <SimpleSlider />
          <h1>Sista Kim’s Kitchen</h1> 
          {tests.map((test, index) => (
            <div key={index} className=' text-slate-50'>
              <h1>{test}</h1>
            </div>
          ))}
        </section>
      </main>
    </div>
  )
}
