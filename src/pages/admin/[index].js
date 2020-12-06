import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { route } from 'next/dist/next-server/server/router';
import PageLayout from '../../components/layout';
import TableUser from '../../components/tableUser';
import { getAllUser } from '../../services/manager';

const Index = () => {
  const router = useRouter();
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token === 'null') {
      router.push('/login');
    }
  });

  useEffect(() => {
    const getListUser = async () => {
      try {
        const res = await getAllUser();
        console.log(res);
      } catch (e) {
        console.log(e);
      }
    };
    getListUser();
  });

  return (
    <PageLayout>
      <div>
        <TableUser />
      </div>
    </PageLayout>
  );
};

export default Index;
