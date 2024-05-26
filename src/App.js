import "./styles.css";
import React, { useMemo, useState } from "react";

const lookup = {
  default: [{ id: "0", text: "-Select State-" }],
  india: [
    { id: "1", text: "maharashtra" },
    { id: "2", text: "madhyapradesh" },
    { id: "3", text: "aandrapradesh" },
    { id: "4", text: "tamilnadu" },
    { id: "5", text: "karanataka" },
  ],
  us: [
    { id: "a", text: "alaska" },
    { id: "b", text: "arizona" },
    { id: "c", text: "arkansas" },
    { id: "d", text: "california" },
    { id: "e", text: "colorado" },
    { id: "f", text: "connecticut" },
  ],
};

export default function App() {
  const [dataValue, setDataValue] = useState("default");
  const options = useMemo(() => lookup[dataValue], [dataValue]);
  const [firstName, setFirst] = useState("");
  const [middleName, setMiddle] = useState("");
  const [lastName, setLast] = useState("");
  const [age, setAge] = useState("");
  const [country, setCountry] = useState("");
  const [state, setState] = useState("");
  const onChange = ({ target: { value } }) => {
    setDataValue(value);
    setCountry(value);
  };
  return (
    <div className="App">
      <h1>React Test</h1>
      First Name :
      <input
        type="text"
        name="firstName"
        value={firstName}
        onChange={(e) => setFirst(e.target.value)}
      />
      <br />
      <br />
      Middle Name :
      <input
        type="text"
        name="middleName"
        value={middleName}
        onChange={(e) => setMiddle(e.target.value)}
      />
      <br />
      <br />
      Last Name :
      <input
        type="text"
        name="lastName"
        value={lastName}
        onChange={(e) => setLast(e.target.value)}
      />
      <br />
      <br />
      Age :
      <input
        type="text"
        name="Age"
        value={age}
        onChange={(e) => setAge(e.target.value)}
      />
      <br />
      <br />
      Contry :
      <select name="contry" value={country} onChange={onChange}>
        <option value="def">-Select Contry-</option>
        <option value="india">india</option>
        <option value="us">us</option>
      </select>
      <br />
      <br />
      State :
      <select
        disabled={dataValue === "def"}
        onChange={(e) => setState(e.target.value)}
      >
        {[...lookup.default, ...options].map(({ id, text }) => (
          <option key={id} value={id}>
            {text}
          </option>
        ))}
      </select>
      <br />
      <br />
      <input type="button" name="submit" value="register" onClick={register} />
    </div>
  );

  function register(event) {
    let str = "\nFirst Name: " + firstName;
    str = str + "\nMiddle Name : " + middleName;
    str = str + " \nLast Name : " + lastName;
    str = str + "\nAge : " + age;
    str = str + " \nCountry : " + country;
    str = str + "\nState : " + state;
    alert(str);
  }
}
