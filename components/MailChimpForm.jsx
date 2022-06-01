import React, {useState} from 'react'
import Script from 'next/script'

export default function MailChimpForm() {
    const [firstName, setFirstName] = useState('')
    const [email, setEmail] = useState('')
  return (
    <>
    <div id="mc_embed_signup">
<form action="https://noodler.us13.list-manage.com/subscribe/post?u=1c36953b1c9c9e0433173382e&amp;id=13a2da520a" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank" noValidate>
    <div id="mc_embed_signup_scroll">
	<h2>Stay Up To Date With Noodler.io Developments</h2>
<div className="indicates-required"><span className="asterisk">*</span> indicates required</div>
<div className="mc-field-group">
	<label htmlFor="mce-FNAME">First Name  <span className="asterisk">*</span>
</label>
	<input type="text" value={firstName} name="FNAME" className="required" id="mce-FNAME" onChange={e => setFirstName(e.target.value)}/>
</div>
<div className="mc-field-group">
	<label htmlFor="mce-EMAIL">Email Address  <span className="asterisk">*</span>
</label>
	<input type="email" value={email} name="EMAIL" className="required email" id="mce-EMAIL" onChange={e => setEmail(e.target.value)} />
</div>
	<div id="mce-responses" className="clear foot">
		<div className="response" id="mce-error-response" ></div>
		<div className="response" id="mce-success-response" ></div>
	</div>  
    <div style={{position: 'absolute', left: '-5000px'}} aria-hidden="true"><input type="text" name="b_1c36953b1c9c9e0433173382e_13a2da520a" tabIndex="-1" value="" /></div>
        <div className="optionalParent">
            <div className="clear foot">
                <input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" className="button" />
                {/* <p className="brandingLogo"><a href="http://eepurl.com/h3ry0T" title="Mailchimp - email marketing made easy and fun"><img src="https://eep.io/mc-cdn-images/template_images/branding_logo_text_dark_dtp.svg" /></a></p> */}
            </div>
        </div>
    </div>
</form>
</div>
<Script type='text/javascript' src='//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js'></Script><script type='text/javascript'>{`(function($) {window.fnames = new Array(); window.ftypes = new Array();fnames[1]='FNAME';ftypes[1]='text';fnames[0]='EMAIL';ftypes[0]='email';}(jQuery));var $mcj = jQuery.noConflict(true);`}</script>
    </>
  )
}
