import React from 'react';
import {CancelButton, PrimaryButton} from 'components/atoms/Button';
import axios from 'axios';

export const DeleteForm = ({selectedElement, destination}) => {
  const deleteItems = () => {
    axios.all(
      selectedElement.map((element) => {
        return axios
          .delete(`${process.env.REACT_APP_SERVER_URL}/${destination}/${element._id}`)
          .then((response) => console.log(response))
          .catch((err) => console.log(err));
      })
    );
  };
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <h3>Czy na pewno chcesz usunąć ten element?</h3>
      <PrimaryButton onClick={deleteItems}>Tak</PrimaryButton>
      <CancelButton>Nie</CancelButton>
    </form>
  );
};
