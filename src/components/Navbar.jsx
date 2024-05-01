import { FiMaximize } from "react-icons/fi";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.svg";

const Navbar = () => {
    return (
        <nav className="w-full h-12 flex items-center justify-between bg-background px-2 border-b border-border">
            <div className="flex items-center gap-1.5">
                <img src={Logo} className="h-6" />
                <h1 className="text-white text-lg">Coddict</h1>
            </div>
            <div className="flex items-center gap-2">
                <Link to="/preview" target="_blank">
                    <button className="text-white p-1.5 bg-secondary-background hover:bg-neutral-500 duration-150 rounded-md">
                        <FiMaximize />
                    </button>
                </Link>
                {/* <button className="bg-secondary-background text-white px-3 py-1.5 rounded-md text-xs">
                    Download
                </button> */}
            </div>
        </nav>
    );
};
export default Navbar;