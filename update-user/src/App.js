import React, { useState } from "react";
import useUpdateUser from "./useUpdateTimeout";

const App = props => {
  const {
    updating,
    updated,
    updateError,
    timedOut,
    updateUser
  } = useUpdateUser({ timedOut: 12000 });

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = e => {
    e.preventDefault();
    const params = { email, password };
    updateUser("my-user-id123", params);
  };

  const isInitial = !updating && !updated && !updateError && !timedOut;
  const errorMessage =
    updateError &&
    (updateError.errorMessage || "An error occurred. Please try again later");

  return (
    <div className="container">
      <h2>
        {isInitial && "Update your email or password beloe"}
        {updating && "Updating your profile"}
        {updated && "Your profile has been updated"}
        {errorMessage && <span className="error-txt">{errorMessage}</span>}
        {timedOut &&
          "We did not receive a response from the server. Please try again later"}
      </h2>
      <form onSubmit={onSubmit}>
        <div>
          <input
            type="text"
            placeholder="Email"
            name="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Password"
            name="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default App;
