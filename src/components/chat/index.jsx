import React from 'react';
import { Card } from 'reactstrap';
import styles from './chat.module.scss';
import Message from '../Message';

const Chat = ({ data }) => (
  <div className={styles.chatWrapper}>
    <Card className={styles.card}>
      <div className={styles.listMess}>
        {data.map((value, index) => <Message key={index} message={value} />)}
      </div>
    </Card>
  </div>
);

export default Chat;
