import React, {useState, useEffect} from 'react';
import variables from 'settings/variables';
import {Field, ErrorMessage} from 'formik';
import styled from 'styled-components';
import CustomSelect from './CustomSelect';
import Icon from 'components/atoms/Icon';

const CustomFormFieldWrapper = ({children, name, label, columns, rows}) => {
  return (
    <StyledWrapper columns={columns} rows={rows}>
      <StyledLabel htmlFor={name}>{label}</StyledLabel>
      {children}
      <ErrorMessage component={StyledError} name={name}></ErrorMessage>
    </StyledWrapper>
  );
};

export const Input = ({name, label, type = 'text', placeholder, columns, rows}) => {
  return (
    <CustomFormFieldWrapper columns={columns} rows={rows} name={name} label={label}>
      <StyledInput as={Field} name={name} type={type} id={name} placeholder={placeholder}></StyledInput>
    </CustomFormFieldWrapper>
  );
};

export const Textarea = ({name, label, placeholder, columns, rows}) => {
  return (
    <CustomFormFieldWrapper columns={columns} rows={rows} name={name} label={label}>
      <Field as="textarea" placeholder={placeholder} id={name} name={name}></Field>
    </CustomFormFieldWrapper>
  );
};

export const Select = ({name, label, options, placeholder, handleSelectChange, columns, rows}) => {
  return (
    <CustomFormFieldWrapper columns={columns} rows={rows} name={name} label={label}>
      <CustomSelect
        name={name}
        options={options}
        placeholder={placeholder}
        handleSelectChange={handleSelectChange}
      ></CustomSelect>
    </CustomFormFieldWrapper>
  );
};

export const Tags = ({name, label, onTagsChange, columns, rows, placeholder}) => {
  const [tags, setTags] = useState([]);
  const onlyLetters = /\S+/g;

  useEffect(() => {
    onTagsChange(tags);
  }, [tags]);

  const handleTags = (e) => {
    const result = e.target.value.match(onlyLetters);

    // Block space
    if (!e.target.value.match(onlyLetters)) e.target.value = '';

    // Add tag on space
    if (e.target.value.match(onlyLetters) && result && e.keyCode === 32) {
      setTags((prev) => [...prev, ...result]);
      e.target.value = '';
    }

    // backspace
    if (e.keyCode === 8 && e.target.value === '' && tags.length > 0) {
      e.target.value = tags.pop().toString();
      setTags((prev) => [...prev]);
    }
  };

  const handleBlur = (e) => {
    if (e.target.value.match(onlyLetters)) {
      setTags((prev) => [...prev, e.target.value]);
      e.target.value = '';
    }
  };
  const deleteTag = (index) => {
    setTags((prev) => {
      return prev.filter((el, i) => i !== index);
    });
  };

  const focusInput = (e) => {
    e.currentTarget.children[1].focus();
  };

  return (
    <CustomFormFieldWrapper columns={columns} rows={rows} name={name} label={label}>
      <StyledTagsContainer onClick={(e) => focusInput(e)}>
        <Wrapper>
          {tags &&
            tags.map((el, index) => (
              <StyledTag key={index}>
                {el} <Icon className="fas fa-times" onClick={() => deleteTag(index)}></Icon>
              </StyledTag>
            ))}
        </Wrapper>
        <StyledTagInput
          placeholder={placeholder}
          onBlur={(e) => handleBlur(e)}
          onKeyUp={(e) => handleTags(e)}
        ></StyledTagInput>
      </StyledTagsContainer>
      <StyledInput invisible="true" as={Field} name={name} id={name}></StyledInput>
    </CustomFormFieldWrapper>
  );
};

const StyledWrapper = styled.span`
  flex-direction: column;
  grid-column: ${({columns}) => (columns ? `span ${columns}` : 'span 1')};
  margin-bottom: 2.2rem;
`;
const Wrapper = styled.span`
  flex-wrap: wrap;
`;
const StyledTagsContainer = styled.div`
  position: relative;
  flex-wrap: wrap;
  align-items: top;
  border-radius: 4px;
  padding: 12px;
  min-height: 3.6rem;
  border: 1px solid ${variables.borderColor};
`;
const StyledTag = styled.span`
  align-items: center;
  color: ${variables.colorWhite};
  background-color: ${variables.colorMain};
  padding: 5px 10px;
  margin-right: 5px;
  margin-bottom: 5px;
  border-radius: 4px;
  line-height: 1;
  height: auto;
  font-weight: bold;
  min-height: 25px;
  font-size: 1.2rem;
  i {
    margin-left: 7px;
    padding: 1px 3px;
    border-radius: 4px;
    cursor: pointer;
    transition: 0.2s;
    font-size: 1.6rem;
    &:hover {
      color: ${variables.colorMain};
      background-color: ${variables.colorWhite};
    }
  }
`;
const StyledTagInput = styled.input`
  font-size: 1.6rem;
  width: -webkit-fill-available;
  font-family: inherit;
  border: none;
  outline: none;
  align-items: center;
  color: ${variables.colorFont};
  &::placeholder {
    color: ${variables.colorLink};
  }
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
  margin-top: 2.2rem;
  min-height: 3.6rem;
  align-self: stretch;
`;
