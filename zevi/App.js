
import './App.css';
import React, { useEffect, useState } from 'react';
import NewPage from './components/newpage'
import logo from './logo.png';


function App() {
  const [products, setData] = useState([])
  useEffect(() => {
    fetch('https://fakestoreapi.com/products').then((result) => {
      result.json().then((resp) => {
        setData(resp)
      })
    })
  }, [])

  let b = document.getElementById('hid');
  function Event() {
    if (b.style.display = 'none') {
      b.style.display = 'block'
    }
    else {
      b.style.display = 'none'
    }
  }


let a = true ;

return  (
    <div className="App" >
      <div className='background' id='page-1' >
        <div className='head'>

          <div className='logo'> <img src={logo} alt="" /></div>
        </div>
        <div className='contain'>

          <input className='input' placeholder='Search' id='sugst' onClick={Event} />
          <div className='suggest' id='hid' >
            <h1>Latest Trends</h1>
            <div className='grid'>
              {products.filter((products) => {
                return products.id < 5
              }).map((products) => {
                return (
                  <div className='parent' key={products.id = 4}>
                    <img src={products.image} alt='view Product' onClick={()=>{
                      document.getElementById('page-1').style.display='none';
                      document.getElementById('new-page').style.display='block'
                    }} />
                    <p>{products.title}</p>
                  </div>
                )
              })}
            </div>
            <div className='popular'>
              <h1>Popular suggetions</h1>
              {products.filter((products) => {
                return products.id < 5
              }).map((products) => {
                return (
                  <p>{products.title}</p>
                )
              })}

            </div>
          </div>
        </div>

      </div>
      <div id='new-page'>
       <NewPage/>
      </div>
    </div>
  );


  



}

export default App;
