import React, { Component } from 'react';
import { Link } from "react-router-dom";

export default class BlogReferenceCard extends Component {
    render() {
        return (
            <div key={this.props.blog.title}>
                <div className="row">
                    <div className="col-md-2 col-lg-2" />
                    <div className="col-md-8 col-lg-8 blogSection mb-5">
                        <h5 className="icon-dark mb-3"><a href=""><font color="black">{this.props.blog.title}</font></a></h5>
                        <div className="row">
                            <div className="col-md-5 col-lg-5 mt-3">
                                <img src={this.props.blog.imageUrl} alt={this.props.blog.title} className="img-fluied" />
                            </div>
                            <div className="col-md-7 col-lg-7 mt-3 ">
                                <p className="block-ellipsis mb-0 ">{this.props.blog.description}</p>
                                <label><Link to={this.props.blog.navLink}>continue Reading...</Link></label>
                            </div>
                        </div>
                        <div className="container">
                            <div className="leadIqIconDetails mt-5 row ml-2">
                                <div className="col-md-6 col-lg-6 ">
                                    <img src={this.props.blog.leadIqIcon} className="pr-3 img-fluied" alt={this.props.blog.title} />
                                    <label>{this.props.blog.leadIqTitle}</label>
                                </div>
                                <div className="col-md-6 col-lg-6 justify-content-end d-flex iconComment">
                                    <span><img src="/img/comment-icon-university.png" className="img-fluied" alt="university-icon" />&nbsp; 0 &nbsp;</span>&nbsp;&nbsp;
                                    <span><img src="/img/share-icon-university.png" className="img-fluied" alt="university-icon"  /></span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-2 col-lg-2" />
                </div>
            </div>
        )
    }
}