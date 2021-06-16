import Head from 'next/head';
import Link from "next/link"

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <div>
          there is a link === 
          <Link href="/ladies/lady?name='xiao meimei'">
            <a> to ladies page one</a>
          </Link>
        </div>
        <div>
          there is a link === 
          <Link href="/ladies/lady?name='da meimei'">
            <a> to ladies page two</a>
          </Link>
        </div>
    </div>
  )
}