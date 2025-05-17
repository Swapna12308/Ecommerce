// import React from 'react'

// const Contact = () => {
//   return (
//     <div>
//       This is Contact Page
//     </div>
//   )
// }

// export default Contact




import React from "react";

const Contact = () => (
  <div className="contact">
    <h2>Login</h2>
    <form className="login-form">
      <input type="text" placeholder="Username" />
      <input type="password" placeholder="Password" />
      <button type="submit">Login</button>
    </form>
  </div>
);

export default Contact;
