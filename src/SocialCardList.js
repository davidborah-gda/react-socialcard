/* eslint-disable */

import React from 'react';
import SocialCard from './SocialCard';
import PropTypes from 'prop-types';
import SocialCardLayout from './SocialCardLayout';

const SocialCardList = (props) => {
    const cards = props.imageUrls.map((url) => <SocialCard imageSrc={url} key={url} />)
    return (
    <SocialCardLayout>
        {cards}
    </SocialCardLayout>
);
};

SocialCardList.propTypes = {
    imageUrls: PropTypes.array.isRequired
};

export default SocialCardList;
