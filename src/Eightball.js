import React, { useState } from "react";

const ballInfo = [
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
];
/**App calls Eightball component. Receives key of answers that is array of objects. Uses State
 * to dynamically display an eightball with changing background colors
 * and messages. Returns that 8ball component
 */
function Eightball({answers = ballInfo}) {
  const [ball, setBall] = useState({msg:'Think of a Question', color: "black"})

  function clickEightball(){
    const index = Math.floor(Math.random() * answers.length);
    setBall(answers[index]);
  }

  return (
    <div className="Eightball" style= {{backgroundColor: ball.color, color: "white"}} onClick={clickEightball}>
        <h1>{ball.msg}</h1>
    </div>
  );
}

export default Eightball;