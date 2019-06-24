import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './comment-detail';
import ApprovalCard from './approval-card';

const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <CommentDetail
                    avatar={faker.image.avatar()}
                    author="Sam"
                    timeAgo="Today at 4:45PM"
                    content="Nice image!" />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail
                    avatar={faker.image.avatar()}
                    author="Alex" timeAgo="Today at 2:00AM"
                    content="Good morning!" />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail
                    avatar={faker.image.avatar()}
                    author="Jane"
                    timeAgo="Yesterday at 1:35PM"
                    content="Nice blog post!" />
            </ApprovalCard>

        </div>
    );
};

ReactDOM.render(<App />, document.querySelector("#root"));