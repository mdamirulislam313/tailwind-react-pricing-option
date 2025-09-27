import React,{use} from 'react';
import PricingCard from '../pricingCard/PricingCard';
import DaisyPricing from '../DaisyPricing/DaisyPricing';

const PricingOption = ({pricingPromise}) => {

    const pricingData = use(pricingPromise);
    console.log(pricingData)

    return (
        <div className='text-5'>
            <h2 className='text-center mt-5 bg-blue-500 p-2 md:mx-55 '>Get our membership</h2>

            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
                {/* {
                    pricingData.map(pricing => <PricingCard 
                        key={pricing.id}
                        pricing={pricing}></PricingCard>)
                } */}

                    {
                        pricingData.map(pricing => <DaisyPricing
                        key={pricing.id}
                        pricing={pricing}
                        ></DaisyPricing>)
                    }

            </div>
        </div>
    );
};

export default PricingOption;