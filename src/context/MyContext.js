import React from 'react'

const MyContext = () => {
    const MyContext = createContext();
    const [user, setUser] = useState({
        name: "Ajay",
        city: "Ahmedabad",
        mobile: "9865785225",
      });
  return (
    <div>MyContext</div>
  )
}

export default MyContext