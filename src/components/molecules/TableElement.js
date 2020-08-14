import React, {useContext, useState, useEffect} from 'react';
import styled, {css} from 'styled-components';
import Checkbox from 'components/atoms/Checkbox';
import variables from 'settings/variables';
import StyledDate from 'components/atoms/StyledDate';
import {PrimaryButton, DeleteButton} from 'components/atoms/Button';
import {SelectedElementContext} from 'components/context/SelectedElementContext';
import Icon from 'components/atoms/Icon';
import axios from 'axios';
import {useSelector} from 'react-redux';

const StyledSelectedRow = styled.div`
  display: none;
  grid-column: 1/-1;

  @media only screen and (max-width: ${variables.bpTablet}) {
    font-size: 1.4rem;
  }
  @media only screen and (max-width: ${variables.bpLargeMobile}) {
    font-size: 1.2rem;
  }

  ${({isSelected}) =>
    isSelected &&
    css`
      display: grid;
      grid-template-columns: minmax(1rem, 5rem) 1fr minmax(1rem, 5rem);
      padding: 2rem 0;
      border-bottom: 1px solid ${variables.tableBorderColor};
      background-color: ${variables.backgroundColor};
      @media only screen and (max-width: ${variables.bpTablet}) {
        padding: 2rem;
        grid-template-columns: 1fr;
      }
      @media only screen and (max-width: ${variables.bpLargeMobile}) {
        grid-template-columns: 1fr;
      }
    `}
`;

const StyledRow = styled.div`
  display: grid;
  grid-template-columns: 2rem minmax(2rem, 3rem);
  grid-auto-columns: minmax(1rem, 1fr);
  grid-auto-flow: column;
  column-gap: 2rem;
  padding: 1rem;
  align-items: center;
  border-bottom: 1px solid ${variables.tableBorderColor};
  transition: 0.2s ease-in-out;
  font-weight: bold;
  &:hover {
    background-color: ${variables.tableHeaderColor};
    cursor: pointer;
  }

  @media only screen and (max-width: ${variables.bpTablet}) {
    font-size: 1.4rem;
  }

  @media only screen and (max-width: ${variables.bpLargeMobile}) {
    font-size: 1.2rem;
    column-gap: 1rem;
    grid-template-columns: 2rem minmax(1rem, 2rem);
  }
`;

const StyledTableContainer = styled.div`
  grid-column: 2/-2;
  display: grid;

  grid-template-columns: max-content 1fr;
  grid-auto-rows: max-content;
  row-gap: 1rem;
  column-gap: 1rem;
  @media only screen and (max-width: ${variables.bpTablet}) {
    grid-column: 1/-1;
  }
  @media only screen and (max-width: ${variables.bpLargeMobile}) {
    grid-template-columns: 1fr;
  }
`;

const StyledTableData = styled.div`
  justify-self: ${({right}) => right && 'end'};
  text-align: ${({right}) => right && 'right'};
  color: ${({mainColor}) => mainColor && variables.colorLink};
  flex-wrap: wrap;
  display: ${({block}) => (block ? 'block' : 'flex')};

  grid-column: ${({columns}) => (columns ? `span ${columns}` : 'span 1')};

  ${({vote}) =>
    vote &&
    css`
      color: ${vote === 'positive' && variables.colorMain};
      color: ${vote === 'negative' && variables.colorError};
      color: ${vote === 'neutral' && variables.colorCancel};
    `};
  ${({buttonsTableData}) =>
    buttonsTableData &&
    css`
      button:last-child {
        margin-left: 0.6rem;
      }
    `}
  ${({noTablet}) =>
    noTablet &&
    css`
      @media only screen and (max-width: ${variables.bpTablet}) {
        display: none;
      }
    `}
  ${({noMobile}) =>
    noMobile &&
    css`
      @media only screen and (max-width: ${variables.bpLargeMobile}) {
        display: none;
      }
    `}
    ${({mobile}) =>
      mobile &&
      css`
        display: none;
        @media only screen and (max-width: ${variables.bpLargeMobile}) {
          display: block;
        }
      `}
`;

const StyledText = styled.span`
  line-height: 1.7;
  word-wrap: break-word;
  font-weight: 400;
  font-weight: ${({bold}) => bold && '700'};
  ${({link}) =>
    link &&
    css`
      flex-direction: column;
    `}
  ${({tablet}) =>
    tablet &&
    css`
      display: none;
      @media only screen and (max-width: ${variables.bpTablet}) {
        display: block;
      }
    `}
    ${({mobile}) =>
      mobile &&
      css`
        display: none;
        @media only screen and (max-width: ${variables.bpLargeMobile}) {
          display: block;
        }
      `}
`;

