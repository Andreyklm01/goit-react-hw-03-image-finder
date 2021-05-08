import { Component } from 'react';
import Searchbar from './components/SearchBar/Searchbar';
import ImageGallery from './components/ImageGallery/ImageGallery';
import Loader from 'react-loader-spinner';
import Button from './components/Button/Button';
import Modal from './components/Modal/Modal';
import getImages from './api/api';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

class App extends Component {
  state = {
    data: [],
    pageNumber: 1,
    searchQuery: '',
    isLoading: false,
    showModal: false,
    largeImage: '',
    error: null,
  };

  onChangeQuery = query => {
    this.setState({ searchQuery: query });
  };

  fetchPictures = () => {
    const { pageNumber, searchQuery } = this.state;
    this.setState({ isLoading: true });
    const options = { searchQuery, pageNumber };
    getImages(options)
      .then(hits => {
        this.setState(prevState => ({
          data: [...prevState.data, ...hits],
          pageNumber: prevState.pageNumber + 1,
        }));
      })
      .then(() => {
        window.scrollTo({
          top: document.documentElement.scrollHeight,
          behavior: 'smooth',
        });
      })
      .catch(error => this.setState({ error }))
      .finally(() => this.setState({ isLoading: false }));
  };

  componentDidUpdate(_, prevState) {
    if (prevState.searchQuery !== this.state.searchQuery) {
      this.setState({ data: [] });
      this.fetchPictures();
    }
  }

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };
  onImageClick = url => {
    this.setState({ largeImage: url });
    this.toggleModal();
  };

  render() {
    const { data, isLoading, error, largeImage, showModal } = this.state;
    const visibleLoadMoreBtn = data.length && !isLoading;

    return (
      <div className="App">
        {error && <h1>Something gone wrong :\</h1>}
        {showModal && (
          <Modal largeUrl={largeImage} onClose={this.toggleModal} />
        )}
        <Searchbar onSubmit={this.onChangeQuery} />
        <ImageGallery imagesData={data} onClick={this.onImageClick} />
        {visibleLoadMoreBtn && <Button loadMore={this.fetchPictures} />}
        {isLoading && (
          <Loader
            type="Puff"
            color="#00BFFF"
            height={100}
            width={100}
            timeout={3000}
          />
        )}
      </div>
    );
  }
}

export default App;
