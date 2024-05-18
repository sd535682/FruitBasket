import { useState, useEffect } from "react";

function Items() {
  const [fruit, setFruit] = useState([]);

  useEffect(() => {
    fetch(`https://proxyserver-phi.vercel.app/`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => setFruit(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 bg-slate-100 px-4 md:px-8 py-4 gap-4 items-center justify-stretch">
        {fruit.map((item, index) => (
          <div
            key={index}
            className="font-bold rounded-lg shadow-md overflow-hidden hover:scale-105">
            <img
              src={`https://picsum.photos/id/${Math.floor(
                Math.random() * 10
              )}/500`}
              alt={item.name}
              className="card-image"
            />
            <div className="m-4">{item.name}</div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Items;
