import { useState, useEffect } from "react";
import Donate from "../Donate/Donate";
import Banner from "../Banner/Banner";

const Categories = () => {
    const [donate, setDonate] = useState([]);
    // const [displaySearch, setDisplaySearch] = useState([]);

    useEffect( ()=> {
        fetch('../../../public/donation.json')
        .then(res => res.json())
        .then(data => setDonate(data));
    } , [])

    // const handleSearch = filter => {
        const [searchValue, setSearchValue] = useState("");

        const handleSearchInputChange = (value) => {
            setSearchValue(value); // Update the search input value in the parent component's state
        };
    
        // Your data for donate...
    
        // Filter the donate data based on the searchValue
        const filteredDonates = searchValue
            ? donate.filter((item) => item.Category === searchValue)
            : donate;
    
    // }
    return (
        
        <div >
            <Banner onSearchInputChange={handleSearchInputChange}></Banner>

            <div className="mt-10">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-7xl mx-auto ">
                    {filteredDonates.map((donateItem) => (
                        <Donate key={donateItem.id} donate={donateItem} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Categories;