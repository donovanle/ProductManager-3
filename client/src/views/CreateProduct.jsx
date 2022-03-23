import React, {useState} from 'react'
import axios from 'axios'
import { useHistory } from 'react-router-dom'

const CreateProduct = () => {
    const [title, setTitle] = useState("")
    const [price, setPrice] = useState(0)
    const [description, setDescription] = useState("")
    const history = useHistory()
    const [refresh , setRefresh] = useState(true)

    const handleSubmit =(e)=>{
        e.preventDefault()
        axios.post('http://localhost:8000/api/products/new',{title, price, description})
            .then(res=>{
                setRefresh(!refresh)
            })
            .catch(err=>console.log(err));
            window.location.reload(true);
    }

    return (
    <div>
        <form onSubmit={handleSubmit} className="d-flex flex-column p-3 w-25">
            <div className='mt-2'>
                <label className='mr-2 h5'>Title:</label>
                <input type="text" name="title" value={title}
                    onChange={(e)=>setTitle(e.target.value)}
                />
            </div>
            <div className='mt-2'>
                <label className='mr-2 h5'>Price: </label>
                <input type="number" name="price" value={price}
                    onChange={(e)=>setPrice(e.target.value)}
                />
            </div>
            <div className='mt-2'>
                <label className='mr-2 h5'>Description: </label>
                <input type="text" name="description" value={description}
                    onChange={(e)=>setDescription(e.target.value)}
                />
            </div>
            <button className='btn btn-primary w-25 mt-2'>Create</button>
        </form>
    </div>
  )
}

export default CreateProduct