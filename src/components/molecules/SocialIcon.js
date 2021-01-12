import Anchor from 'components/atoms/Anchor';
import Icon from 'components/atoms/Icon';
import React from 'react';

const SocialIcon = ({className}) => {
  return (
    <Anchor social>
      <Icon fontSize="3.2rem" className={className}></Icon>
    </Anchor>
  );
};

export default SocialIcon;
