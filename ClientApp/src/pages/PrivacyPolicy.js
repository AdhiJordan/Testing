import React from 'react';
import policies from "./../data/policy.json";
import GetStarted from '../components/buttons/GetStarted';
import PolicyCard from '../components/cards/PolicyCard';

class PrivacyPolicy extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            policy: policies,
            displayPolicy: false,
            width: 0
        };
    }

    componentDidMount() {
        if (window.outerWidth < 1024) {
            this.setState({
                width: window.outerWidth,
                displayPolicy: true
            })
        } else {
            this.setState({
                width: window.outerWidth
            })
        }
        window.scrollTo(0, 0);
    }
    
    render() {
        return (
            <div>
                <div>
                    <div className="privacy-Cover">
                        <div className="container prospectHeaderTitle">
                            <section className="pt-5 gettingStarted">
                                <h1 className="text-white text-center  mb-4 fa-2x prospectText"><b>Privacy Policy</b></h1>
                                <h4 className="text-white text-center chromeText mb-4">How we use information we gather and collect from you</h4>
                                <div className="justify-content-center d-flex">
                                    <GetStarted size="lg"  />
                                </div>
                            </section>
                        </div>
                        
                    </div>
                    <div className="faq-waveDesign">
                        <img src="/img/wave-four.png" className="img-fluied faq-waveDesignProspect" alt="wave" />
                    </div>
                </div>

                <div className="blog-container">
                    <div className="container">
                        <div className="card">
                            <div className="card-body card-blog">
                                <p>Last Modified: March 27, 2018</p>
                                <h4><mark className="liq-text-primary">1. Introduction</mark></h4>
                                <p>Thank you for visiting www.leadiq.com (the “Site”), and, if applicable, choosing to use our products and services(collectively the “Platform”). The Site and Platform are owned by LeadIQ, Inc., a US company (referred to herein as “us”, “we”, “ours”, or “LeadIQ ”). We try to make our Privacy Policy easy to understand so that you are informed as to how we use your information. This Privacy Policy, is an integral part of using our Platform and Site; therefore you must completely agree to our Privacy Policy in order to use our Site or Platform. You must be over the age of 18 to use our Site or Platform.</p>
                                <h4><mark className="liq-text-primary">2. Information Collected</mark></h4>
                                <p><u>Personally Identifiable Information Collected Via the Site</u></p>
                                <p>You will not be required to provide us with any information when you visit our Site. However, portions of our Site may require you to submit personally identifiable information to us. During your use of the Site we may collect your name, email, address, telephone number, company name and address, organization information, and other identifying details. Any personally identifiable information you submit via the Site shall be used and disclosed in accordance with this Privacy Policy. We may also collect payment information that you make available to us for your use of the Platform. Please be aware that this payment information shall be stored by third party payment processors.</p>
                                <p><u>Personally Identifiable Information Collected Via the Platform</u></p>
                                <p>When using our Platform we may collect personally identifiable information, including: your name, username, password, login information, and contact information. Any personally identifiable information you submit via the Platform shall be used and disclosed in accordance with this Privacy Policy.</p>
                                <p><u>Non-Identifying Information</u></p>
                                <p>Whenever you use our Site or Platform, we may collect non-identifying information from you, such as your IP address, interactions with the Site and Platform, query information, location information, pricing data, research history, location and GPS information, referring URL, browser, application interaction, mobile provider information, operating system, data usage, data transferred, and Internet Service Provider.</p>
                                <p><u>Collection of Information for LeadIQ Lite Users</u></p>
                                <p>As a user of the Site or Platform, you may be able to sign up for our LeadIQ Lite program. Through LeadIQ Lite we may collect information related to your Google Mail account including email message information, contact list information, business information, email signatures, telephone numbers, company names and addresses, and data and message information. Such information shall continue to be collected until you discontinue your use of the LeadIQ Lite program.</p>
                                <h4><mark className="liq-text-primary">3. Anonymized Data</mark></h4>
                                <p>Please be aware that we me may collect and aggregate personally identifiable information from our Site and Platform and may anonymize that information for our own research or internal purposes. Once such data has been anonymized, it cannot be traced back to you, the user.</p>
                                <h4><mark className="liq-text-primary">4. Use of Your Information</mark></h4>
                                <p>This section explains how we plan on using your information submitted by us. In order to use our Platform or Site, you agree that we may use your personally identifiable information:</p>
                                <div>
                                    <ul className="m-0">
                                        <li>To enhance or improve your user experience.</li>
                                        <li>To share with users of the Site and Platform.</li>
                                        <li>To improve the Site and Platform.</li>
                                        <li>To email you newsletters and marketing as required.</li>
                                        <li>To understand how you communicate and use our Platform or Site.</li>
                                        <li>To contact and correspond with you and to respond to your inquiries.</li>
                                    </ul>
                                </div>
                                <p>Additionally, we may give your information to law enforcement if we are compelled to by a court order, if there has been a violation of any US laws, international laws or if a violation of any other agreements or the Privacy Policy has occurred.</p>
                                <h4><mark className="liq-text-primary">5. Accessing, Editing, and Removing Your Information</mark></h4>
                                <p>If you have submitted information to our Site you will be unable to edit that information. When using our Platform you may be able to access and edit your information via the Platform dashboard. However, you will be unable to opt out of any of our data collection practices via the Site or Platform. If at any time, you have any questions or wish to review, change, or delete any of your information collected by us, please contact us at support@leadiq.com. Additionally, if you would like us to permanently remove any accessible copies of your information, please follow the instructions listed within the “removal of information” section and contact us at support@leadiq.com. After you have cancelled your account please be aware that we may keep inaccessible copies of your information for a commercially reasonable period of time.</p>
                                <h4><mark className="liq-text-primary">6. Removal of Information</mark></h4>
                                <p>If you wish to have any of your personal information stored within the LeadIQ Platform removed, please contact us. With each removal request you must list the information you wish to have removed exactly as listed. Please be aware that removal requests are not processed instantaneously. There may be a reasonable delay in removing any information requested.</p>
                                <p>As Lead IQ collects data from multiple sources a single removal request may not eliminate all of your personal information listed in our database. Therefore, you may be required to submit multiple requests. If your information repeatedly reappears please contact us.</p>
                                <p>You may make a removal request by email at support@leadiq.com, please label the subject of the email with the following “Removal Request – Your Full Name and Account Name”.</p>
                                <h4><mark className="liq-text-primary">7. Cookies and Other Tracking</mark></h4>
                                <p>Our current Site uses cookies to track your preferences, your cart, and to remember your logins. You may disable cookies via your browser settings; however, disabling cookies may result in undesired performance when accessing the Site.</p>
                                <h4><mark className="liq-text-primary">8. Third Party Access to Your Information</mark></h4>
                                <p>Although you are entering into an Agreement with LeadIQ to disclose your information to us, we do use third party individuals and organizations to assist us, including contractors, web hosts, and others to allow you to access the Site and Platform.</p>
                                <p>Throughout the course of our provision of our services to you, we may delegate our authority to collect, access, use, and disseminate your information. It is therefore necessary that you grant the third parties we may use in the course of our business the same rights that you afford us under this Privacy Policy. For this reason, you hereby agree that for every authorization which you grant to us in this Privacy Policy, you also grant to any third party that we may hire, contract, or otherwise retain the services of for the purpose of operating, maintaining, repairing, or otherwise improving or preserving our Platform or its underlying files or systems. You agree not to hold us liable for the actions of any of these third parties, even if we would normally be held vicariously liable for their actions, and that you must take legal action against them directly should they commit any tort or other actionable wrong against you.</p>
                                <h4><mark className="liq-text-primary">9. Law Enforcement</mark></h4>
                                <p>You agree that we may disclose your information to authorities if compelled to by a court order. Additionally, you agree that we may disclose your information if we reasonably believe that you have violated any US laws or the terms of any of our agreements with you or if we believe that a third party is at risk of bodily harm. In the event that we receive a subpoena affecting your privacy, we may elect to notify you to give you an opportunity to file a motion to quash the subpoena, or we may attempt to quash it ourselves, but we are not obligated to do either. We may also proactively report you and release your information without receiving any request to third parties where we believe that it is proper to do so for legal reasons, where your actions violate any laws of the US or any other country having jurisdiction over us, our Site, or the Platform. You release us from any damages that may arise from or relate to the release of your information to a request from law enforcement agencies or private litigants. We may release your information under the conditions listed in this paragraph whether it is to individuals or entities and to any state or national authorities, as required.</p>
                                <h4><mark className="liq-text-primary">10. Commercial, Non-Commercial Communications and Do Not Track</mark></h4>
                                <p>If you decide to provide us with your contact information, you agree that we may send you communications via text and email. However, you may unsubscribe from certain communications by notifying LeadIQ that you no longer wish to receive these communications, we will endeavour to promptly remove you from our notification listings once we have received that request. We currently do not offer website functionality for you to opt out of any “do not track” listings. If you wish to opt out of certain communications or information collection, please contact us at support@leadlq.com.</p>
                                <h4><mark className="liq-text-primary">11. Third Parties</mark></h4>
                                <p>LeadIQ may post links to third party websites on our Site, which may include information that we have no control over. When accessing a third party site through our Site or Platform, you acknowledge that you are aware that these third party websites are not screened for privacy or security issues by us, and you release us from any liability for the conduct of these third party websites.</p>
                                <p>Please be aware that this Privacy Policy, and any other policies in place, in addition to any amendments, does not create rights enforceable by third parties. LeadIQ bears no responsibility for the information collected or used by any advertiser or third party website. You must review their Terms of Service and Privacy to understand how their information collection practices work.</p>
                                <h4><mark className="liq-text-primary">12. Security Measures</mark></h4>
                                <p>We make reasonable attempts to protect your information by using physical and electronic safeguards. For these reasons LeadIQ employs SSL certificates. However, as our Platform and Site are hosted electronically we can make no guarantees as to the security or privacy of your information. For this reason, we recommend that you use anti-virus software, routine credit checks, firewalls, and other precautions to protect yourself from security and privacy threats.</p>
                                <h4><mark className="liq-text-primary">13. Your California Privacy Rights</mark></h4>
                                <p>LeadIQ permits residents of the State of California to use its Platform, and complies with the California Business and Professions Code §§ 22575-22579. If you are a California resident you may request certain information regarding our disclosure of personal information to any third parties for their direct marketing purposes. Various provisions throughout this Privacy Policy address requirements of the Californian privacy statutes. Although we do not disseminate your information to third parties without permission, you must presume that we collect electronic information from all visitors. You may contact us at support@leadlq.com with any questions.</p>
                                <h4><mark className="liq-text-primary">14. Age Compliance</mark></h4>
                                <p>We intend to fully comply with American and international laws respecting children’s privacy. Therefore, we do not collect or process any information for any persons under the age of 18. If you are under 18 please do not access the Platform or Site.</p>
                                <h4><mark className="liq-text-primary">15. International Transfer</mark></h4>
                                <p>Your information may be transferred to – and maintained on – computers located outside of your state, province, country, or other governmental jurisdiction where the privacy laws may not be as protective as those in your jurisdiction. We may transfer personal information to the US or elsewhere and process it there. Your consent to this Privacy Policy followed by your submission of such information represents your agreement to that transfer.</p>
                                <h4><mark className="liq-text-primary">16. Merger and Acquisition</mark></h4>
                                <p>In the event that the LeadIQ is involved in a bankruptcy, merger, acquisition, reorganization or sale of assets, your information may be sold or transferred as part of that transaction. Please be aware that once the information is transferred your privacy rights may change.</p>
                                <h4><mark className="liq-text-primary">17. Amendments</mark></h4>
                                <p>Like our Terms of Service, we may amend this Privacy Policy from time to time. When we amend this Privacy Policy, we will modify the date listed on this Agreement or we may contact you. You must agree to the amendments as a condition of your continued use of our Site and Platform. If you do not agree, you must immediately cease using our Site and Platform and notify us of your refusal to agree by e-mailing us at support@leadlq.com.</p>
                                <h4><mark className="liq-text-primary">18. Privacy Notice for European Citizens</mark></h4>
                                <p>LeadIQ respects the rights of citizens living within the European Economic Community and the rights afforded to them under the General Data Protection Regulation (GDPR), the sections 18-23 are referred to as our Privacy Notice and addresses additional privileges that EEC users may have under our Privacy Policy. The GDPR affords the following rights to EEC citizens and persons residing in EEC territories.</p>
                                {this.state.displayPolicy ? null :
                                    <div className="row">
                                        <div className="col-md-5 col-lg-5">
                                            <p><mark className="liq-text-primary">Legal Rights</mark></p>
                                        </div>
                                        <div className="col-md-7 col-lg-7">
                                            <p><mark className="liq-text-primary">Your Rights Under the GDPR</mark></p>
                                        </div>
                                    </div>
                                }
                                {this.state.policy.map((policy, index) => { return (<PolicyCard policy={policy} width={this.state.width} key={index} />) })}
                                <h4><mark className="liq-text-primary">19. Legitimate Purposes for Collecting Your PII</mark></h4>
                                <p>The following are the specific legitimate purposes that we may use your PII for:</p>
                                <div>
                                    <ul className="m-0">
                                        <li>CONTRACT ADMINISTRATION – We may use your PII to (1) negotiate, execute, renew and/or manage a contract with you; (2) process billing information and payments related thereto; and/or (3) communicate with you in respect of the above (including sending (legal) notifications).</li>
                                        <li>ACCESS AND COMMUNICATIONS TO OUR SOFTWARE AND SERVICES – We may use your PII to (1) set-up and manage the your LeadIQ account; (2) interact with you through our Platform (e.g. software updates, Platform announcements, etc.): and/or (3) manage and respond to your questions (e.g. technical, commercial or administrative) or requests for maintenance and support.</li>
                                        <li>THE USE OF THE PLATFORM – We may use your PII to (1) enable you to enjoy the use of, and easily navigate the Platform; and/or (2) better understand your needs and interests.</li>
                                        <li>SHARING WITH THIRD PARTIES; NON-PAYING CUSTOMERS – We may use your PII to share with our partner company: Amazon Web Services (for cloud computing and storage purposes), Mandrill and Customer.IO (for email delivery purposes), Stripe and Chargebee(for payment processing purposes).</li>
                                        <li>ALLOWING DOWNLOADS FROM THE PLATFORM – We may use your PII to allow you download data or content from the Platform.</li>
                                        <li>TRAINING & IMPROVEMENTS – We may use your PII to (1) train our employees or contractors to allow for a better Platform experience; and/or (2) improve the Platform.</li>
                                        <li>DIRECT MARKETING – We may use your PII to contact you for additional products and services that you may be interested in.</li>
                                    </ul>
                                </div>
                                <h4><mark className="liq-text-primary">20. Retention of PII</mark></h4>
                                <p>LeadIQ will only retain your PII for as long as required. We will keep your personal information:</p>
                                <div>
                                    <ul className="m-0">
                                        <li>For any legally required duration.</li>
                                        <li>Until we no longer have a valid reason to keep or use your PII.</li>
                                        <li>Upon your request to eliminate, delete, or modify any of you PII stored with us.</li>
                                    </ul>
                                </div>
                                <p>Where you have requested modification or deletion of your PII, we may keep just enough of your personal information to ensure that we comply with your requests not use your personal information or comply with your right to erasure. If you require additional details regarding the retention of your PII please contact us.</p>
                                <h4><mark className="liq-text-primary">21. Transfer of PII Outside of the EEC</mark></h4>
                                <p>Where your PII is transferred outside of the EEC, LeadIQ shall ensure that your PII shall have an adequate level of protection and that your information will be accessible as stated under the Privacy Notice.</p>
                                <h4><mark className="liq-text-primary">22. Sharing of Data with Third Parties</mark></h4>
                                <p>Aside from the uses listed within this Privacy Notice, LeadIQ does not share any of your PII with any third parties aside from third parties that are hired by us to assist us in processing your data (Data Processors). All Data Processors have entered into binding agreements with us to ensure that your rights to your PII are respected.</p>
                                <h4><mark className="liq-text-primary">23. Contacting Us</mark></h4>
                                <p>If you are covered under this Privacy Notice and have any additional questions, please contact us at: LeadIQ, support@leadlq.com.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default PrivacyPolicy;