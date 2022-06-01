import React from 'react'
import MailchimpSubscribe from "react-mailchimp-subscribe";
import CustomForm from './CustomForm';

export default function MailchimpFormContainer() {
    // const postUrl = `https://noodler.us13.list-manage.com/subscribe/post?u=${process.env.REACT_APP_MAILCHIMP_U}&id=${process.env.REACT_APP_MAILCHIMP_ID}`;
    const postUrl = `https://noodler.us13.list-manage.com/subscribe/post?u=1c36953b1c9c9e0433173382e&id="13a2da520a"`;
    return (
        <div className="mc__form-container">
            <MailchimpSubscribe
                url={postUrl}
                render={({ subscribe, status, message }) => (
                    <CustomForm
                        status={status} 
                        message={message}
                        onValidated={formData => subscribe(formData)}
                    />
                )}
            />
        </div>

  )
}
