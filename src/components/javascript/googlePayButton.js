

import '../css/root.css'
import React from 'react'
import GooglePayButton from '@google-pay/button-react';
const GooglePay = () => {

    return (
        <div>
            <GooglePayButton
            environment='TEST'
            paymentRequest={{
            apiVersion:2,
            apiVersionMinor:0,
            allowedPaymentMethods:[
                {
                type:"CARD",
                parameters:{
                    allowedAuthMethods:["PAN_ONLY", "CRYPTOGRAM_3DS"],
                    allowedCardNetworks: ["MASTERCARD", "VISA"]
                },
                tokenizationSpecification:{
                    type:"PAYMENT_GATEWAY",
                    parameters:{
                    gateway:"example",
                    gatwayMerchantId:"exampleGateMerchantID"
                    }
                }
                }
            ],
            merchantInfo:{
                merchantId:"123456789",
                merchantName: "Demo Merchant"
            },
            transactionInfo:{
                totalPriceStatus:"FINAL",
                totalPriceLabel:"Total",
                totalPrice:"10",
                currencyCode:"EUR",
                countryCode:"DE"
            },
            shippingAddressRequired:false,
            callbackIntents:["PAYMENT_AUTHORIZATION"]
            }}
            onLoadPaymentData={paymentRequest=> {
            console.log(paymentRequest);
            }}
            onPaymentAuthorized={paymentData => {
            console.log(paymentData);
            return{ transactionState: 'SUCCESS'}
            }}
            existingPaymentMethodRequired='false'
            buttonColor='Black'
            buttonType='buy'
            >

            </GooglePayButton>




        </div>
        )
    }

export default GooglePay;