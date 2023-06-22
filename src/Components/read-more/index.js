import React, { useState } from 'react'
import './readmore.scss'
const ReadMore = ({ children }) => {
    const text = children;
    const [isReadMore, setIsReadMore] = useState(true);
    const toggleReadMore = () => {
      setIsReadMore(!isReadMore);
    };
    return (
      <p className="text">
        {isReadMore ? text.slice(0, 170) : text}
        <div onClick={toggleReadMore} className="read-or-hide">
          {isReadMore ? "read more" : " show less"}
        </div>
      </p>
    );
  };
export default ReadMore