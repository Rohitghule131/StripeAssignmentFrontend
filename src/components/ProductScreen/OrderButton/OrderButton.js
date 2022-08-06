import { Box, Button, Typography } from '@mui/material'
import React, { useState } from 'react'
import "./OrderScreenCss.css"
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import LoadingButton from '@mui/lab/LoadingButton';
import { countIncrementHandler, countDecrementHandler } from '../../../modules/reducers/Reducers';
import { useDispatch, useSelector } from 'react-redux';
import { PAYMENT_URL } from '../../../utils/Urls';

function OrderButton(props) {
    const { aboutProduct, setAboutProduct } = props
    const [loading, setLoading] = useState(false)
    const handleClick = () => {
        setLoading(true)
    }
    const aboutProdctHandler = () => {
        if (aboutProduct) {
            setAboutProduct(false)
        }
        else {
            setAboutProduct(true)
        }
    }
    const price = useSelector(state => state.productReducer.price)
    const count = useSelector(state => state.productReducer.count)

    const dispatch = useDispatch()
    const handleIncrement = () => {
        dispatch(countIncrementHandler())
    }
    const handleDecrement = () => {
        dispatch(countDecrementHandler())
    }
    return (
        <Box className='buttons'>
            <Box className='buttonGroupDiv'>
                <p id="aboutP" style={{ "borderBottom": !aboutProduct ? "2px solid blue" : "" }} onClick={(e) => {
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
                    Price <span style={{ "marginLeft": "8px", "fontWeight": "600" }}>&#36;{price}.00</span>
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
                                <ArrowDropUpIcon style={{ "color": (count === 3) ? "#A2A6B0" : "black" }} sx={{ fontSize: 'small' }} />
                            </button>
                        </div>

                        <div>
                            <button
                                className='buttonUpDown'
                                onClick={() => {
                                    handleDecrement()
                                }}
                            >
                                <ArrowDropDownIcon style={{ "color": (count === 1) ? "#A2A6B0" : "black" }} sx={{ fontSize: 'small' }} />
                            </button>
                        </div>
                    </div>
                </div>
                <form action={`${PAYMENT_URL}1/${count}`} method="POST">
                    <Button
                        id='BuyNowButton'
                        type='submit'
                    >
                        <LoadingButton
                            id='BuyNowButton'
                            size="small"
                            onClick={handleClick}
                            loading={loading}
                            variant="contained"
                            sx={{
                                "lineHeight": "none",
                                "letterSpacing": "none",
                                "textTransform": "capitalize",
                            }}
                        >
                            Buy Now
                        </LoadingButton>
                    </Button>
                </form>
            </Box>
        </Box>
    )
}

export default OrderButton