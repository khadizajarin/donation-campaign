import { useState, useEffect } from "react";
import Donate from "../Donate/Donate";

const Categories = () => {
    const [donate, setDonate] = useState([]);

    useEffect( ()=> {
        fetch('../../../public/donation.json')
        .then(res => res.json())
        .then(data => setDonate(data));
    } , [])
    return (
        <div className="mt-10">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-7xl mx-auto">
                {
                    donate.map(donate => <Donate key={donate.id} donate={donate}></Donate>)
                }
            </div>
            {/* <div className={datalength=== jobs.length ?'hidden' : ''}>
                <button
                onClick={() => setDatalength(jobs.length)}
                className="btn btn-primary">Show all jobs</button>
            </div> */}
        </div>
    );
};

export default Categories;