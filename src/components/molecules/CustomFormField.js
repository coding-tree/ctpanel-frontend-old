import React from 'react';
import variables from 'settings/variables';
import {Field, ErrorMessage} from 'formik';
import styled from 'styled-components';
import CustomSelect from './CustomSelect';

const CustomFormFieldWrapper = ({children, name, label}) => {
  return (
    <StyledWrapper>
      <StyledLabel htmlFor={name}>{label}</StyledLabel>
      {children}
      <ErrorMessage component={StyledError} name={name}></ErrorMessage>
    </StyledWrapper>
  );
};

const CustomFormField = ({name, label, type = 'text', textarea, select, placeholder, options, setFieldValue}) => {
  return (
    <StyledWrapper>
      <StyledLabel htmlFor={name}>{label}</StyledLabel>
      {textarea && <Field as="textarea" placeholder={placeholder} id={name} name={name}></Field>}
      {select && <CustomSelect name={name} options={options} setFieldValue={setFieldValue}></CustomSelect>}
      {!textarea && !select && <StyledInput as={Field} name={name} type={type} id={name}></StyledInput>}
      <ErrorMessage component={StyledError} name={name}></ErrorMessage>
    </StyledWrapper>
  );
};

export const CustomSelectField = ({name, label, options, setFieldValue}) => {
  return (
    <CustomFormFieldWrapper name={name} label={label}>
      <CustomSelect name={name} options={options} setFieldValue={setFieldValue}></CustomSelect>
    </CustomFormFieldWrapper>
  );
};

export default CustomFormField;

const StyledWrapper = styled.div`
  flex-direction: column;
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

const StyledLabel = styled.label`
  font-weight: 700;
  font-size: 1.6rem;
  margin-bottom: 5px;
  color: ${variables.colorFont};
`;

const StyledError = styled.div`
  align-items: center;
  padding: 5px 15px;
  border-radius: 4px;
  font-weight: bold;
  color: ${variables.colorWhite};
  background-color: ${variables.colorError};
  margin-bottom: 2rem;
  min-height: 3.6rem;
  align-self: stretch;
`;
