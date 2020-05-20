import React from 'react';
import {withFormik} from 'formik';
import * as Yup from 'yup';

import axios from 'axios';
import Modal from 'components/organisms/Modal';
import {Input, Tags} from 'components/molecules/CustomFormFields';

const Topic = ({setFieldValue}) => {
  const setTags = (name) => (tags) => {
    setFieldValue(name, tags);
  };

  return (
    <Modal title="Dodaj nowy temat">
      <Input name="topic" label="Temat" placeholder="Wprowadź temat"></Input>
      <Input name="userAdded" label="Inicjator" placeholder="Wpisz swoje dane"></Input>
      <Tags placeholder="Wpisz kategorie tematu" onTagsChange={setTags('tags')} name="tags" label="Tagi"></Tags>
    </Modal>
  );
};

const Formik = withFormik({
  mapPropsToValues: ({topic, votes, userAdded, tags}) => {
    return {
      topic: topic || '',
      votes: votes || 0,
      userAdded: userAdded || 'bezimienny',
      addedDate: new Date().getTime() || '',
      tags: tags || [],
    };
  },
  validationSchema: Yup.object().shape({
    topic: Yup.string().min(3, 'Temat musi mieć minimum 3 znaki').required('Wprowadź temat'),
    userAdded: Yup.string().min(3, 'To pole musi mieć minimum 3 znaki').required('Wprowadź informacje o użytkowniku'),
    votes: Yup.number('głosy muszą być liczbą'),
  }),
  handleSubmit: (values) => {
    // fetch idzie tu
    axios
      .post(`${process.env.REACT_APP_SERVER_URL}/topics`, values)
      .then((response) => {
        console.log(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  },
})(Topic);

export default Formik;
