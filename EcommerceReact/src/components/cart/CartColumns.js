import React from "react";

export default function CartColumns() {
  return (
    <div className="container-fluid text-center d-none d-lg-block">
      <div className="row">
        <div className="col-10 mx-auto col-lg-2">
          <p className="txt-uppercase">products</p>
        </div>
        <div className="col-10 mx-auto col-lg-2">
          <p className="txt-uppercase">name of product</p>
        </div>
        <div className="col-10 mx-auto col-lg-2">
          <p className="txt-uppercase">price</p>
        </div>
        <div className="col-10 mx-auto col-lg-2">
          <p className="txt-uppercase">quantity</p>
        </div>
        <div className="col-10 mx-auto col-lg-2">
          <p className="txt-uppercase">remove</p>
        </div>
        <div className="col-10 mx-auto col-lg-2">
          <p className="txt-uppercase">total</p>
        </div>
      </div>
    </div>
  );
}