const StyledLink = styled.a`
  color: ${variables.colorLink};
  &:hover {
    color: ${variables.colorMain};
  }
`;

const StyledTag = styled.span`
  display: inline;
`;

export const SchedulesTableElement = ({meetingData, index, isSelected, toggleSelection}) => {
  const renderTags = meetingData.tags.map((tag, index) => {
    return <StyledTag key={index}>{tag} &nbsp;</StyledTag>;
  });
  const renderLinks = meetingData.usefulLinks.map((link, index) => {
    return (
      <StyledTag key={index}>
        <StyledLink href={link} target="_blank" rel="nofollow noopener noreferrer">
          {link}
        </StyledLink>
      </StyledTag>
    );
  });
  return (
    <>
      <StyledRow onClick={() => toggleSelection(meetingData, isSelected)} isSelected={isSelected}>
        <StyledTableData>
          <Checkbox isSelected={isSelected}></Checkbox>
        </StyledTableData>
        <StyledTableData mainColor>{index}</StyledTableData>
        <StyledTableData columns={2}>
          <StyledDate format="DD MMMM YYYY" date={meetingData.date}></StyledDate>
        </StyledTableData>
        <StyledTableData columns={3}>{meetingData.topic}</StyledTableData>
        <StyledTableData noTablet columns={2} right>
          {meetingData.duration}
        </StyledTableData>
        <StyledTableData noMobile columns={2} right>
          {meetingData.leader}
        </StyledTableData>
      </StyledRow>
      <StyledSelectedRow isSelected={isSelected}>
        <StyledTableContainer>
          <StyledText bold>Odnośnik do spotkania:</StyledText>
          <StyledText>
            <StyledLink target="_blank" rel="noreferrer noopener" href={meetingData.meetingHref}>
              {meetingData.meetingHref}
            </StyledLink>
          </StyledText>

          <StyledText bold>Opis spotkania:</StyledText>
          <StyledText>{meetingData.description}</StyledText>

          <StyledText mobile bold>
            Prowadzący:
          </StyledText>
          <StyledText mobile>{meetingData.leader}</StyledText>
          <StyledText tablet bold>
            Czas trwania:
          </StyledText>
          <StyledText tablet>{meetingData.duration}</StyledText>

          <StyledText bold>Tagi:</StyledText>
          <StyledText>{renderTags}</StyledText>
          <StyledText bold>Linki:</StyledText>
          <StyledText link>{renderLinks}</StyledText>
        </StyledTableContainer>
      </StyledSelectedRow>
    </>
  );
};

export const TopicDataBaseTableElement = ({meetingData, toggleSelection, isSelected, index}) => {
  const {meetings} = useSelector(state => state.user);
  const userId = meetings.id;

  const [myVotes, setMyVotes] = useState([]);
  useEffect(() => {
    setMyVotes(meetingData.usersVote);
  }, [meetingData]);

  const votedClass = voteType => {
    const currentVote = myVotes.find(el => el.id === userId);
    return currentVote && voteType === currentVote.vote;
  };

  const handleVoting = (e, id, voteType) => {
    e.stopPropagation();
    axios.put(`${process.env.REACT_APP_SERVER_URL}/topics/vote/${id}?vote=${voteType}`).catch(err => console.log(err));
  };

  const formatVote = vote => {
    if (vote > 0) return 'positive';
    if (vote < 0) return 'negative';
    return 'neutral';
  };

  const renderTags = meetingData.tags.map((tag, index, array) => {
    return (
      <React.Fragment key={index}>
        <StyledTag>{tag}</StyledTag>
        {index + 1 < array.length && <StyledTag>, </StyledTag>}
      </React.Fragment>
    );
  });
  return (
    <>
      <StyledRow onClick={() => toggleSelection(meetingData, isSelected)} topic isSelected={isSelected}>
        <StyledTableData>
          <Checkbox isSelected={isSelected}></Checkbox>
        </StyledTableData>
        <StyledTableData mainColor>{index}</StyledTableData>
        <StyledTableData columns={5}>{meetingData.topic}</StyledTableData>
        <StyledTableData columns={2} block right noTablet>
          {renderTags}
        </StyledTableData>
        <StyledTableData columns={2} noTablet>
          {meetingData.userAdded}
        </StyledTableData>
        <StyledTableData right vote={formatVote(meetingData.votes)}>
          {meetingData.votes > 0 ? `+${meetingData.votes}` : meetingData.votes}
        </StyledTableData>
        <StyledTableData noMobile columns={2} buttonsTableData right>
          <PrimaryButton inactive voted={votedClass('up')} onClick={e => handleVoting(e, meetingData._id, 'up')}>
            <Icon className="fas fa-plus"></Icon>
          </PrimaryButton>
          <DeleteButton inactive voted={votedClass('down')} onClick={e => handleVoting(e, meetingData._id, 'down')}>
            <Icon className="fas fa-minus"></Icon>
          </DeleteButton>
        </StyledTableData>
      </StyledRow>
      <StyledSelectedRow isSelected={isSelected}>
        <StyledTableContainer>
          <StyledText bold>Opis tematu:</StyledText>
          <StyledText>{meetingData.description}</StyledText>

          <StyledText tablet bold>
            Inicjator:
          </StyledText>
          <StyledText tablet>{meetingData.userAdded}</StyledText>

          <StyledText bold>Tagi:</StyledText>
          <StyledText>{renderTags}</StyledText>

          <StyledText mobile bold>
            Zagłosuj
          </StyledText>
          <StyledTableData mobile buttonsTableData>
            <PrimaryButton inactive voted={votedClass('up')} onClick={e => handleVoting(e, meetingData._id, 'up')}>
              <Icon className="fas fa-plus"></Icon>
            </PrimaryButton>
            <DeleteButton inactive voted={votedClass('down')} onClick={e => handleVoting(e, meetingData._id, 'down')}>
              <Icon className="fas fa-minus"></Icon>
            </DeleteButton>
          </StyledTableData>
        </StyledTableContainer>
      </StyledSelectedRow>
    </>
  );
};

