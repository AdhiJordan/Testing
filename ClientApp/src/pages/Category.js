import React from 'react';
import categories from "./../data/categories.json";
import { Link } from "react-router-dom";

class Category extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            categoryData: categories,
            browserVersion: ""
        };
    }

    componentDidMount() {
        window.scrollTo(0, 0)
        if (window === window.top) {
            window.location = "https://account.leadiq.com/app/university/";
        }
        navigator.sayswho = (function () {
            var ua = navigator.userAgent, tem,
                M = ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
            if (/trident/i.test(M[1])) {
                tem = /\brv[ :]+(\d+)/g.exec(ua) || [];
                return 'IE ' + (tem[1] || '');
            }
            if (M[1] === 'Chrome') {
                tem = ua.match(/\b(OPR|Edge)\/(\d+)/);
                if (tem !== null) return tem.slice(1).join(' ').replace('OPR', 'Opera');
            }
            M = M[2] ? [M[1], M[2]] : [navigator.appName, navigator.appVersion, '-?'];
            if ((tem = ua.match(/version\/(\d+)/i)) !== null) M.splice(1, 1, tem[1]);
            return M.join(' ');
        })();

        this.setState({
            browserVersion: navigator.sayswho
        });
    }

    render() {
        return (
            <div>
                <div className={(this.state.browserVersion === "IE 11" || this.state.browserVersion === "IE 10" ||
                    this.state.browserVersion === "IE 9") ? "" : "cover"}>
                    <div className="d-none d-md-block">
                        <img src="/img/category-cover.png" className="img-fluied" alt="Category-cover" />
                        <img src="/img/logo-university-white.png" className="leadIqIcon" alt="univeristy-logo" />
                    </div>
                </div>
                <div className="container mt-4 mb-4">
                    {
                        this.state.categoryData.map((category) => {
                            return (
                                <div className="row mt-3">
                                    <div className=" col-md-3 col-ls-3 col-xl-3 mb-3">
                                        <img src={category.imageUrl} alt={category.title} className="img-fluied" />
                                    </div>
                                    <div className="col-md-6 col-ls-6 col-xl-6">
                                        <h3 className="justify-content-left d-flex"><mark className="highlightText">{category.title}</mark></h3>
                                        <label className="contentText">{category.description}</label>
                                        <a className="mt-5" href={category.linkUrl}>{category.linkName}</a>
                                    </div>
                                    <div className="col-md-2 col-ls-2 col-xl-2 mb-3" />
                                </div>
                            );
                        })
                    }                                 
                </div>
            </div>
        );
    }
}

export default Category;