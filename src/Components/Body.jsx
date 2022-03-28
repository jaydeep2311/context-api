import React from "react";
import Navbar from "./Navbar";

const Body = () => {
  var initial = {
    email: "",
    password: "",
  };
  const [user, setuser] = React.useState(initial);
  function handlechange(e) {
    const { name, value } = e.target;
    var newobj = {
      ...user,
      [name]: value,
    };
    setuser(newobj);
  }
  return (
    <div>
      <Navbar user={user} />
      <input
        type="email"
        name="email"
        placeholder="Email"
        onChange={(e) => handlechange(e)}
      />
      <input
        type="password"
        name="password"
        placeholder="password"
        onChange={(e) => handlechange(e)}
      />
    </div>
  );
};

export default Body;
