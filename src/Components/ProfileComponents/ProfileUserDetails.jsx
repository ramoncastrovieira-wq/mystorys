import React from 'react'
import {TbCircleDhased} from "react-icons/tb"

const Profile = () => {
    return (
        <div className='py-10 w-full '>
            <div className='flex items-center'>              
                <div className="w-[15%]">
                    <img 
                        className="w-32 h-32 rounded-full w-full " 
                        src="https://cdn.pixabay.com/photo/2023/03/18/10/43/plum-blossoms-7860381_340.jpg" 
                        alt="" 
                        />   
            </div>

            <div className="space-y-5">
                <div className="flex space-x-10 itemc">
                    <p>username</p>
                    <button>Edit Profile</button>
                    <TbCircleDhased></TbCircleDhased>
                </div>
                <div className="flex space-x-10">
                    <div>
                        <span className="font-semibold mr-2">10</span>
                        <span>posts</span>
                    </div>

                    <div>
                        <span className="font-semibold mr-2">5</span>
                        <span>follower</span>
                    </div>
                    <div>
                        <span className="font-semibold mr-2">7</span>
                        <span>following</span>
                    </div>
                </div>
            </div>

            <div>
                <p className="font-semibold">Full Name</p>
                <p className="font-thin text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, odio inventore? Ipsam facere quam hic, iure voluptatum explicabo eveniet earum nisi reiciendis, provident aspernatur dolores omnis tenetur pariatur molestiae vel.</p>
            </div>
        </div>
        </div>
    );
};

export default Profile