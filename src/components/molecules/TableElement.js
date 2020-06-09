import React, {useContext, useState, useEffect} from 'react';
import {withRouter} from 'react-router';
import styled, {css} from 'styled-components';
import {routes} from 'routes';
import Checkbox from 'components/atoms/Checkbox';
import variables from 'settings/variables';
import StyledDate from 'components/atoms/StyledDate';
import {PrimaryButton, DeleteButton} from 'components/atoms/Button';
import {SelectedElementContext} from 'components/context/SelectedElementContext';
import Icon from 'components/atoms/Icon';
import axios from 'axios';

const StyledRow = styled.tr`
  align-items: center;
  height: 50px;
  padding: 0 10px;
  border-bottom: 1px solid ${variables.tableBorderColor};
  background-color: ${({isSelected}) => isSelected && variables.colorMain};
  transition: 0.2s ease-in-out;
  &:hover {
    background-color: ${variables.colorMain};
    cursor: pointer;
    /* color: ${variables.colorWhite}; */
  }
  ${({description}) =>
    description &&
    css`
      display: none;
      background-color: ${variables.colorWhite};
      color: ${variables.colorBlack} !important;
      &:hover {
        background-color: ${variables.colorWhite};
      }
    `}
  ${({isSelected}) =>
    isSelected &&
    css`
    color: ${variables.colorWhite};
      /* background-color: ${variables.colorWhite}; */
      display: table-row;
    `}
`;

const StyledTableData = styled.td`
  border: 1px solid;
  padding: 1rem 3rem;
  border: none;
  white-space: nowrap;
 
  &:first-child {
    padding: 0 0 0 2rem;
  }
  &:nth-child(4n) {
    white-space: initial;
  }

  text-align: ${({right}) => right && 'right'};
  color: ${({mainColor}) => mainColor && variables.colorLink};
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
  ${({description}) =>
    description &&
    css`
      word-wrap: break-word;
      word-break: break-all;
      white-space: normal;
      display: none;
      cursor: default;
    `}
      ${({isSelected}) =>
        isSelected === true &&
        css`
          display: table-cell;
        `}
`;

const StyledDescriptionBox = styled.div`
  padding: 2rem;
  margin-left: 4rem;
  display: grid;
  grid-template-columns: max-content 1fr;
  grid-column-gap: 3rem;
  grid-template-rows: repeat (3, max-content);
`;

const StyledText = styled.span`
  line-height: 1.7;
  word-wrap: break-word;
  font-weight: 100 !important;
  margin-bottom: 2.5rem;
  &:last-of-type {
    margin-bottom: 0;
  }
  ${({bold}) =>
    bold &&
    css`
      font-weight: 700 !important;
    `}
`;

const StyledLink = styled.a`
  color: ${variables.colorLink};
  &:hover {
    color: ${variables.colorMain};
  }
`;

const StyledTag = styled.span``;

const SchedulesTableElement = ({meetingData, index, isSelected, toggleSelection}) => {
  const renderTags = meetingData.tags.map((tag, index) => {
    return <StyledTag key={index}>{tag} &nbsp;</StyledTag>;
  });
  return (
    <>
      <StyledRow onClick={() => toggleSelection(meetingData, isSelected)} isSelected={isSelected}>
        <StyledTableData>
          <Checkbox isSelected={isSelected}></Checkbox>
        </StyledTableData>
        <StyledTableData mainColor>#{index}</StyledTableData>
        <StyledTableData>
          <StyledDate format="DD MMMM YYYY" date={meetingData.date}></StyledDate>
        </StyledTableData>
        <StyledTableData>{meetingData.topic}</StyledTableData>
        <StyledTableData right>{meetingData.duration}</StyledTableData>
        <StyledTableData right>{meetingData.leader}</StyledTableData>
      </StyledRow>
      <StyledRow description isSelected={isSelected}>
        <StyledTableData description colSpan={6} isSelected={isSelected}>
          <StyledDescriptionBox>
            <StyledText bold>Odnośnik do spotkania:</StyledText>
            <StyledText>
              <StyledLink target="_blank" rel="noreferrer noopener" href={meetingData.meetingHref}>
                {meetingData.meetingHref}
              </StyledLink>
            </StyledText>
            <StyledText bold>Opis spotkania:</StyledText>
            <StyledText>{meetingData.description}</StyledText>
            <StyledText bold>Tagi:</StyledText>
            <StyledText>{renderTags}</StyledText>
          </StyledDescriptionBox>
        </StyledTableData>
      </StyledRow>
    </>
  );
};

