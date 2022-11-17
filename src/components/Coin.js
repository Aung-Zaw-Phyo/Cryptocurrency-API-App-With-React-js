import React, { useEffect, useState } from 'react'
import axios from 'axios';
import {useParams} from 'react-router-dom'
import './Coin.css'

const Coin = () => {
    const params = useParams();
    const [coin, setCoin] = useState([])
    const url = `https://api.coingecko.com/api/v3/coins/${params.coinId}`;
    useEffect(() => {
        axios.get(url).then((response) => {
            setCoin(response.data);
            console.log(response.data)
        }).catch((error) => {
            console.log(error)
        })
    }, [url])
  return (
    <div className='col-lg-6 mx-auto py-3'>
        <div className='border-radius p-3'>
            <h1 >{coin.name}</h1>
        </div>
        <div className="info mt-4">
            <div className=' p-3 border-radius'>
                <p className='rank'>Rank # {coin.market_cap_rank}</p>
                <div className='mt-2 d-flex justify-content-between'>
                    <div className="d-flex align-items-center">
                        <img width='40' src={coin.image?coin.image.small : null} alt="" />
                        <div className='mx-1 me-3'>{coin.name}</div>
                        <div>{coin.symbol? coin.symbol.toUpperCase(): null} / USD</div>
                    </div>
                    <div className='h3 d-flex align-items-center'>{coin.market_data ? '$' + coin.market_data.current_price.usd : null}</div>
                </div>
            </div>
            <div className=' mt-4  border-radius p-3'>
                <table className='w-100'>
                    <thead>
                        <tr>
                            <th>1h</th>
                            <th>24h</th>
                            <th>7d</th>
                            <th>14d</th>
                            <th>30d</th>
                            <th>1yr</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                {coin.market_data?coin.market_data.price_change_percentage_1h_in_currency.usd.toFixed(1) + "%" : null}
                            </td>
                            <td>
                                {coin.market_data?coin.market_data.price_change_percentage_24h_in_currency.usd.toFixed(1) + "%" : null}
                            </td>
                            <td>
                                {coin.market_data?coin.market_data.price_change_percentage_7d_in_currency.usd.toFixed(1) + "%" : null}
                            </td>
                            <td>
                                {coin.market_data?coin.market_data.price_change_percentage_14d_in_currency.usd.toFixed(1) + "%" : null}
                            </td>
                            <td>
                                {coin.market_data?coin.market_data.price_change_percentage_30d_in_currency.usd.toFixed(1) + "%" : null}
                            </td>
                            <td>
                                {coin.market_data?coin.market_data.price_change_percentage_60d_in_currency.usd.toFixed(1) + "%" : null}
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className='mt-4  border-radius p-3'>
                <div className="row ">
                    <div className="col-lg-6 p-2">
                        <div className='py-2 d-flex justify-content-between border-bottom'>
                            <div>24 Hour Low</div>
                            <div>
                                {coin.market_data ? "$"+coin.market_data.low_24h.usd : null}
                            </div>
                        </div>
                        <div className='py-2 d-flex justify-content-between border-bottom'>
                            <div>24 Hour High</div>
                            <div>
                                {coin.market_data ? "$"+coin.market_data.high_24h.usd : null}
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 p-2 ">
                        <div className='py-2 d-flex justify-content-between border-bottom'>
                            <div>Market Cap</div>
                            <div>
                                {coin.market_data ? "$"+coin.market_data.market_cap.usd : null}
                            </div>
                        </div>
                        <div className='py-2 d-flex justify-content-between border-bottom'>
                            <div>Circulating Supply</div>
                            <div>
                                {coin.market_data ? "$"+coin.market_data.circulating_supply : null}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className='about mt-3 p-3  border-radius'>
            <h3>About</h3>
            <p className='mt-3'>
                {coin.description ? coin.description.en : null}
            </p>
        </div>
    </div>
  )
}

export default Coin