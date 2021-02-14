import React from 'react';
export default function ItemCard(item) {

  return (
    <div className="container">
      <div className="background-element">
      </div>
      <div className="highlight-window">
        <div className='highlight-overlay'></div>
      </div>
      <div className="window">
        <ShopItemFunc item={item} />
      </div>
    </div>
  )
}

function ShopItemFunc(item) {
    // console.log(item);
    return (
    <div className="ItemCard">
      <div className="description">{item.item.brand}</div>
      <h1 className="h1">{item.item.title}</h1>
      <h3 className="h3">{item.item.description}</h3>
      <p className="description-full">{item.item.descriptionFull}</p>
      <div className="divider"></div>
      <div className="CardBottom">
       {/* eslint-disable-next-line no-undef */}
        <div className="price">{Intl.NumberFormat('en-GB', {
          style: 'currency',
          currency: item.item.currency,
          currencyDisplay: 'symbol',
        }).format(item.item.price)}</div>
        <button className="CardAddToBasket">ДОБАВИТЬ В КОРЗИНУ</button>
      </div>
    </div>
  );
}