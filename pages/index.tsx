import Image from 'next/image';
import styles from '../styles/index.module.css';
import LineLeft from '../assets/lineLeft.png';
import LineRigth from '../assets/lineRigth.png';
import WomanImg from '../assets/womanimg.png';

export default function Home() {
  return (
    <>
    <div className={styles.headerContainer}>
      <div className={styles.titleContainer}>

        <h1>Promoting STEM</h1>
        <div className={styles.underContainer}>
        <Image src={LineLeft} alt="Line Icon" width={30} height={50} /> 
        <h1 className={styles.font}>under sustentability</h1>
        <Image src={LineRigth} alt="Line Icon" width={30} height={50} /> 
        </div>
        <h1>for equality</h1>


      </div>
      <Image src={WomanImg} alt="Woman working" width={400} height={500} className={styles.womanImg}/> 

    </div>

    </>
  );
}
