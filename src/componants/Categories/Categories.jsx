import { useState, useEffect } from "react";
import Donate from "../Donate/Donate";

const Categories = () => {
    const [donate, setDonate] = useState([]);
    // const [displaySearch, setDisplaySearch] = useState([]);

    useEffect( ()=> {
        fetch('../../../public/donation.json')
        .then(res => res.json())
        .then(data => setDonate(data));
    } , [])

    // const handleSearch = filter => {
    // }
    return (
        <div className="mt-10">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-7xl mx-auto">
                    {
                        donate.map(donate => <Donate key={donate.id} donate={donate}></Donate>)
                    }
                </div>
        </div>
    );
};

export default Categories;