import React from 'react'

const CommentCard = () => {
    const [isCommentLike, setIsCommentLike] = useState();

    const handleLikeComment = () => {
        setIsCommentLike(!isCommentLike)
    }
    return (
        <div>
            <div className="flex items-center justify-between py-5">
                <div className='flex items-center'>
                    <img className='w-9 h-9 rounded-full' src="https://cdn.pixabay.com/photo/2023/03/12/13/27/mountains-7840428__340.jpg" alt="" />
                </div>
                <div className='ml-3'>
                    <p>
                        <span className='font-semibold'>Username</span>
                    
                        <span className='ml-2'>nice post</span>
                    </p>
                    <div>
                    <div className='flex items-center space-x-3 text-xs opacity-60 pt-2'>
                        <span>1 min ago</span>
                        <span>23 likes</span>
                    </div>

                    </div>
                </div>
            {isCommnetLike?(
                <AiFillHeart onClick={handleLikeCommnet} className='text-xs hover:opacity-50 cursor-pointer text-red-600'/>
            ):(
                <AiOutlineHeart onClick={handleLikeCommnet} className="text-xs hover:opacity-50 cursor-pointer"/>
            )}
            </div>
        </div>
    )
}

export default CommentCard