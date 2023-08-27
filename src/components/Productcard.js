import React from 'react'
import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBCardImage,
    MDBBtn,
    MDBRipple,
    MDBCol
} from 'mdb-react-ui-kit';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../features/cartSlice';


const Productcard = () => {
    const items = useSelector((state) => state.Allcart.items);
    const dispatch = useDispatch();
    return (
        <>
            <div className="container mt-3">
                <h2 className="text-center">Add to Cart Projects</h2>
                <div className="row d-flex justify-content-center align-items-center">
                    {
                        items.map((item) => (
                            <MDBCol key={item.id} className=" mt-4 card_style col-md-4">
                                <MDBCard style={{ width: '22rem', border: "none" }} className="mx-2 mt-4 card_style">
                                    <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay' >
                                        <MDBCardImage src={item.imgdata} fluid alt='IMG' className='imgCtrl' style={{ height: "16rem" }}/>
                                        <a>
                                            <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
                                        </a>
                                    </MDBRipple>
                                    <MDBCardBody>
                                        <MDBCardTitle>{item.rname}</MDBCardTitle>
                                        <MDBCardText>
                                            Price : ₹ {item.price}
                                        </MDBCardText>
                                        <div className="button_div d-flex justify-content-center">
                                            <MDBBtn className="col-12 " onClick={() => dispatch(addToCart(item))}>Add To Cart</MDBBtn>
                                        </div>
                                    </MDBCardBody>
                                </MDBCard>
                            </MDBCol>
                        ))
                    }




                </div>
            </div>
        </>
    )
}

export default Productcard