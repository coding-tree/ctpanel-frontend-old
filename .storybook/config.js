import './scss-loader.scss';
import '@fortawesome/fontawesome-free/css/all.min.css';
import '@storybook/addon-console';
import {addDecorator} from '@storybook/react';
import {withConsole} from '@storybook/addon-console';
import {addParameters} from '@storybook/react';
import {INITIAL_VIEWPORTS} from '@storybook/addon-viewport';

addDecorator((storyFn, context) => withConsole()(storyFn)(context));

addParameters({
  viewport: {
    viewports: INITIAL_VIEWPORTS, // newViewports would be an ViewportMap. (see below for examples)
    defaultViewport: 'someDefault',
  },
});
