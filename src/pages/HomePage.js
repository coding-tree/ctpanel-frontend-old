import React from 'react';
import LastMeet from 'organism/LastMeet';

import styled from 'styled-components';

const HomeWrapper = styled.div`
  height: 100%;
  justify-content: center;
  align-items: center;
`;

const Home = () => {
  const fakeData = {
    id: 1,
    author: 'Damian Ospara',
    title: 'JavaScript w praktyce',
    date: 1576861600,
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae quaerat, repudiandae at cupiditate animi laborum incidunt aut ratione ab facilis alias quo laboriosam illo quibusdam eveniet beatae eum molestias repellat! Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem error vel quibusdam, voluptatum libero ab perferendis, nam cumque saepe reprehenderit iusto laudantium modi veritatis nihil nisi atque eligendi aspernatur facere. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus voluptate, dignissimos atque suscipit neque modi a iure ad iusto rem quo harum officia eos illum, itaque magnam at maiores molestias. Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae quaerat, repudiandae at cupiditate animi laborum incidunt aut ratione ab facilis alias quo laboriosam illo quibusdam eveniet beatae eum molestias repellat! Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem error vel quibusdam, voluptatum libero ab perferendis, nam cumque saepe reprehenderit iusto laudantium modi veritatis nihil nisi atque eligendi aspernatur facere. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus voluptate, dignissimos atque suscipit neque modi a iure ad iusto rem quo harum officia eos illum, itaque magnam at maiores molestias.',
    usefulLinks: [
      {id: 1, url: 'http://lorem.ipsum/lorem_ipsum_sit_dolores?lorem=true#ipsum'},
      {id: 2, url: 'http://lorem.ipsum/lorem_ipsum_sit_dolores?lorem=true#ipsum'},
      {id: 3, url: 'http://lorem.ipsum/lorem_ipsum_sit_dolores?lorem=true#ipsum'},
      {id: 4, url: 'http://lorem.ipsum/lorem_ipsum_sit_dolores?lorem=true#ipsum'},
    ],
    materialLink: 'http://lorem_download.ipsum/link_to_materials_file',
  };

  return (
    <HomeWrapper>
      <LastMeet lastMeet={fakeData}></LastMeet>
    </HomeWrapper>
  );
};

export default Home;
