import React from 'react';
import axios from 'axios';
import Card from './components/Card';
import Header from './components/Header';
import RightBasket from './components/RighrBasket';
import { useEffect, useState } from 'react';



function App() {
  const [items, setItems] = useState([])                     //карточки товаров на странице
  const [basketItems, setBasketItems] = useState([])         //товары в корзине
  //const [liked, setLiked] = useState([])                     //избранные товары
  const [cardOpened, setCardOpened] = useState(false)        //состояние открытия корзины
  const [searchValue, setSearchValue] = useState('')         //значение в строке поиска товаров
  

  //добавление карточек товаров из бекенда на основную страницу 
  //и в корзину(если ранее туда было что-то добавлено)
  useEffect(() => {
    axios.get('https://67177e74b910c6a6e02880de.mockapi.io/items')
      .then(res => {
        setItems(res.data);
      })
      .catch(error => {
        console.error('Ошибка при загрузке данных карточек товаров основной страницы:', error);
      });

    axios.get('https://67177e74b910c6a6e02880de.mockapi.io/basket').then(res => {
      setBasketItems(res.data)
    })

  }, []);


  // //добавление товара в избранное
  // const onAddToFavourite = (obj) => {
  //   setLiked(prev => [...prev, obj])
  //   console.log(liked)
  // }


  //добавление товара в корзину
  const onAddToBasket = async (obj) => {
    try {
        const response = await axios.post('https://67177e74b910c6a6e02880de.mockapi.io/basket', obj);
        setBasketItems(prev => [...prev, response.data]); // Используйте response.data для получения добавленного товара
    } catch (error) {
        console.error('Ошибка при добавлении товара в корзину:', error);
    }
};
    
  //удаление товара из корзины (из бекенда в том числе)
  const onRemoveItemBasket = async (id) => {
    console.log('ID товара для удаления:', id);
    try {
        await axios.delete(`https://67177e74b910c6a6e02880de.mockapi.io/basket/${id}`);
        setBasketItems(prev => prev.filter(item => item.id !== id));
    } catch (error) {
        console.error('Ошибка при удалении товара:', error);
    }
};


  //помещаем в переменную searchValue значение из инпута
  const onChangeSearchValue = (event) => (
    setSearchValue(event.target.value)
  )



  return (

    <div className="wrapper">
      {cardOpened && <RightBasket items={basketItems} onClose={() => setCardOpened(false)} onRemove={onRemoveItemBasket} />}   
      {/* клик по иконке корзины */}
      <Header onClickCard={()=>setCardOpened(true)} />    

      {/* основная часть страницы - карточки товаров */}
      <div className="content">
        <div className="header2">
          <h1>{searchValue ? `Search for: "${searchValue}"` : `All toys`}</h1>
          <div className="searchBlock">
            <img src="/img/searchLupa.svg" alt="Search"/>
            <input onChange={onChangeSearchValue} value={searchValue} placeholder="Search..." />
            {searchValue && <img onClick={() => setSearchValue('')} className='clearSearch' src="/img/cancel_passive.svg" alt='clear' /> }
          </div>
        </div>

        <div className="toys">

         {/*передаем элементы массива в аргументы функции Card
         т.е. берем объекты массива и превращаем в реакт компоненты*/}
         {/* фильтруем только элементы которые написаны в поисковой строке (если она не пустая) */}
         {items.filter(item => item.title.toLowerCase().includes(searchValue.toLowerCase())).map((item) => (
          <Card 
            key={item.id}
            title={item.title}
            price={item.price}
            imageUrl={item.imageUrl}
            onClickPlus={() => onAddToBasket(item)}
            //onClickFavourite={ () => onAddToFavourite(item)}
          />
         ))}
           
        </div>
      </div>
    </div>
  );
}

export default App;   //возможность использовать эту функцию в других файлах
