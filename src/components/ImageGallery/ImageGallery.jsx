import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';

const ImageGallery = ({ galleryImage }) => {
  return (
    <ul className="ImageGallery">
      <ImageGalleryItem galleryImage={galleryImage} />
    </ul>
  );
};

export default ImageGallery;
