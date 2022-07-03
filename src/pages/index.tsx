import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { Stack } from '@mui/material'
import HeaderComponent from '@/common/components/HeaderComponent/HeaderComponent'

const Home: NextPage = () => {
  return (
   <>
    <Stack spacing={3}>
      <p>hello world</p>
    </Stack>
    <p>hello world</p>
    <HeaderComponent />
   </>
  )
}

export default Home
 