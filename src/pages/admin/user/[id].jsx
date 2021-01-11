import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { Form, Input, Spin } from 'antd';
import PageLayout from '../../../components/layout';
import { getApi } from '../../../services/CallApi';
import { API_HOST } from '../../../config/constant/env';

const UserDetail = () => {
  const router = useRouter();
  const [res, setRes] = useState(null);
  const [loading, setLoading] = useState(false);
  const userID = router.query.id;

  const layout = {
    labelCol: { span: 6 },
    wrapperCol: { span: 16 },
  };

  useEffect(() => {
    if (userID) {
      setLoading(true);
      getApi(`${API_HOST}users/info/stats/${userID}`)
        .then((resp) => {
          setRes(resp.data);
          setLoading(false);
        })
        .catch((err) => {
          console.log(err);
          setLoading(false);
        });
    }
  }, [userID]);

  const Content = (
    <div
      style={{ width: 500 }}
    >
      <Form {...layout}>
        <Form.Item
          label="User name"
        >
          <Input value={res?.user?.email} />
        </Form.Item>
        <Form.Item
          label="Full name"
        >
          <Input value={res?.user?.fullName} />
        </Form.Item>
        <Form.Item
          label="Number of game"
        >
          <Input value={res?.stats?.playedGame} />
        </Form.Item>
        <Form.Item
          label="Win Rate"
        >
          <Input value={res?.stats?.winRate} />
        </Form.Item>
      </Form>
    </div>
  );

  return (
    <PageLayout>
      <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
        {loading ? <Spin /> : Content}
      </div>

    </PageLayout>
  );
};
export default UserDetail;
