import { Box, Typography } from '@mui/material'
import React, { useState, useEffect } from 'react'
import "./Product.css"
import { detailData } from '../../../services/redux/State'
import MessageModel from "../Model/MessageModel"
import { useSelector } from 'react-redux'
import ImageSilder from './Image Silder/ImageSilder'
import { useNavigate } from 'react-router-dom'

function Product() {
  const data = useSelector(state => state.productReducer.product[0])
  const productFetch = useSelector(state => state.productReducer.productFetch)
  const [modelMessage, setModelMessage] = useState("")
  const [open, setOpen] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    // get search query if it is success so below if gets true and erase the query
    let searchQuery = new URLSearchParams(window.location.search)
    if (searchQuery.get("success")) {
      setModelMessage("success")
      setOpen(true)
      searchQuery.delete("success");
      navigate({ search: searchQuery.toString() }, { replace: true });
    }
    // if it is cancel query so below if get true
    if (searchQuery.get("cancel")) {
      setModelMessage("cancel")
      setOpen(false)
      searchQuery.delete("cancel");
      navigate({ search: searchQuery.toString() }, { replace: true });
    }
  }, [navigate])

  return (
    <>
    {/* if Product detail is fetch from backend so it gets true */}
      {productFetch ?
        <Box className='productDiv' style={{ 'display': 'flex', 'justifyContent': 'center' }}>
          <Box className='productDetail'>
            <Box className='detail'>
              <Typography
                id='appleProduct'
                variant="p"
                sx={{ marginTop: "15px", marginBottom: "15px" }}
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
                sx={{ marginTop: "15px", marginBottom: "15px" }}
              >
                {data.theme}
              </Typography>
              <Typography
                variant="p"
                component="ul"
                sx={{ margin: "10px 0 10px" }}
              >
                {detailData.map(elem => {
                  return (
                    <Typography
                      variant="p"
                      component="li"
                      className='li'
                      sx={{ margin: "10px 0 10px" }}
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
            <ImageSilder />
          </Box>
          <MessageModel modelMessage={modelMessage} open={open} setOpen={setOpen} />
        </Box> : <>{/* if product cant fetch so shows nothing */}</>}
    </>
  )
}

export default Product