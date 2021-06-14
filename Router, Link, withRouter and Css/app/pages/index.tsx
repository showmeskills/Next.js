import Head from 'next/head'
import { HomeWrap } from '../styles/StyledHome'
import Link from "next/link";
import Router from "next/router";
export default function Home() {
  const onGoToAbout = (path:string)=>Router.push(path);
  const onGoToNews = (name:string)=>Router.push({
    pathname:"/news/dynamic",
    query:{
      name
    }
  })
  return (
    <div>
      <Head>
        <title>Home page</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomeWrap>
        <h1>我是首页</h1>
        <ul>
          <li>styled-components 测试</li>
        </ul>
      </HomeWrap>
      <Link href="/list/list">
        <a>列表页</a>
      </Link>

        <div>route link and functional router</div>
        <Link href="/about">
          <a style={{"fontSize":"25px","color":"pink"}}>to about page</a>
        </Link>

        <div>
          <button onClick={()=>onGoToAbout("/about")}> to about</button>
        </div>

        <h1>dynamic router params and query</h1>
        <Link href="/news/dynamic?name='Terry'">
          <a style={{"fontSize":"25px","color":"pink"}}> to Terry</a>
        </Link>
        <Link href={{pathname:"/news/dynamic",query:{name:"Terrance"}}}>
          <a style={{"fontSize":"25px","color":"pink"}}> to Terrance</a>
        </Link>
        <div>
          <button onClick={()=>onGoToNews("TerranceYAn")}>go to news</button>
        </div>
    </div>
  )
}
