import { BadgeCheck } from "lucide-react";
import React from "react";
import moment from "moment";
import { useNavigate } from 'react-router-dom'


const PostCard = ({ post }) => {

  const navigate = useNavigate()


  return (
    <div className="bg-white min-w-40 rounded-xl shadow p-4 space-y-4 w-full max-w-2xl">
      {/* user info */}
      <div onClick={()=> navigate(`/profile`+ post._id)} className="inline-flex items-center gap-3 cursor-pointer">
        <img
          src={post.profile_picture}
          alt={post.username}
          className="w-10 h-10 rounded-full shadow"
        />
        <div>
          <div className="flex items-center gap-1 font-semibold text-gray-900">
            <span>{post.username}</span>
            <BadgeCheck className="w-4 h-4 text-blue-500" />
          </div>
          <div className="text-sm text-gray-500">
            {moment(post.createdAt).fromNow()}
          </div>
        </div>
      </div>

      {/* caption */}
      <p className="text-gray-800">{post.caption}</p>

      {/* image */}
      {post.image && (
        <img
          src={post.image}
          alt="post"
          className="w-full rounded-lg object-cover"
        />
      )}
    </div>
  );
};

export default PostCard;
