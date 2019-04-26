import Preact from 'preact/dist/preact';

import * as styles from './defaultStyles';

export const Index = (props) => {
  const {
    deceased_photo,
    deceased_name,
  } = props;

  let imgSrc = 'placeholder.jpg';
  if (deceased_photo.file.medium && !deceased_photo.file.medium.url.includes('_missing')) {
    imgSrc = deceased_photo.file.medium.url;
  } else if (deceased_photo.file.url) {
    imgSrc = deceased_photo.file.url ;
  }

  return (
    <div style={styles.container}>
       {deceased_photo && <section style={styles.sectionImage}>
         <img src={imgSrc} />
       </section>}

       <section style={styles.sectionTitle}>
         {deceased_name}
       </section>
    </div>
  );
};
