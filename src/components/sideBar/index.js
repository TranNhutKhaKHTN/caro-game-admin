import React from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';
import styles from './styles.module.scss';

const Sidebar = () => {
  const a = 5;
  return (
    <div className={styles.sidebarWrapper}>
      <div className={styles.title}>ADMIN CARO</div>
      <div className={styles.list}>
        <div className={styles.listItem}>
          USER
        </div>
        <div className={styles.listItem}>
          NAV1
        </div>
        <div className={styles.listItem}>
          NAV2
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
