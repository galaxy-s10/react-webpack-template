import { memo, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  useEffect(() => {
    console.log('Login生命周期');
  }, []);

  return (
    <div>
      <h1>当前是login</h1>
      <Link to="/">点击跳转首页</Link>
    </div>
  );
};

export default memo(Home);
