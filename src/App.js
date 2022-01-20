import { useState, useEffect } from 'react';

function App() {
  const [bmi, setBmi] = useState(false);
  const [showBmiForm, setShowBmiForm] = useState(false);

  const handleShowForm = () => {
    setShowBmiForm(!showBmiForm);
  };

  return (
    <div>
      {bmi ? (
        <h1>BMI</h1>
      ) : showBmiForm ? (
        <h3 onClick={handleShowForm}>Form</h3>
      ) : (
        <h2 onClick={handleShowForm}>AddCard</h2>
      )}
    </div>
  );
}

export default App;
