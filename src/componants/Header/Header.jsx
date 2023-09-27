import { NavLink } from "react-router-dom";

const Header = () => {
    const links = <>
        <li><NavLink to = "/" style={({ isActive }) => ({ 
                            color: isActive ? '#FF444A' : 'black' })}>Home</NavLink></li>
        <li><NavLink to = "/donation" style={({ isActive }) => ({ 
                            color: isActive ? '#FF444A' : 'black' })} >Donation</NavLink></li>
        <li><NavLink to = "/statistics" style={({ isActive }) => ({ 
                            color: isActive ? '#FF444A' : 'black' })}>Statistics</NavLink></li>
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