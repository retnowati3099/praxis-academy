import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();


const myElement = <h2>Hi, I love JSX</h2>; // Menggunakan JSX (JavaScript XML)
const root1 = ReactDOM.createRoot(document.getElementById('root1'));
root1.render(myElement)


const myElement1 = React.createElement('h2', {}, 'I do not user JSX'); // Tanpa JSX
const root2 = ReactDOM.createRoot(document.getElementById("root2"));
root2.render(myElement1);


function FullName(props){
  return <h2>Hello, {props.name}</h2>;
}
const element = <FullName name="Wil"/>; // merepresentasikan user-defined component
const root3 = ReactDOM.createRoot(document.getElementById("root3"));
root3.render(element);
// keterangan:
// 1. Memanggil root3.render() dengan elemen <FullName name="Wil"/>
// 2. React memanggil komponen FullName dengan {name: "Wil"} sebagai props
// 3. Komponen FullName mengembalikan elemen <h2>Hello, Will</h2> sebagai hasilnya
// 4. React DOM secara efisien mengupdate DOM untuk mencocokkan <h2>Hello, Will</h2>

// Composing components
// Componen dapat mengaju kepada komponen lain di outputnys


function SayHello(props){
  return <h2>Hello, {props.name}</h2>
}

function Hello(){
  return (
      <div>
          <SayHello name="Afifah"/>
          <SayHello name="Latri"/>
      </div>
  );
}
const root4 = ReactDOM.createRoot(document.getElementById("root4"));
root4.render(<Hello />)