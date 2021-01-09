import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import PageLayout from '../../../components/layout';
import TableUser from '../../../components/tableUser';

const Index = () => {
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token === 'null') {
      router.push('/login');
    }
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
