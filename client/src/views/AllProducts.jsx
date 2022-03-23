import React, {useState, useEffect} from 'react'
import axios from "axios"
import { Link } from 'react-router-dom'


const AllProducts = () => {
    const [products, setProducts] = useState()
    const [refresh , setRefresh] = useState(true)

    useEffect(()=>{
        axios.get('http://localhost:8000/api/products')
            .then(res=>setProducts(res.data))
            .catch(err=>console.log(err))
    },[refresh])


    const handleDelete=(deleteId)=>{
        axios.delete(`http://localhost:8000/api/products/delete/${deleteId}`)
        .then(res=>{
            setRefresh(!refresh)
        })
        .catch(err=>console.log(err))
}
  return (
    <div className='p-3'>
        <h1>All Products:</h1>
        <div>
            {
                products &&
                    products.map((product, i)=>(
                        <div key={i} className="d-flex justify-content-between w-25 m-2 align-items-center">
                            <Link to={`/products/${product._id}`} className="h4">{product.title}</Link>
                            <Link to={`/${product._id}/edit`}>Edit</Link>
                            <button onClick={()=>handleDelete(product._id)} className="btn btn-danger">Delete</button>
                        </div>
                    ))
            }
        </div>
    </div>
  )
} 

export default AllProducts