import React, { useState } from "react";
import "./eightball.css";

const Eightball = ({ msgs }) => {
  console.log(msgs);
  function randMsg(arr) {
    const idx = Math.floor(Math.random() * arr.length + 1);
    return arr[idx];
  }
  const [rslt, setRslt] = useState({
    msg: "Think of a Question",
    color: "black",
  });
  console.log(randMsg(msgs));
  console.log(rslt);
  return (
    <div
      className="Eightball"
      style={{ backgroundColor: rslt.color }}
      onClick={() => setRslt(randMsg(msgs))}
    >
      <p className="Eightball-msg">{rslt.msg}</p>
    </div>
  );
};

Eightball.defaultProps = {
  msgs: [
    { msg: "It is certain.", color: "green" },
    { msg: "It is decidedly so.", color: "green" },
    { msg: "Without a doubt.", color: "green" },
    { msg: "Yes - definitely.", color: "green" },
    { msg: "You may rely on it.", color: "green" },
    { msg: "As I see it, yes.", color: "green" },
    { msg: "Most likely.", color: "green" },
    { msg: "Outlook good.", color: "green" },
    { msg: "Yes.", color: "green" },
    { msg: "Signs point to yes.", color: "goldenrod" },
    { msg: "Reply hazy, try again.", color: "goldenrod" },
    { msg: "Ask again later.", color: "goldenrod" },
    { msg: "Better not tell you now.", color: "goldenrod" },
    { msg: "Cannot predict now.", color: "goldenrod" },
    { msg: "Concentrate and ask again.", color: "goldenrod" },
    { msg: "Don't count on it.", color: "red" },
    { msg: "My reply is no.", color: "red" },
    { msg: "My sources say no.", color: "red" },
    { msg: "Outlook not so good.", color: "red" },
    { msg: "Very doubtful.", color: "red" },
  ],
};

export default Eightball;
