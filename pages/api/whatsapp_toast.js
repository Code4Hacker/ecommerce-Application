import { toast } from "react-hot-toast";

export default function money(cartItems,imgid,totalPrice) {
  document.getElementById("sendItem").click();
  toast.success(` Redirect to WhatsApp...`);
  if(cartItems.length > 0){
    const message =`${process.env.NEXT_PUBLIC_LINK}?text=${
      cartItems?.length>0? cartItems.map((msg) => (' Product Name: '+msg.name+', Quantities: '+msg.quantity+" Total Price: "+(msg.price*msg.quantity)+" "+(msg.image[imgid].asset._ref).replace('image-','https://cdn.sanity.io/images/4zpcu7m4/production/').replace('-png', '.png').replace('-webp','.webp'))+" AND "):"no"} Full Price:${totalPrice}`;
      const encodedParams = new URLSearchParams();
      encodedParams.append("sms", "+255767272367");
      encodedParams.append("message", `${message}`);
      encodedParams.append("senderid", "MyCompany");
      encodedParams.append("schedule", "1377959755");
      encodedParams.append("return", "http://yourwebsite.com");
      encodedParams.append("key", `${process.env.NEXT_PUBLIC_SMS_KEY}`);
      encodedParams.append("username", "geminiecommerce23@gmail.com");
      
      const options = {
        method: 'POST',
        headers: {
          'content-type': 'application/x-www-form-urlencoded',
          'X-RapidAPI-Key': `${process.env.NEXT_PUBLIC_RAPID}`,
          'X-RapidAPI-Host': `${process.env.NEXT_PUBLIC_URL}`
        },
        body: encodedParams
      };
      
      fetch(`https://${process.env.NEXT_PUBLIC_URL}/send.php`, options)
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err));
  }
}