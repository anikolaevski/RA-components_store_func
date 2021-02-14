// import logo from './logo.svg';
import './App.css';
import './css/main.css';
import ItemCard from './ItemCard';

function App() {
  const item = {
    brand: 'Tiger of Sweden',
    title: 'Leonard coat',
    description: 'Minimalistic coat in cotton-blend',
    descriptionFull: 'Men\'s minimalistic overcoat in cotton-blend. Features a stand-up collar, concealed front closure and single back vent. Slim fit with clean, straight shape. Above-knee length.',
    price: 399,
    currency: 'GBP'
  }

  return ItemCard(item);
}

export default App;
