import { FaBookmark } from "react-icons/fa";
import { IoMdShare, IoMdStar, IoIosEye } from "react-icons/io";
import { Link } from "react-router-dom";

const NewsCard = ({news}) => {
    console.log(news)
    const { image_url, title, details, author, _id, rating, total_view} = news; 
    return (
        <div className="p-4">
            <div className="my-10">
              {/* author section */}
              <div className="flex items-center justify-between p-4 bg-[#F3F3F3]">
                {/* author img name */}
                <div className="flex items-center space-x-4">
                  <img className="w-16 rounded-full" src={author.img} alt="" />
                  <div>
                    <h4 className="font-bold">{author.name}</h4>
                    <h4>{author.published_date
                    }</h4>
                  </div>
                </div>
                <div className="flex space-x-3"> 
                  <FaBookmark></FaBookmark>
                  <IoMdShare></IoMdShare>
                </div>
              </div>
              {/* atuhor section end  */}
              <div>
                <h1 className="text-2xl font-bold my-4">{title}</h1>
                <img src={image_url} alt="dragon news" />
                <p className="my-3">{details.length > 200 ? <p>{details.slice(0, 200 )} <Link to={`/news/${_id}`} className="text-orange-500 font-bold">Read more.....</Link></p> :<p>{details}</p> }</p>
              </div>
              <hr className="my-6" />
              <div className="flex items-center justify-between">
                <div className="flex items-center text-orange-500">
                  <IoMdStar></IoMdStar>
                  <IoMdStar></IoMdStar>
                  <IoMdStar></IoMdStar>
                  <IoMdStar></IoMdStar>
                  <span className="text-black ml-3">{rating.number}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <IoIosEye></IoIosEye>
                  <p>{total_view}</p>
                </div>
              </div>

            </div>
        </div>
    );
};

export default NewsCard;