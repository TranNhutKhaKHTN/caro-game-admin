import React, { useEffect, useState, useRef } from 'react';
import { useRouter } from 'next/router';
import { Button, message } from 'antd';
import { useDispatch } from 'react-redux';
import styles from './styles.module.scss';
import Board from '../../../components/Board';
import { API_HOST } from '../../../config/constant/env';
import { getApi } from '../../../services/CallApi';
import { newGame, exeMove } from '../../../redux/currentMatchSlice';

const HistoryDetail = () => {
  const [listMove, setListMove] = useState([]);
  const [step, setStep] = useState(listMove.length);
  const dispatch = useDispatch();
  const inputRef = useRef(null);
  const router = useRouter();
  const idMatch = router.query.index;
  console.log(listMove);

  useEffect(() => {
    if (idMatch) {
      getApi(`${API_HOST}matches/admin/user/game/${idMatch}`)
        .then((res) => {
          setListMove(res.data.data.match[0].moves);
          setStep(res.data.data.match[0].moves.length);
        })
        .catch((err) => {
          message.error(err?.response.message);
        });
    }
  }, [idMatch]);

  useEffect(() => {
    dispatch(newGame());
    for (let i = 0; i < step; i += 1) {
      const action = exeMove({
        x: listMove[i].x,
        y: listMove[i].y,
      });
      dispatch(action);
    }
    inputRef.current.value = step;
  }, [step]);

  const Previous = () => {
    if (inputRef.current.value === '') {
      setStep(0);
      return;
    }
    if (step > 0) {
      setStep(step - 1);
    }
  };

  const ChangeStep = (e) => {
    const newStep = e.target.value;
    if (newStep === '') {
      return;
    }
    if (newStep >= 0 && newStep <= listMove.length) {
      setStep(newStep);
    } else if (newStep < 0) {
      inputRef.current.value = 0;
      setStep(0);
    } else {
      inputRef.current.value = listMove.length;
      setStep(listMove.length);
    }
  };
  const Next = () => {
    if (inputRef.current.value === '') {
      setStep(0);
      return;
    }
    if (step < listMove.length) {
      setStep(step + 1);
    }
  };

  return (
    <div className={styles.matchWrapper}>
      <div className={styles.userPlaying}>
        <Button onClick={() => {
          router.back();
        }}
        >
          Back
        </Button>
        {/* <UserPlaying isCurrentUser myTurn="" name="host?.fullName" img="https://res.cloudinary.com/kh-ng/image/upload/v1607835120/caro/unnamed_rwk6xo.png" /> */}
        {/* <UserPlaying myTurn={false} name={"competitor !== null ? competitor.fullName : 'Waiting...'"} img="https://res.cloudinary.com/kh-ng/image/upload/v1607835120/caro/unnamed_rwk6xo.png" /> */}
      </div>
      <Board />
      <div className={styles.chat}>
        {/* <Chat socket={socket} roomId={param.query.index} /> */}
      </div>
      {/* <EndGame socket={socket} roomId={param.query.index} /> */}
      <div style={{ display: 'flex' }}>
        <Button type="primary" onClick={Previous}> Prev </Button>
        <input type="number" max={listMove.length} min={0} ref={inputRef} onChange={ChangeStep} />
        <Button type="primary" danger onClick={Next}> Next </Button>
      </div>
    </div>
  );
};

export default HistoryDetail;
