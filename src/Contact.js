import { useState } from "react";
import img2 from "./MG1.jpeg";
import axios from "axios";
const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setmMessage] = useState('');


  const handleF = (e)=>{
    e.preventDefault();
    const PosT =
    {
      name:name,
      email:email,
      msg:message
    }
    axios.post('http://localhost:8000/Contact',PosT)
    .then((res)=>{
        console.log(res.data)
    })
    .catch((err)=>
    {
        console.log(err.data);
    })

  }
  return (
    <div className="Contact">
      <img src={img2} alt="h"></img>
      <form className="form" onSubmit={handleF}>
        <h2>Get in Touch</h2>
        <p type="Name:">
          <input
            placeholder="Name...."
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></input>
        </p>
        <p type="Email:">
          <input
            placeholder="Email...."
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></input>
        </p>
        <p type="Message:">
          <input
            placeholder="Message...."
            value={message}
            onChange={(e) => setmMessage(e.target.value)}
          ></input>
        </p>
        <button>Send Message</button>
      </form>
    </div>
  );
};

export default Contact;
