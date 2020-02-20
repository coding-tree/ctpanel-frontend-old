import React from 'react';
import Anchor from 'components/atoms/Anchor';
import Icon from 'components/atoms/Icon';

const SocialIcon = ({className}) => {
  return (
    <Anchor social>
      <Icon fontSize="3.2rem" className={className}></Icon>
    </Anchor>
  );
};

export default SocialIcon;
