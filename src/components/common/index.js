import React from 'react';
import EZDrawer from 'react-modern-drawer';
import './styles.scss';
import 'react-modern-drawer/dist/index.css';

const Drawer = (props) => {
  const { open, children, ...rest } = props;

  return (
    <EZDrawer
      size="42.857rem"
      direction="left"
      {...rest}
      open={open}
      className="drawer_padding"
      duration={200}
      lockBackgroundScroll
    >
      {children}
    </EZDrawer>
  );
};

export default Drawer;
