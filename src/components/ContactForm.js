import React, { useState } from "react";

function ContactForm() {
  const [data, setData] = useState("");
  const [name,setName] = useState("");
  const [email,setEmail] = useState("");

  const handleSubmit = (event) => {
    console.log(name,"\n", email, "\n",data);
    
    event.preventDefault();
  };
  return (
    <form>
      <label>Name</label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      ></input>
      <label>Email</label>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      ></input>
      <label>Message</label>
      <input
        type="textarea"
        value={data}
        onChange={(e) => setData(e.target.value)}
      ></input>
      <input type="submit" onClick={handleSubmit}></input>
      
    </form>
  );
}

export default ContactForm;
