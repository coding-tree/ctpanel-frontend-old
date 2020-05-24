import React from 'react';
import {TestInput} from 'components/atoms/Input';
import {action} from '@storybook/addon-actions';

export default {title: 'Input', component: TestInput};

const handleInput = action('handleInput');

export const Primary = () => <TestInput handleKeyPress={handleInput}></TestInput>;
