import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Navbar from '../Navbar/Navbar'
import OrderButton from './OrderButton/OrderButton'
import Product from './Product/Product'
import SkeletonLoader from './Skeleton Loader/SkeletonLoader'
import { Get_Product } from '../../modules/actions/Actions'
import './ProductScreenCss.css'


function ProductScreen() {
  // use Dispatch method to call Get_Product action for get product data from backend
  const ProductFetch = useSelector(state=>state.productReducer.productFetch)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(Get_Product())
  }, [])

  return (
    <React.Fragment>

      {/* Added Component here */}

      <Navbar />
      
      {
        true ?
      <Product />:<SkeletonLoader/>
      }


      <div id='orderButton'>
      <OrderButton />
      </div>
    </React.Fragment>
  )
}

export default ProductScreen