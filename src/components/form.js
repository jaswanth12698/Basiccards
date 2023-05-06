import { useState } from "react";
import "./form.css";

function MyForm() {
  const [inputs, setInputs] = useState({});
  const [myGen, setMyGen] = useState("None");

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setMyGen(event.target.value);
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputs);
  };

  return (
    <section>
      <form onSubmit={handleSubmit} class="container">
        <div>
          <h1>Registration Details</h1>
        </div>
        <br />
        <br />
        <label>
          Enter your name:
          <br />
          <input
            type="text"
            name="username"
            value={inputs.username || ""}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <br />
        <label>
          Enter your age:
          <br />
          <input
            type="number"
            name="age"
            value={inputs.age || ""}
            onChange={handleChange}
          />
        </label>
        <br />
        <br />
        <div>
          Gender:
          <br />
          <select name="Gen" value={myGen} onChange={handleChange}>
            <option value="None">None</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <br />

        <label>
          Enter your Email:
          <br />
          <input
            type="email"
            name="Email"
            value={inputs.Email || ""}
            onChange={handleChange}
          />
        </label>
        <br />
        <br />
        <label>
          Enter your Password:
          <br />
          <input
            type="password"
            name="Password"
            value={inputs.Password || ""}
            onChange={handleChange}
          />
        </label>
        <br />
        <br />
        <hr />
        <p>
          By creating an account you agree to our <span>Terms & Privacy</span>.
        </p>
        <input class="registerbtn" type="submit" />
      </form>
    </section>
  );
}

export default MyForm;
