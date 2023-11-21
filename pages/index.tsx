import Image from 'next/image';
import styles from '../styles/index.module.css';
import headerimg from '../public/headerimg.png'
import LineLeft from '../assets/lineLeft.png';
import LineRigth from '../assets/lineRigth.png';

export default function Home() {
  return (
    <div className={styles.container}>
      <h1>Promoting STEM</h1>
      <div>
      <img
        src="../assets/lineLeft.png"
        alt="Image"
      />
      <h1>under sustentability</h1>
      </div>
      <h1>for equality</h1>
    </div>
  );
}
