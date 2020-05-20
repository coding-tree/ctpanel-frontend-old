import React from 'react';
import {withFormik} from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import {Input, Textarea, Select, Tags} from 'components/molecules/CustomFormFields';
import Modal from 'components/organisms/Modal';

const Meeting = ({setFieldValue}) => {
  const leaders = ['Damian Ospara', 'Józef Rzadkosz', 'Jakub Wojtoń', 'Kazimierz Bagrowski'];
  const setValue = (name) => (tags) => {
    setFieldValue(name, tags);
  };
  return (
    <Modal column={2} title="Zaplanuj nowe spotkanie">
      <Input name="date" type="date" label="Data"></Input>
      <Input name="time" type="time" label="Czas"></Input>
      <Textarea columns={2} name="topic" label="Temat spotkania" placeholder="Wprowadź temat spotkania"></Textarea>
      <Select
        columns={2}
        name="leader"
        label="Prowadzący"
        placeholder="Wybierz prowadzącego"
        options={leaders}
        handleSelectChange={setValue('leader')}
      ></Select>
      <Input
        columns={2}
        name="meetingHref"
        label="Odnośnik do spotkania"
        placeholder="Wprowadź adres do spotkania"
      ></Input>
      <Textarea columns={2} name="description" label="Opis spotkania" placeholder="Wpisz opis spotkania"></Textarea>
      <Tags
        columns={2}
        name="tags"
        label="Kategorie"
        placeholder="Wpisz kategorie spotkania"
        onTagsChange={setValue('tags')}
      ></Tags>
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
