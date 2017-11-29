import React from 'react';
import Link from 'next/link'
import { Button } from 'antd';
import App from '../components/App';

export default () =>
  <App>
    <Link href="/login">
      <Button type="primary">Go to Login Page</Button>
    </Link>
  </App>
