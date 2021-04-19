import { Component } from 'react';
import { toast } from 'react-toastify';
import s from './Search.module.css';

export default class Search extends Component {
  state = {
    value: '',
  };

  handleChange = event => {
    this.setState({ value: event.currentTarget.value.toLowerCase() });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { value } = this.state;

    if (value.trim() === '') {
      toast('Поле не должно быть пустым');
      return;
    }

    this.props.onSubmit(value);
    this.setState({ value: '' });
  };

  render() {
    const { value } = this.state;
    return (
      <div className={s.searchBar}>
        <form onSubmit={this.handleSubmit} className={s.searchForm}>
          <input
            className={s.searchFormInput}
            type="text"
            name="query"
            value={value}
            onChange={this.handleChange}
            autoComplete="off"
            autoFocus
          />
          <button type="submit" className={s.searchFormButton}>
            Search
          </button>
        </form>
      </div>
    );
  }
}