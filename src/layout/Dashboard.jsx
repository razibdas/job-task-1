
import { Outlet } from "react-router-dom";


const Dashboard = () => {
 
 

  return (
    <div className="flex">
      <div className="w-64 min-h-screen bg-gray-200">
        <ul className="menu p-4">
          <h2>Hi</h2>
        </ul>
      </div>
      <div className="flex-1">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
