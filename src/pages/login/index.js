import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import LoginForm from '../../components/loginForm';
import styles from './login.module.scss';
import Footer from '../../components/footer';

function Login() {
  const [isLogin, setIslogin] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token !== 'null') {
      setIslogin(true);
      return router.push('/admin/user');
    }

    setIslogin(false);
  });
  return (
    <div>
      {isLogin ? null
        : (
          <div className={styles.loginWrapper}>
            <div className={styles.baseLogin} />
            <LoginForm />

            <Footer />
          </div>
        )}
    </div>
  );
}

export default Login;
