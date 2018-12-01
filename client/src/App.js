import React from 'react';
import { Route  } from 'react-router';
import { BrowserRouter, Switch } from 'react-router-dom';
import LayoutFooter from './components/LayoutFooter';
import TopNav from './components/TopNav';
import AccountBasedProspector from './pages/AccountBasedProspector';
import BlogDetail from './pages/BlogDetail';
import BlogList from './pages/BlogList';
import CampaignBuilder from './pages/CampaignBuilder';
import Category from './pages/Category';
import Customers from './pages/Customers';
import FrequentlyAskedQuestion from './pages/FrequentlyAskedQuestion.js';
import GetLeads from './pages/GetLeads';
import Home from './pages/Home';
import LeadsUniversityOne from './pages/LeadsUniversityOne';
import LeadsUniversityThree from './pages/LeadsUniversityThree';
import LeadsUniversityTwo from './pages/LeadsUniversityTwo';
import Podcast from './pages/Podcast';
import PodcastDetail from './pages/PodcastDetail';
import Pricing from './pages/Pricing';
import PrivacyPolicy from './pages/PrivacyPolicy';
import ProspectAnywhere from './pages/ProspectAnywhere';
import PublicSalesAnnouncements from './pages/PublicSalesAnnouncements';
import RateMyPitch from './pages/RateMyPitch';
import Resources from './pages/Resources';
import TermsOfUse from './pages/TermsOfUse';
import TripActions from './pages/TripActions';
import University from './pages/University';
import Videolicious from './pages/Videolicious';
import Videos from './pages/Videos';
import Webinar from './pages/Webinar';



class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <LayoutFooter>
                    <Switch>
                        <Route exact path='/' component={() => (<div><TopNav /><Home /></div>)} />
                        <Route exact path='/customers' component={() => (<div><TopNav /><Customers /></div>)} />
                        <Route exact path='/pricing' component={() => (<div><TopNav /><Pricing /></div>)} />
                        <Route exact path='/resources' component={() => (<div><TopNav /><Resources /></div>)} />

                        <Route exact path='/blog' component={() => <div><TopNav /><BlogList /></div>} />
                        <Route exact path='/blog/:blogId' component={BlogDetail} />

                        <Route exact path='/:year/:month/:blogId' component={BlogDetail} />

                        <Route exact path='/podcasts' component={() => (<div><TopNav /><Podcast /></div>)} />
                        <Route exact path='/podcasts/:podcastId' component={PodcastDetail} />

                        <Route path='/video' component={() => (<div><TopNav /><Videos /></div>)} />
                        <Route path='/video/:videoId'component={() => (<div><TopNav /><Videos /></div>)} />

                        <Route path='/webinars' component={() => (<div><TopNav /><Webinar /></div>)} />
                        <Route path='/webinars/:webinarId' component={() => (<div><TopNav /><Webinar /></div>)} />

                        <Route exact path='/prospect-anywhere' component={() => (<div><TopNav /><ProspectAnywhere /></div>)} />
                        <Route exact path='/account-based-prospector' component={() => (<div><TopNav /><AccountBasedProspector /></div>)} />
                        <Route exact path='/public-sales-announcements' component={() => (<div><TopNav /><PublicSalesAnnouncements /></div>)} />
                        <Route exact path='/rate-my-pitch' component={() => (<div><TopNav /><RateMyPitch /></div>)} />
                        <Route exact path='/tripactions-case-study' component={() => (<div><TopNav /><TripActions /></div>)} />
                        <Route exact path='/campaign-builder' component={() => (<div><TopNav /><CampaignBuilder /></div>)} />
                        <Route exact path='/videolicious-case-study' component={() => (<div><TopNav /><Videolicious /></div>)} />
                        <Route exact path='/vp-of-sales' component={() => (<div><TopNav /><CampaignBuilder /></div>)} />
                        <Route exact path='/sales-operations' component={() => (<div><TopNav /><CampaignBuilder /></div>)} />
                        <Route exact path='/sales-development-reps' component={() => (<div><TopNav /><CampaignBuilder /></div>)} />
                        <Route exact path='/account-executives' component={() => (<div><TopNav /><CampaignBuilder /></div>)} />
                        <Route exact path='/category' component={Category} />
                        <Route exact path='/university' component={University} />
                        <Route exact path='/get-100-free-leads' component={GetLeads} />
                        <Route exact path='/leadiq-university-one' component={LeadsUniversityOne} />
                        <Route exact path='/leadiq-university-two' component={LeadsUniversityTwo} />
                        <Route exact path='/leadiq-university-three' component={LeadsUniversityThree} />

                        <Route exact path='/faq' component={() => (<div><TopNav /><FrequentlyAskedQuestion /></div>)} />
                        <Route exact path='/privacy-policy' component={() => (<div><TopNav /><PrivacyPolicy /></div>)} />
                        <Route exact path='/terms-of-use' component={() => (<div><TopNav /><TermsOfUse /></div>)} />
                    </Switch>
                </LayoutFooter>
            </BrowserRouter>
        );
    }
}

export default App;