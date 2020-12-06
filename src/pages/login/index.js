import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import LoginForm from '../../components/loginForm';
import styles from './login.module.scss';

function Login() {
  const router = useRouter();
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token !== 'null') {
      return router.push('/admin/user');
    }
  });
  return (
    <div className={styles.loginWrapper}>
      <div className={styles.baseLogin} />
      <LoginForm />
    </div>
  );
}

export default Login;
