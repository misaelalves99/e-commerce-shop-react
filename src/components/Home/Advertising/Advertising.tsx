// src/components/Home/Advertising/Advertising.tsx

import React from 'react';
import styles from './Advertising.module.css';
import Typical from 'react-typical';

const Advertising: React.FC = () => {
  return (
    <section className={styles.sectionAdvertising}>
      <div className={styles.containerAdvertising}>
        <div className={styles.advertising}>
          <h1>Até 50% de desconto e com muitas promoções.</h1>
          <br />
          <h1 className={styles.typical}>
            <Typical 
              loop={Infinity} 
              steps={[
                'Preço Baixo!',
                3000,
                'Aproveite!',
                3000,
                'Compre Agora!',
                3000,
              ]}
            />
          </h1>
        </div>
        <div className={styles.imgAdvertising}>
          <img 
            src="/assets/img-propaganda.png"
            alt="Publicidade - Desconto" 
            width={500} 
            height={500} 
            style={{ objectFit: 'cover' }}
          />
        </div>
      </div>
    </section>
  );
};

export default Advertising;
