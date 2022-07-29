import { Box,Typography } from '@mui/material'
import React, { useState, useEffect } from 'react'
import "./Product.css"
import { detailData } from '../../../services/redux/State'
import MessageModel from "../Model/MessageModel"
import { useSelector } from 'react-redux'
import ImageSilder from './Image Silder/ImageSilder'

function Product() {
  const data = useSelector(state=>state.productReducer.product[0])
  const productFetch = useSelector(state=>state.productReducer.productFetch)
  const [modelMessage, setModelMessage] = useState("")
  const [open, setOpen] = useState(false)
  useEffect(() => {
    let urlMessage = new URLSearchParams(window.location.search)
    if(urlMessage.get("success")){
      setModelMessage("success")
      setOpen(true)
    }
    if(urlMessage.get("cancel")){
      setModelMessage("cancel")
      setOpen(false)
    }
  }, [])
  
  return (
    <>
    {productFetch?
    <Box className='productDiv' style={{'display':'flex','justifyContent':'center'}}>
      <Box className='productDetail'>
        <Box className='detail'>
        <Typography
        id='appleProduct'
            variant="p"
            sx={{marginTop:"15px",marginBottom:"15px"}}
            component="p"
          >
           {data.brand_name}
          </Typography>
          <Typography
          id='Heading'
            variant="p"
            component="p"
          >
           {data.name_of_product}
          </Typography>
          <Typography
            variant="p"
            className='li'
            component="p"
            sx={{marginTop:"15px",marginBottom:"15px"}}
          >
           {data.theme}
          </Typography>
          <Typography
            variant="p"
            component="ul"
            sx={{margin:"10px 0 10px"}}
          >
          {detailData.map(elem=>{
            return (
              <Typography
              variant="p"
              component="li"
              className='li'
              sx={{margin:"10px 0 10px"}}
            >
              {elem}
            </Typography>
            )
          })}
          </Typography>
        </Box>    
      </Box>
        <p id="aboutProduct">About Product</p>
        <Box className='imageDotDiv'>
            <ImageSilder/>
        </Box>
        <MessageModel modelMessage={modelMessage} open={open} setOpen={setOpen}/>
    </Box>:<></>}
    </>
  )
}

export default Product