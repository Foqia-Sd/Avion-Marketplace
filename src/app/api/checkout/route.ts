import { NextResponse } from "next/server"
const stripe = require('stripe')(process.env.NEXT_STRIPE_SECRET_KEY);

export const POST = async (request:any) => {

    const { products } = await request.json();
    let activeProducts = await stripe.products.list({active:true});
    console.log(activeProducts)

    try {
            //1. Find product from stripe tat matches products from cart
            
            for(const product of products) {
                const matchedProducts = activeProducts?.data?.find((stripeProduct: any) => 
                    stripeProduct.name.toLowerCase() === product.name.toLowerCase()
                )

        //2. If product did not exit in stripe then add this product to stripe
            if(matchedProducts == undefined) {
                const prod = await stripe.products.create({
                    name: product.name,
                    default_price_data:{
                        currency: 'usd',
                        unit_amount: product.price * 100
                    }
                })
            }
            }
        
    } catch (error) {
        console.log("Error in creating a new product", error);
        throw error;
        
    }

    //3. Once the new product has been added to stripe do fetch product again with updated product from 
          activeProducts = await stripe.products.list({active:true});
          let stripeProducts = []
        //     {
        //       // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
        //       price: '{{PRICE_ID}}',
        //       quantity: 1,
        //     },
        //   ]

         for(const product of products) {
            const stripeProduct = activeProducts?.data?.find((stripeProduct: any) => 
                stripeProduct.name.toLowerCase() === product.name.toLowerCase()
            );
            
            if(stripeProduct) {
                stripeProducts.push(
                    {
                        // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
                        price: stripeProduct?.default_price,
                        quantity: product.quantity,
                      },
                )
            }
         }

    //4. Create Checkout Sessions from body params.
    const session = await stripe.checkout.sessions.create({
        line_items: stripeProducts,
        mode: 'payment',
        success_url: `https://avion-marketplace-six.vercel.app/success`,
        cancel_url: `https://avion-marketplace-six.vercel.app/`,
      });

    return NextResponse.json({
        url: session.url
    })
}