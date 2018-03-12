import React from 'react';
import PropTypes from 'prop-types'

const Link = ({ active, childern, onClick }) => {
    if (active) {
        return <span>{childern}</span>
    }
    return (
        <a href='#'
           onClick={e => {
               e.preventDefault()
               onClick
           }}
        >
            {childern}
        </a>
    )
};

Link.propTypes = {
    active: PropTypes.bool.isRequired,
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func.isRequired
};

export default Link;