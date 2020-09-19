import { useState } from "react";

const Foo = () => {
  const [message, setMessage] = useState("");

  return (
    <div style={{ textAlign: "center", marginTop: "20vh" }}>
      <MsgInput msg={message} onMessage={(val) => setMessage(val)} />
      <MsgText msg={message} />
    </div>
  );
};

const MsgInput = (props) => {
  return (
    <input
      value={props.msg}
      onChange={(e) => props.onMessage(e.target.value)}
    />
  );
};

const MsgText = (props) => {
  return <h1>{props.msg}</h1>;
};

export default Foo;
