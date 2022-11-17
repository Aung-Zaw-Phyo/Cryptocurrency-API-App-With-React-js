import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import Coins from './components/Coins';
import Navbar from './components/Navbar';
import {Routes, Route} from 'react-router-dom'
import Coin from './components/Coin';

const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=false';

function App() {
    const [coins, setCoins] = useState([]);

    useEffect( () => {
        axios.get(url).then((respone) => {
          setCoins(respone.data)
          console.log(respone.data)
        }).catch((error)=>{
          console.log(error)
        })
    }, [])

    return (
      <div className='container'>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Coins coins={coins} />}/>
          <Route path="/coin/:coinId" element={<Coin/>}></Route>
        </Routes>
        
      </div>
    );
}

export default App;
