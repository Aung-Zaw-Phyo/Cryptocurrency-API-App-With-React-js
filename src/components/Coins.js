import React from 'react'
import './Coins.css'
import CoinItem from './CoinItem'
import {Link} from 'react-router-dom'

const Coins = (props) => {
  return (
    <div className='col-lg-8 mx-auto'>
        <div className="table-responsive">
            <div className='d-flex justify-content-between align-items-center heading'>
                <p>#</p>
                <p>Coin</p>
                <p>Price</p>
                <p>24h</p>
                <p className="d-none d-lg-block">Volume</p>
                <p className="d-none d-lg-block">Mkt Cap</p>
            </div>
            {props.coins.map(coin => {
                return (
                    <Link to={`/coin/${coin.id}`} key={coin.id}>
                        <CoinItem coin={coin}/>
                    </Link>
                )
            })}
        </div>
    </div>
  )
}

export default Coins