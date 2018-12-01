import React from 'react';

class BlogAuthor extends React.Component {

    render() {
        return (
            <div className="container">
                <div className="card">
                    <div className="card-body card-blog">
                        <div className="media">
                            {
                                this.props.imageUrl &&
                                <img className="mr-3 rounded-circle" src={this.props.imageUrl} alt={this.props.author} height="200px" />
                            }
                            <div className="media-body">
                                <h2 className="mt-0">Author: {this.props.author}</h2>
                                {this.props.profile}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default BlogAuthor;