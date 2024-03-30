import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

const Food = ({ food, foods, setFoods }) => {
    console.log(foods)

    const handleDelete = _id => {
        fetch(`https://food-order-management-server.vercel.app/foods/${_id}`, { method: 'DELETE' })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                const remainingFoods = foods.filter(fd => fd._id != _id)
                setFoods(remainingFoods)
            })
    }

    return (
        <div>
            <div>
                <div className="card card-side bg-base-100 shadow-xl">
                    <figure><img className='w-[150px] h-[150px]' src={food.photo} alt="coffee" /></figure>
                    <div className='flex justify-between items-center w-full pr-4'>
                        <div className='ml-4'>
                            <h2 className='flex flex-col card-title'>Name: {food.name}</h2>
                            <p>{food.price}</p>
                            <p>{food.supplier}</p>
                            <p>{food.taste}</p>
                        </div>

                        <div className="card-actions justify-end">
                            <div className="space-y-4 space-x-2">
                                <button className='btn'>View</button>
                                <Link to={`/updateFood/${food._id}`}><button className='btn'>Edit</button></Link>
                                <button onClick={() => handleDelete(food._id)} className='btn bg-orange-500'>X</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

Food.propTypes = {
    food: PropTypes.object,
    foods: PropTypes.array,
    setFoods: PropTypes.func,

}

export default Food;