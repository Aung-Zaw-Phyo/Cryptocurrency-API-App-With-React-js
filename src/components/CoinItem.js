import React from 'react'

const CoinItem = (props) => {
  return (
    <div className='d-flex justify-content-between align-items-center coin-row' >
        <p>{props.coin.market_cap_rank}</p>
        <div className='d-flex align-items-center justify-content-center'>
            <img className='' height="40px" src={props.coin.image} alt="" />
            <div>{props.coin.symbol.toUpperCase()}</div>
        </div>
        <p>${props.coin.current_price.toLocaleString()}</p>
        <p>{props.coin.price_change_percentage_24h.toLocaleString()}%</p>
        <p className="d-none d-lg-block">{props.coin.total_volume.toLocaleString()}$</p>
        <p className="d-none d-lg-block">{props.coin.market_cap.toLocaleString()}$</p>
    </div>
  )
}

export default CoinItem