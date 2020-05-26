import React from 'react';
import Button, {PrimaryButton, CancelButton, EditButton, DeleteButton} from 'components/atoms/Button';
import {withKnobs, text, boolean, element} from '@storybook/addon-knobs';
import {withA11y} from '@storybook/addon-a11y';
import Icon from 'components/atoms/Icon';

export default {title: 'Button', component: Button, decorators: [withKnobs, withA11y]};

export const Primary = () => (
  <>
    <PrimaryButton small={boolean('Small', false)} large={boolean('Large', true)}>
      {text('Content', 'Dodaj')}
      {boolean('Icon', false) && <Icon padding="0 0 0 1rem" className={text('ClassName', 'fas fa-plus')}></Icon>}
    </PrimaryButton>
  </>
);

export const Cancel = () => (
  <CancelButton small={boolean('Small', false)} large={boolean('Large', true)}>
    {text('Content', 'Anuluj')}
  </CancelButton>
);
export const Edit = () => (
  <EditButton small={boolean('Small', false)} large={boolean('Large', true)}>
    {text('Content', 'Edytuj')}
    {boolean('Icon', false) && <Icon padding="0 0 0 1rem" className={text('ClassName', 'fas fa-pen')}></Icon>}
  </EditButton>
);
export const Delete = () => (
  <DeleteButton small={boolean('Small', false)} large={boolean('Large', true)}>
    {text('Content', 'Usuń')}
    {boolean('Icon', false) && <Icon padding="0 0 0 1rem" className={text('ClassName', 'fas fa-minus')}></Icon>}
  </DeleteButton>
);
