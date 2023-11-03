import React, { useEffect, useState } from 'react';
import Footer from '../Footer';
import Navbar from '../MBAR';
import './Myorder.css';

export default function MyOrder() {

    const [orderData, setorderData] = useState([]);

    const fetchMyOrder = async () => {
        console.log(localStorage.getItem('userEmail'));
        await fetch("http://localhost:5000/api/myorderData", {
            // credentials: 'include',
            // Origin:"http://localhost:3000/login",
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: localStorage.getItem('userEmail')
            })
        }).then(async (res) => {
            let response = await res.json();
            setorderData(response);
        });



        // await res.map((data)=>{
        //    console.log(data)
        // })
    };

    useEffect(() => {
        fetchMyOrder();
    }, []);

    return (
        <div>
            <div>
                <Navbar />
            </div>

            <div className='slogan'><h1 className='slogantitle'>Thank You For Orders.</h1></div>
            <div className='slogan1'><h1 className='slogantitle'>We respect your orders.</h1></div>
            <div className='sloganimgbackground' ><img className='ordersloganimage' src='https://source.unsplash.com/random/900x700/?sweets'></img></div>


            <div className='container'>


                {orderData !== [] ? <div>{orderData.order_data && orderData.order_data.map(data => {
                    return (<div>{
                        data !== [] ? <div>{data.map(data1 => {
                            return (
                                <div>
                                    <table className='mtable' style={{ width: "100%" }}>
                                        <tr>
                                            <th className='heading w-25'>
                                                {data1.order_date}
                                            </th>
                                            <td className='tableimg'>
                                                <img src={data1.img} alt='Thank You for Order' style={{ height: "150px", width: "150px", objectFit: "fill" }}></img>
                                            </td>

                                            <td className='tabledata'>
                                                <h7 className='tabletext'>{data1.name}</h7>
                                            </td>
                                            <td className='tabledata'>
                                                <h7 className='tabletext'>  {data1.qty}</h7>
                                            </td>
                                            <td className='tabledata'>
                                                <h7 className='tabletext'>  {data1.size}</h7>
                                            </td>
                                            <td className='tabledata'>
                                                <h7 className='tabletext'> {data1.price}</h7>
                                            </td>
                                        </tr>
                                    </table>


                                </div>
                            )
                        })}</div>
                            : "no2"}
                    </div>)
                })}</div> : "no1"}
            </div>



            <Footer />
        </div>
    );
}
