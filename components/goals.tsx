import Image from 'next/image';
import styles from '../styles/goals.module.css';
import Goal1 from '../assets/goal1.jpg'
import Goal2 from '../assets/goal2.jpg'
import Goal3 from '../assets/goal3.jpg'
import Goal4 from '../assets/goal4.jpg'


const Goals = () => {
    return (
      <>
      <div className={styles.container}>
      <h1>Our Goals</h1>
     <div className={styles.allGoals}>
        <div className={styles.oneGoal}>
            <Image
            src={Goal1} 
            alt="Woman"
            width={70} 
            height={70}
             />
             <p>Promoting Female Participation in STEM</p>
        </div>
        <div className={styles.oneGoal}>
            <Image
            src={Goal2} 
            alt="Woman"
            width={70} 
            height={60}
             />
             <p>Promoting Female Participation in STEM</p>
        </div>
        <div className={styles.oneGoal}>
            <Image
            src={Goal3} 
            alt="Woman"
            width={50} 
            height={60}
             />
             <p>Promoting Female Participation in STEM</p>
        </div>
        <div className={styles.oneGoal}>
            <Image
            src={Goal4} 
            alt="Woman"
            width={70} 
            height={70}
             />
             <p>Promoting Female Participation in STEM</p>
        </div>
     </div>
     </div>
      </>
        );
  }
  
  export default Goals;