import PropTypes from 'prop-types';
import s from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({ imagesData, onClick }) => {
  return imagesData.map(item => {
    return (
      <li className={s.ImageGalleryItem} key={item.id}>
        <img
          className={s.ImageGalleryItemImage}
          onClick={() => onClick(item.largeImageURL)}
          src={item.webformatURL}
          alt={item.tags}
        />
      </li>
    );
  });
};

ImageGalleryItem.propTypes = {
  imagesData: PropTypes.arrayOf(PropTypes.object),
  onClick: PropTypes.func,
};
export default ImageGalleryItem;
