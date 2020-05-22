import React from 'react';
import CustomSelect from 'components/molecules/CustomSelect';
import {action} from '@storybook/addon-actions';
import {Formik} from 'formik';
import {Input, Textarea, Select, Tags} from 'components/molecules/CustomFormFields';

export default {title: 'CustomSelect', component: CustomSelect};

const options = ['Damian Ospara', 'Józef Rzadkosz', 'Jakub Wojtoń', 'Kazimierz Bagrowski'];

const handleSelectChange = action('Selected');
const inputValue = action('value');
const handleSubmit = action('onSubmit');

export const FormikFields = () => (
  <Formik initialValues={{date: '', title: 'siema'}}>
    {(props) => (
      <form
        onSubmit={(values, e) => {
          handleSubmit(e);
          e.preventDefault();
        }}
      >
        <CustomSelect title="dupa" handleSelectChange={handleSelectChange} options={options}>
          Kliknij mnie
        </CustomSelect>
        <Input onChange={inputValue} name="date" label="Data"></Input>
        <Textarea name="title"></Textarea>
      </form>
    )}
  </Formik>
);
