import React, {lazy} from 'react';
import styled from 'styled-components';

const Title = lazy(() => import('atoms/Title'));
const Anchor = lazy(() => import('atoms/Anchor'));
const Text = lazy(() => import('atoms/Text'));

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
      {usefulLinks &&
        usefulLinks.length > 0 &&
        usefulLinks.map((el, index) => (
          <LinkWrapper key={index}>
            <Title padding="0 1rem 0 0" fontSize="1.6rem" link>
              #{index + 1}
            </Title>
            <Anchor as="a" href={el.url} target="_blank">
              {el.url}
            </Anchor>
          </LinkWrapper>
        ))}
      {(!usefulLinks || usefulLinks.length === 0) && <Text>Brak linków</Text>}
    </StyledWrapper>
  );
};

export default LastMeetLinks;
