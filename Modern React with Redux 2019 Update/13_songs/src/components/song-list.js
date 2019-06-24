import React from "react";
import { connect } from "react-redux";
import { selectSong } from "../actions";

class SongList extends React.Component {
    renderList() {
        return this.props.songs.map((song) => {
            return (
                <div className="item" key={song.title}>
                    <div className="right floated content">
                        <button className="ui button primary" onClick={() => this.props.selectSong(song)}>Select</button>
                    </div>
                    <div className="content">{song.title}</div>
                </div>
            );
        });
    }

    render() {
        return <div className="ui divided list">{this.renderList()}</div>;
    }
}

// get state, the state is departments
const mapStateToProps = state => {
    return { songs: state.songs };
};

// dispatch function will be called automatically with selectSong function in connect
export default connect(mapStateToProps, { selectSong })(SongList);