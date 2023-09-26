import { useLoaderData } from "react-router-dom";
import { getStoredDonation } from "../utilities";
import { useState, useEffect } from "react";


const DonationList = () => {
    const donationList = useLoaderData();
    const [donated, setDonated] = useState([]);
    const [displayDonation, setDisplayDonation] = useState([]);
  
    useEffect(() => {
      const storeDonateIds = getStoredDonation();
  
      if (donationList.length > 0) {
        const donate = [];
        for (const id of storeDonateIds) {
          donate.push(donationList.find((donate) => donate.id == id));
        }
        setDonated(donate);
        setDisplayDonation(donate);
        console.log(donationList, storeDonateIds);
      }
    }, [donationList]);

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-7xl mx-auto mt-32">
          {displayDonation.map((donated) => (
            <div key={donated.id}>
              <div className="card card-side bg-base-100">
                <figure>
                  <img className="w-full h-full" src={donated.Picture} alt={donated.Title} />
                </figure>
                <div className="card-body rounded-r-xl" style={{ backgroundColor: donated.Card_bg }}>
                    <div>
                        <p className="border rounded text-sm bg-white w-20 pl-2" style ={{color: donated.Category_bg}} > {donated.Category}</p>
                        <h2 className="card-title">{donated.Title}</h2>
                        <p className="font-bold" style={{color: donated.Text_button_bg }}>${donated.Price}</p>
                        <div className="card-actions">
                            <button className="btn" style={{ backgroundColor: 'white', color: donated.Text_button_bg }}>View Details</button>
                        </div>
                    </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      );
      
};

export default DonationList;
export const storeDonateIds = getStoredDonation();

