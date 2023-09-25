

const getStoredDonation = () => {
    const storedDonation = localStorage.getItem('donated');
    if(storedDonation) {
        return JSON.parse(storedDonation);
    }
    return [];
}

const saveDonation = id => {
    const storedAllDonation = getStoredDonation();
    storedAllDonation.push(id);
    localStorage.setItem('donated', JSON.stringify(storedAllDonation));

}

export {getStoredDonation, saveDonation};