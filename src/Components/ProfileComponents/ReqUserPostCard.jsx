import React from 'react'
import { AiFillHeart } from 'react-icons/ai'
import {FaCommet} from "react-icons/fa";
import "./ReqUserPostCard.css"

const ReqUserPostCard = () => {
    return (
    <div>
        <div className='w-60 h-60'>
            <img className='cursor-pointer' src="https://cdn.pixabay.com/photo/2023/03/04/15/53/duck-7829778_640.jpg" alt="" />
        <div className='overlay'>
            <div className='overlay-text flex justify-between'>
                <div>
                    <AifillHeart></AifillHeart> <span>10</span>
                </div>
                <div><FaComment/> <span>30</span></div>
            </div>
        </div>
    </div>
</div>
    )
}

export default ReqUserPostCard