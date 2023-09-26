import { useState } from "react";

const Banner = () => {
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const handleButtonClick = () => {
        console.log(inputValue);
    }

    return (
        <div className="flex-col items-center justify-center">
            <h2 className="text-center text-5xl font-extrabold">I Grow By Helping People In Need</h2>
            <div className="flex items-center justify-center mt-10">
                <input
                    id="search-input"
                    type="text"
                    className="input input-bordered w-full max-w-xs"
                    value={inputValue}
                    onChange={handleInputChange}
                />
                <button onClick={handleButtonClick} className="btn bg-[#FF444A] text-white">Search</button>
            </div>
        </div>
    );
};

export default Banner;
