const React = require('react');


const Show = ({ log }) => (
  <div>
    <h1>Captain's Log - {log.title}</h1>
    <p>Entry: {log.entry}</p>
    <p>Ship is Broken: {log.shipIsBroken ? 'Yes' : 'No'}</p>
    <button><a href={`/logs/delete/${log._id}`}>delete</a></button> 
    <a href="/logs">Back to Index</a>
    <button><a href={`/logs/edit/${log._id}`}>update</a></button>
  </div>
);



module.exports = Show;
