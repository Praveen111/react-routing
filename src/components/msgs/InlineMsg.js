import React from 'react';
import PropTypes from 'prop-types';


 const InlineMsg= ({msg}) =>    <span>  {msg} </span>;


InlineMsg.propTypes ={
    msg: PropTypes.string
}


export default InlineMsg;
