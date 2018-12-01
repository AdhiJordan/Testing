import fm from 'front-matter';
import marked from 'marked';
import React from 'react';
import BlogAuthor from '../components/BlogAuthor';
import BlogHeader from '../components/BlogHeader';
import FreeLeads from '../components/buttons/FreeLeads';
import TopNav from "../components/TopNav";
import Helmet from 'react-helmet';

class BlogDetail extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            blog: null,
            blogContent: ""
        };
    }

    componentDidMount() {
     
        try {
            const blogPath = require("./../blogs/" + this.props.match.params.blogId + ".md");
           
            fetch(blogPath)
                .then(response => { return response.text(); })
                .then(text => {
                    this.setState({
                        blog: fm(text),
                        blogContent: marked(fm(text).body)
                    });
                });

        } catch (e) {
            console.log(e);
        }

        window.scrollTo(0, 0);
    }

    render() {
        return (
            <div>
                {
                    this.state.blog &&
                    <div>
                        <TopNav />
                        <Helmet>
                            <meta charSet="utf-8" />
                            <title>{this.state.blog.attributes.metaTitle}</title>
                            <meta name="description" content={this.state.blog.attributes.metaDescription} />
                            <meta name="keywords" content={this.state.blog.attributes.metaKeywords} />
                        </Helmet>


                        <BlogHeader
                            title={this.state.blog.attributes.title}
                            description={this.state.blog.attributes.description}
                            author="Doug Dzina"
                            date={this.state.blog.attributes.publishDate}
                            category="Prospecting"
                            imageUrl={this.state.blog.attributes.coverImage}
                        />

                        <div className="blog-container">
                            <div className="container">
                                <div className="card">
                                    <div className="card-body card-blog" dangerouslySetInnerHTML={{ __html: this.state.blogContent }} />
                                </div>

                                <section className="text-center">
                                    <p>Start prospecting better! Get 100 free leads on us.</p>
                                    <FreeLeads size="lg" />
                                </section>

                                <BlogAuthor
                                    author={this.state.blog.attributes.author}
                                    profile={this.state.blog.attributes.authorProfile}
                                    imageUrl={this.state.blog.attributes.authorImage}
                                />
                            </div>
                        </div>
                    </div>
                }
            </div>
        );
    }
}

export default BlogDetail;