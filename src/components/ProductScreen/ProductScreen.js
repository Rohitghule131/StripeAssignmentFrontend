import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import Navbar from '../Navbar.js/Navbar'
import OrderButton from './OrderButton/OrderButton'
import Product from './Product/Product'
import { Get_Product } from '../../services/redux/Actions'
import './ProductScreenCss.css'


function ProductScreen() {
  // use Dispatch method to call Get_Product action for get product data from backend
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(Get_Product())
  }, [])

  return (
    <React.Fragment>

      {/* Added Component here */}

      <Navbar />
      <Product />

      {/* Added Parent Div for media query if screen width is 900px so render below component else hide */}

      <div id='orderButton'>
        <OrderButton />
      </div>

    </React.Fragment>
  )
}

export default ProductScreen