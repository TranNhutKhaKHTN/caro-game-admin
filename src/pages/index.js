import React from 'react';

import Sidebar from '../components/sideBar';
import styles from './styles.module.scss';

export default function Home() {
  return (
    <div className={styles.indexWrapper}>
      <div className={styles.leftContent}>
        <Sidebar />
      </div>
      <div className={styles.rightContent}>
        <div style={{ height: 60 }} className={styles.rightTop}> hahah</div>
        <div className={styles.rightBottom}>huhuhu</div>
      </div>
    </div>
  );
}
