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
            className="bg-gray-500 font-bold rounded-lg shadow-lg overflow-hidden hover:scale-105 object-cover">
            <img
              className="w-[500px] h-[300px] object-cover"
              src={`https://source.unsplash.com/random/?${item.name}`}
              alt={item.name}
            />
            <div className="mx-4 my-2 ">
              <h1 className="text-2xl text-slate-200">{item.name}</h1>
              <h3 className="text-md text-slate-300">
                Calories : {item.nutritions.calories}
              </h3>
              <h3 className="text-md text-slate-300">
                Fat : {item.nutritions.fat}
              </h3>
              <h3 className="text-md text-slate-300">
                Sugar : {item.nutritions.sugar}
              </h3>
              <h3 className="text-md text-slate-300">
                Protein : {item.nutritions.protein}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Items;
//https://random.imagecdn.app/500/500