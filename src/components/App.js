import React, { useState } from "react";

function App() {
  const [firstName, setFirstName] = useState("");
  const [secondName, setSecondName] = useState("");
  const [relationship, setRelationship] = useState("");
  
  const handleClick = () => {
    if (firstName === "" || secondName === "") {
      setRelationship("Please Enter valid input");
      return;
    }
    
    const name1 = firstName.toLowerCase();
    const name2 = secondName.toLowerCase();
    
    let commonChars = "";
    for (let i = 0; i < name1.length; i++) {
      const char = name1.charAt(i);
      if (name2.includes(char)) {
        commonChars += char;
        name2 = name2.replace(char, "");
      }
    }
    
    const remaining1 = name1.replace(new RegExp(`[${commonChars}]`, "g"), "");
    const remaining2 = name2.replace(new RegExp(`[${commonChars}]`, "g"), "");
    const sum = (remaining1.length + remaining2.length) % 6;
    
    switch (sum) {
      case 0:
        setRelationship("Siblings");
        break;
      case 1:
        setRelationship("Friends");
        break;
      case 2:
        setRelationship("Love");
        break;
      case 3:
        setRelationship("Affection");
        break;
      case 4:
        setRelationship("Marriage");
        break;
      case 5:
        setRelationship("Enemy");
        break;
      default:
        setRelationship("Please Enter valid input");
    }
  };
  
  const handleClear = () => {
    setFirstName("");
    setSecondName("");
    setRelationship("");
  };

  return (
    <div>
      <input
        type="text"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
        data-testid="input1"
      />
      <input
        type="text"
        value={secondName}
        onChange={(e) => setSecondName(e.target.value)}
        data-testid="input2"
      />
      <button onClick={handleClick} data-testid="calculate_relationship">
        Calculate Relationship Future
      </button>
      <button onClick={handleClear}>Clear</button>
      <h3 data-testid="answer">{relationship}</h3>
    </div>
  );
}

export default App;
