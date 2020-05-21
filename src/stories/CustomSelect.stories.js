import React from 'react';
import CustomSelect from 'components/molecules/CustomSelect';
import {action} from '@storybook/addon-actions';

export default {title: 'CustomSelect', component: CustomSelect};

const options = ['Damian Ospara', 'Józef Rzadkosz', 'Jakub Wojtoń', 'Kazimierz Bagrowski'];

export const Primary = () => (
  <CustomSelect name="dupa" options={options}>
    Kliknij mnie
  </CustomSelect>
);
