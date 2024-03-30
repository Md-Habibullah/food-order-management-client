

const OrderFood = () => {

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

        const food = { name, price, supplier, taste, review, ratting, photo }

        fetch('https://food-order-management-server.vercel.app/foods', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(food)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId) {
                    alert('added done')
                }
            })
    }

    return (
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
    );
};

export default OrderFood;