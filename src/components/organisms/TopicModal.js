import React from 'react';

import {AddModal} from 'components/molecules/Modal';

import AddTopic from './AddTopic';

const Topic = () => {
  return (
    <AddModal title="Dodaj" icon="fas fa-plus" modalTitle="Dodaj nowy temat">
      <AddTopic></AddTopic>
    </AddModal>
  );
};

export default Topic;
