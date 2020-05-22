import React, {lazy} from 'react';
const Anchor = lazy(() => import('components/atoms/Anchor'));
const Icon = lazy(() => import('components/atoms/Icon'));

const DownloadButton = ({resourcesURL, iconClassName, children}) => {
  return (
    <Anchor button fontSize="2rem" buttonLink as="a" href={resourcesURL} download target="_blank">
      {children}
      <Icon padding="0 0 0 1rem" fontSize="1.6rem" className={iconClassName}></Icon>
    </Anchor>
  );
};

export default DownloadButton;
