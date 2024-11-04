

    import Header from "../Shared/Header/Header";
    import RightSideNav from "../Shared/RightSideNav/RightSideNav";
    import Navbar from "../Shared/Navbar/Navbar";
    import { FaLongArrowAltLeft } from "react-icons/fa";
    import { Link, useParams } from "react-router-dom";
    import { useLoaderData } from 'react-router-dom';
    
    const NewsDetails = () => {
        const { id } = useParams();
        const newsData = useLoaderData();
      

        const newsItem = newsData.find(item => item._id === id);
    
        if (!newsItem) {
            return <p>News item not found</p>;
        }
    
        const { image_url, title, details } = newsItem;
    
        return (
            <div className="p-2">
                <Header></Header>
                <Navbar></Navbar>
                <div className="grid col-span-1 md:grid-cols-4">
                    <div className="sm:col-span-4 md:col-span-3">
                        <h1 className="text-3xl font-bold md:mb-6">Dragon News</h1>
                        <div className="card card-compact bg-base-100 p-4 md:p-10 shadow-xl">
                            <figure>
                                <img src={image_url} alt={title} />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title">{title}</h2>
                                <p>{details}</p>
                                <div className="card-actions">
                                    <Link to="/">
                                        <button className="btn bg-[#D72050] text-white">
                                            <FaLongArrowAltLeft /> Back to Home
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <RightSideNav></RightSideNav>
                    </div>
                </div>
            </div>
        );
    };
    
    export default NewsDetails;
    