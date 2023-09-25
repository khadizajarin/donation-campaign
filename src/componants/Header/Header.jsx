import { NavLink } from "react-router-dom";

const Header = () => {
    const links = <>
        <li><NavLink to = "/">Home</NavLink></li>
        <li><NavLink to = "/donation">Donation</NavLink></li>
        <li><NavLink to = "/statistics">Statistics</NavLink></li>
    </>
    return (
        <div className="  navbar bg-base-100 max-w-7xl mx-auto">
            <div className="flex-1">
                <img src="./../../../public/Resources/Logo.png" alt="" />
            </div>
            <div className="">
                <ul className="md:flex gap-12">
                {links}
                </ul>
            </div>
        </div>
    )
};

export default Header;