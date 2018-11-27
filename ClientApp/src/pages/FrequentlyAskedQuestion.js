import React from 'react';
import question from "./../data/frequently-asked-questions.json";
import GetStarted from '../components/buttons/GetStarted';

class FrequentlyAskedQuestion extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            questions: question,
            index: 0
        };
    }

    componentDidMount() {
        window.scrollTo(0, 0)
    }

    toggleText(key) {
        this.setState({
            index: key
        })
    }

    render() {
        return (
            <div>
                <div className="faqCover">
                    <div className="container prospectHeaderTitle">
                        <section className="pt-5 gettingStarted">
                            <h1 className="text-white text-center  mb-4 fa-2x prospectText"><b>FAQ</b></h1>
                            <h4 className="text-white text-center chromeText mb-4">Frequently Asked Questions</h4>
                            <div className="justify-content-center d-flex">
                                <GetStarted size="lg"  />
                            </div>
                        </section>
                    </div>
                </div>
                <div className="faq-waveDesign">
                    <img src="/img/wave-bg.png" className="img-fluied faq-waveDesignProspect" alt="wave" />
                </div>
                <div className="blog-container">
                    <div className="container">
                        <div className="card">
                            <div className="card-body card-faq">
                                    <div className="row">
                                        {this.state.questions.map((question, idx) => {
                                        return (
                                            <div className="col-md-12 col-lg-12" key={idx}>
                                                    <span className={(this.state.index === idx) ? "hideDisplay" : "showDisplay"} onClick={this.toggleText.bind(this, idx)}></span>
                                                    <h3 className={(this.state.index === idx) ? "showTitle" : "defaultTitle"} onClick={this.toggleText.bind(this, idx)}>{question.question}</h3>
                                                    <p className={(this.state.index === idx) ? "show" : "hide"}>{question.content}</p>
                                                    <p className={(this.state.index === idx) ? "show" : "hide"}>{question.contentOne}</p>
                                                    <p className={(this.state.index === idx) ? "show" : "hide"}>{question.contentTwo}</p>
                                                </div>
                                            )
                                        })}
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default FrequentlyAskedQuestion;