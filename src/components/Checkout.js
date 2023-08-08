import React from "react";
import {Button} from "react-bootstrap";
import { CartState } from "../context/Context";
import { useState, useEffect } from "react";

const Checkout = () => {
  const {
    state: { cart },
    dispatch,
  } = CartState();

  const [total, setTotal] = useState();

  const [data, setdata] = useState(cart);

  useEffect(() => {
    setTotal(
      cart.reduce((acc, curr) => acc + Number(curr.price) * curr.qty, 0)
    );
  }, [cart]);

  return (
    <div>
      <div className="checkout">
        <div>
          <form method="Post" action="https://formspree.io/f/xrgwevyy">
            <div className="forms">
              {/* <!--SHIPPING METHOD--> */}
              <div className="panel panel-info">
                <div className="panel-body">
                  <div className="form-group">
                    <div className="col-md-12">
                      <h4>Shipping Address</h4>
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="col-md-12">
                      <strong>First Name:</strong>
                      <input
                        type="text"
                        name="first_name"
                        className="form-control"
                        required
                      />
                    </div>
                    <div className="span1"></div>
                    <div className="col-md-12">
                      <strong>Last Name:</strong>
                      <input
                        type="text"
                        name="last_name"
                        className="form-control"
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="col-md-12">
                      <strong>Email Address:</strong>
                    </div>
                    <div className="col-md-12">
                      <input
                        type="email"
                        name="email_address"
                        className="form-control"
                        required
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="col-md-12">
                      <strong>Phone Number:</strong>
                    </div>
                    <div className="col-md-12">
                      <input
                        type="tel"
                        name="phone_number"
                        className="form-control"
                        required
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="col-md-12">
                      <strong>Address:</strong>
                    </div>
                    <div className="col-md-12">
                      <input
                        type="text"
                        name="address"
                        className="form-control"
                        required
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <div className="col-md-12">
                      <input
                        type="hidden"
                        name="product_Data"
                        className="form-control"
                        value={JSON.stringify(data)}
                      />
                    </div>
                  </div>

                  <Button type="submit" className="col-11 col-md-11 mx-3 my-2">
                    {" "}
                    Chekout
                  </Button>
                </div>
              </div>
            </div>
          </form>
        </div>

        <div>
          <div>
            <div className="checkout-total">
              <span className="title"> SubTotal ({cart.length}) items</span>
              <span>
                {cart.map((prod) => (
                  <p>
                    {prod.name} : {prod.price} * {prod.qty}
                  </p>
                ))}
              </span>
              <span style={{ fontWeight: 700, fontSize: 20 }}>
                Total: {total} EGY
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
