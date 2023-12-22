import React from "react";
import { Draggable } from "react-beautiful-dnd";
import TaskCard from "./TaskCard";



const TaskColumn = ({ task, title, refetch, provided }) => {
    return (
        <div
            {...provided.droppableProps}
            ref={provided.innerRef}
            className="rounded w-[300px] h-[629px] flex flex-col overflow-y-auto"
        >
            <div className="text-center h-[60px] rounded-t-md px-3 bg-[#00B5FF] flex items-center justify-center">
                <p className="text-xl font-semibold">{title}</p>
            </div>
            <div className="px-2 flex flex-1 flex-col text-black border-b-2 border-x-2 border-[#00B5FF] rounded-b-md overflow-y-auto">
                {task &&
                    task.map((item, index) => (
                        <Draggable key={item._id} draggableId={item._id} index={index}>
                            {(provided) => (
                                <TaskCard
                                    provided={provided}
                                    refetch={refetch}
                                    key={item._id}
                                    item={item}
                                />
                            )}
                        </Draggable>
                    ))}
            </div>
            {provided.placeholder}
        </div>
    );
};

export default TaskColumn;