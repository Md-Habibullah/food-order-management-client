import { useLoaderData } from "react-router-dom";

const UpdatedFood = () => {
    const food = useLoaderData()


    const handleSubmit = (e) => {
        e.preventDefault()
        const form = e.target
        const name = form.name.value
        const price = form.price.value
        const supplier = form.supplier.value
        const taste = form.taste.value
        const review = form.review.value
        const ratting = form.ratting.value
        const photo = form.photo.value

        const foods = { name, price, supplier, taste, review, ratting, photo }

        fetch(`https://food-order-management-server.vercel.app/foods/${food._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(foods)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })
    }

    return (
        <div>
            <div className=" flex justify-between w-2/4 mx-auto card-side bg-base-100 shadow-xl">
                <div>
                    <figure><img className="w-[200px] h-[200px]" src={food.photo} alt="Movie" /></figure>
                </div>
                <div className="card-body">
                    <h2 className="card-title">Review: {food.review}</h2>
                    <p>Price: {food.price}</p>
                    <p>Taste: {food.taste}</p>
                    <p>Ratting: {food.ratting}</p>
                </div>
            </div>


            <div className=" py-24 px-64">
                <h2 className="text-3xl font-extrabold text-white">Add a coffee</h2>
                <form onSubmit={handleSubmit}>

                    {/* form name & quantity row */}
                    <div className="md:flex justify-between">
                        <div className="md:w-[49%] form-control">
                            <label className="label">

                            </label>
                            <label className="input-group">
                                <span>Food Name</span> <br />
                                <input type="text" placeholder="Name" name="name" className="w-full input input-bordered" />
                            </label>
                        </div>

                        <div className="md:w-[49%] form-control">
                            <label className="label">

                            </label>
                            <label className="input-group">
                                <span>Price</span> <br />
                                <input type="text" placeholder="Price" name="price" className="w-full input input-bordered" />
                            </label>
                        </div>
                    </div>

                    {/* form supplier & taste row */}
                    <div className="md:flex justify-between">
                        <div className="md:w-[49%]  form-control">
                            <label className="label">

                            </label>
                            <label className="input-group">
                                <span>Supplier</span> <br />
                                <input type="text" placeholder="supplier" name="supplier" className="w-full input input-bordered" />
                            </label>
                        </div>

                        <div className="md:w-[49%]  form-control">
                            <label className="label">

                            </label>
                            <label className="input-group">
                                <span>Taste</span> <br />
                                <input type="text" placeholder="taste" name="taste" className="w-full input input-bordered" />
                            </label>
                        </div>
                    </div>

                    <div className="md:flex justify-between">
                        <div className="md:w-[49%]  form-control">
                            <label className="label">

                            </label>
                            <label className="input-group">
                                <span>Review</span> <br />
                                <input type="text" placeholder="supplier" name="review" className="w-full input input-bordered" />
                            </label>
                        </div>

                        <div className="md:w-[49%]  form-control">
                            <label className="label">

                            </label>
                            <label className="input-group">
                                <span>ratting</span> <br />
                                <input type="text" placeholder="ratting" name="ratting" className="w-full input input-bordered" />
                            </label>
                        </div>
                    </div>



                    {/* photo url row */}
                    <div className="md:flex">
                        <div className="md:w-full form-control">
                            <label className="label">

                            </label>
                            <label className="input-group">
                                <span>Foods Image URL</span> <br />
                                <input type="text" placeholder="img url" name="photo" className="w-full input input-bordered" />
                            </label>
                        </div>

                    </div>

                    {/* button */}
                    <input className="btn btn-block mt-9 bg-slate-800" type="submit" value="Add Coffee" />

                </form>
            </div>


        </div>
    );
};

export default UpdatedFood;