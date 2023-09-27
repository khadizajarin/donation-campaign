import { useLoaderData } from "react-router-dom";
import { storeDonateIds } from "../DonationList/DonationList";
import { PieChart, Pie, ResponsiveContainer, Cell } from 'recharts';

const Statistics = () => {
    const donationList = useLoaderData();
    // const totalNumberOfDonations = donationList.length;
  
    const donatedListToShow = storeDonateIds;
    // const donatedList = donatedListToShow.length;
  
  const data = [
    { name: 'Total Donation', value: donationList.length},
    { name: 'My Donation', value: donatedListToShow.length},
  ];

  const COLORS = ['#FFBB28', '#00C49F'];

  return (
    <div>
        <ResponsiveContainer width="100%" height={400}>
            <PieChart>
            <Pie data={data} dataKey="value" cx="50%" cy="50%" outerRadius={60} fill="#8884d8">
                {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
            </Pie>
            </PieChart>
        </ResponsiveContainer>
        <div className="flex items-center justify-center gap-7">
            <p className="border bg-[#FFBB28]  text-white p-4">Total Donation {donationList.length}</p>
            <p className="border bg-[#00C49F] text-white p-4">My Donation {donatedListToShow.length}</p>
        </div>
    </div>
  );
};

export default Statistics;
