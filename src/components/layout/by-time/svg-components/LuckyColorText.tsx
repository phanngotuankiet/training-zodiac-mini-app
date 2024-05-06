
import React from 'react';


const LuckyColorText = ({ LuckyColor }) => {

  return (
    <div className="svn-seiston tracking-wide">
      <p>Màu may mắn</p>

      <div className="flex justify-center space-x-3 my-2">{LuckyColor?.map(color =>
        <span key={color} className={`h-[20px] w-[20px] rounded-[8px]`}
          style={{ backgroundColor: color }}></span>
      )}</div>
    </div>
  );
}
export default LuckyColorText;