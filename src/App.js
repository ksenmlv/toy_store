import Card from './components/Card'
import Header from './components/Header'
import RightBasket from './components/RighrBasket';


const arr = [
  { title: "Bearbrick & Sesame Street 'Cookie Monster Costume'", price: 317, imageUrl: "/img/toys/bearbrick1.png"},
  { title: "Bearbrick X De scipable Me 'Kevin'", price: 616, imageUrl: "/img/toys/bearbrick2.png"},
  { title: "Bearbrick FCReal Bristol X COCA-COLA", price: 270, imageUrl: "/img/toys/bearbrick3.png"},
  { title: "Bearbrick x Dark Knight 'The Joker'", price: 302, imageUrl: "/img/toys/bearbrick4.png"},
  { title: "Bearbrick Squid Game 'Two-Toned Collectible Statue'", price: 156, imageUrl: "/img/toys/bearbrick5.png"},
  { title: "Bearbrick X Care Bears Cheer 'Bear Costume'", price: 313, imageUrl: "/img/toys/bearbrick6.png"},
  { title: "Bearbrick 'XLARGE'", price: 154, imageUrl: "/img/toys/bearbrick7.png"},
  { title: "Bearbrick Bape x COMME des GARCONS 'Camo Shark' ", price: 190, imageUrl: "/img/toys/bearbrick8.png"},
  { title: "Bearbrick Bape R X Alpha 'Camo Shark'", price: 419, imageUrl: "/img/toys/bearbrick9.png"},
  { title: "Bearbrick X Tom And Jerry 'Tom'", price: 333, imageUrl: "/img/toys/bearbrick10.png"},
  { title: "Bearbrick X Tom And Jerry 'Jerry'", price: 333, imageUrl: "/img/toys/bearbrick11.png"},
  { title: "Bearbrick x Pushead 'Jell-C Clear'", price: 451, imageUrl: "/img/toys/bearbrick12.png"},
  { title: "Bearbrick 'Elmo Costume'", price: 192, imageUrl: "/img/toys/bearbrick13.png"},
  { title: "Bearbrick x Marvel 'Iron Man'", price: 240, imageUrl: "/img/toys/bearbrick14.png"},
  { title: "Bearbrick 'So... Hi!'", price: 190, imageUrl: "/img/toys/bearbrick15.png"},
  { title: "Bearbrick Gremlins 'Gizmo Costume'", price: 343, imageUrl: "/img/toys/bearbrick16.png"}
]


function App() {
  return (
    <div className="wrapper">

      <RightBasket />   
      <Header />

      {/* основная часть страницы - карточки товаров */}
      <div className="content">
        <div className="header2">
          <h1>All toys</h1>
          <div className="searchBlock">
            <img src="/img/searchLupa.svg" alt="Search"/>
            <input placeholder="Search..." />
          </div>
        </div>

        <div className="toys">

         {/*передаем элементы массива в аргументы функции Card
         т.е. берем объекты массива и превращаем в реакт компоненты*/}
         
         {arr.map((obj) => (
          <Card 
            title={obj.title}
            price={obj.price}
            imageUrl={obj.imageUrl}
            onClickPlus={ () => console.log('plus')}
            onClickFavourite={ () => console.log('like') }
          />
         ))}
           
        </div>
      </div>
    </div>
  );
}

export default App;   //возможность использовать эту функцию в других файлах
