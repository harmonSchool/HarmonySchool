import { Button,Text  } from "native-base";

import CheckoutScreen from '../Stripe/CheckoutScreen';

export default function Payment() {

    return (

          <Button      
            variant="primary"

            title="Checkout"
            backgroundColor='#DBC8E4'
            margin='5'
            padding='5'
            borderRadius='8'
            alignItems='center'
            fontSize='16'>
  
              <Text
                color='black'
                fontSize='20'>
                  Payment
              </Text>
  
           </Button>   
      );
}