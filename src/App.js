import p1 from "./i1.jpg";
import p2 from "./i2.jpg";
import p3 from "./i3.jpg";
import p4 from "./i4.jpg";
function App() {
  return (
    <div className="App">
      <div className="item">
        <img className="img" src={p1} alt="logo1" />
        <p> p1 </p>
        <p>Rs. 1000 </p>

        <button id="add">add to cart</button>
        <button id="delete">remove</button>
      </div>
      <div className="item">
        <img className="img" src={p2} alt="logo2" />
        <p> p1 </p>
        <p>Rs. 1000 </p>

        <button id="add">add to cart</button>
        <button id="delete">remove</button>
      </div>
      <div className="item">
        <img className="img" src={p3} alt="logo1" />
        <p> p1 </p>
        <p>Rs. 1000 </p>

        <button id="add">add to cart</button>
        <button id="delete">remove</button>
      </div>
      <div className="item">
        <img className="img" src={p4} alt="logo1" />
        <p> p1 </p>
        <p>Rs. 1000 </p>

        <button id="add">add to cart</button>
        <button id="delete">remove</button>
      </div>
    </div>
  );
}

export default App;
