import React from 'react';
import Button from 'components/atoms/Button/Button';
import {action} from '@storybook/addon-actions';

export default {title: 'Button', component: Button};

export const Primary = () => <Button primary>Kliknij mnie</Button>;
export const Standard = () => <Button standard>Kliknij mnie</Button>;
export const Uppercase = () => <Button uppercase>Kliknij mnie</Button>;
export const Cancel = () => <Button cancel>Kliknij mnie</Button>;
export const MeetVote = () => <Button meetVote>+</Button>;
