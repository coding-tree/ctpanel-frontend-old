import React from 'react';
import {Button, Link, DownloadIcon} from 'styledComponents/LastMeet';

const MaterialButton = ({url}) => {
  return (
    <Button>
      <Link as="a" href={url} download target="_blank">
        Pobierz materiały <DownloadIcon className="fas fa-download"></DownloadIcon>
      </Link>
    </Button>
  );
};

export default MaterialButton;
