import PropTypes from 'prop-types';

const Donate = ({donate}) => {
    const {id, Picture, Title, Category, Category_bg, Card_bg, Text_button_bg, Description, Price} = donate;

    const cardStyle = {
        backgroundColor: donate.Card_bg,
    }

    const btnColor = donate.Text_button_bg;
    const buttonStyle = {
        color: btnColor,
    }

    return (
        <div className="card card-compact bg-base-100 shadow-xl" style={cardStyle}>
            <figure><img src={Picture} className="w-full"/></figure>
            <div className="card-body pl-4">
                <h2 className="border rounded text-sm bg-white w-20 pl-2" style={buttonStyle}>{donate.Category}</h2>
                <p className="text-xl text-white font-bold ">{Title}</p>
                <p className='text-white'>{Description}</p>
            </div>
        </div>
    );
};
Donate.propTypes = {
    id: PropTypes.number
}



export default Donate;