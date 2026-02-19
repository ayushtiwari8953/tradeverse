import React, { useState, useEffect } from "react";
import axios from "axios";

const Orders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const res = await axios.get(
          "https://tradeverse-2-6p8a.onrender.com/newOrder"
        );
        console.log("Orders:", res.data);
        setOrders(res.data || []);
      } catch (err) {
        console.log("Fetch Error:", err);
      }
    };

    fetchOrders();
    const interval = setInterval(fetchOrders, 2000);

    return () => clearInterval(interval);
  }, []);

  const cleanOrders = orders
    .filter(o => o && o.name && o.qty)
    .map(o => ({
      ...o,
      qty: Number(o.qty) || 0,
      avg: Number(o.avg) || 0,
      price: Number(o.price) || 0,
      net: o.net || "-",
      day: o.day || "-",
      type: o.type || o.mode || o.orderType || "-"
      // type: o.type || "BUY"
      // type: o.type || "Sell"
    }));

  return (
    <>
      <h3 className="title">Orders ({cleanOrders.length})</h3>

      <div className="order-table">
        <table>
          <thead>
            <tr>
              <th>Instrument</th>
              <th>Qty.</th>
              <th>Avg. cost</th>
              <th>LTP</th>
              <th>Cur. val</th>
              <th>P&L</th>
              <th>Mode</th>
              <th>Net chg.</th>
              <th>Day chg.</th>
            </tr>
          </thead>

          <tbody>
            {cleanOrders.map((stock, index) => {
              const curValue = stock.price * stock.qty;
              const profit = curValue - stock.avg * stock.qty;
              const isProfit = profit >= 0;

              return (
                <tr key={index}>
                  <td>{stock.name}</td>
                  <td>{stock.qty}</td>
                  <td>{stock.avg.toFixed(2)}</td>
                  <td>{stock.price.toFixed(2)}</td>
                  <td>{curValue.toFixed(2)}</td>

                  <td className={isProfit ? "profit" : "loss"}>
                    {profit.toFixed(2)}
                  </td>

                  {/* <td className={stock.type === "BUY" ? "buy" : "sell"}>
                    {stock.type}
                  </td> */}

                  <td className={stock.type === "BUY" ? "buy-text" : "sell-text"}>
                    {stock.type}
                  </td>


                  <td className={isProfit ? "profit" : "loss"}>
                    {stock.net}
                  </td>

                  <td className={stock.isLoss ? "loss" : "profit"}>
                    {stock.day}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Orders;




// const Orders = () => {
//   return (
//     // <div className="orders">
//     //   <div className="no-orders">
//     //     <p>You haven't placed any orders today</p>

//     //     <Link to={"/"} className="btn">
//     //       Get started
//     //     </Link>
//     //   </div>
//     // </div>
//   );
// };