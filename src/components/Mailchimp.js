import React from "react";

const Mailchimp = () => {
  return (
    <form action="" name="contact" method="POST" data-netlify="true" netlify>
      <input type="email" name="email" />
      <button type="submit">Envoie</button>
      <input type="hidden" name="form-name" value="contact"></input>
    </form>
  );
};

export default Mailchimp;
