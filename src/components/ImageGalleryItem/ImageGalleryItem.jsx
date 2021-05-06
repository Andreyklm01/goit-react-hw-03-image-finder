const ImageGalleryItem = ({ galleryImage }) => {
  return galleryImage.map(item => {
    return (
      <li key={item.id}>
        <img src={item.webformatURL} alt="image" width="300" height="300" />
      </li>
    );
  });
};
export default ImageGalleryItem;
