import { useState } from "react";

const Banner = ({ onSearchInputChange }) => {
    const [inputValue, setInputValue] = useState();

    const handleInputChange = (event) => {
        const newValue = event.target.value;
        setInputValue(newValue);
        // onSearchInputChange(newValue); // Pass the input value to the parent component
        console.log(newValue);
    };

    const handleButtonClick = () => {
        console.log(inputValue);
        // if ( inputValue === donate.Category){
        //     set
        // }
    }

    return (
        <div>
            <div className="flex flex-col items-center justify-center h-screen " style={{ backgroundImage: 'url("https://i.ibb.co/W0wDdgR/Clothing.png")', backgroundSize: 'cover', backgroundPosition: 'center', filter: 'brightness()'}}>
        
                <div >
                    <h2 className="text-center text-5xl font-extrabold ">I Grow By Helping People In Need</h2>
                    <div className="flex items-center justify-center mt-10">
                    <input
                        id="search-input"
                        type="text"
                        className="input input-bordered w-full max-w-xs mt-2"
                        value={inputValue}
                        onChange={handleInputChange}
                    />
                    <button onClick={handleButtonClick} className="btn bg-[#FF444A] text-white mt-2">Search</button>
                    </div>
                </div>
            </div>
      
        </div>
      );
    }
export default Banner;
