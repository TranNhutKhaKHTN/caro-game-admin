import React from 'react';
import { useSelector } from 'react-redux';
import styles from './styles.module.scss';

const Square = ({
  x, y, value,
}) => {
  const currentMove = useSelector((state) => state.match.currentMove);
  const isCurrentMove = currentMove.x === x && currentMove.y === y;

  switch (value) {
    case 1:
      return (
        <button style={{ color: 'red' }} className={styles.btn} type="button">
          {!isCurrentMove ? 'X' : <b>X</b>}
        </button>
      );
    case 2:
      return (
        <button style={{ color: 'green' }} className={styles.btn} type="button">
          {!isCurrentMove ? 'O' : <b>O</b>}
        </button>
      );
    default:
      return <button className={styles.btn} type="button">{' '}</button>;
  }
};
export default Square;
