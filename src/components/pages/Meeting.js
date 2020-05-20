import React, {useState} from 'react';
import {withFormik, Field, ErrorMessage} from 'formik';
import styled from 'styled-components';
import * as Yup from 'yup';
import axios from 'axios';

import variables from 'settings/variables';
import {Input, Textarea, Select, Tags} from 'components/molecules/CustomFormFields';
import Modal from 'components/organisms/Modal';

const Meeting = ({setFieldValue}) => {
  const leaders = ['Damian Ospara', 'Józef Rzadkosz', 'Jakub Wojtoń', 'Kazimierz Bagrowski'];

  return (
    <Modal column={2} title="Zaplanuj nowe spotkanie">
      <Input name="date" type="date" label="Data"></Input>
      <Input name="time" type="time" label="Czas"></Input>
      <Textarea columns={2} name="topic" label="Temat spotkania"></Textarea>
      <Select columns={2} name="leader" label="Prowadzący" options={leaders} setFieldValue={setFieldValue}></Select>
      <Input columns={2} name="meetingHref" label="Odnośnik do spotkania"></Input>
      <Textarea columns={2} name="description" label="Opis spotkania"></Textarea>
      <Tags columns={2} name="tags" label="Wpisz kategorie spotkania" setFieldValue={setFieldValue}></Tags>
    </Modal>
  );
};

const Formik = withFormik({
  mapPropsToValues: ({date, time, topic, leader, meetingHref, description, tags}) => {
    return {
      // todo - convert date & time to timestamp
      date: date || new Date().toISOString().slice(0, 10),
      time: time || '21:33',
      topic: topic || '',
      leader: leader || '',
      meetingHref: meetingHref || '',
      description: description || '',
      tags: tags || '',
    };
  },
  validationSchema: Yup.object().shape({
    date: Yup.date('Musisz podać datę').required('Data jest wymagana'),
    time: Yup.string().min(5).max(5).min(0, 'Aż tak dawno temu nie było spotkania').required('Czas jest wymagany'),
    topic: Yup.string()
      .min(5, 'Wpisz chociaż te 5 znaków')
      .max(256, 'Zbyt długi temat, rozbij go na kilka spotkań')
      .required('Temat jest wymagany'),
    leader: Yup.string().required('Wprowadź prowadzącego'),
    meetingHref: Yup.string().required('Musisz podać link'),
    description: Yup.string().required('Opis jest wymagany'),
    tags: Yup.string().required('Podaj chociaż jeden tag'),
  }),
  handleSubmit: (values) => {
    console.log(values);
    // fetch idzie tu
    let {date, time, topic, leader, meetingHref, description, tags} = values;
    let dateToConvert = `${date} ${time}`;
    date = new Date(dateToConvert);
    let timestamp = date.getTime();
    date = timestamp;
    axios
      .post(`${process.env.REACT_APP_SERVER_URL}/meetings`, {date, topic, leader, meetingHref, description, tags})
      .then((response) => {
        console.log(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  },
})(Meeting);

export default Formik;

// STYLES

const StyledError = styled.span`
  padding: 5px 15px;
  border-radius: 4px;
  font-weight: bold;
  color: ${variables.colorWhite};
  background-color: ${variables.colorError};
  margin-bottom: 2rem;
  min-height: 3.6rem;
  align-items: center;
`;

const StyledInput = styled.input`
  font-family: inherit;
  font-size: 1.6rem;
  width: 100%;
  min-height: 3.6rem;
  border-radius: 4px;
  border: 1px solid ${variables.borderColor};
  padding: 0 12px;
  color: ${variables.colorFont};
  margin-bottom: 2.2rem;
  display: ${({invisible}) => (invisible ? 'none' : 'flex')};
  &::placeholder {
    color: ${variables.colorLink};
  }
`;

const StyledTagsContainer = styled.div`
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
  border-radius: 4px;
  border: 1px solid ${variables.borderColor};
  color: ${variables.colorFont};
  margin-bottom: 22px;
`;

const StyledTags = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

const StyledTag = styled.li`
  margin: 5px;
  justify-content: center;
  align-items: center;

  margin-left: 5px;
  padding: 5px 10px;
  border-radius: 4px;
  flex-wrap: nowrap;
  background-color: ${variables.colorMain};
  color: ${variables.colorWhite};
  font-size: 1.2rem;
`;

const StyledTagText = styled.span``;

const StyledTagsInput = styled.input`
  outline: none;
  border: none;
  padding: 12px;
  height: 100%;
  width: auto;
  display: flex;
`;

const StyledCloseButton = styled.span`
  font-size: 1.6rem;
  font-weight: bold;
  height: 100%;
  margin-left: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    cursor: pointer;
  }
`;
const StyledTagsInputBox = styled.div``;
