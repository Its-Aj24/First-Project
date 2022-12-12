import React, { useEffect, useState } from "react";
import { get_detail } from "../../axios/Services";

const TestUser = () => {
  const [user, setUser] = useState({});
  useEffect(() => {
    get_detail().then((resp) => {
      console.log(resp);
      setUser(resp.data);
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
        {user && 
            <tr>
                <td>{user.title}</td>
                <td>{user.userId}</td>
                <td>{user.id}</td>

            </tr>
        }
      </table>
    </div>
  );
};

export default TestUser;
