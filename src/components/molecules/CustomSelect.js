import React, {useRef, useState, useEffect} from 'react';
import variables from 'settings/variables';
import styled, {css} from 'styled-components';
import Icon from 'components/atoms/Icon';
import {Field} from 'formik';

const CustomSelect = ({name, inputStatus, options, handleSelectChange, placeholder, leader, shouldReset}) => {
  const [selectValue, setSelectValue] = useState(leader || '');
  const [isSelectVisible, toggleSelectVisibility] = useState(false);
  const [selectVisible, setSelectVisible] = useState('');

  const handleOptionClick = (value) => {
    handleSelectChange(value);
    toggleSelectVisibility(false);
    return setSelectValue(value);
  };

  const handleSelectClose = (e) => {
    if (!node.current.contains(e.target)) {
      setSelectVisible(Math.random());
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleSelectClose);
    return () => {
      document.removeEventListener('mousedown', handleSelectClose);
    };
  }, []);

  useEffect(() => {
    toggleSelectVisibility(false);
  }, [selectVisible]);

  useEffect(() => {
    shouldReset && setSelectValue('');
  }, [shouldReset]);

  const isSelected = (value) => selectValue === value;
  const node = useRef();
  return (
    <div ref={node}>
      <StyledSelectContainer>
        {/* Invisible select */}
        <Field as="select" id={name} name={name}>
          {options.map((el, index) => (
            <option key={index}>{el}</option>
          ))}
        </Field>

        <StyledSelect selected={selectValue !== ''} onClick={() => toggleSelectVisibility((prev) => !prev)}>
          {selectValue || <StyledPlaceholder>{placeholder}</StyledPlaceholder>}
          <Icon absolute right="1.2rem" className="fas fa-sort"></Icon>
        </StyledSelect>
        <StyledOptionContainer isVisible={isSelectVisible}>
          {options.map((el, index) => (
            <StyledOption selected={isSelected(el)} onClick={() => handleOptionClick(el)} key={index}>
              {el}
              {isSelected(el) && <Icon absolute right="1.2rem" className="fas fa-check"></Icon>}
            </StyledOption>
          ))}
        </StyledOptionContainer>
      </StyledSelectContainer>
    </div>
  );
};

export default CustomSelect;

const StyledPlaceholder = styled.span`
  color: ${variables.colorLink};

  @media only screen and (max-width: ${variables.bpTablet}) {
    font-size: 1.4rem;
  }
  @media only screen and (max-width: ${variables.bpLargeMobile}) {
    font-size: 1.2rem;
  }
`;

const StyledSelectContainer = styled.div`
  flex-direction: column;
  position: relative;
  justify-content: center;
  align-items: center;
  width: 100%;
  select {
    display: none;
  }
`;

const StyledSelect = styled.div`
  position: relative;
  width: 100%;
  height: 3.6rem;
  border: 1px solid ${variables.borderColor};
  border-radius: 4px;
  padding: 0 12px;
  align-items: center;
  cursor: pointer;

  ${({selected}) =>
    selected &&
    css`
      background-color: ${variables.backgroundColor};
    `}
    @media only screen and (max-width: ${variables.bpTablet}) {
    font-size: 1.4rem;
  }
  @media only screen and (max-width: ${variables.bpLargeMobile}) {
    font-size: 1.2rem;
  }
`;

const StyledOptionContainer = styled.div`
  display: none;
  position: absolute;
  top: 100%;
  flex-direction: column;
  width: 100%;
  background-color: #fff;
  border: 1px solid ${variables.borderColor};
  box-shadow: 0 6px 6px rgba(0, 0, 0, 0.16);
  border-radius: 4px;
  overflow: hidden;

  ${({isVisible}) =>
    isVisible &&
    css`
      z-index: 10;
      display: flex;
    `};
`;

const StyledOption = styled.div`
  height: 3.6rem;
  align-items: center;
  cursor: pointer;
  padding: 0 12px;
  position: relative;
  transition: 0.1s cubic-bezier(0.075, 0.82, 0.165, 1);
  &:not(:last-child) {
    border-bottom: 1px solid ${variables.borderColor};
  }
  &:hover {
    background-color: ${variables.backgroundColor};
  }
  ${({selected}) =>
    selected &&
    css`
      background-color: ${variables.colorMain} !important;
      color: ${variables.colorWhite} !important;
      font-weight: bold;
    `}

    @media only screen and (max-width: ${variables.bpTablet}) {
      font-size: 1.4rem;
  }
    @media only screen and (max-width: ${variables.bpLargeMobile}) {
      font-size: 1.2rem;
  }
`;
