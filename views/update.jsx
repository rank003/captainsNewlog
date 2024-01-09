const React = require('react');
const { useState } = require('react');

const NewUpdate = ({ myOutput }) => {
  // Initialize state for the checkbox
  const [shipIsBroken, setShipIsBroken] = useState(myOutput.shipIsBroken);

  // Function to update the state when the checkbox is clicked
  const handleCheckboxChange = () => {
    setShipIsBroken(!shipIsBroken);
  };



  
  return (
    <div>
      <h1>Create New Log</h1>
      <form action={`/logs/update/${myOutput.id}`} method="POST">
        <label>
          Title: <input type="text" name="title" defaultValue={myOutput.title} />
        </label>
        <br />
        <label>
          Entry: <textarea name="entry" defaultValue={myOutput.entry}></textarea>
        </label>
        <br />
        <label>
          Ship is Broken: <input type="checkbox" name="shipIsBroken" defaultChecked={myOutput.shipIsBroken} onChange={handleCheckboxChange} />
        </label>
        <br />
        <input type="submit" value="Update Log" />
      </form>
      <a href="/logs">Back to Index</a>
    </div>
  );
};

module.exports = NewUpdate;