const TopicDataBaseTableElement = ({meetingData, toggleSelection, isSelected, index, userId}) => {
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
    axios.put(`http://localhost:3001/topics/vote/${id}?vote=${voteType}`).catch(err => console.log(err));
  };

  const formatVote = vote => {
    if (vote > 0) return 'positive';
    if (vote < 0) return 'negative';
    return 'neutral';
  };

  return (
    <StyledRow onClick={() => toggleSelection(meetingData, isSelected)} isSelected={isSelected}>
      <StyledTableData>
        <Checkbox isSelected={isSelected}></Checkbox>
      </StyledTableData>
      <StyledTableData mainColor>#{index}</StyledTableData>
      <StyledTableData>{meetingData.topic}</StyledTableData>
      <StyledTableData>Kategoria</StyledTableData>
      <StyledTableData>{meetingData.userAdded}</StyledTableData>
      <StyledTableData right vote={formatVote(meetingData.votes)}>
        {meetingData.votes > 0 ? `+${meetingData.votes}` : meetingData.votes}
      </StyledTableData>
      <StyledTableData buttonsTableData right>
        <PrimaryButton inactive voted={votedClass('up')} onClick={e => handleVoting(e, meetingData._id, 'up')}>
          <Icon className="fas fa-plus"></Icon>
        </PrimaryButton>
        <DeleteButton inactive voted={votedClass('down')} onClick={e => handleVoting(e, meetingData._id, 'down')}>
          <Icon className="fas fa-minus"></Icon>
        </DeleteButton>
      </StyledTableData>
    </StyledRow>
  );
};

const MeetingHistoryTableElement = ({meetingData, isSelected, toggleSelection, index}) => {
  const renderTags = meetingData.tags.map((tag, index) => {
    return <StyledTag key={index}>{tag} &nbsp;</StyledTag>;
  });
  return (
    <>
      <StyledRow onClick={() => toggleSelection(meetingData, isSelected)} isSelected={isSelected}>
        <StyledTableData>
          <Checkbox isSelected={isSelected}></Checkbox>
        </StyledTableData>
        <StyledTableData mainColor>#{index}</StyledTableData>
        <StyledTableData>
          <StyledDate format="DD MMMM YYYY" date={meetingData.date}></StyledDate>
        </StyledTableData>
        <StyledTableData>{meetingData.topic}</StyledTableData>
        <StyledTableData>{meetingData.leader}</StyledTableData>
        <StyledTableData right>
          <PrimaryButton small>Dodaj</PrimaryButton>
        </StyledTableData>
      </StyledRow>
      <StyledRow description isSelected={isSelected}>
        <StyledTableData description colSpan={6} isSelected={isSelected}>
          <StyledDescriptionBox>
            <StyledText bold>Odnośnik do spotkania:</StyledText>
            <StyledText>
              <StyledLink target="_blank" rel="noreferrer noopener" href={meetingData.meetingHref}>
                {meetingData.meetingHref}
              </StyledLink>
            </StyledText>
            <StyledText bold>Opis spotkania:</StyledText>
            <StyledText>{meetingData.description}</StyledText>
            <StyledText bold>Tagi:</StyledText>
            <StyledText>{renderTags}</StyledText>
          </StyledDescriptionBox>
        </StyledTableData>
      </StyledRow>
    </>
  );
};

const TableElement = ({location, meetingData, index, userId}) => {
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

  switch (location.pathname) {
    case routes.timetable:
      return <SchedulesTableElement isSelected={isSelected} toggleSelection={handleSelection} index={index} meetingData={meetingData} />;
    case routes.topicDatabase:
      return <TopicDataBaseTableElement userId={userId} isSelected={isSelected} toggleSelection={handleSelection} index={index} meetingData={meetingData} />;
    case routes.history:
      return <MeetingHistoryTableElement isSelected={isSelected} toggleSelection={handleSelection} index={index} meetingData={meetingData} />;
    default:
      return console.log('something went wrong');
  }
};

export default withRouter(TableElement);
