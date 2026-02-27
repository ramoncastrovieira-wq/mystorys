import React from 'react'
import StoryCircle from '../../Components/StoryCircle/StoryCircle';
import PostCard from '../../Components/PostCard/PostCard';
import HomeRight from '../../Components/HomeRight/HomeRight';

const HomePage = () => {
    return (
        <div>
            <div className="w-[44%] px-10 ">
                <div className='storyDiv flex space-x-2 border p-4 rounded-md justify-start w-full'>
                    {[1, 1, 11].map((item) => (
                        <StoryCircle></StoryCircle>
                    ))}
                </div>

                <div className="space-y-10 w-full mt-10">
                    {[1,1].map((item)=><PostCard/>)}
                </div>
                <div className="w-[30%]">
                    <HomeRight/>
                </div>
            </div>
        </div>
    );
};

export default HomePage