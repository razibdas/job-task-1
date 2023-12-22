
import { Link } from 'react-router-dom';
import './banner.css'
import { useContext } from 'react';
import { AuthContext } from '../../../provider/AuthProvider';

const Banner = () => {

    const { user } = useContext(AuthContext)

    return (
        <div className="relative h-full w-full bg-[#EEDDCC] ">
            <img
                src="https://i.ibb.co/gdDhn6d/ai-nuclear-energy-background-future-innovation-disruptive-technology.jpg"
                alt="image 1"
                style={{ height: '60vh' }}
                className="w-full object-cover"
            />
            <div className="absolute inset-0 h-full w-full place-items-center bg-black/75">
                <div className="flex items-center lg:ml-96 lg:mt-36">
                    <div className=" mt-12">
                        {user ? (
                            <button className="py-[6px] px-3 rounded-md btn-secondary text-base md:text-xl btn mt-3">
                                <Link to={"/dashboard"}>Lets Explore</Link>
                            </button>
                        ) : (
                            <button className="py-[6px] px-3 rounded-md btn text-base btn-secondary md:text-xl mt-3">
                                <Link to={"/login"}>Lets Explore</Link>
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
