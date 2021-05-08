import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import PropTypes from 'prop-types';
import s from './ImageGallery.module.css';

const ImageGallery = ({ imagesData, onClick }) => {
  return (
    <ul className={s.ImageGallery}>
      <ImageGalleryItem imagesData={imagesData} onClick={onClick} />
    </ul>
  );
};

ImageGallery.propTypes = {
  imagesData: PropTypes.arrayOf(PropTypes.object),
  onClick: PropTypes.func,
};

export default ImageGallery;
