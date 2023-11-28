import Image from 'next/image';
import styles from '../styles/banner.module.css';
import LineLeft from '../assets/lineLeft.png';
import LineRigth from '../assets/lineRigth.png';
import WomanImg from '../assets/womanimg.png';
import CaretDown from '../assets/caret-down.svg'

const Banner = () => {
  return (
    <>
    <div className={styles.headerContainer}>

      <div className={styles.navegation}>
        <div className={styles.logo}>
          Woman Pi
        </div>
        <div className={styles.itens}>
        <a className={styles.linkPink} href="/">Home</a>
        <a className={styles.link} href="/stem-resources">STEM Resources</a>
        <a className={styles.link} href="/real-life-stories">Real-life stories</a>
        <a className={styles.link} href="/blog">Blog
        <Image src={CaretDown} alt="caret-down" width={12} height={12} />
        </a>

        </div>
      </div>

      <div className={styles.titleContainer}>

        <h1>Promoting STEM</h1>
        <div className={styles.underContainer}>
        <Image src={LineLeft} alt="Line Icon" width={30} height={50} /> 
        <h1 className={styles.font}>under sustentability</h1>
        <Image src={LineRigth} alt="Line Icon" width={30} height={50} /> 
        </div>
        <h1>for <span className={styles.underLine}>equality</span></h1>


      </div>
      <Image src={WomanImg} alt="Woman working" width={400} height={500} className={styles.womanImg}/> 

    </div>
  
    </>
      );
}

export default Banner;

