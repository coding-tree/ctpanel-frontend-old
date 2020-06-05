import React from 'react';
import {Input, Textarea, Select, Tags} from 'components/molecules/CustomFormFields';
import {CancelButton, PrimaryButton} from 'components/atoms/Button';
import variables from 'settings/variables';
import styled from 'styled-components';
import {withFormik, Form} from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import {toast} from 'react-toastify';

const Formik = ({column, leaders, setFieldValue, setIsModalVisible, isModalVisible, selectedElement, topicNames}) => {
  const [editData] = selectedElement;
  const {tags, leader} = editData;

  const setValue = name => tags => {
    setFieldValue(name, tags);
  };
  return (
    <StyledForm column={column} as={Form}>
      <Input name="date" type="date" label="Data"></Input>
      <Input name="time" type="time" label="Czas"></Input>
      <Select
        columns={2}
        name="topics"
        label="Wybierz temat"
        placeholder="Wybierz temat z istniejących"
        options={topicNames}
        handleSelectChange={setValue('topic')}
      ></Select>
      <Textarea columns={2} name="topic" label="Temat spotkania" placeholder="Wprowadź temat spotkania"></Textarea>
      <Select
        columns={2}
        name="leader"
        label="Prowadzący"
        placeholder="Wybierz prowadzącego"
        options={leaders}
        leader={leader}
        handleSelectChange={setValue('leader')}
      ></Select>
      <Input columns={2} name="meetingHref" label="Odnośnik do spotkania" placeholder="Wprowadź adres do spotkania"></Input>
      <Textarea columns={2} name="description" label="Opis spotkania" placeholder="Wpisz opis spotkania"></Textarea>
      <Tags columns={2} activeTags={tags} name="tags" label="Kategorie" placeholder="Wpisz kategorie spotkania" onTagsChange={setValue('tags')}></Tags>
      <Tags columns={2} name="usefulLinks" label="Przydatne linki" placeholder="Dodaj linki" onTagsChange={setValue('usefulLinks')}></Tags>
      <StyledButtonsContainer column={column}>
        <CancelButton large onClick={() => setIsModalVisible(!isModalVisible)} type="button">
          Anuluj
        </CancelButton>
        <PrimaryButton type="submit" large>
          Edytuj
        </PrimaryButton>
      </StyledButtonsContainer>
    </StyledForm>
  );
};

const EditMeeting = withFormik({
  mapPropsToValues: ({date, time, topic, leader, meetingHref, description, tags, usefulLinks, selectedElement}) => {
    const [editData] = selectedElement;

    return {
      // todo - convert date & time to timestamp
      date: new Date(editData.date).toISOString().slice(0, 10) || date || new Date().toISOString().slice(0, 10),
      time: editData.time || time || '21:33',
      topic: editData.topic || topic || '',
      leader: editData.leader || leader || '',
      meetingHref: editData.meetingHref || meetingHref || '',
      description: editData.description || description || '',
      tags: editData.tags || tags || '',
      usefulLinks: editData.usefulLinks || usefulLinks || '',
    };
  },
  validationSchema: Yup.object().shape({
    date: Yup.date('Musisz podać datę').required('Data jest wymagana'),
    time: Yup.string()
      .min(5)
      .max(5)
      .min(0, 'Aż tak dawno temu nie było spotkania')
      .required('Czas jest wymagany'),
    topic: Yup.string()
      .min(5, 'Wpisz chociaż te 5 znaków')
      .max(256, 'Zbyt długi temat, rozbij go na kilka spotkań')
      .required('Temat jest wymagany'),
    leader: Yup.string().required('Wprowadź prowadzącego'),
    meetingHref: Yup.string().required('Musisz podać link'),
    description: Yup.string().required('Opis jest wymagany'),
    tags: Yup.string().required('Podaj chociaż jeden tag'),
    usefulLinks: Yup.string(),
  }),
  handleSubmit: ({date, time, topic, leader, meetingHref, description, tags, usefulLinks}, {props}) => {
    props.setSubmitting(true);

    const [editData] = props.selectedElement;
    // fetch idzie tu
    let dateToConvert = `${date} ${time}`;
    date = new Date(dateToConvert);
    let timestamp = date.getTime();
    date = timestamp;

    axios
      .put(`${process.env.REACT_APP_SERVER_URL}/meetings/${editData._id}`, {date, topic, leader, meetingHref, description, tags, usefulLinks})
      .then(() => {
        props.setIsModalVisible(false);
        props.setSubmitting(false);
        toast.success('Pomyślnie edytowano spotkanie!');
      })
      .catch(err => {
        props.setSubmitting(false);
        toast.error('Coś poszło nie tak... Spróbuj jeszcze raz');
      });
  },
})(Formik);

export default EditMeeting;

export const StyledForm = styled.form`
  font-family: inherit;
  padding: 2.3rem;
  display: grid;
  grid-template-columns: ${({column}) => (column ? `repeat(${column}, 1fr)` : 'repeat(1, 1fr)')};
  grid-column-gap: 2rem;

  textarea {
    font-family: inherit;
    font-size: 1.6rem;
    border-radius: 4px;
    border: 1px solid ${variables.borderColor};
    padding: 12px;
    color: ${variables.colorFont};
    height: 12rem;
    resize: none;
    &::placeholder {
      color: ${variables.colorLink};
    }
  }
`;

const StyledButtonsContainer = styled.div`
  justify-self: end;
  grid-column: ${({column}) => (column ? `span ${column}` : 'span 1')};
  display: grid;
  grid-column-gap: 1rem;
  grid-template-columns: ${({buttons}) => (buttons ? `repeat(${buttons}, 1fr)` : 'repeat(2, 1fr)')};
`;
