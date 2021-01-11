import React from 'react';
import { useSelector } from 'react-redux';
import styles from './styles.module.scss';
import Square from '../Square';

const RenderBoard = (data) => {
  const Component = data.map((record, indexX) => {
    const recordI = record.map((sq, indexY) => (
      <Square
        // eslint-disable-next-line react/no-array-index-key
        key={`${indexX}${indexY}`}
        x={indexX}
        y={indexY}
        value={data[indexX][indexY]}
      />
    ));
    // eslint-disable-next-line react/no-array-index-key
    return <div key={indexX} className={styles.row}>{recordI}</div>;
  });
  return Component;
};

function Board() {
  const mapMatch = useSelector((state) => state.match.mapMatch);
  const match = RenderBoard(mapMatch);

  return (
    <div className={styles.boardWrapper} style={{ lineHeight: 0 }}>
      {match}
    </div>
  );
}

export default Board;
