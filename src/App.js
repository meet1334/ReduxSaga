import logo from './logo.svg';
import './App.css';
import {addToCart} from "./Redux/action";
import {useDispatch} from 'react-redux';

function App() {
  const dispatch = useDispatch();
  const product ={
    id:1,
    name:"sampoo",
    price:1000,
    quantity:2
  };
  return (
    <div className="App">
      <button onClick={()=>dispatch(addToCart(product))}>Add to Cart</button>
    
    </div>
  );
}

export default App;
