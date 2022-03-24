// page that combines two diffrent views into one

import React, { useEffect, useState } from 'react'
import axios from 'axios'
import CreateProduct from './CreateProduct'
import AllProducts from './AllProducts'

const Main = () => {
    const [products, setProducts] = useState()
    const [refresh, setRefresh] = useState(false)

    //main page we use the get method for all produtcs and then we can send it through props to the all products page
    useEffect(() => {
        axios.get(`http://localhost:8000/api/products`)
            .then(res => setProducts(res.data))
            .catch(err => console.log(err))
    }, [refresh])

        // declare refresh as a const to send through the props
    const reload = ()=>{
        setRefresh(!refresh)
    }

    return (
        <div>
            <CreateProduct reload={reload}/>
            {
                products &&
                <AllProducts products={products} reload={reload}/>
            }
        </div>
    )
}

export default Main