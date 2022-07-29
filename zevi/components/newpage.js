import React, { useState, useEffect } from "react";
import logo from '../logo.png';
import '../App.css';
import Star1 from "./star1";
import Star5 from "./star5";
import Star3 from "./star3";
import Star2 from "./star2";
import Star4 from "./star4";
import { FaLongArrowAltDown } from "react-icons/fa";


function NewPage() {
    const [items, setData] = useState([]);
    const [checked,setCheck]=useState(false);
    useEffect(() => {
        fetch('https://fakestoreapi.com/products').then((result) => {
            result.json().then((resp) => {
                setData(resp)
            })
        })
    }, [])
function FilterResult( ){
    const result =items.filter((currentData)=>{
        return currentData.price < 50;

      });
      setCheck(checked==true);
      
      if(checked == true){
        setData(result);
      }
      else if (checked==false){
        setData(items);
        console.log(items)
      }
}

    return (
        <><div className='head'>

            <div className='logo'> <img src={logo} alt="" /></div>
        </div>
            <div className='new'>
                <input className='input' placeholder='Search' id='lining' />
                <div className="flex-box">
                    <div className="cont-1">
                        <h1>Search Results </h1>
                        <div className="flex"><p><b>PRICE RANGE</b></p><FaLongArrowAltDown /> </div>
                        <div>
                            <input id="cost" type="checkbox" onChange={FilterResult}/>  Under 50$
                            <br />
                            <input type="checkbox" />  100-200$
                        </div>
                        <div className="flex"><p><b>RATINGS</b></p><FaLongArrowAltDown /> </div>
                        <div>
                            <div className="stars">
                                <input type="checkbox" /> <Star5 />
                            </div>
                            <br />
                            <div className="stars">
                                <input type="checkbox" /> <Star4 />
                            </div>
                            <br />
                            <div className="stars">
                                <input type="checkbox" /> <Star3 />
                            </div>
                            <br />
                            <div className="stars">
                                <input type="checkbox" /> <Star2 />
                            </div>
                            <br />
                            <div className="stars">
                                <input type="checkbox" /> <Star1 />
                            </div>
                        </div>

                    </div>
                    <div className="cont-2">
                        <div className="grid-box">
                            {items.map((items) => {
                                return (
                                    <div className="bot" key={items.id}>
                                        <div className="photo">
                                            <img src={items.image} />
                                            <div className="center">
                                                <p>View Product</p>
                                            </div>
                                        </div>
                                        <div className="title">
                                            <p className="over">{items.title}</p>
                                        </div>
                                        <p className="price"><b>{items.price + ' $'}</b></p>
                                        
                                        {
                                           items.rating.rate>=4&&items.rating.rate<=4.5?<Star4/>:[
                                            items.rating.rate>=3&&items.rating.rate<=3.9?<Star3/>:[
                                                items.rating.rate>=2&&items.rating.rate<=2.9?<Star2/>:[
                                                    items.rating.rate>=1&&items.rating.rate<=1.9?<Star1/>:[
                                                        items.rating.rate>=4.5&&items.rating.rate<=5?<Star5/>:""
                                                    ]
                                                ]
                                            ]
                                           ]
                                        }

                                    </div>
                                )
                            })}

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default NewPage;