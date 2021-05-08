import axios from 'axios';
import PropTypes from 'prop-types';
const apiKey = '20625713-fedbabfb53260f0f5bcc9457f';
const BASE_URL = 'https://pixabay.com/api';

const getImages = ({ searchQuery = '', pageNumber = 1 }) => {
  return axios
    .get(
      `${BASE_URL}/?q=${searchQuery}&page=${pageNumber}&key=${apiKey}&image_type=photo&orientation=horizontal&per_page=12`,
    )
    .then(response => response.data.hits);
};

getImages.propTypes = {
  searchQuery: PropTypes.string,
  pageNumber: PropTypes.number,
};
export default getImages;
