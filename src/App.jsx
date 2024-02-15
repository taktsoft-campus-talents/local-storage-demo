import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [user, setUser] = useState(() => {
    const newUser = localStorage.getItem("user");
    if (newUser) {
      return JSON.parse(newUser);
    } else {
      return { name: "", email: "" };
    }
  });
  const [inputUser, setInputUser] = useState({ name: "", email: "" });

  useEffect(() => {
    function saveToLocalStorage() {
      localStorage.setItem("user", JSON.stringify(user));
    }
    saveToLocalStorage();
  }, [user]);

  return (
    <>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          setUser({ ...inputUser });
          setInputUser({ name: "", email: "" });
        }}
        className="form-container"
      >
        <label htmlFor="name">Name</label>
        <input
          value={inputUser.name}
          onChange={(event) => {
            setInputUser({ ...inputUser, name: event.target.value });
          }}
          id="name"
          type="text"
        />
        <label htmlFor="email">E-Mail</label>
        <input
          value={inputUser.email}
          onChange={(event) => {
            setInputUser({ ...inputUser, email: event.target.value });
          }}
          id="email"
          type="email"
        />
        <button>Submit</button>
      </form>

      <h2>Logged in User:</h2>
      <p>{user.name}</p>
      <p>{user.email}</p>
      {user.name ? (
        <>
          <button
            onClick={() => {
              setUser({ name: "", email: "" });
            }}
          >
            Log out
          </button>
        </>
      ) : undefined}
    </>
  );
}

export default App;
