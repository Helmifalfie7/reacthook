import React from 'react'

const Rate = ({ rating, setSearchrate }) => {
    const stars =(x) => {
        let stararray=[];
        for (let i = 1 ; i <= 5; i++ ){
            if (i <= x ){
                stararray.push(<a onClick={()=> setSearchrate(i) }>★</a>)
            }else{
                stararray.push(<a onClick={()=> setSearchrate(i) }>☆</a>)
            }
        }
        return stararray;
    }

  return (
    <div>
      {stars(rating)}
    </div>
  )
}

Rate.defaultProps = {
  setSearchrate:() => {},
};

export default Rate
