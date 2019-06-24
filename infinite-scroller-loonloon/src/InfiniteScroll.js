import React from "react";

class InfiniteScroll extends React.Component {
  state = {
    data: [],
    per: 3,
    page: 1,
    scrolling: false,
    totalPages: null
  };

  constructor(props) {
    super(props);
    this.unorderedListRef = React.createRef();
    this.scrollListener = window.addEventListener("scroll", e =>
      this.scrollHandler(e)
    );
  }

  loadUser = async () => {
    const { per, page, data } = this.state;
    const url = `https://reqres.in/api/users?per_page=${per}&page=${page}`;
    await fetch(url)
      .then(response => response.json())
      .then(json => {
        this.setState({
          data: [...data, ...json.data],
          scrolling: false,
          totalPages: json.total_pages
        });
      });
  };

  loadMore = () => {
    this.setState(
      prevState => ({
        page: prevState.page + 1,
        scrolling: true
      }),
      this.loadUser
    );
  };

  scrollHandler = e => {
    const lastItemOffset =
      this.unorderedListRef.current.lastChild.offsetTop +
      this.unorderedListRef.current.lastChild.clientHeight;
    const pageOffset = window.pageYOffset + window.innerHeight;

    if (pageOffset > lastItemOffset) {
      this.loadMore();
    }
  };

  componentDidMount() {
    this.loadUser();
  }

  render() {
    if (this.state.data.length === 0) {
      return "Loading...";
    }

    return (
      <div>
        <ul ref={this.unorderedListRef}>
          {this.state.data.map(data => (
            <li key={data.id}>
              <div>
                <img src={data.avatar} alt="" />
              </div>
              <div>{data.first_name}</div>
              <div>{data.last_name}</div>
            </li>
          ))}
        </ul>
        <button onClick={this.loadMore}>Load More</button>
      </div>
    );
  }
}

export default InfiniteScroll;
