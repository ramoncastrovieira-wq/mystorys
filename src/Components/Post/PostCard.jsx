import React from 'react'
import { BsThreeDots } from 'react-icons/bs';
const PostCard = () => {
    const [showDropDown, setShowDropdown]=useState(false);
    const handleClick=()=>{
setShowDropdown(!showDropDown);
    }
    return (
    <div>
        <div className="border rounded-md w-full">
            <div className="flex justify-between items-center w-full py-4 px-5">
            <div className="flex items-center">
                        </div>
                        
                        </div>
                            <BsThreeDots onClick={handleClick}/>
                        <div onClick={handleClick} className="dropdown-content">
                        {showDropDown && <p className='bg-black text-white py-1 px-4 rounded-md cursor-pointer'>Delete</p>}
                    </div>
                </div>
            </div>
    );
};

export default PostCard