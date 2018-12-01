import React from 'react';

class BlogHeader extends React.Component {

    render() {
        return (
            <div>
                <div className="blog-cover">
                    <div className="container">
                        <section>
                            <div className="text-center">
                                <h1>{this.props.title}</h1>
                            </div>
                            <div className="mt-3 mb-3">
                                <hr />
                            </div>
                            <div className="row mt-5">
                                <div className={this.props.imageUrl ? "col-md-6" : "col-md-12"}>
                                    {this.props.description}
                                </div>

                                {
                                    this.props.imageUrl &&
                                    <div className="col-md-6">
                                        <img className="img-fluid" src={this.props.imageUrl} alt={this.props.title} />
                                    </div>
                                }

                            </div>
                        </section>
                    </div>
                </div>
            </div>
        );
    }
}

export default BlogHeader;