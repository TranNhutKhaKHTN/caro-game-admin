import React, { useEffect, useState } from 'react';
import {
  Table, Tag, Button, Input,
} from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import Link from 'next/link';
import { getApi } from '../../services/CallApi';
import { API_HOST } from '../../config/constant/env';
import { fetchGetAllUser } from '../../redux/userSlice';

const { Search } = Input;
const columns = [
  {
    title: 'Active',
    dataIndex: 'activated',
    key: 'Active',
    render: (activated) => <div>{activated ? <Tag color="green">Active</Tag> : <Tag color="red">Block</Tag>}</div>,
  },
  {
    title: 'Name',
    dataIndex: 'fullName',
    key: 'Name',
  },
  {
    title: 'email',
    dataIndex: 'email',
    key: 'email',
  },
  {
    title: 'Role',
    dataIndex: 'role',
    render: (data) => <Tag color="blue">{data === 0 ? 'NORMAL_USER' : 'ADMIN'}</Tag>,
    key: 'Role',
  },
  {
    title: 'View match history',
    key: 'history',
    render: (record) => (
      <Button>
        {/* eslint-disable-next-line no-underscore-dangle */}
        <Link href={`/admin/user/history/${record._id}`}>
          View
        </Link>
      </Button>
    ),
  },
  {
    title: 'Action',
    dataIndex: 'activated',
    render: (activated) => (
      <div>
        {activated ? <Button danger>Block</Button> : <Button>Unblock</Button>}
      </div>
    ),
    key: 'Action',
  },
];

const TableUser = () => {
  const listUser = useSelector((state) => state.user.data);
  const [loading, setLoading] = useState(false);
  const [keyWord, setKeyWord] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    setLoading(true);
    getApi(`${API_HOST}users/all`, { query: keyWord })
      .then((res) => {
        const action = fetchGetAllUser(res.data.data);
        dispatch(action);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  }, [keyWord]);

  const dataSource = listUser.map((data) => ({
    ...data,
    // eslint-disable-next-line no-underscore-dangle
    key: data._id,
  }));

  const SearchUser = (e) => {
    const key = e.target.value;
    setKeyWord(key);
  };

  return (
    <>
      <div style={{ marginBottom: 20 }}>
        <Search
          placeholder="input search text"
          enterButton
          onChange={SearchUser}
        />
      </div>
      <Table
        columns={columns}
        dataSource={dataSource}
        pagination={{ pageSize: 7 }}
        loading={loading}
      />
    </>
  );
};
export default TableUser;
