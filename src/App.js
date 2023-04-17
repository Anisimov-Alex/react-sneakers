import React from 'react';

const App = () => {
  return <div className='wrapper'>
    <header>
      <div className='headerLeft'>
        <img src="/img/logo.png" alt="logo" />
        <div className='headerLeft__info'>
        <h2>React Sneakers</h2>
        <p>Магазин лучших кроссовок</p>
        </div>
      </div>
      <div className='headerRight'>        
        <span> <img src="/img/cart.svg" alt="cart" /> 1205 руб.</span>
        <img src="/img/favlist.svg" alt="" />
        <img src="/img/profile.svg" alt="" />
      </div>
    </header>
    <main>
      <div className='slider'>
        <div>PLACEHOLDER</div>
        </div>
      <h1>Все кроссовки</h1>
      <div className='content'>
        <div className='item'>
          <img className='favButton' src="/img/favButtonInactive.svg" alt="" />
          <img className='sneakers' src="img/sneakers1.png" alt="" />
          <div className='description'>
            Мужские Кроссовки <br/> Nike Blazer Mid Suede
            <div className='price'>
              <div>
                <span>Цена:</span> <br/> 
              <b>12 999 руб.</b>
              </div>
              <button className='addButton'>
                <img src="img/addButton.svg" alt="" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
}

export default App;
