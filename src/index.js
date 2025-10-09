import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const burgerData = [
  {
    name: "Classic Burger",
    ingredients: "Fresh focaccia bread with italian olive oil and rosemary",
    price: 6,
    photoName: "/burgers/classic-burger.jpg",
    soldOut: false,
  },
  {
    name: "Cheeseburger",
    ingredients: "Beef patty with tomato and mozarella",
    price: 10,
    photoName: "/burgers/cheeseburger.jpg",
    soldOut: false,
  },
  {
    name: "Beef Burger",
    ingredients:
      "Beef patty with tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "/burgers/beef-burger.jpg",
    soldOut: false,
  },
  {
    name: "Black burger - chiken and bekon",
    ingredients: "Beef patty with tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "/burgers/black-burger.jpg",
    soldOut: false,
  },
  {
    name: "Eggs Benedict Burger",
    ingredients: "Beef patty with tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "/burgers/benedict-burger.jpg",
    soldOut: true,
  },
  {
    name: "Explosion Burger",
    ingredients:
      "Beef patty with tomato, mozarella, ham, arugula, and burrata cheese",
    price: 18,
    photoName: "/burgers/explosion-burger.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  const style = {};

  return (
    <header className="header">
      <h1 style={style}>Fast React Burger Co.</h1>
    </header>
  );
}

function Menu() {
  const burgers = burgerData;
  // const burgers = [];
  const numBurgers = burgers.length;

  return (
    <main className="menu">
      <h2>Our menu</h2>

      {numBurgers > 0 ? (
        <>
          <p>
            Authentic American burgers. 6 creative dishes to choose from. All
            from our grill, all organic, all delicious.
          </p>

          <ul className="burgers">
            {burgers.map((burger) => (
              <Burger burgerObj={burger} key={burger.name} />
            ))}
          </ul>
        </>
      ) : (
        <p>We're still working on our menu. Please come back later :)</p>
      )}
    </main>
  );
}

function Burger({ burgerObj }) {
  console.log(burgerObj);

  return (
    <li className={`burger ${burgerObj.soldOut ? "sold-out" : ""}`}>
      <img src={burgerObj.photoName} alt={burgerObj.name} />
      <div>
        <h3>{burgerObj.name}</h3>
        <p>{burgerObj.ingredients}</p>

        <span>{burgerObj.soldOut ? "SOLD OUT" : burgerObj.price}</span>
      </div>
    </li>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;
  console.log(isOpen);

  // if (hour >= openHour && hour <= closeHour) alert("We're currently open!");
  // else alert("Sorry we're closed");

  // if (!isOpen) return <p>CLOSED</p>;

  return (
    <footer className="footer">
      {isOpen ? (
        <Order closeHour={closeHour} openHour={openHour} />
      ) : (
        <p>
          We're happy to welcome you between {openHour}:00 and {closeHour}:00.
        </p>
      )}
    </footer>
  );

  // return React.createElement("footer", null, "We're currently open!");
}

function Order({ closeHour, openHour }) {
  return (
    <div className="order">
      <p>
        We're open from {openHour}:00 to {closeHour}:00. Come visit us or order
        online.
      </p>
      <button className="btn">Order</button>
    </div>
  );
}

// React v18
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
