import {CancelButton, PrimaryButton} from 'components/atoms/Button';
import {Input, Select, Tags, Textarea} from 'components/molecules/CustomFormFields';
import {Form, withFormik} from 'formik';
import React from 'react';
import {useDispatch} from 'react-redux';
import {toast} from 'react-toastify';
import {editMeeting} from 'selectors/fetchMeetings';
import {getSchedule} from 'selectors/fetchSchedule';
import variables from 'settings/variables';
import styled from 'styled-components';
import * as Yup from 'yup';

const Formik = ({column, leaders, setFieldValue, setIsModalVisible, isModalVisible, selectedElement, topicNames = []}) => {
  const [editData] = selectedElement;
  const {tags, leader, usefulLinks, topic} = editData;
  const setValue = (name) => (tags) => {
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
        leader={topic}
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
      <Input columns={2} name="leader" label="Lub wybierz spoza listy" placeholder="Wprowadź prowadzącego"></Input>
      <Input columns={2} name="meetingHref" label="Odnośnik do spotkania" placeholder="Wprowadź adres do spotkania"></Input>
      <Textarea columns={2} name="description" label="Opis spotkania" placeholder="Wpisz opis spotkania"></Textarea>
      <Tags columns={2} activeTags={tags} name="tags" label="Kategorie" placeholder="Wpisz kategorie spotkania" onTagsChange={setValue('tags')}></Tags>
      <Tags
        columns={2}
        activeTags={usefulLinks}
        name="usefulLinks"
        label="Przydatne linki"
        placeholder="Dodaj linki"
        onTagsChange={setValue('usefulLinks')}
      ></Tags>
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

const EditMeetingWithFormik = withFormik({
  mapPropsToValues: ({date, topic, leader, meetingHref, description, tags, usefulLinks, selectedElement}) => {
    const [editData] = selectedElement;
    return {
      date: new Date(editData.date).toISOString().slice(0, 10) || date || new Date().toISOString().slice(0, 10),
      time: new Date(editData.date).toLocaleTimeString() || '21:30',
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
    time: Yup.string().max(10).min(0, 'Aż tak dawno temu nie było spotkania').required('Czas jest wymagany'),
    topic: Yup.string().min(5, 'Wpisz chociaż te 5 znaków').max(256, 'Zbyt długi temat, rozbij go na kilka spotkań').required('Temat jest wymagany'),
    leader: Yup.string().required('Wprowadź prowadzącego'),
    meetingHref: Yup.string().required('Musisz podać link'),
    description: Yup.string().required('Opis jest wymagany').max(1024, 'Opis nie może być dłuższy niż 1024 znaki'),
    tags: Yup.string().required('Podaj chociaż jeden tag'),
    usefulLinks: Yup.string(),
  }),
  handleSubmit: ({date, time, topic, leader, meetingHref, description, tags, usefulLinks}, {props}) => {
    const {setSubmitting, editMeetingAction, getScheduleAction, toggleSelection, setIsModalVisible, selectedElement} = props;

    setSubmitting(true);
    const [editData] = selectedElement;
    let dateToConvert = `${date} ${time}`;
    date = new Date(dateToConvert);
    let timestamp = date.getTime();
    date = timestamp;

    editMeetingAction({date, topic, leader, meetingHref, description, tags, usefulLinks}, editData._id)
      .then(() => {
        setIsModalVisible(false);
        setSubmitting(false);
        getScheduleAction();
        toggleSelection([]);
        toast.success('Pomyślnie edytowano spotkanie!');
      })
      .catch((err) => {
        setSubmitting(false);
        toast.error('Coś poszło nie tak... Spróbuj jeszcze raz');
      });
  },
})(Formik);

const EditMeeting = (props) => {
  const dispatch = useDispatch();
  const editMeetingAction = (dataToSend, id) => dispatch(editMeeting(dataToSend, id));
  const getScheduleAction = () => dispatch(getSchedule());

  return <EditMeetingWithFormik editMeetingAction={editMeetingAction} getScheduleAction={getScheduleAction} {...props} />;
};

export default EditMeeting;

export const StyledForm = styled.form`
  font-family: inherit;
  padding: 2.3rem;
  display: grid;
  grid-template-columns: ${({column}) => (column ? `repeat(${column}, 1fr)` : 'repeat(1, 1fr)')};
  grid-column-gap: 2rem;

  @media only screen and (max-width: ${variables.bpLargeMobile}) {
    grid-template-columns: 1fr;
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
