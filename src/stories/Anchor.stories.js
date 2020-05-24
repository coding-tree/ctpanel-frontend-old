import React from 'react';
import Anchor from 'components/atoms/Anchor';
import {action} from '@storybook/addon-actions';

export default {title: 'Anchor', component: Anchor};

export const Primary = () => <Anchor>Kliknij mnie</Anchor>;
export const ButtonLink = () => <Anchor buttonLink>Kliknij mnie</Anchor>;
export const Social = () => <Anchor social>Kliknij mnie</Anchor>;
