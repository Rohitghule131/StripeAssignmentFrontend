import React,{useEffect} from 'react'
import { useDispatch } from 'react-redux'
import Navbar from '../Navbar.js/Navbar'
import OrderButton from './OrderButton/OrderButton'
import Product from './Product/Product'
import { Get_Product } from '../../services/redux/Actions'

import './ProductScreenCss.css'
function ProductScreen() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(Get_Product())
  }, [])
  
  return (
    <React.Fragment>
        <Navbar/>
        <Product/>
        <div id='orderButton'>
          <div>
          <OrderButton/>
          </div>
        </div>
    </React.Fragment>
  )
}

export default ProductScreen