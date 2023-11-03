import React from 'react'
import { useState, useEffect } from 'react'
import Navbar from '../MBAR'
import './Admindata.css'

const Admindata = () => {


    const [allorders, setallorders] = useState([]);

    const fetchallorders = async () => {
        let response = await fetch("http://localhost:5000/food/adminData", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },

        });

        response = await response.json();
        setallorders(response);

    }


    useEffect(() => {
        fetchallorders()
    }, [])






    return (
        <>
            <div><Navbar /></div>
            <div>{allorders.email}</div>
            <div>

                {allorders !== [] ? allorders && allorders.map((data) => {
                    return (
                        <div>
                            <table className='mtable' style={{width:"100%"}}>
                                <th className='tabledata'><h7 className='allorderemail'>{data.email}</h7></th>
                                <td>
                                    {data !== [] ? <div>{data.order_data && data.order_data.map(data1 => {
                                        return (
                                            <div>
                                                {data1 !== [] ? data1 && data1.map((data2) => {
                                                    return (
                                                        <div>
                                                            {data2.order_date !== [] ? <th className='tabledata'><h7 className='TABLETEXT'>{data2.order_date}</h7></th> :"no date"}
                                                            {data2.name !== [] ? <td className='tabledata'><h7 className='TABLETEXT1'>{data2.name}</h7></td> :"no name"}
                                                            {data2.qty !== [] ? <td className='tabledata'><h7 className='TABLETEXT'>{data2.qty}</h7></td> :"no qty"}
                                                            {data2.size !== [] ? <td className='tabledata'><h7 className='TABLETEXT'>{data2.size}</h7></td> :"no size"}
                                                            {data2.price !== [] ? <td className='tabledata'><h7 className='TABLETEXT'>{data2.price}</h7></td> :"no price"}
                                                            
                                                        </div>

                                                    )
                                                })
                                                    : "no3"}
                                            </div>
                                        )
                                    })}</div> : "no2"}
                                </td>

                            </table>
                        </div>

                    )
                }) : "no1"}

            </div>
        </>
    )
}

export default Admindata