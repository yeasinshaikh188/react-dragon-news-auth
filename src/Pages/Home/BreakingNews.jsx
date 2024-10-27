import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const BreakingNews = () => {
    return (
        <div className="flex items-center my-5 px-7 py-4 bg-[#F3F3F3]">
            <button className="btn bg-[#D72050] text-white text-xl font-bold rounded-none px-7 hover:bg-[#D72050]">Latest</button>
            <Marquee pauseOnHover={true} speed={100}>
                <Link className="mr-10" to='/'>Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...</Link>
                <Link className="mr-10" to='/'>Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...</Link>
                <Link className="mr-10" to='/'>Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...</Link>
                <Link className="mr-10" to='/'>Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...</Link>
            </Marquee>
        </div>
    );
};

export default BreakingNews;