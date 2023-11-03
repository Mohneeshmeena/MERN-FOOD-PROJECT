import React from 'react'
import { useCart } from './ContextReducer';
import { useDispatchCart } from './ContextReducer';
import { useState } from 'react';
import { useEffect } from 'react';
import { useRef } from 'react';
import './CARDS.css'
export default function CARDS(props) {
  let options = props.options;
  let foodItem = props.Item;
  let priceOptions = Object.keys(options);
  const priceRef = useRef();
  const dispatch = useDispatchCart();
  let data = useCart();
  const [qty, setQty] = useState(1)
  const [size, setSize] = useState("")




  useEffect(() => {
    setSize(priceRef.current.value)
  }, [])

  let finalPrice = qty * parseInt(options[size]);   //This is where Price is changing


  const handleAddToCart = async () => {
    let food = []
    for (const item of data) {
      if (item.id === foodItem._id) {
        food = item;

        break;
      }
    }

    console.log(food)
    console.log(new Date())
    if (food !== []) {
      if (food.size === size) {
        await dispatch({ type: "UPDATE", id: foodItem._id, price: finalPrice, qty: qty })
        return
      }
      else if (food.size !== size) {
        await dispatch({ type: "ADD", id: foodItem._id, name: foodItem.name, price: finalPrice, qty: qty, size: size, img: foodItem.img })
        console.log("Size different so simply ADD one more to the list")

        return
      }
      return
    }

    await dispatch({ type: "ADD", id: foodItem._id, name: foodItem.name, price: finalPrice, qty: qty, size: size })

  }




  return (
    <div >
      <div className="FOODCARD" style={{ "width": "14rem", "maxHeight": "350px", }}>
        <img src={foodItem.img} className="card-img-top" alt="..." style={{ height: "150px", objectFit: "fill" }} />
        <div className="card-body">
          <p className="card-text"><h6 className='fooditemname'>{foodItem.name}</h6></p>
          <div className='container1 w-100 '>
            <select className='options' onChange={(e) => { setQty(e.target.value) }}>
              {Array.from(Array(6), (e, i) => {
                return (
                  <option key={i + 1} value={i + 1}>{i + 1}</option>

                )
              })}
            </select>
            <select className='options' ref={priceRef} onChange={(e) => { setSize(e.target.value) }}>
              {priceOptions.map((data) => {

                return <option key={data} value={data}>{data}</option>
              })}
            </select>
            <div className='pricetext'>
              Rs{finalPrice}/-
            </div>

            <button className={`options `} onClick={handleAddToCart}>Add to Cart</button>

          </div>
        </div>

      </div>

    </div>
  )
}
