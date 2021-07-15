import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { useSelector,useDispatch } from 'react-redux';
import {AppState} from "../store/rootStore";
import {CounterAction} from "../store/Counter/models/actions-types";

export default function Home() {
  const count = useSelector((state:AppState) =>state.countReducer.count);
  const dispatch = useDispatch();
  const increment = (count:number)=>dispatch({type:CounterAction.INCREMENT_COUNT,count})
  const decrement = (count:number)=>dispatch({type:CounterAction.DECREMENT_COUNT,count})
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      count{count}
      <div>
        <button onClick={()=>increment(5)}>++</button>
      </div>
      <div>
        <button onClick={()=>decrement(10)}>--</button>
      </div>
    </div>
  )
}