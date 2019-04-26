import classes from './defaultStyles.scss';

export const Index = (props) => {
  const {
    birth_date,
    ceremony_date,
    ceremony_place_title,
    death_date,
    deceased_name,
    deceased_photo,
  } = props;

  let imgSrc;
  let imgStyle;
  if (deceased_photo) {
    if (deceased_photo.file.medium && !deceased_photo.file.medium.url.includes('_missing')) {
      imgSrc = deceased_photo.file.medium.url;
    } else if (deceased_photo.file.url) {
      imgSrc = deceased_photo.file.url ;
    }
    imgStyle = {
      backgroundImage: `url('${imgSrc}')`,
      opacity: 1,
    };
  }


  return (
    <div className={classes.memoryFeedContainer}>
      <section className={classes.imageSection}>
       <div className={classes.imageItem} style={imgStyle}/>
      </section>

      <section className={classes.titleSection}>
       {deceased_name}
      </section>

      <section className={classes.dateSection}>
        <div className={classes.dateItem}>
          {birth_date}
        </div>
        <div className={classes.dateItem}>
          {death_date}
        </div>
      </section>

      <section className={classes.infoSection}>
        <div>
          {ceremony_place_title}
        </div>
        <div>
          {new Date(ceremony_date).toLocaleTimeString()}
        </div>
      </section>

      <section className={classes.linkSection}>

      </section>
    </div>
  );
};
