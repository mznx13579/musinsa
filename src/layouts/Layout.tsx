import { Outlet } from 'react-router-dom';

export interface ILayoutProps {}

const Layout = () => {
  return (
    <div className="App relative min-h-screen min-w-[375px] overflow-visible">
      <div className="m-auto w-full max-w-screen-sm py-10 px-5">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
