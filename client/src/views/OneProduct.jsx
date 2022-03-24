import React, {useEffect, useState} from 'react'
import axios from 'axios'
import { Link, useParams } from 'react-router-dom'


const OneProduct = () => {

    // pull id from url/params
    const{id} = useParams()
    const[product, setProduct] = useState()

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/products/${id}`)
            .then(res=>setProduct(res.data))
            .catch(err=>console.log(err))
    })

  return (
    <div>
        {product?
            <div>
                <h2>Title: {product.title}</h2>
                <p>Price: {product.price}</p>
                <p>Description: {product.description}</p>
                <Link to={'/'}>Home</Link>
            </div>:
            console.log("No Product")
        }
    </div>
  )
}

export default OneProduct