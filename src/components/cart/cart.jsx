import { useCallback, useContext, useRef } from "react";
import { CartContext } from "../../context/cart-context";
import useRazorpay from "react-razorpay";
const Cart = () =>{

    const {cartData} = useContext(CartContext)
    let total = useRef();
    const RazorPay = useRazorpay();
    const razorPayDisplay = useCallback(async (total)=>{
        const options = {
            key:"rzp_test_JBxTTFIMDkXx1p",
            amount: total*100,
            currency: "INR",
            name: "10x-Gaming-site",
            description: "Gaming Transaction",
            handler: (res)=>{
               console.log(res)
            },
        
        prefill:{
            name:"Kamlesh",
            email: "kamleshkumardbg22@gmail.com",
            contact: "8789775856",
        },
    
        notes:{
            address: "work address",
        },
        theme:{
            color: "#3399cc",
        },
    }
    const rzp1 = new RazorPay(options);
    rzp1.open();
    }, [RazorPay])

   // total.current.price = 0;
    return(
        <>
        <section>
          <section>
          {
            cartData.map((cartItem)=>{
                return(
                    <article>
                    <image src="" alt=""/>
                    <article>{cartItem.title}</article>
                    <article>{cartItem.price}</article>
                    <button>Remove from cart</button>
                    </article>
                )
            })
        }
          </section>

          <section>
           <article>Billing Information</article> 
           {
            cartData.map((cart)=>{
                //total.current.price = total.current.price + cart.price
                return <article>
                    <span>{cart.title}</span>
                    <span>{cart.price}</span>
                </article>
            })
           }
           <article>Total: 3000</article>
            <button onClick={()=>{razorPayDisplay(6000)}}>Checkout</button>
          </section>
        </section>

        
        </>
    )
}
export default Cart;