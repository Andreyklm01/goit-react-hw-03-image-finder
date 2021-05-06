import { Component } from 'react';
import Searchbar from './components/SearchBar/Searchbar';
import ImageGallery from './components/ImageGallery/ImageGallery';
import Loader from './components/Loader/Loader';
import Button from './components/Button/Button';
import Modal from './components/Modal/Modal';
import { apiKey, BASE_URL } from './api/api';
import axios from 'axios';

class App extends Component {
  state = {
    data: [],
    pageNumber: 1,
    query: '',
    perPage: 12,
  };

  async componentDidMount() {
    const { pageNumber, perPage } = this.state;
    await axios
      .get(
        `${BASE_URL}/?page=${pageNumber}&key=${apiKey}&image_type=photo&orientation=horizontal&per_page=${perPage}`,
      )
      .then(response => this.setState({ data: response.data.hits }));
  }

  // searchImage({ target }) {
  //   this.setState(() => ({
  //     query: target.value,
  //   }));
  //   console.log(this.state.query);
  // }

  // async componentDidUpdate(event) {
  //   const { query, pageNumber, perPage } = this.state;
  //   this.setState(() => ({
  //     query: event.target.value,
  //   }));
  //   await axios.get(
  //     `${BASE_URL}/?q=${query}&page=${pageNumber}&key=${apiKey}&image_type=photo&orientation=horizontal&per_page=${perPage}`,
  //   );
  // }

  render() {
    const { data } = this.state;
    // const onSearch = this.searchImage();
    return (
      <>
        <Searchbar />
        <ImageGallery galleryImage={data} />
        {/*
        <Loader />
        <Button />
        <Modal></Modal> */}
      </>
    );
  }
}

export default App;
