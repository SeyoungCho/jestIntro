import React from "react";

const Hello = ({ user }) => {
  return user?.name ? <h1>Hello {user.name}</h1> : <button>login</button>;
};

export default Hello;
