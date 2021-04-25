import React from "react";

const Mailchimp = () => {
  return (
    <form name="contactV1" method="POST" data-netlify="true">
      <p>
        <label>
          Your Name: <input type="text" name="name" />
        </label>
      </p>
      <p>
        <label>
          Your Email: <input type="email" name="email" />
        </label>
      </p>
      <input type="hidden" name="form-name" value="contactV1" />
      <button type="submit">click bitch</button>
    </form>
  );
};

export default Mailchimp;
