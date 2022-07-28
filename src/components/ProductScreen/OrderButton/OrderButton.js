import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import "./OrderScreenCss.css"
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { countIncrementHandler, countDecrementHandler } from '../../../services/redux/Reducers';
import { useDispatch, useSelector } from 'react-redux';
import { PAYMENT_URL } from '../../../services/Urls';

function OrderButton(props) {
    const {aboutProduct, setAboutProduct} = props
    const aboutProdctHandler = ()=>{
        if(aboutProduct){
            setAboutProduct(false)
        }
        else{
            setAboutProduct(true)
        }
    }
    const price = useSelector(state => state.productReducer.price)
    const count = useSelector(state => state.productReducer.count)
    const buttonGroup = {
        "display": "flex"
    }
    const dispatch = useDispatch()
    const handleIncrement = () => {
        dispatch(countIncrementHandler())
    }
    const handleDecrement = () => {
        dispatch(countDecrementHandler())
    }
    return (
        <Box style={{ "width": "100%" }}>
            <Box style={buttonGroup}>
                <p id="aboutP" style={{"borderBottom":!aboutProduct?"2px solid blue":""}} onClick={(e)=>{
                    aboutProdctHandler()
                }}>
                    About Product
                </p>
                <Typography
                    id='price'
                    variant="p"
                    noWrap
                    component="p"
                    sx={{
                        display: { xs: 'flex' },
                        flexGrow: 1,
                        color: 'inherit',
                        textDecoration: 'none',
                    }}
                >
                    Price <span style={{ "marginLeft": "8px", "fontWeight": "500" }}>&#36;299</span>
                </Typography>
                <div id='buttongroup'>
                    <p id='counter'>{count}</p>
                    <div id="upDownButton">
                        <div>
                            <button
                                className='buttonUpDown'
                                onClick={() => {
                                    handleIncrement()
                                }}
                            >
                                <ArrowDropUpIcon sx={{ fontSize: 'small' }} />
                            </button>
                        </div>

                        <div>
                            <button
                                className='buttonUpDown'
                                onClick={() => {
                                    handleDecrement()
                                }}
                            >
                                <ArrowDropDownIcon sx={{ fontSize: 'small' }} />
                            </button>
                        </div>
                    </div>
                </div>
                <form action={`${PAYMENT_URL}1/${count}`} method="POST">
                    <Button
                        type='submit'
                        id='BuyNowButon'
                        sx={{
                            "lineHeight": "none",
                            "letterSpacing": "none",
                            "textTransform": "capitalize",
                            "borderRadius": "25px",
                            "paddingLeft": "36px",
                            "paddingRight": "36px",
                            "fontSize": "medium"
                        }}
                        variant='contained'>
                        Buy Now
                    </Button>
                </form>
            </Box>
        </Box>
    )
}

export default OrderButton