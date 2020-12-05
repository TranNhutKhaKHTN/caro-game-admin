import React from 'react';
import LoginForm from '../../components/loginForm';
import styles from './login.module.scss';

function Login() {
  return (
    <div className={styles.loginWrapper}>
      <LoginForm />
    </div>
  );
}

export default Login;
