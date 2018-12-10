import React from 'react';
import GetStarted from '../components/buttons/GetStarted';
import BlogCards from '../components/cards/BlogCards';
import blogTemplates from './../data/blogs.json';
import { Link } from "react-router-dom";

class BlogList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            blogs: []
        }
    }

    componentDidMount() {
        window.scrollTo(0, 0)
        fetch('http://localhost:9006/api/blogs')
            .then(response => response.json())
            .then(data => this.setState({
                blogs: [...this.state.blogs, ...data]
            }))    
    }


    render() {
        return (
            <div>
                <div>
                    <div className="privacy-Cover">
                        <div className="container prospectHeaderTitle">
                            <section className="pt-5 gettingStarted">
                                <h1 className="text-white text-center  mb-4 fa-2x prospectText"><b>Blog</b></h1>
                                <h4 className="text-white text-center mb-4" style={{ fontWeight: "400" }}>Prospecting doesn’t have to be a challenge. Learn some of the cool things we’ve learned about prospecting.</h4>
                                <div className="justify-content-center d-flex">
                                    <GetStarted size="lg" />
                                </div>
                            </section>
                        </div>
                    </div>
                    <div className="faq-waveDesign">
                        <img src="/img/wave-four.png" className="img-fluied faq-waveDesignProspect" alt="wave" />
                    </div>
                    <div className="blog-container">
                        <div className="container">
                            <div className="card">
                                <div className="card-body card-blog">
                                    <div className="row">
                                    {this.state.blogs.map((blog, index) => {
                                        let blogUrl = blog.attributes.url.substr(blog.attributes.url.lastIndexOf('/')+1);
                                       return (
                                            <div className={(index % 4 === 0 || (index + 1) % 4 === 0) ? "col-md-7 col-lg-7 pt-3 pb-3" : "col-md-5 col-lg-5 pt-3 pb-3"}>
                                                <Link to={"/blog/" + blogUrl.substring(0, blogUrl.indexOf('.'))}>
                                                        <div className="blog-card-design" style={{
                                                                backgroundImage: `linear-gradient(-180deg, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)) , url(${blog.attributes.coverImage})`,
                                                        }}>
                                                            <div className="customer-card-text">
                                                                <h3 className="text-white">{blog.attributes.title}</h3>
                                                                <img src={blog.attributes.authorImage} style={{ width: "25px" }} className="rounded-circle" alt={blog.attributes.author} />
                                                                <p className="text-white">{blog.attributes.author}</p>
                                                            </div>
                                                        </div>
                                                </Link>
                                            </div>
                                        )
                                        })}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default BlogList;