import React, { use } from 'react';

const MarksChert = ({marksPromise}) => {
  const MarksDataRes = use(marksPromise)
  const marksData = MarksDataRes.data;
    return (
        <div>
            
        </div>
    );
};

export default MarksChert;