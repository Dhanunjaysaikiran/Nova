import React from "react";

function AllVotes(props) {
  
  const Values = props.Votes;
  return (
    <div className="votes">
      <div className="full">
        <h2>All Votes</h2>
      </div>
      <div className="full center">
       <table>
       <thead>
          <tr>
          <th>Voter</th>
          <th>Option</th>
          <th>Points</th>
          </tr>
        </thead>
        <tbody>
          {Values?Values.map((Value) => {
            return (
              <tr key={Value.voter}>
                <td>{Value.voter}</td>
                <td>{Value.option}</td>
                <td>{Value.points}</td>
              </tr>
            );
          }):null}
        </tbody>
       </table>
      </div>
    </div>
  );
}

export default AllVotes;
