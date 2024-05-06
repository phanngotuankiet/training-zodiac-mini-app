
import React from 'react';


const LuckyNumberText = ({ LuckyNumber }) => {
  return (
    <div className="svn-seiston tracking-wide">
      <p>Số may mắn</p>
      <p className="flex justify-center my-2">{LuckyNumber}</p>
    </div>
  );
}
export default LuckyNumberText;