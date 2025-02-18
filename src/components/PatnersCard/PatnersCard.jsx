/* eslint-disable react/prop-types */
const PatnersCard = ({partner}) => {
    const {image,partnerName} = partner
    return (
          <div className=" ml-4  hover:scale-125 duration-100">
              <div className=" flex flex-col items-center gap-2">
                 <img className=" rounded-full" src={image} alt="" />
                 <h3>{partnerName}</h3>
              </div>
          </div>
    );
};

export default PatnersCard;