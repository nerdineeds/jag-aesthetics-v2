import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="border border-red-500 max-w-6xl mx-auto">
      <div className="bg-white px-6 py-32 lg:px-8">
        <div className="mx-auto max-w-3xl text-base leading-7 text-gray-700">
          <p className="text-base font-semibold leading-7 text-indigo-600">
            Last Updated: 10/1/2024
          </p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Privacy Policy
          </h1>
          <p className="mt-6 text-xl leading-8">
            At JAG Aesthetic Digital (&quot;Company,&quot;
            &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;), we
            are committed to protecting your personal information and
            your right to privacy. This Privacy Policy explains what
            information we collect, how we use it, and what rights you
            have in relation to it.
          </p>
          <p className="mt-6 text-xl leading-8">
            By using our website, you consent to the collection, use,
            and disclosure of your personal information as described
            in this Privacy Policy. If you do not agree with our
            policies and practices, please do not use our website.
          </p>
          <div className="mt-10">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">
              1. Information We Collect
            </h2>
            <p className="mt-4">
              We may collect the following types of information:
            </p>
            <ul className="mt-8 space-y-8 text-gray-600">
              <li className="flex gap-x-3">
                <span>
                  <strong className="font-semibold text-gray-900">
                    Personal Information.
                  </strong>{' '}
                  This includes your name, email address, phone
                  number, and any other information you provide when
                  you contact us, sign up for a newsletter, or fill
                  out a form on our website.
                </span>
              </li>
              <li className="flex gap-x-3">
                <span>
                  <strong className="font-semibold text-gray-900">
                    Usage Data.
                  </strong>{' '}
                  Information about how you interact with our website,
                  including your IP address, browser type, device
                  type, operating system, and the pages you view on
                  our site.
                </span>
              </li>
              <li className="flex gap-x-3">
                <span>
                  <strong className="font-semibold text-gray-900">
                    Cookies and Tracking Data.
                  </strong>{' '}
                  We may use cookies, web beacons, and similar
                  tracking technologies to track the activity on our
                  website and store certain information.
                </span>
              </li>
            </ul>

            <h2 className="text-2xl font-bold tracking-tight text-gray-900 mt-10">
              2. How We Use Your Information
            </h2>
            <p className="mt-4">
              We use the information we collect for the following
              purposes:
            </p>
            <ul className="mt-8 space-y-8 text-gray-600">
              <li className="flex gap-x-3">
                <span>
                  <strong className="font-semibold text-gray-900">
                    To operate and maintain our webste.
                  </strong>{' '}
                  We use your data to ensure the website functions
                  properly.
                </span>
              </li>
              <li className="flex gap-x-3">
                <span>
                  <strong className="font-semibold text-gray-900">
                    To improve user experience.
                  </strong>{' '}
                  We analyze your usage data to optimize the website.
                </span>
              </li>
              <li className="flex gap-x-3">
                <span>
                  <strong className="font-semibold text-gray-900">
                    To respond to inquiries and provide customer
                    support.
                  </strong>{' '}
                  We use your personal data to respond to your
                  questions and concerns.
                </span>
              </li>
              <li className="flex gap-x-3">
                <span>
                  <strong className="font-semibold text-gray-900">
                    To send promotional communications.
                  </strong>{' '}
                  If you have opted in, we may send you newsletters or
                  other marketing communications.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
