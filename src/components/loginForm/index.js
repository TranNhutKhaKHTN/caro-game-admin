import React from 'react';
import {
  Form, FormGroup, Input, Label, Card, Button,
} from 'reactstrap';
import style from './login.module.scss';

function LoginForm() {
  return (
    <div className={style.loginFormWrapper}>
      <Card className={style.Card}>
        <div className={style.title}>Login</div>
        <Form>
          <FormGroup>
            <Label for="exampleEmail">Email</Label>
            <Input type="email" name="email" placeholder="Input your email" />
          </FormGroup>
          <FormGroup>
            <Label for="examplePassword">Password</Label>
            <Input type="password" name="password" placeholder="Input your password" />
          </FormGroup>
          <Button className={style.btnLogin}>Login</Button>
        </Form>
      </Card>
    </div>
  );
}

export default LoginForm;
