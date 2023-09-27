import { useState } from 'react';
import Donate from '../Donate/Donate';
import Banner from '../Banner/Banner';

const Search = () => {
    const [inputValue, setInputValue] = useState('');
    const [filteredDonations, setFilteredDonations] = useState([]);

    const handleSearch = (searchTerm) => {
        // Implement your filtering logic here
        // For example, filter your donations based on the searchTerm
        const filteredResults = Search.filter((donate) =>
            donate.Category.toLowerCase().includes(searchTerm.toLowerCase())
        );

        setFilteredDonations(filteredResults);
    };

    return (
        <div>
            <Banner onSearch={handleSearch} />
            {filteredDonations.map((donate) => (
                <Donate key={donate.id} donate={donate} />
            ))}
        </div>
    );
};

export default Search;