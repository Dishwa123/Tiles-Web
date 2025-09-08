import { useEffect, useState } from "react";

export default function Cart(props) {
  let items = props.purchaseItem;
  const [amount, setAmount] = useState(0);

  useEffect(() => {
    let sum = 0;
    for (let i = 0; i < items.length; i++) {
      sum += items[i].price;
    }
    setAmount(sum);
  }, [items]);

  const del = (i) => {
    props.deleteItem(i);
  };

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-7">
          <h2>Your Cart</h2>
          <div className="row row-cols-1 row-cols-md-2 g-4">
            {items.map((d, i) => (
              <div className="col" key={i}>
                <div className="card product">
                  <img src={d.icon} alt={d.title} className="card-img-top" style={{ height: '200px', objectFit: 'cover' }} />
                  <div className="card-body" style={{color:"black"}}>
                    <h5 className="card-title">{d.title}</h5>
                    <p className="card-text">Price: Rs. {d.price}/-</p>
                    <p className="card-text">{d.description}</p>
                    <button className="btn btn-danger" onClick={() => del(i)}>Delete</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="col-md-5">
          <h2>Your Order</h2>
          <table className="table table-dark">
            <thead>
              <tr>
                <th>Product</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              {items.map((d, i) => (
                <tr key={i}>
                  <td>{d.title}</td>
                  <td>Rs. {d.price}/-</td>
                </tr>
              ))}
              <tr>
                <td><strong>Total</strong></td>
                <td><strong>Rs. {amount}/-</strong></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
