import Image from 'next/image';
import styles from '../styles/quote.module.css';

import QuoteBg from '../assets/quotebg.jpg'

const Quote = () => {
    return (
      <>

      <div className={styles.container}>
        <div className={styles.quoteContainer}>
         <p className={styles.quoteTxt}> let's break the codes of inequality </p>
         <p  className={styles.quoteTxt}> and rewrite the future of STEM.</p>
         </div>
         </div>
      </>
        );
  }
  
  export default Quote;