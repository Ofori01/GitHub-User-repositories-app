import React, {useState} from 'react';

const useIterator = (item= [], initialIndex = 0) => {
    const [i, setI] = useState(initialIndex);

    const next = ()=> {
        if (i === item.length-1) return setI(0)
        return setI(i+1);

    };
    const prev = () => {
        if (i === 0) return setI(item.length - 1)
        return setI(i - 1)

    };

    


  return [item[i],next, prev]
}

export default useIterator
