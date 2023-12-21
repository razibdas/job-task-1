
import { Link } from 'react-router-dom';
import './banner.css'

const Banner = () => {

   

    return (
        <div className="relative h-full w-full bg-[#EEDDCC] ">
            <img
                src="https://i.ibb.co/gdDhn6d/ai-nuclear-energy-background-future-innovation-disruptive-technology.jpg"
                alt="image 1"
                style={{ height: '60vh' }}
                className="w-full object-cover"
            />
            <div className="absolute inset-0 h-full w-full place-items-center bg-black/75">
                <div className="flex items-center ml-96 lg:mt-36">
                    <div className=" mt-12">
                        <Link to="dashboard"><h2 className='animated-button btn'>Let's Explore</h2></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
