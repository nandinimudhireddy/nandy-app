import React, { useState } from "react";

function ContactForm(event) {
  const [data, setData] = useState(" ");
  const handleChange = (event) => {
    console.log(event.type.value);
    event.preventDefault()
  };
  return (
    <form>
      <label>Name</label>
      <input
        type="text"
        value={data}
        onChange={(e) => setData(e.type.value)}
      ></input>
      <label>email</label>
      <input
        type="email"
        value={data}
        onChange={(e) => setData(e.type.value)}
      ></input>
      <label>Message</label>
      <input
        type="textarea"
        value={data}
        onChange={(e) => setData(e.type.value)}
      ></input>
      <input type="submit" onClick={handleChange}></input>
      
    </form>
  );
}

export default ContactForm;
