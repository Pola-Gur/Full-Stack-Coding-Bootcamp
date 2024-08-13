import React, { useEffect, useState } from 'react';

const ComponentuseEffect: React.FC = () => {
  const [data, setData] = useState<any[]>([]); 

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      const data = await response.json();
      setData(data); 
    };

    fetchData(); 
  }, []); 
  
  return (
    <div>
      <h1>Fetched Users:</h1>
      <ul>
        {data.map((user) => (
          <li key={user.id}>
            <h3>{user.name}</h3>
            <p>{user.email}</p>
            <p>{user.phone}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ComponentuseEffect;