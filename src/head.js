import React from 'react';
import { Helmet } from 'react-helmet';

const Head = () => (
  <Helmet>
    <title>My App</title>
    <meta
      name="viewport"
      content="width=device-width,initial-scale=1.0,maximum-scale=1.0,user-scalable=0"
    />
    <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap"
    />
  </Helmet>
);

export default Head;
