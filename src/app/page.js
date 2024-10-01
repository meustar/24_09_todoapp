'use client';

import * as React from 'react';
<<<<<<< HEAD
import { AppBar, Toolbar } from '@mui/material';
import { ThemeProvider } from '@emotion/react';
import theme from './theme';
import { FaBars } from 'react-icons/fa';
=======
import Button from '@mui/material/Button';
import { ThemeProvider } from '@emotion/react';
import { RiDeleteBin5Line } from 'react-icons/ri';
import theme from './theme';
>>>>>>> fbb2aaa8ac911a58aa124d6b1dc75783a049ab80

export default function Home() {
  return (
    <>
<<<<<<< HEAD
      {/* <AppBar position="static"> */}
      <AppBar position="fixed">
        <Toolbar>
          <div className="tw-flex-1">
            <FaBars />
          </div>
          <div className="logo-box">
            <a href="/" className="tw-font-bold">
              로고
            </a>
          </div>
          <div className="tw-flex-1 tw-flex tw-justify-end">글쓰기</div>
        </Toolbar>
      </AppBar>
      <section className="tw-h-screen tw-flex tw-items-center tw-justify-center tw-text-[2rem]">
        section
      </section>
=======
      <ThemeProvider theme={theme}>
        <div className="tw-flex tw-items-center tw-gap-x-3">
          <Button variant="text">Text</Button>
          <Button
            variant="contained"
            onClick={() => {
              confirm('삭제하겠습니까?');
            }}>
            <RiDeleteBin5Line />
            삭제
          </Button>
          <Button variant="outlined">Outlined</Button>
        </div>
      </ThemeProvider>
      <div className="tw-flex tw-items-center tw-gap-x-3 tw-mt-3">
        <Button
          variant="text"
          onClick={() => {
            alert('버튼 클릭 됨');
          }}>
          Text
        </Button>
        <Button variant="contained" disabled>
          Contained
        </Button>
        <Button variant="outlined" href="sub/">
          sub 로 이동
        </Button>
      </div>
>>>>>>> fbb2aaa8ac911a58aa124d6b1dc75783a049ab80
    </>
  );
}
