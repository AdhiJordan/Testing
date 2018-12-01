import React from 'react';
import { Link } from "react-router-dom";

class CustomerBlogCard extends React.Component {
    render() {
        return (

            <div className={this.props.blog.mainCls} key={this.props.blog.title}>
                {this.props.blog.blogData.map((blogs, index) => {
                    return (
                        <div className={blogs.addCls} key={index}>
                            <Link to={blogs.navLink}>
                                <div className="blog-card-design" style={{
                                    backgroundImage: `linear-gradient(-180deg, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)) , url(${blogs.bgImage})`,
                                }}>
                                    <div className="customer-card-text">
                                        <h3 className="text-white">{blogs.title}</h3>
                                        <img src={blogs.authorAvatar} style={{ width: "25px" }} className="rounded-circle" alt={blogs.author} />
                                        <p className="text-white">{blogs.author}</p>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    );
                })}
            </div>
        );
    }
}

export default CustomerBlogCard;