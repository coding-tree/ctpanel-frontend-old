import React, {useState} from 'react';
import {Input, Textarea, Select, Tags} from 'components/molecules/CustomFormFields';
import {CancelButton, PrimaryButton} from 'components/atoms/Button';
import variables from 'settings/variables';
import styled from 'styled-components';
import {withFormik, Form} from 'formik';
import * as Yup from 'yup';
import {toast} from 'react-toastify';
import {useDispatch} from 'react-redux';
import {addMeeting} from 'selectors/fetchMeetings';
import {getSchedule} from 'selectors/fetchSchedule';

const Formik = ({column, status, leaders, setFieldValue, setIsModalVisible, isModalVisible, topicNames, isSubmitting}) => {
  const setValue = (name) => (tags) => {
    setFieldValue(name, tags);
  };

  return (
    <>
      <StyledForm column={column} as={Form}>
        <Input name="date" type="date" label="Data"></Input>
        <Input name="time" type="time" label="Czas"></Input>
        <Select
          columns={2}
          name="topics"
          label="Wybierz temat"
          placeholder="Wybierz temat z istniejących"
          options={topicNames}
          shouldReset={status}
          handleSelectChange={setValue('topic')}
        ></Select>
        <Textarea columns={2} name="topic" label="Lub wpisz swój" placeholder="Wprowadź temat spotkania"></Textarea>
        <Select
          columns={2}
          name="leader"
          label="Prowadzący"
          placeholder="Wybierz prowadzącego"
          options={leaders}
          shouldReset={status}
          handleSelectChange={setValue('leader')}
        ></Select>
        <Input columns={2} name="leader" label="Lub wybierz spoza listy" placeholder="Wprowadź prowadzącego"></Input>
        <Input columns={2} name="meetingHref" label="Odnośnik do spotkania" placeholder="Wprowadź adres do spotkania"></Input>
        <Textarea columns={2} name="description" label="Opis spotkania" placeholder="Wpisz opis spotkania"></Textarea>
        <Tags shouldReset={status} columns={2} name="tags" label="Kategorie" placeholder="Wpisz kategorie spotkania" onTagsChange={setValue('tags')}></Tags>
        <Tags
          shouldReset={status}
          columns={2}
          name="usefulLinks"
          label="Przydatne linki"
          placeholder="Dodaj linki"
          onTagsChange={setValue('usefulLinks')}
        ></Tags>
        <StyledButtonsContainer column={column}>
          <CancelButton large onClick={() => setIsModalVisible(!isModalVisible)} type="button">
            Anuluj
          </CancelButton>
          <PrimaryButton disabled={isSubmitting} large>
            Dodaj
          </PrimaryButton>
        </StyledButtonsContainer>
      </StyledForm>
    </>
  );
};

const AddMeetingWithFormik = withFormik({
  mapPropsToValues: ({date, time, topic, leader, meetingHref, description, tags, usefulLinks}) => {
    return {
      // todo - convert date & time to timestamp
      date: date || new Date().toISOString().slice(0, 10),
      time: time || '21:33',
      topic: topic || '',
      leader: leader || '',
      meetingHref: meetingHref || '',
      description: description || '',
      tags: tags || [],
      usefulLinks: usefulLinks || [],
    };
  },
  validationSchema: Yup.object().shape({
    date: Yup.date('Musisz podać datę').required('Data jest wymagana'),
    time: Yup.string().min(5).max(5).min(0, 'Aż tak dawno temu nie było spotkania').required('Czas jest wymagany'),
    topic: Yup.string().min(5, 'Wpisz chociaż te 5 znaków').max(256, 'Zbyt długi temat, rozbij go na kilka spotkań').required('Temat jest wymagany'),
    leader: Yup.string().required('Wprowadź prowadzącego'),
    meetingHref: Yup.string().required('Musisz podać link'),
    description: Yup.string().required('Opis jest wymagany'),
    tags: Yup.string().required('Podaj chociaż jeden tag'),
    usefulLinks: Yup.string(),
  }),
  handleSubmit: (values, {resetForm, setStatus, props}) => {
    const {setSubmitting, addMeetingAction, getScheduleAction} = props;

    setSubmitting(true);
    let {date, time, topic, leader, meetingHref, description, tags, usefulLinks} = values;
    let dateToConvert = `${date} ${time}`;
    date = new Date(dateToConvert);
    let timestamp = date.getTime();
    date = timestamp;
    addMeetingAction({date, topic, leader, meetingHref, description, tags, usefulLinks})
      .then(() => {
        setStatus(true);
        resetForm();
        props.setIsModalVisible(false);
        props.setSubmitting(false);
        getScheduleAction();
        toast.success('Dodano nowe spotkanie!');
      })
      .catch(() => {
        setStatus(false);
        toast.error('Nie udało się dodać spotkania...');
      });
  },
})(Formik);

const AddMeeting = (props) => {
  const dispatch = useDispatch();
  const addMeetingAction = (dataToSend) => dispatch(addMeeting(dataToSend));
  const getScheduleAction = () => dispatch(getSchedule());

  return <AddMeetingWithFormik addMeetingAction={addMeetingAction} getScheduleAction={getScheduleAction} {...props} />;
};

export default AddMeeting;

export const StyledForm = styled.form`
  font-family: inherit;
  padding: 2.3rem;
  display: grid;
  grid-template-columns: ${({column}) => (column ? `repeat(${column}, 1fr)` : 'repeat(1, 1fr)')};
  grid-column-gap: 2rem;

  @media only screen and (max-width: ${variables.bpLargeMobile}) {
    grid-template-columns: 1fr;
  }
  @media only screen and (max-width: ${variables.bpLargeMobile}) {
    font-size: 1.2rem;
  }
`;

const StyledButtonsContainer = styled.div`
  justify-self: end;
  grid-column: ${({column}) => (column ? `span ${column}` : 'span 1')};
  display: grid;
  grid-column-gap: 1rem;
  grid-template-columns: ${({buttons}) => (buttons ? `repeat(${buttons}, 1fr)` : 'repeat(2, 1fr)')};

  @media only screen and (max-width: ${variables.bpLargeMobile}) {
    grid-column: span 1;
    justify-self: stretch;
    > button {
      width: 100%;
    }
  }
`;
