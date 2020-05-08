import React from 'react';
import {withRouter} from 'react-router';
import styled from 'styled-components';
import {routes} from 'routes';
import Button from 'components/atoms/Button/Button';
import Input from 'components/atoms/Input';
import Icon from 'components/atoms/Icon';

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
  display: flex;
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
  background: #019740
  color: white;
  font-weight: 700;
  &:first-of-type {
    color: black;
    margin-right: 8px;
    background: none;
  }
  `;

const SchedulesTableMenu = () => (
  <StyledTableActions>
    <Button width="144px" height="42px" primary uppercase>
      Dodaj <Icon fontSize="1.4rem" padding="0 0 0 .5rem" className="fas fa-plus"></Icon>
    </Button>
    <StyledModalContainer>
      <StyledBox>
        <StyledHeader>Zaplanuj nowe spotkanie</StyledHeader>
        <StyledForm>
          <StyledLabel>Data</StyledLabel>
          <StyledInput placeholder="wpisz datę"></StyledInput>
          <StyledLabel>Temat spotkania</StyledLabel>
          <StyledTextArea placeholder="wpisz temat"></StyledTextArea>
          <StyledLabel>Prowadzący</StyledLabel>
          <StyledSelectContainer>
            <StyledSelect>
              <StyledOption value="Damian Ospara">Damian Ospara</StyledOption>
              <StyledOption value="Jakub Wojtoń">Jakub Wojtoń</StyledOption>
              <StyledOption value="Kazimierz Bagrowski">Kazimierz Bagrowski</StyledOption>
            </StyledSelect>
          </StyledSelectContainer>
          <StyledLabel>Odnośnik do spotkania</StyledLabel>
          <StyledInput placeholder="link do spotkania"></StyledInput>
          <StyledLabel>Opis spotkania</StyledLabel>
          <StyledTextArea placeholder="wpisz opis"></StyledTextArea>
          <StyledLabel>Tagi</StyledLabel>
          <StyledInput placeholder="wpisz tagi"></StyledInput>
          <StyledButtonsContainer>
            <StyledButton>Anuluj</StyledButton>
            <StyledButton>Dodaj</StyledButton>
          </StyledButtonsContainer>
        </StyledForm>
      </StyledBox>
    </StyledModalContainer>
    <Input></Input>
  </StyledTableActions>
);

const TopicDataBaseTableMenu = () => <button>DODAJ +</button>;

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
  }
};

export default withRouter(TableMenu);
