import React from 'react';
import {action} from '@storybook/addon-actions';
import {withFormik} from 'formik';
import {Tags} from 'components/molecules/CustomFormFields';

export default {title: 'Tags', component: Tags};

const handleTagsChange = action('Tags');

const Test = () => <Tags name="tags" onTagsChange={handleTagsChange}></Tags>;

export const Primary = withFormik({
  mapPropsToValues: ({tags}) => {
    return {tags: tags || ''};
  },
  handleSubmit: () => {},
})(Test);
