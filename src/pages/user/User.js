import React, { useEffect, useState } from "react";
import { get_details } from "../../axios/Services";

const User = () => {
  const [demo, setDemo] = useState([]);

  useEffect(() => {
    get_details().then((response) => {
         setDemo(response.data);
    });
  }, []);

  return (
    <div>
      <table>
        <tr>
          <th>Company</th>
          <th>Contact</th>
          <th>Country</th>
        </tr>
        {demo && demo.length !== 0 &&
            demo.map((k) => (
                <tr key={k.id}>
                <td>{k.name}</td>
                <td>{k.postId}</td>
                <td>{k.email}</td>
              </tr>
            ))
        }
      </table>
    </div>
  );
};

export default User;
