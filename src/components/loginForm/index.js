import React, { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import { Card } from 'reactstrap';
import { Button, Checkbox, message } from 'antd';
import * as Yup from 'yup';
import { useRouter } from 'next/router';
import style from './login.module.scss';
import { apiLogin } from '../../services/login';

const loginSchema = Yup.object({
  username: Yup.string()
    .required('input your user name'),
  password: Yup.string()
    .required('input your pass word'),
});

function LoginForm() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  return (
    <div className={style.loginFormWrapper}>
      <Card className={style.Card}>
        <div className={style.title}><b>Login</b></div>
        <Formik
          initialValues={
            {
              username: '',
              password: '',
            }
          }
          validationSchema={loginSchema}
          onSubmit={async (data) => {
            setLoading(true);
            try {
              const res = await apiLogin(data);
              const user = res.data;
              localStorage.setItem('token', user.access_token);
              router.push('/admin/user');
              setLoading(false);
            } catch (e) {
              console.log(e);
              message.error('login fail!');
              setLoading(false);
            }
          }}
        >
          {({ errors, touched }) => (
            <Form>
              <div className={style.formItem}>
                <div>Email</div>
                <Field className={style.field} type="email" name="username" placeholder="Input your email" />
                {touched.username && errors.username && (
                <div style={{ color: 'red' }}>
                  *
                  {errors.username}
                </div>
                )}
              </div>
              <div className={style.formItem}>
                <div>Password</div>
                <Field className={style.field} type="password" name="password" placeholder="Input your password" />
                {touched.password && errors.password && (
                <div style={{ color: 'red' }}>
                  *
                  {errors.password}
                </div>
                )}
              </div>
              <Checkbox>Remember me!</Checkbox>
              <Button loading={loading} htmlType="submit" className={style.btnLogin}>Login</Button>

              <div style={{ marginTop: 20 }}>Click here if you forget your password!</div>
            </Form>
          )}
        </Formik>
      </Card>
    </div>
  );
}

export default LoginForm;
