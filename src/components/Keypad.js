// Code Keypad Component Here

function Keypad() {
  function handleChange() {
    console.log("Entering password...");
  }
  return (
    <div>
      <input
        type="password"
        placeholder="Your fav number"
        onChange={handleChange}
      />
    </div>
  );
}

export default Keypad;
