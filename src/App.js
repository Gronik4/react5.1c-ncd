import './css/App.css';
import './css/stamp.css';
import data from './components/carddata';
import Card from './components/Card';

function App() {
  const cardVitem = data.map((el, index) => {
    return(
      <Card key={index} title={el.title} text={el.text}>
       { el.src? <img className='card_img' src={el.src} alt={el.alt}/>: <p></p>}
      </Card>
    )
  })
  return (
    <div className="App">
      {cardVitem}
    </div>
  );
}

export default App;
