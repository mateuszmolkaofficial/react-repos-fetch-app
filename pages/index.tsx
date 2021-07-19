import Head from 'next/head'
import ReactReposFetcher from '../components/ReactReposFetcher'

export default function Home() {
  return (
    <>
      <Head>
        <title>React fetcher</title>
      </Head>
      <ReactReposFetcher />
    </>
  )
}
