import React from 'react';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { useSelectCar } from '../../context/CarContext';
import comma from '../../utils/comma';

const MetaTag = ({ carData }) => {
  const title = carData.attribute.brand + carData.attribute.name;
  const url = window.location.href;
  const description = '월' + comma(carData.amount) + '원부터';
  const keywords = '알티모빌리티';

  return (
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:site_name" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={carData.attribute.imageUrl} />
        <meta property="og:url" content={url} />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={carData.attribute.imageUrl} />
        <link rel="canonical" href={url} />
      </Helmet>
  );
};

export default MetaTag;
