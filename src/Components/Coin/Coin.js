import React from "react";
import "./Coin.css";

const Coin = ({
  name,
  image,
  symbol,
  price,
  volume,
  priceChange,
  marketCap,
  marketCapRank,
}) => {
  return (
    <>
      <div className="coinContainer">
        <div className="coinRow">
        <div className="coin">
          <img src={image} alt="cryptoCoin" class="coinImage"></img>
          <h2 data-label="Name">{name}</h2>
          <p data-label="Symbol" className="coinSymbol">{symbol.toUpperCase()}</p>
        </div>
        <div className="coinData">
        <p className="coinPrice" data-label="Price">{price.toLocaleString()}</p>
        <div data-label="Market Cap Rank">{marketCapRank}</div>
        {priceChange < 0 ? (
          <div className="coinRed" data-label="Price Change Percentage">
            {priceChange.toFixed(2)}%
          </div>
        ) : (
          <div className="coinGreen" data-label="Price Change Percentage">
            +{priceChange.toFixed(2)}%
          </div>
        )}
        <div className="coinCap" data-label="Market Cap">{marketCap.toLocaleString()}</div>
        <div className="coinVolume" data-label="Volume">{volume.toLocaleString()}</div>
        </div>
        </div>
      </div>
    </>
  );
};

export default Coin;
