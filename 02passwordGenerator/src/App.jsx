import { useCallback, useState, useEffect, useRef } from "react";
import "./App.css";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) str += "1234567890";
    if (charAllowed) str += "!@#$%^&*?<>";
    for (let index = 1; index <= length; index++) {
      // let char = Math.floor(Math.random() * str.length +1)
      // pass += str.charAt(char)
      let char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [length, numberAllowed, charAllowed, setPassword]);

  const copyToCB = useCallback(() => {
    passRef.current?.select();
    window.navigator.clipboard.writeText(password);
    alert('Password: '+ password + " copied to clipboard")
  }, [password]);

  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, charAllowed, passwordGenerator]);

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gradient-to-r from-[#D3F5CF] via-[#A8DBFA] to-[#635EE2] text-white">
        <h1 className="text-center text-white my-3 text-3xl font-medium">
          Password Generator
        </h1>
        <div className="flex shadow-md rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            ref={passRef}
            value={password}
            className="outline-none w-full px-3 py-1 text-gray-700 font-semibold"
            placeholder="password"
            readOnly
          />
          <button
            onClick={copyToCB}
            className="bg-sky-500 text-white px-3 py-1 hover:bg-sky-600 font-medium"
          >
            Copy
          </button>
        </div>
        <div className="flex gap-x-2 text-sm justify-between font-medium">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={8}
              max={20}
              value={length}
              className="cursor-pointer"
              onChange={(e) => setLength(e.target.value)}
            />
            <label>Length: {length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              id="number-check"
              defaultChecked={numberAllowed}
              onChange={() => setNumberAllowed((pre) => !pre)}
            />
            <label htmlFor="number-check">Number</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              id="char-check"
              defaultChecked={charAllowed}
              onChange={() => setCharAllowed((pre) => !pre)}
            />
            <label htmlFor="char-check">Characters</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
