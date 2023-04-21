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
      encodedParams.append("key", "C205E7E9-DB96-BC3F-2F96-611FE7DE1F45");
      encodedParams.append("username", "geminiecommerce23@gmail.com");
      
      const options = {
        method: 'POST',
        headers: {
          'content-type': 'application/x-www-form-urlencoded',
          'X-RapidAPI-Key': 'fee9d2f76cmsha6654ed67aca14cp159bdbjsn23d750d5c041',
          'X-RapidAPI-Host': 'inteltech.p.rapidapi.com'
        },
        body: encodedParams
      };
      
      fetch('https://inteltech.p.rapidapi.com/send.php', options)
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err));
  }
}