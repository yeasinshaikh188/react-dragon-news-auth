import { FaGoogle, FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import qZone1 from '../../../assets/qZone1.png'
import qZone2 from '../../../assets/qZone2.png'
import qZone3 from '../../../assets/qZone3.png'

const RightSideNav = () => {
    return (
        <div>
            {/* login */}
            <div className="mb-10">
                <h2 className="text-2xl font-bold ">Login With</h2>
                <button className="btn w-full my-3 border-[#37AFE1] text-[#37AFE1]">
                    <FaGoogle></FaGoogle>
                    Login With Google
                </button>
                <button className="btn w-full border-gray-400">
                    <FaGithub></FaGithub>
                    Login With Github
                </button>
            </div>


            {/* find us */}

            <div className="mb-10">
                <h2 className="text-2xl font-bold mb-5">Find Us On</h2>

                <a className="font-bold text-lg flex rounded-t-lg items-center p-4 border" href="">
                    <FaFacebook className="mr-2"></FaFacebook>
                    <span>Facebook</span>
                </a>
                <a className="font-bold text-lg flex items-center p-4 border-x" href="">




                    <FaTwitter className="mr-2"></FaTwitter>  <span>Twitter</span>
                </a>
                <a className="font-bold text-lg flex rounded-b-lg items-center p-4 border" href="">
                    <FaInstagram className="mr-2"></FaInstagram>
                    <span>Instragram</span>
                </a>
            </div>

            {/* Q Zone */}

            <div className="mb-10 bg-[#F3F3F3] space-y-10 py-7 px-3 rounded">
                <h2 className="text-2xl font-bold mb-8">Q Zone</h2>
                <img src={qZone1} alt="qZone1" />
                <img src={qZone2} alt="qZone2" />
                <img src={qZone3} alt="qZone3" />
            </div>
        </div>
    );
};
export default RightSideNav;