import { Component } from 'preact';
import axios from 'axios';
import './style.scss';

import { Index } from './layouts/default';

export default class MemoryFeed extends Component {
  componentDidMount() {
    const { feedUrl = 'http://localhost:3000/memorial_feed.json?company=akasien'} = this.props;
    axios.get(feedUrl)
      .then((resolve) => {
        if (resolve.data) {
          const response = {...resolve.data};
          this.setState({
            records: response.records,
            meta: response.meta,
          });
        }
      })
      .catch(error => {
        console.error(error);
      })
  }

  render() {
    const { records, meta } = this.state;

    if (!meta || !records) {
      return 'Loading...'
    }

    if (records.length === 0) {
      return <h5>No memories yet</h5>
    }
    return (
      <div>
        {records && records.slice(0,6).map(record => <Index {...record}/>)}
      </div>
    );
  }
}
