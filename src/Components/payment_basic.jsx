"use client"

import React from 'react'
import styles from '../Components/payment_basic.module.css'

import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js';

const payment_basic = () => {

  return (
    <div className={styles.container}>
      <PayPalScriptProvider options={{
        clientId: "AXYpeaSF3gb6CohSk4phWrdwxRndIyCYyaSAYtlQMz-20FSWPqsZw2ebZNHmY5BP-HRtGIsXP2zXRaM1",
        currency: "USD",
        intent: "capture",
      }}>
      <div className={styles.form}>
          <div className={styles.title}>
              <h2><label className={styles.color_title}>PREMIUM</label>GYM</h2>
              <h3>You have selected the plan: BASIC PLAN</h3>
              <p>Next, you must enter your credit card information to process the payment! </p>
              <p>The payment will be processed through the PayPal platform.</p>
              <div className={styles.Button}>
            <PayPalButtons
            className={styles.PayPalButtons}
            style={{
              color: "black",
              layout: "horizontal",
              height: 40,
              width: 200,
              shape: "rect",
              tagline: "false",
            }}
            createOrder={(data, actions) => {
              return actions.order.create({
                purchase_units: [{
                  amount: {
                    value: '40.00'
                  }
                }]
              });
            }}
            onApprove={(data, actions) => {
              return actions.order.capture().then(function (details) {
                alert('Pago completado. ID de transacción: ' + details.id);
              });
            }}
            />
            </div>
          </div>
      </div>
      </PayPalScriptProvider>
    </div>
  )
}

export default payment_basic