

const Banner = () => {
    return (
        <div className="flex-col items-center justify-center">
            <h2 className="text-center text-5xl font-extrabold">I Grow By Helping People In Need</h2>
            <div className="flex items-center justify-center mt-10">
                <input type="text" placeholder="Search" className="input input-bordered w-full max-w-xs" />
                <button className="btn bg-[#FF444A] text-white">Search</button>
            </div>
        </div>
      
    );
};

export default Banner;