import React, { useState } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { BsBookmark, BsBookmarkFill, BsEmojiSmile } from "react-icons/bs";
import { FaRegComment } from "react-icons/fa";
import { RiSendPlaneLine } from "react-icons/ri";
import "./PostCard.css";

const PostCard = () => {
  const [isPostLiked, setIsPostLiked] = useState(false);
  const [isSaved, setIsSaved] = useState(false);

  const handleSavePost = () => {
    setIsSaved(!isSaved);
  };

  const handlePostLike = () => {
    setIsPostLiked(!isPostLiked);
  };

  return (
    <div className="border rounded-md w-full">
      
      <div className="flex justify-between items-center w-full py-4 px-5">
      </div>

      <div className="flex justify-between items-center w-full px-5 py-4">
        <div className="flex items-center space-x-2">
          
          {isPostLiked ? (
            <AiFillHeart
              className="text-2xl hover:opacity-50 cursor-pointer text-red-500"
              onClick={handlePostLike}
            />
          ) : (
            <AiOutlineHeart
              className="text-2xl hover:opacity-50 cursor-pointer"
              onClick={handlePostLike}
            />
          )}

          <FaRegComment className="text-xl hover:opacity-50 cursor-pointer" />
          <RiSendPlaneLine className="text-xl hover:opacity-50 cursor-pointer" />

        </div>

        <div className="cursor-pointer">
          {isSaved ? (
            <BsBookmarkFill
              onClick={handleSavePost}
              className="text-xl hover:opacity-50"
            />
          ) : (
            <BsBookmark
              onClick={handleSavePost}
              className="text-xl hover:opacity-50"
            />
          )}
        </div>
      </div>

      <div className="w-full py-2 px-5">
        <p>10 likes</p>
        <p className="opacity-50 py-2 cursor-pointer">
          view all 10 comments
        </p>
      </div>

      <div className="border-t w-full">
        <div className="flex w-full items-center px-5 py-3 space-x-2">
          <BsEmojiSmile />
          <input
            className="commentInput flex-grow outline-none"
            type="text"
            placeholder="Add a comment..."
          />
        </div>
      </div>

    </div>
  );
};

export default PostCard;