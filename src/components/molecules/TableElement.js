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

const StyledSelectedRow = styled.div`
  display: none;
  grid-column: 1/-1;

  ${({isSelected}) =>
    isSelected &&
    css`
      display: grid;
      grid-template-columns: ${variables.gridTable};
      padding: 2rem 0;
      border-bottom: 1px solid ${variables.tableBorderColor};
      background-color: ${variables.backgroundColor};
    `}
`;

const StyledRow = styled.div`
  display: grid;
  grid-template-columns: ${variables.gridTable};
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
`;

const StyledTableContainer = styled.div`
  grid-column: 3/-2;
  display: grid;
  grid-template-columns: max-content 1fr;
  row-gap: 1rem;
  column-gap: 3rem;
`;

const StyledTableData = styled.div`
  justify-self: ${({right}) => right && 'end'};
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
  font-weight: 400;
  font-weight: ${({bold}) => bold && '700'};
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
  const renderLinks = meetingData.usefulLinks.map((link, index) => {
    return (
      <StyledTag key={index}>
        <StyledLink href={link} target="_blank" rel="nofollow noopener noreferrer">
          {link}
        </StyledLink>
        &nbsp;
      </StyledTag>
    );
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
          <StyledText bold>Tagi:</StyledText>
          <StyledText>{renderTags}</StyledText>
          <StyledText bold>Linki:</StyledText>
          <StyledText>{renderLinks}</StyledText>
        </StyledTableContainer>
      </StyledSelectedRow>
    </>
  );
};

const TopicDataBaseTableElement = ({meetingData, toggleSelection, isSelected, index, userId}) => {
  const [myVotes, setMyVotes] = useState([]);
  useEffect(() => {
    setMyVotes(meetingData.usersVote);
  }, [meetingData]);

  const votedClass = (voteType) => {
    const currentVote = myVotes.find((el) => el.id === userId);
    return currentVote && voteType === currentVote.vote;
  };

  const handleVoting = (e, id, voteType) => {
    e.stopPropagation();
    axios.put(`${process.env.REACT_APP_SERVER_URL}/topics/vote/${id}?vote=${voteType}`).catch((err) => console.log(err));
  };

  const formatVote = (vote) => {
    if (vote > 0) return 'positive';
    if (vote < 0) return 'negative';
    return 'neutral';
  };
  const renderTags = meetingData.tags.map((tag, index) => {
    return <StyledTag key={index}>{tag} &nbsp;</StyledTag>;
  });
  return (
    <>
      <StyledRow onClick={() => toggleSelection(meetingData, isSelected)} topic isSelected={isSelected}>
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
          <PrimaryButton inactive voted={votedClass('up')} onClick={(e) => handleVoting(e, meetingData._id, 'up')}>
            <Icon className="fas fa-plus"></Icon>
          </PrimaryButton>
          <DeleteButton inactive voted={votedClass('down')} onClick={(e) => handleVoting(e, meetingData._id, 'down')}>
            <Icon className="fas fa-minus"></Icon>
          </DeleteButton>
        </StyledTableData>
      </StyledRow>
      <StyledSelectedRow isSelected={isSelected}>
        <StyledTableData colSpan={6} isSelected={isSelected}>
          <StyledDescriptionBox>
            <StyledText bold>Opis tematu:</StyledText>
            <StyledText>{meetingData.description}</StyledText>
            <StyledText bold>Tagi:</StyledText>
            <StyledText>{renderTags}</StyledText>
          </StyledDescriptionBox>
        </StyledTableData>
      </StyledSelectedRow>
    </>
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
        <StyledSelectedRow description isSelected={isSelected}>
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
        </StyledSelectedRow>
      </StyledRow>
    </>
  );
};

const TableElement = ({location, meetingData, index, userId}) => {
  const [selectedElement, toggleSelection] = useContext(SelectedElementContext);

  const isSelected = selectedElement && selectedElement.includes(meetingData);

  const handleSelection = (singleElem, selectedElem) => {
    return toggleSelection((prev) => {
      if (selectedElem) {
        return prev.filter((elem) => elem._id !== singleElem._id);
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
