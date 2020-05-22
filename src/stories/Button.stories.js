import React from 'react';
import Button, {PrimaryButton, CancelButton} from 'components/atoms/Button';
import {withKnobs, text, boolean, number} from '@storybook/addon-knobs';
import {action} from '@storybook/addon-actions';
import {withA11y} from '@storybook/addon-a11y';

export default {title: 'Button', component: Button, decorators: [withKnobs, withA11y]};

export const Primary = () => <PrimaryButton large={boolean('Large', true)}>{text('Content', 'Dodaj +')}</PrimaryButton>;
export const Cancel = () => <CancelButton large={boolean('Large', true)}>{text('Content', 'Anuluj')}</CancelButton>;
