import React from "react";


const Contact = () => {
 
  return (
    <form className="form">
      <h1>Contact Us 🤳</h1>

      <label>Name</label>
      <input placeholder="Name"/>

      <label>Email</label>
      <input placeholder="Email"/>

      <label>Message</label>
      <textarea
        placeholder="Message">
        </textarea>

      <button type="submit">Submit</button>
    </form>
  );
};


export default Contact;
