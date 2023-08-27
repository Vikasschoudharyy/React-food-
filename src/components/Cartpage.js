import React, { useEffect } from 'react'
import { MDBContainer, MDBRow, MDBCol, MDBTable, MDBTableBody, MDBTableHead } from "mdb-react-ui-kit";
import { useSelector, useDispatch } from 'react-redux';
import { getCartTotal, removeItem, decreaseItemQuantity, increaseItemQuantity } from '../features/cartSlice';
import { MDBTypography } from 'mdb-react-ui-kit';


const Cartpage = () => {
  const { cart, totalQuantity, totalPrice, } = useSelector(
    (state) => state.Allcart
  );

const dispatch = useDispatch();


useEffect(()=>{
  dispatch(getCartTotal());
},[cart])


  return (
    <>
      <MDBContainer className="mt-2">
        
        <MDBTypography variant='h2' className="text-center">Items Details Page</MDBTypography>
        <MDBRow className="mt-3">
          <MDBCol>
            {cart.map((data) => (


              <div className="iteamsdetails mb-4 col-sm-12 ms-sm-5 ps-sm-4 ms-md-0 ps-md-0">
                <div className="items_img" >
                  <img
                    src={data.imgdata}
                    alt="xtf" className='size'
                  />
                </div>
                <div className="details">
                  <MDBTable>
                    <MDBTableHead>
                      <tr>
                        <th>Restaurant</th>
                        <th>Price</th>
                        <th>Dishes</th>
                      </tr>
                    </MDBTableHead>
                    <MDBTableBody>
                      <tr>
                        <td>{data.rname}</td>
                        <td>₹ {data.price}</td>
                        <td>{data.address}</td>
                      </tr>
                    </MDBTableBody>
                  </MDBTable>

                  <p>
                    <strong>Rating:</strong>{" "}
                    <span
                      style={{
                        background: "green",
                        color: "#fff",
                        padding: "2px 5px",
                        borderRadius: "5px",
                      }}
                    >
                      {data.rating} ★
                    </span>
                  </p>
                  <p>
                    <strong>Order Review:</strong>
                    <span> {data.somedata}</span>
                  </p>
                  <p>
                    <strong>Remove : </strong>
                    <button
                    style={{ border:"none",background:"white"}}
                    onClick={() =>dispatch(removeItem(data.id))}  >
                      
                      <i
                        className="fas fa-trash bordernone"
                        style={{ color: "red", fontSize: 20, cursor: "pointer"}}
                      ></i>
                    </button>

                  </p>
                  <div
                    className="d-flex mb-4"
                    style={{ maxWidth: "300px" }}
                  >
                    <button
                      className="btn btn-primary px-3 me-2"
                      onClick={()=>dispatch(decreaseItemQuantity(data.id))}


                    >
                      <i className="fas fa-minus"></i>
                    </button>

                    <div className="form-outline">
                      <input
                        id="form1"
                        min="0"
                        name="quantity"
                        value={data.quantity}
                        type="number"
                        className="form-control"
                        onChange={()=>null}

                      />
                      <label className="form-label" for="form1">
                        Quantity
                      </label>
                    </div>

                    <button
                      className="btn btn-primary px-3 ms-2"
                      onClick={()=>dispatch(increaseItemQuantity(data.id))}

                    >
                      <i className="fas fa-plus"></i>
                    </button>
                  </div>
                </div>
                <hr/>
              </div>
              

            ))}
          </MDBCol>
          <div className="col-md-4 col-sm-12">
            <div className="card mb-4">
              <div className="card-header py-3">
                <h5 className="mb-0">Summary</h5>
              </div>
              <div className="card-body">
                <ul className="list-group list-group-flush">
                  <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0 ">
                    Total Quantity
                    <span>{totalQuantity}</span>
                  </li>

                  <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                    <div>
                      <strong>Total amount</strong>
                    </div>
                    <span>
                      <strong>{totalPrice}</strong>
                    </span>
                  </li>
                </ul>

                <button
                  type="button"
                  className="btn btn-primary btn-lg btn-block"
                >
                  Go to checkout
                </button>
              </div>
            </div>
          </div>
        </MDBRow>
      </MDBContainer>
    </>
  )



}




export default Cartpage