import React from 'react';
import Header from '../common/header';
import { Outlet } from 'react-router-dom';

type Props = {};

export default function userLayout({}: Props) {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
    </>
  );
}
