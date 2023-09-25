import { useLoaderData } from "react-router-dom";
import { useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveDonation } from "../utilities";

const DetailsCard = () => {
    const donates = useLoaderData();
    const {id} = useParams()
    const donate = donates.find(donate => donate.id === id)
    // console.log(donate);

    const handleDonation = () => {
        saveDonation(parseInt(id));
        toast('Donated $${Price}');
    }

    return (
       <div className="max-w-7xl mx-auto">
             <div className="relative w-full h-1/2 mt-4">
                <img
                    src={donate.Picture}
                    alt=""
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0">
                    <div className="absolute bottom-0 left-0 w-full h-1/6 bg-black opacity-50"></div>
                    <div className="absolute bottom-0 left-0 w-full h-1/6 flex items-center pl-10">
                        <button onClick={handleDonation} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                            Donate ${donate.Price}
                        </button>
                    </div>
                </div>
            </div>
            <h2 className="text-4xl mt-14 font-bold">{donate.Title}</h2>
            <p className="mt-6">{donate.Description}</p>
            <ToastContainer/>
       </div>
    );
};

export default DetailsCard;