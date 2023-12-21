
import { Link, Outlet } from "react-router-dom";



const Dashboard = () => {
 
 

  return (
    <div className="flex">
      <div className="w-64 min-h-screen bg-blue-500 text-white">
        <ul className="menu p-4">
          <h2>Hi</h2>
        </ul>
        <div className="divider"></div>
        <div>
            <Link to="/"><h2>Home</h2></Link>
        </div>
      </div>
      <div className="flex-1">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
