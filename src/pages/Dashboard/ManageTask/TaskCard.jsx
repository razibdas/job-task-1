import { FaRegClock } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";

import { useState } from "react";
import toast from "react-hot-toast";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import EditModal from "../Modals/EditeModal";


const TaskCard = ({ item, refetch, provided }) => {
    const axiosSecure = useAxiosSecure();
    const handleStatus = async (e) => {
        e.preventDefault();
        const status = {
            status: e.target.value,
        };
        const res = await axiosSecure.patch(`/status?id=${item._id}`, status);
    if (res.data.modifiedCount > 0) {
            toast.success("Updated successfully");
        }
        refetch();
    };
    const handleDelete = async () => {
        const res = await axiosSecure.delete(`/delete?id=${item._id}`);
    console.log(res.data);
        if (res.data.deletedCount > 0) {
            toast.success("Deleted successfully");
        }
        refetch();
    };
    let [isOpen, setIsOpen] = useState(false);
    function closeModal() {
        setIsOpen(false);
    }
    function openModal() {
        setIsOpen(true);
    }
    return (
        <div
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            className="mb-1  rounded-sm p-3 outline-2 outline-orange-500"
        >
            <h3 className="text-bold">{item.title}</h3>
            <p className="text-sm">{item.description}</p>
            <div className="flex justify-between pt-2">
                <span
                    className={`px-1 rounded-md text-white ${item.priority === "low" && "bg-yellow-600"
                        } ${item.priority === "moderate" && "bg-[#00B5FF]"} ${item.priority === "high" && "bg-red-500"
                        }`}
                >
                    {item.priority}
                </span>
                <span className="flex items-center gap-1">
                    <FaRegClock />
                    {item.deadline}
                </span>
            </div>
            <div className="flex justify-between pt-1 ">
                <button
                    onClick={() => openModal()}
                    className="text-xl"
                    title="Delete Task"
                >
                    <FaEdit />
                </button>
                <select
                    onChange={handleStatus}
                    className="rounded-lg outline-[#00B5FF]"
                    name="status"
                    id=""
                    defaultValue={item.status}
                >
                    <option disabled>Set Status</option>
                    <option value="todo">Todo</option>
                    <option value="progress">progress</option>
                    <option value="completed">Completed</option>
                </select>

                <button onClick={handleDelete} className="text-xl" title="Delete Task">
                    <MdDelete />
                </button>
            </div>
            <EditModal
                refetch={refetch}
                item={item}
                isOpen={isOpen}
                closeModal={closeModal}
            />
        </div>
    );
};

export default TaskCard;