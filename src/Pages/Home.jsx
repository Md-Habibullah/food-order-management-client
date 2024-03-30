import { useLoaderData } from "react-router-dom";
import Food from "../Components/Food";
import { useState } from "react";


const Home = () => {
    const allFoods = useLoaderData()
    const [foods, setFoods] = useState(allFoods)
    return (
        <div>
            <h2>Home</h2>
            <div>
                {
                    foods.map(food => <Food key={food._id} foods={foods} setFoods={setFoods} food={food}></Food>)
                }
            </div>
        </div>
    );
};

export default Home;