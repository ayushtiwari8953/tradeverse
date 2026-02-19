// import React from "react";
// import { Link } from "react-router-dom";

// import React, { useState, useEffect } from "react";
// import axios, {newOrder } from "axios";

// const [orders, setnewOrder] = useState([]);

// useEffect(() => {
//     axios.get("https://tradeverse-1-klk5.onrender.com/newOrder").then((res) => {
//       // console.log(res.data);
//       setnewOrder(res.data);
//     });
//   }, []);



// const Orders = () => {
//   return (
//     <>
//        <h3 className="title">Orders 
//         {/* ({newOrder.length}) */}
//         </h3>

//       <div className="order-table">
//         <table>
//           <tr>
//             <th>Instrument</th>
//             <th>Qty.</th>
//             <th>Avg. cost</th>
//             <th>LTP</th>
//             <th>Cur. val</th>
//             <th>P&L</th>
//             <th>Net chg.</th>
//             <th>Day chg.</th>
//           </tr>

//           {
//           // newOrder.map
//           ((stock, index) => {
//             const curValue = stock.price * stock.qty;
//             const isProfit = curValue - stock.avg * stock.qty >= 0.0;
//             const profClass = isProfit ? "profit" : "loss";
//             const dayClass = stock.isLoss ? "loss" : "profit";

//             return (
//               <tr key={index}>
//                 <td>{stock.name}</td>
//                 <td>{stock.qty}</td>
//                 <td>{stock.avg.toFixed(2)}</td>
//                 <td>{stock.price.toFixed(2)}</td>
//                 <td>{curValue.toFixed(2)}</td>
//                 <td className={profClass}>
//                   {(curValue - stock.avg * stock.qty).toFixed(2)}
//                 </td>
//                 <td className={profClass}>{stock.net}</td>
//                 <td className={dayClass}>{stock.day}</td>
//               </tr>
//             );
//           })}
//         </table>
//       </div>
//     </>
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

// export default Orders;


import React, { useState, useEffect } from "react";
import axios from "axios";

const Orders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    axios
      .post("https://tradeverse-1-klk5.onrender.com/newOrder")
      .then((res) => {
        console.log(res.data);
        setOrders(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <h3 className="title">Orders ({orders.length})</h3>

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
              <th>Net chg.</th>
              <th>Day chg.</th>
            </tr>
          </thead>

          <tbody>
            {orders.map((stock, index) => {
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

