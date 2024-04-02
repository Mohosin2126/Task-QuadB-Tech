import { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from 'react-redux';
import { addTodo } from "../TodoSlice/TodoSlice";


const AddTask = () => {
    const dispatch = useDispatch();
    const { register, handleSubmit } = useForm();
    const [formData, setFormData] = useState({
        title: "",
        date: "",
        email: "",
        description: ""
    });

    // Function to handle form submission
    const onSubmit = async () => {
        // Construct task information object
        const taskInfo = {
            title: formData.title,
            date: formData.date,
            email: formData.email,
            description: formData.description,
           
        };

        // Dispatch the addTodo action with task information
        dispatch(addTodo(taskInfo));
    };

    // Function to handle form input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        // Update formData state with the new value
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    return (
        <div>
            <div>
                <h1 className="text-center font-extrabold text-3xl mt-16">Add Task</h1>
            </div>
            <div>
                <form onSubmit={handleSubmit(onSubmit)} >
                    {/* Title input field */}
                    <div className="form-control w-full my-6">
                        <label className="label">
                            <span className="label-text">Title*</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Title"
                            {...register('title', { required: true })}
                            required
                            name="title"
                            value={formData.title}
                            onChange={handleChange}
                            className="input input-bordered w-full" />
                    </div>
                    {/* Date input field */}
                    <div className="flex gap-6">
                        <div className="form-control w-full my-6">
                            <label className="label">
                                <span className="label-text">Deadlines*</span>
                            </label>
                            <input
                                type="date"
                                placeholder="Date"
                                {...register('date', { required: true })}
                                required
                                name="date"
                                value={formData.date}
                                onChange={handleChange}
                                className="input input-bordered w-full" />
                        </div>
                    </div>
                    {/* Email input field */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input
                            type="email"
                            {...register("email", { required: true })}
                            value={formData.email}
                            onChange={handleChange}
                            className="input input-bordered w-full" />
                    </div>
                    {/* Description input field */}
                    <div className="form-control my-6">
                        <label className="label">
                            <span className="label-text">Description</span>
                        </label>
                        <textarea
                            {...register('description')}
                            value={formData.description}
                            onChange={handleChange}
                            className="textarea textarea-bordered h-24"
                            placeholder="Description">
                        </textarea>
                    </div>
                    {/* Submit button */}
                    <button type="submit" className="btn btn-block">
                        Add Task
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AddTask;