export const MeetingHistoryTableElement = ({meetingData, isSelected, toggleSelection, index}) => {
  const renderTags = meetingData.tags.map((tag, index) => {
    return <StyledTag key={index}>{tag} &nbsp;</StyledTag>;
  });
  return (
    <>
      <StyledRow onClick={() => toggleSelection(meetingData, isSelected)} isSelected={isSelected}>
        <StyledTableData>
          <Checkbox isSelected={isSelected}></Checkbox>
        </StyledTableData>
        <StyledTableData mainColor>{index}</StyledTableData>
        <StyledTableData columns={3}>
          <StyledDate format="DD MMMM YYYY" date={meetingData.date}></StyledDate>
        </StyledTableData>
        <StyledTableData columns={5}>{meetingData.topic}</StyledTableData>
        <StyledTableData columns={3} noTablet>
          {meetingData.leader}
        </StyledTableData>
        <StyledTableData columns={3} right noMobile>
          <PrimaryButton small>Dodaj</PrimaryButton>
        </StyledTableData>
      </StyledRow>
      <StyledSelectedRow isSelected={isSelected}>
        <StyledTableContainer>
          <StyledText bold>Odnośnik do spotkania:</StyledText>
          <StyledText>
            <StyledLink target="_blank" rel="noreferrer noopener" href={meetingData.meetingHref}>
              {meetingData.meetingHref}
            </StyledLink>
          </StyledText>

          <StyledText tablet bold>
            Prowadzący
          </StyledText>
          <StyledText tablet>{meetingData.leader}</StyledText>

          <StyledText bold>Opis spotkania:</StyledText>
          <StyledText>{meetingData.description}</StyledText>
          <StyledText bold>Tagi:</StyledText>
          <StyledText>{renderTags}</StyledText>

          <StyledText mobile bold>
            Dodaj materiały
          </StyledText>
          <StyledText mobile>
            <PrimaryButton small>Dodaj</PrimaryButton>
          </StyledText>
        </StyledTableContainer>
      </StyledSelectedRow>
    </>
  );
};

const TableElement = ({meetingData, index, children}) => {
  const [selectedElement, toggleSelection] = useContext(SelectedElementContext);

  const isSelected = selectedElement && selectedElement.includes(meetingData);

  const handleSelection = (singleElem, selectedElem) => {
    return toggleSelection(prev => {
      if (selectedElem) {
        return prev.filter(elem => elem._id !== singleElem._id);
      }
      return [...prev, singleElem];
    });
  };

  const childrenWithProps = React.Children.map(children, child => {
    const props = {
      isSelected: isSelected,
      toggleSelection: handleSelection,
      index: index,
      meetingData: meetingData,
    };
    if (React.isValidElement(child)) {
      return React.cloneElement(child, props);
    }
    return child;
  });

  return <>{childrenWithProps}</>;
};

export default TableElement;
