import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import { removeTodo } from "../TodoSlice/TodoSlice";

const MyTask = () => {
    // Retrieve todos from the Redux store
    const todos = useSelector(state => state.todo.todos);


    // Initialize dispatch function to trigger Redux actions
    const dispatch = useDispatch();

    // Function to handle deletion of a task
    const handleDelete = (id) => {
        // Display confirmation dialog using SweetAlert
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                // Dispatch the removeTodo action with the task id to delete it
                dispatch(removeTodo(id));
            }
        });
    };

    return (
        <div>
            <div>
                {/* Title */}
                <h1 className="text-center font-extrabold text-3xl mt-16">My Task</h1>
            </div>
            <div className=" ml-10 mt-5">
                {/* Table displaying task information */}
                <table className="table  border-separate w-3/4 md:w-1/2 lg:w-full">
                    {/* Table head */}
                    <thead>
                        <tr className='bg-orange-400'>
                            <th className='text-xl text-black'>Title</th>
                            <th className='text-xl text-black'>Description</th>
                            <th className='text-xl text-black'>Date</th>
                            <th className='text-xl text-black'>Status</th>
                            <th className='text-xl text-black'>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* Rows of tasks */}
                        {
                            todos.map((data, index) => (
                                <tr key={data.id} className={index % 2 === 0 ? 'bg-slate-200' : 'bg-orange-200'}>
                                    <td>{data.text.title}</td>
                                    <td>{data.text.description}</td>
                                    <td>{data.text.date}</td>
                                    <td>{data.text.status}</td>
                                    {/* Button to delete the task */}
                                    <td>
                                        <button onClick={() => handleDelete(data.id)} type="button" className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Delete</button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyTask;
