import Card from './components/Card'
import Header from './components/Header'
import RightBasket from './components/RighrBasket';

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
          <Card />
          <Card />  
          <Card />  
          <Card />  
          <Card />  
          <Card />  
          <Card />  
          <Card />  
          <Card />
          <Card />  
          <Card />  
          <Card />  
          <Card />  
          <Card />  
          <Card />  
          <Card />  
        </div>
      </div>
    </div>
  );
}

export default App;   //возможность использовать эту функцию в других файлах
