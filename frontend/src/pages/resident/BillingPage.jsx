// import React, { useState } from 'react';
// import { Building2, LayoutDashboard, MessageSquare, Calendar, Bell, FileText, Car, Phone, LogOut } from 'lucide-react';
// // import './BillingPage.css';

// const BillingPage = () => {
//   const [showPaymentModal, setShowPaymentModal] = useState(false);

//   const handlePayNow = () => {
//     setShowPaymentModal(true);
//   };

//   return (
//     <div className="billing-container">
//       <main className="main-content">
//         <header className="header">
//           <h1>Billings</h1>
//           <div className="user-info">
//             <span>Pavani</span>
//             <div className="avatar"></div>
//           </div>
//         </header>

//         <div className="billing-content">
//           <div className="bill-card">
//             <h2>Monthly Maintenance Bill: 3500/-</h2>
//             <button className="pay-now-btn" onClick={handlePayNow}>
//               Pay Now
//             </button>
//           </div>
//         </div>
//       </main>

//       {showPaymentModal && (
//         <div className="payment-modal">
//           <div className="payment-content">
//             <h2>Payment Request from CommUnity</h2>
//             <div className="payment-details">
//               <p>PAYMENT FOR</p>
//               <p>Maintenance bill for flat A234</p>
//               <p>RECEIPT</p>
//               <p>REF172649455401</p>
//               <p>AMOUNT PAYABLE</p>
//               <p className="amount">INR 3,500.00</p>
//             </div>
//             <div className="payment-options">
//               <h3>Payment options</h3>
//               <div className="option">
//                 <input type="radio" id="full" name="payment" checked />
//                 <label htmlFor="full">Pay in full</label>
//                 <span>Pay ₹3,500 now</span>
//               </div>
//               <div className="option">
//                 <input type="radio" id="part" name="payment" />
//                 <label htmlFor="part">Part Payment</label>
//                 <span>Pay a part of the total amount</span>
//               </div>
//             </div>
//             <button className="continue-btn" onClick={() => setShowPaymentModal(false)}>
//               Continue
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default BillingPage;


import React, { useState } from "react";
import axios from "axios";
import { Building2, LayoutDashboard, MessageSquare, Calendar, Bell, FileText, Car, Phone, LogOut } from "lucide-react";

const BillingPage = () => {
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [loading, setLoading] = useState(false);

  const handlePayNow = () => {
    setShowPaymentModal(true);
  };

  const handlePayment = async () => {
    setLoading(true);
    try {
      const res = await axios.post(
        "http://localhost:8080/api/payments/create-order?amount=3500&currency=INR"
      );

      const order = res.data;

      const options = {
        key: "rzp_test_cwlqEaF9z4PSNf",
        amount: order.amount,
        currency: order.currency,
        name: "Your Company",
        description: "Maintenance Bill Payment",
        order_id: order.id,
        handler: async function (response) {
          alert("Payment Successful! Payment ID: " + response.razorpay_payment_id);
          await savePaymentDetails(order.amount, response);
        },
        theme: {
          color: "#3399cc",
        },
      };

      const razor = new window.Razorpay(options);
      razor.open();
    } catch (error) {
      console.error("Error creating order:", error);
    } finally {
      setLoading(false);
      setShowPaymentModal(false);
    }
  };

  const savePaymentDetails = async (amount, response) => {
    try {
      await axios.post("http://localhost:8080/api/payments/save", {
        name: "Pavani", // Replace with dynamic user input
        phoneNo: "9876543210",
        amountPaid: amount / 100,
        paymentStatus: "Success",
        transactionId: response.razorpay_payment_id,
        paymentMode: "Razorpay",
        dateOfPayment: new Date().toISOString(),
      });
    } catch (error) {
      console.error("Error saving payment details:", error);
    }
  };

  return (
    <div className="billing-container">
      <main className="main-content">
        <header className="header">
          <h1>Billings</h1>
          <div className="user-info">
            <span>Pavani</span>
            <div className="avatar"></div>
          </div>
        </header>

        <div className="billing-content">
          <div className="bill-card">
            <h2>Monthly Maintenance Bill: 3500/-</h2>
            <button className="pay-now-btn" onClick={handlePayNow}>
              Pay Now
            </button>
          </div>
        </div>
      </main>

      {showPaymentModal && (
        <div className="payment-modal">
          <div className="payment-content">
            <h2>Payment Request from CommUnity</h2>
            <div className="payment-details">
              <p>PAYMENT FOR</p>
              <p>Maintenance bill for flat A234</p>
              <p>RECEIPT</p>
              <p>REF172649455401</p>
              <p>AMOUNT PAYABLE</p>
              <p className="amount">INR 3,500.00</p>
            </div>
            <button className="continue-btn" onClick={handlePayment}>
              {loading ? "Processing..." : "Continue"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default BillingPage;
