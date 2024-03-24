import React from 'react';

interface HighlightedPointsProps {
    icon: string;
    title: string;
    description: string;
  }

  const HighlightedPoints: React.FC<HighlightedPointsProps> = ({ icon, title, description }) => {

    return (
        <div className="bg-opacity-30 bg-white bg-blur rounded-lg shadow-md backdrop-blur-8.5 border border-opacity-5 p-5 w-1/5 max-h-60">
            <i className={icon}></i>
            <br />
            <p className='m-1 font-bold'>{title}</p>
            <p className='m-5 text-justify'>{description}</p>     
        </div>
    );
};

export default HighlightedPoints;