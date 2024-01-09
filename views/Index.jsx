const React = require('react');




const Index = ({ logs }) => (
  <div>
    <h1>Captain's Log Index</h1>
    <ul>
      {logs.map((log) => (
        <li key={log._id}>
          <a href={`/logs/${log._id}`}>{log.title}</a>
        </li>
      ))}
    </ul>
    <a href="/logs/new">Create New Log</a>
    
  </div>
);

module.exports = Index;
