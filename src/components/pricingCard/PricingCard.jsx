import React from 'react';
import PricingFeature from './PricingFeature';

const PricingCard = ({pricing}) => {
    const{id,name,price, info, features} = pricing;
    return (
        <div className='flex flex-col border bg-amber-500 rounded-3xl p-2'>
         {/* card header */}
         <div >
            <h1 className='text-5xl'>{name}</h1>
            <h1 className='text-3xl'>{price}</h1>
         </div>
         {/* card body */}
         <div className='bg-amber-400 p-4 rounded-2xl mt-10 flex-1'>
            <p>{info}</p>
            {
                features.map((feature,index)=><PricingFeature
                key={index}
                feature={feature}></PricingFeature>)
            }
         </div>
         <button className="btn btn-neutral btn-outline w-full mt-4">Subscribe</button>
        </div>
    );
};

export default PricingCard;