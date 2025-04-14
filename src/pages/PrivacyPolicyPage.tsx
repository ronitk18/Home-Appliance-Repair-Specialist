
import React from 'react';
import Header from '@/components/header/Header';
import Footer from '@/components/home/Footer';

const PrivacyPolicyPage = () => {
  return (
    <div className="bg-black text-white min-h-screen">
      <Header />
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8 text-white">Privacy Policy</h1>
        
        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-bold mb-4 text-white">1. Personal data</h2>
            <p className="text-gray-300 mb-4">
              We gather personal details that you freely share with us at the time of registering a complaint through complaint form, 
              subscribe to use our email newsletter, or reach out to us through contact us form. The information that we collect includes but is not limited to the following:
            </p>
            <ul className="list-disc pl-8 text-gray-300 space-y-2">
              <li>First and last name</li>
              <li>Postal address</li>
              <li>Phone number</li>
            </ul>
          </section>
          
          <section>
            <h2 className="text-2xl font-bold mb-4 text-white">2. Public Information</h2>
            <p className="text-gray-300 mb-4">
              Whilst you visit our website, we gather a no-account non-public data such as:
            </p>
            <ul className="list-disc pl-8 text-gray-300 space-y-2">
              <li>Internet Protocol (IP) address</li>
              <li>Web browser used</li>
              <li>Pages visited</li>
              <li>Duration of time spent on pages</li>
              <li>URL of the website where you came from</li>
            </ul>
          </section>
          
          <section>
            <h2 className="text-2xl font-bold mb-4 text-white">3. Cookies Policy</h2>
            <p className="text-gray-300 mb-4">
              Our website is maintained by use of cookies and technology of comparable tracking and monitoring in order to oregulate user's activity on it and store user data. Cookies are tiny files on your device that contain specific information which may consist of a unique distinctive code. You have the ability to give instructions to your browser software to turn down all cookies or to signal when a cookie is being dispatched. However, if we do not allow cookies, you may not have access to some parts of our service.
            </p>
          </section>
          
          <section>
            <h2 className="text-2xl font-bold mb-4 text-white">4. Information Usage</h2>
            <p className="text-gray-300 mb-4">
              Information we gather can be used differently, including:
            </p>
            <ul className="list-disc pl-8 text-gray-300 space-y-2">
              <li>Sending messages to and receiving messages from you. Whenever it is required to reply to your questions and to send promotions. To better our services and for processing and managing transactions as well as your orders. For preserving and Artisan's services.</li>
            </ul>
          </section>
          
          <section>
            <h2 className="text-2xl font-bold mb-4 text-white">5. Privacy Usage</h2>
            <p className="text-gray-300 mb-4">
              Your personal identifiable details won't be sold, exchanged or in any other way let out aside from to reliable third persons that aid us with running the website, business and even offering services. As long as those third parties promise to keep it confidential.
            </p>
            <p className="text-gray-300 mb-4">
              Before we proceed, we would like to notify you that we might disclose your information in cases where such actions would be in compliance with the law, aid in enforcement of the policy of the site, or help in safeguarding our or other people's property, rights, or even personal safety.
            </p>
          </section>
          
          <section>
            <h2 className="text-2xl font-bold mb-4 text-white">6. Security of Data</h2>
            <p className="text-gray-300 mb-4">
              Your personal information is safeguarded through a number of security procedures and policies. However, we would like to advise you that no method of electronic storage or the transmission of information over the Internet is guaranteed to be entirely secure. Personal information security, while it is protected by the use of commercially accepted methods, cannot be guaranteed to be totally secure, yet we still strive to utilize protective measures.
            </p>
          </section>
          
          <section>
            <h2 className="text-2xl font-bold mb-4 text-white">7. Your Responsibilities</h2>
            <p className="text-gray-300 mb-4">
              A user is entitled to the following privileges:
            </p>
            <ul className="list-disc pl-8 text-gray-300 space-y-2">
              <li>Have access to the personal information stored about them</li>
              <li>Correct known errors in their personal information</li>
              <li>Ask for their personal information to be removed</li>
              <li>Disallow the use of their personal information</li>
              <li>Revoke permission given for the use of their personal information</li>
            </ul>
            <p className="text-gray-300 mt-4">
              To be able to exercise any of the stated privileges, kindly send us a message using these contact details:
            </p>
            <p className="text-gray-300 mt-2">Email: lakshaykhandelwal77@mail.com</p>
            <p className="text-gray-300">Contact number: 18002026164</p>
          </section>
          
          <section>
            <h2 className="text-2xl font-bold mb-4 text-white">8. Links to Other Websites</h2>
            <p className="text-gray-300 mb-4">
              Third party websites that are not part of our company may be available through our website. In case you decide to follow a link provided by a third party, that link will direct you to the external website.
            </p>
            <p className="text-gray-300 mb-4">
              We recommend you examine the Privacy Policy of each website you visit. We do not control and accept no liability for the content, privacy policies, or any other practices of third party websites or services.
            </p>
          </section>
          
          <section>
            <h2 className="text-2xl font-bold mb-4 text-white">9. Children's Privacy</h2>
            <p className="text-gray-300 mb-4">
              This site is not directed to individuals under the age of thirteen. We do not knowingly solicit or collect any personally identifiable information from children under thirteen years of age. If we obtain actual knowledge that we have collected personal data from a child who is under the age of 13 without parental verification then we take necessary steps to delete such information from our databases.
            </p>
          </section>
          
          <section>
            <h2 className="text-2xl font-bold mb-4 text-white">10. Changes to This Privacy Policy</h2>
            <p className="text-gray-300 mb-4">
              Once in a while, we may revise our Privacy Policy. We will inform you of any changes by publishing the new Privacy Policy on this particular webpage. We recommend that you check this Privacy Policy from time to time. Changes to these policies will become effective as soon as they are posted on this webpage.
            </p>
            <p className="text-gray-300 mb-4">
              In case of any questions related to this Privacy Policy, feel free to get in touch with us through the details mentioned below:
            </p>
            <p className="text-gray-300">Email: lakshaykhandelwal77@mail.com</p>
            <p className="text-gray-300">Phone: 18002026164</p>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PrivacyPolicyPage;
