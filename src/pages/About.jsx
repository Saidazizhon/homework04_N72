import React from 'react'
import { useGetProductsQuery, useCreateProductMutation, useDeleteProductMutation} from '../redux/api/product-api';

const About = () => {

   const {data, isLoading,} = useGetProductsQuery()
   const [createProduct, {}] = useCreateProductMutation()
   const [deleteProduct] = useDeleteProductMutation()
   
   const handleCreateProduct = e => {
    e.preventDefault()
    const data = new FormData(e.target)
    const newProduct = Object.fromEntries(data)
    createProduct(newProduct)
        .unwrap()
        .then((res)=>{
            e.target.reset()
        })

   }

   const handleDeleteProduct = id => {
    deleteProduct(id)
   }

  return (
    <div>
        <form className='pl-36 bg-slate-100 mt-5 mb-5' onSubmit={handleCreateProduct} action="">
            <input className='ml-20' type="text" placeholder='url' name='url'/>
            <input className='ml-20' type="text" placeholder='title' name='title'/>
            <input className='ml-20' type="text" placeholder='description' name='description'/>
            <input className='ml-20' type="text" placeholder='previousprice' name="previousprice"/>
            <button className='ml-20'>Create</button>
        </form>
        {
            isLoading && <p className='text-center text-3xl mt-72'>Loading...</p>
        }
        {
            data?.map(item => (
                <div key={item.id}>
                    <img src={item.url} alt="" />
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                    <p><b>{item.previousprice}</b></p>
                    <button onClick={()=> handleDeleteProduct(item.id)} className='text-xl text-white bg-black'>delete</button>
                </div>
            ))
        }
    </div>
  )
}

export default About