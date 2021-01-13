import React from 'react';
import { Card } from 'reactstrap';
import styles from './chat.module.scss';
import Message from '../Message';

const Chat = ({ data }) => (
  <div className={styles.chatWrapper}>
    <Card className={styles.card}>
      <div className={styles.listMess}>
        {/* eslint-disable-next-line react/no-array-index-key */}
        {data.map((value, index) => <Message key={index} message={value} />)}
      </div>
    </Card>
  </div>
);

export default Chat;
