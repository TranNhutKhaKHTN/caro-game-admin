import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import {
  message, Table, Tag, Button,
} from 'antd';
import PageLayout from '../../../../components/layout';
import { getApi } from '../../../../services/CallApi';
import { API_HOST } from '../../../../config/constant/env';

const columns = [
  {
    title: 'roomId',
    dataIndex: 'roomId',
    key: 'roomId',
  },
  {
    title: 'Opponent',
    dataIndex: 'opponent',
    key: 'opponent',
  },
  {
    title: 'Winner',
    dataIndex: 'winner',
    key: 'winner',
  },
  {
    title: 'Number of moves',
    dataIndex: 'moves',
    key: 'moves',
    render: (moves) => <div>{moves.length}</div>,
  },
  {
    title: 'status',
    key: 'status',
    dataIndex: 'status',
    render: (status) => (
      <div>{status === 0 ? <Tag color="red">Pending</Tag> : <Tag color="green">Done</Tag>}</div>
    ),
  },
  {
    title: 'Action',
    key: 'action',
    render: () => (
      <Button>Detail</Button>
    ),
  },
];

const History = () => {
  const [dataSource, setDataSource] = useState([]);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const id = router.query.index;

  useEffect(() => {
    setLoading(true);
    if (id !== undefined) {
      const url = `${API_HOST}matches/admin/user/${id}`;
      getApi(url)
        .then((res) => {
          setDataSource(res.data.data);
          setLoading(false);
        })
        .catch((error) => {
          setLoading(false);
          message.error(error?.response.data.message.msgBody);
        });
    }
  }, [id]);
  return (
    <PageLayout>
      <Table
        columns={columns}
        dataSource={dataSource}
        loading={loading}
        pagination={{
          pageSize: 7,
        }}
      />
    </PageLayout>
  );
};
export default History;
