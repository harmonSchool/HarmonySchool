import React, { useState ,useEffect } from "react";

import { Button,Text  } from "native-base";
import { useStripe,StripeProvider } from "@stripe/stripe-react-native";

import ADRESS_API from '../serverUrl';



export default function CheckoutScreen({ route, navigation }) {
    const { initPaymentSheet, presentPaymentSheet } = useStripe();
    const [loading, setLoading] = useState(false);

     
    const {name,amount,studentId,classId} = route.params;

  
    const fetchPaymentSheetParams = async () => {
      const response = await fetch(`http://${Adress}/pay`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body : JSON.stringify({name,amount,studentId,classId})
      });
      const { paymentIntent, ephemeralKey, customer} = await response.json();
  
      return {
        paymentIntent,
        ephemeralKey,
        customer,
      };
    };
  
    const initializePaymentSheet = async () => {
      const {
        paymentIntent,
        ephemeralKey,
        customer,
        publishableKey,
      } = await fetchPaymentSheetParams();
  
      const { error } = await initPaymentSheet({
        merchantDisplayName: "Example, Inc.",
        customerId: customer,
        customerEphemeralKeySecret: ephemeralKey,
        paymentIntentClientSecret: paymentIntent,
        // Set `allowsDelayedPaymentMethods` to true if your business can handle payment
        //methods that complete payment after a delay, like SEPA Debit and Sofort.
        allowsDelayedPaymentMethods: true,
        defaultBillingDetails: {
          name: name,
        }
      });
      if (!error) {
        setLoading(true);
      }
    };
  
    const openPaymentSheet = async () => {
        const { error } = await presentPaymentSheet();
    
        if (error) {
          alert(`Error code: ${error.code}`, error.message);
          navigation.goBack()
        } else {
          alert('Success', 'Your order is confirmed!');
          navigation.navigate('Parent');
        }
    };
  
    useEffect(() => {
      initializePaymentSheet();
    }, []);

  
    return (
      <StripeProvider 
        publishableKey="pk_test_51O4pUzFhzFmQyQa0a9BdS3tkIgGnnu1Ug1kXvmUOkDEkh287YjNUv5gYROhKcDQfvux2TketGeD7phXOAzinm2x0005j1H0eM0">
        
        
        <Button 
          
          variant="primary"
          disabled={!loading}
          title="Checkout"
          onPress={openPaymentSheet}
          backgroundColor='#DBC8E4'
          marginTop='190'
          marginLeft='5'
          marginRight='5'
          padding='6'
          borderRadius='8'
          alignItems='center'
          fontSize='16'>

            <Text
              color='black'
              fontSize='20'>
                Pay with Stripe
            </Text>

         </Button>
      </StripeProvider>
        
    );

    
    
  }
