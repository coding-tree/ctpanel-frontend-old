import React, {useState} from 'react';
import {withRouter} from 'react-router';
import {routes} from 'routes';
import Button from 'components/atoms/Button/Button';
import Icon from 'components/atoms/Icon';
import Meeting from 'components/pages/Meeting';
import Topic from 'components/pages/Topic';

import {StyledTableActions} from 'styledComponents/ModalStyled/';

const SchedulesTableMenu = () => {
  return (
    <StyledTableActions>
      <Meeting />
    </StyledTableActions>
  );
};

const TopicDataBaseTableMenu = () => (
  <StyledTableActions>
    <Topic />
  </StyledTableActions>
);

const MeetingHistoryTableMenu = () => (
  <>
    <span>data</span>
    <select>
      <option>1</option>
      <option>2</option>
      <option>3</option>
    </select>
    <select>
      <option>1</option>
      <option>2</option>
      <option>3</option>
    </select>
    <input type="text" />
  </>
);

const TableMenu = ({location}) => {
  switch (location.pathname) {
    case routes.timetable:
      return <SchedulesTableMenu />;
    case routes.topicDatabase:
      return <TopicDataBaseTableMenu />;
    case routes.history:
      return <MeetingHistoryTableMenu />;
    default:
      return console.log('something went wrong');
  }
};

export default withRouter(TableMenu);

// Styles

const Container = styled.div`
  width: 100%;
  bottom: 5rem;
  justify-content: center;
  font-size: 1.6rem;
  margin-bottom: 5rem;
`;

const StyledWrapper = styled.div`
  width: 100%;
`;

const StyledTableActions = styled.div`
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding: 0 30px 27px 13px;
`;

const StyledModalContainer = styled.div`
  font-family: 'Muli', sans-serif;
  display: none;
  ${(props) => props.isModalVisible && 'display: flex'}
  justify-content: center;
  align-items: center;
  position: fixed;
  height: 100vh;
  width: 100%;
  border: 1px solid #019740;
  background-color: #000000aa;
  top: 0;
  left: 0;
`;
const StyledBox = styled.div`
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  width: 640px;
`;

const StyledHeader = styled.div`
  font-weight: 700;
  font-size: 20px;
  width: 100%;
  display: flex;
  align-items: center;
  height: 65px;
  background-color: #019740;
  color: white;
  padding: 25px;
`;

const StyledText = styled.span`
  padding: 5px 15px;
  border: 1px solid red;
`;

const StyledForm = styled.form`
  font-family: 'Muli', sans-serif;
  padding: 23px;
  display: flex;
  flex-direction: column;
`;

const StyledInput = styled.input`
  font-family: inherit;
  width: 100%;
  border-radius: 4px;
  border: 1px solid #9d9da3;
  padding: 12px;
  color: black;
  margin-bottom: 22px;
`;

const StyledTextArea = styled.textarea`
  font-family: inherit;
  border-radius: 4px;
  border: 1px solid #9d9da3;
  padding: 12px;
  color: black;
  margin-bottom: 22px;
  height: 120px;
  resize: none;
`;

const StyledLabel = styled.label`
  font-family: inherit;
  font-weight: 700;
  font-size: 16px;
  margin-bottom: 5px;
  color: black;
`;

const StyledSelectContainer = styled.div`
  font-family: inherit;
  margin-bottom: 22px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  &::after {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 25px;
    position: absolute;
    right: 9px;
    font-family: 'Font Awesome 5 Free';
    font-weight: 900;
    font-size: 2rem;
    content: '\f0dc';
    z-index: 1234;
  }
`;
const StyledSelect = styled.select`
  border-radius: 4px;
  font-family: inherit;
  width: 100%;
  appearance: none;
  position: relative;
  -webkit-appearance: none;
  -moz-appearance: none;
  position: relative;
  font-family: inherit;
  padding: 10px;
  background-color: #f1ebeb;
  padding: 12px;
`;

const StyledOption = styled.option`
  padding: 12px;
  font-family: inherit;

  &:checked {
    background-color: #019740;
    color: white;
  }
`;

const StyledButtonsContainer = styled.div`
  font-family: inherit;
  display: flex;
  justify-content: flex-end;
`;

const StyledButton = styled.button`
  font-family: inherit;
  border: 1px solid #dbdbdb;
  padding: 10px 45px;
  border-radius: 4px;
  background: #019740;
  color: white;
  font-weight: 700;
  transition: 0.25s ease-in-out;
  &:hover {
    cursor: pointer;
    background-color: white;
    border-color: #019740;
    color: black;
  }
  &:first-of-type {
    color: black;
    margin-right: 8px;
    background: none;
    &:hover {
      background-color: #e53d00;
      color: white;
      border-color: #dbdbdb;
    }
  }
`;

const StyledTagsContainer = styled.div`
  display: flex;
  align-items: center;
  font-family: inherit;
  flex-wrap: wrap;
  width: 100%;
  border-radius: 4px;
  border: 1px solid #9d9da3;
  color: black;
  margin-bottom: 22px;
`;

const StyledInputContainer = styled.div`
  display: grid;
  grid-template-columns: 3fr 1fr;
  column-gap: 12px;
`;

const StyledTags = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

const StyledTag = styled.li`
  margin: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  margin-left: 5px;
  padding: 5px 10px;
  border-radius: 4px;
  flex-wrap: nowrap;
  background-color: #009640;
  color: white;
  font-size: 12px;
`;

const StyledTagText = styled.span``;

const StyledTagsInput = styled.input`
  outline: none;
  border: none;
  padding: 12px;
  height: 100%;
  width: auto;
  display: flex;
  flex-grow: 1;
`;

const StyledCloseButton = styled.span`
font-size: 14px;
  height: 100%;
  margin-left: 8px;
  display: flex;
  align-items:center;
  justify-content: center;
  &:hover{
    cursor: pointer;
  }
}
`;
const StyledTagsInputBox = styled.div``;
