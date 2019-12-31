import React, {lazy} from 'react';
import styled from 'styled-components';

const Title = lazy(() => import('atoms/Title'));
const Anchor = lazy(() => import('atoms/Anchor'));

const StyledWrapper = styled.div`
  flex-direction: column;
`;
const LinkWrapper = styled.div`
  padding: 0.5rem 0;
`;

const LastMeetLinks = ({usefulLinks}) => {
  return (
    <StyledWrapper>
      <Title padding="0 0 2rem 0">Przydatne linki ze spotkania</Title>

      {usefulLinks.map((el, index) => (
        <LinkWrapper key={index}>
          <Title padding="0 1rem 0 0" fontSize="1.6rem" link>
            #{index + 1}
          </Title>
          <Anchor as="a" href={el.url} target="_blank">
            {el.url}
          </Anchor>
        </LinkWrapper>
      ))}
    </StyledWrapper>
  );
};

export default LastMeetLinks;
