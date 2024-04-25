import React, { useState } from 'react';

import { MdLibraryBooks } from "react-icons/md"

import "./index.css"

const MainContent = () => {
    const [showAll, setShowAll] = useState(false);

    const toggleShowAll = () => {
        setShowAll(!showAll);
    };

    const bankingSectors = [
        {
          image: 'https://res.cloudinary.com/dnthvhppc/image/upload/v1714043061/Retail-Banking-1_qx2s3b.jpg',
          heading: 'Retail Banking',
          text: 'Retail banking refers to the provision of services by a bank to individual consumers rather than to companies, corporations, or other banks.'
        },
        {
          image: 'https://res.cloudinary.com/dnthvhppc/image/upload/v1714043236/Commercial-Bank_yibyag.png',
          heading: 'Commercial Banking',
          text: 'Commercial banking involves providing banking services to businesses and corporations, including deposit accounts, loans, and financial management.'
        },
        {
            image: 'https://res.cloudinary.com/dnthvhppc/image/upload/v1714043455/360_F_143202308_yknddXvycmYKa3VdburOAu50q6KcHTF6_rh5o59.jpg',
          heading: 'Digital Banking',
          text: 'Digital banking refers to the digitization of traditional banking services, offering customers convenient access to financial services through online platforms, mobile apps, and other digital channels.'
        },
        {
            image: 'https://res.cloudinary.com/dnthvhppc/image/upload/v1714043456/Corporate-banking-products-and-services_hafyuv.png',
          heading: 'Corporate Banking',
          text: 'Corporate banking provides specialized financial services to businesses and corporations, including cash management, trade finance, project financing, and corporate advisory, to support their day-to-day operations and strategic objectives.'
        },
        {
            image: 'https://res.cloudinary.com/dnthvhppc/image/upload/v1714043800/Private-Banking_obiag1.jpg',
          heading: 'Private Banking',
          text: 'Private banking offers personalized financial services and wealth management solutions to high net worth individuals, including investment management, estate planning, tax advisory, and concierge services, to preserve and grow their wealth.'
        },
        {
            image: 'https://res.cloudinary.com/dnthvhppc/image/upload/v1714043799/asset-management_hjaowy.webp',
          heading: 'Asset Management',
          text: 'Asset management involves managing investment portfolios on behalf of individuals, institutions, and governments to optimize returns while mitigating risks. It encompasses a range of services such as portfolio analysis, asset allocation, and investment advisory.'
        }
      ]; 

    return (
        <div className="main-content-container">
            <div className="blocks-container">
                <div className="block">
                    <MdLibraryBooks size={25} color="#fcba03" />
                    <h3>My Saved Library 1</h3>
                    <p className="block-date">19-06-2023</p>
                </div>
                <div className="block">
                    <MdLibraryBooks size={25} color="#fc03d7" />
                    <h3>My Saved Library 2</h3>
                    <p className="block-date">02-07-2023</p>
                </div>
                <div className="block">
                    <MdLibraryBooks size={25} color="#6ffc03" />
                    <h3>My Saved Library 3</h3>
                    <p className="block-date">15-10-2023</p>
                </div>
                <div className="block">
                    <MdLibraryBooks size={25} color="#fc0328" />
                    <h3>My Saved Library 4</h3>
                    <p className="block-date">22-12-2023</p>
                </div>
            </div>
            <div className="block-list">
                <ul className='block-list-container'>
                    {bankingSectors.map((block, index) => (
                        <div key={block.id} className={`block-div ${index >= 3 && !showAll ? 'hide' : ''}`}>
                            <img src={block.image} alt={block.heading} className='block-image' />
                            <h3>{block.heading}</h3>
                            <p className='block-text'>{block.text}</p>
                        </div>
                    ))}
                </ul>
                <div className="toggle-btn-container">
                    {showAll ? (
                    <button className="view-less-btn" onClick={toggleShowAll}>View Less</button>
                    ) : (
                    <button className="view-more-btn" onClick={toggleShowAll}>View More</button>
                    )}
                </div>
            </div>
        </div>
    )
}
export default MainContent