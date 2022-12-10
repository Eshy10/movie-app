import React from "react";
import styles from './layout.module.css';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({children}: LayoutProps) => {
  return <main className={styles['main']}>{children}</main>;
};

export default Layout;
