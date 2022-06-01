import React, {useState} from 'react'

export default function CustomForm({ status, message, onValidated }) {
    const [email, setEmail] = useState('');
    const [firstName, setFirstName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        email &&
        firstName &&
        email.indexOf("@") > -1 &&
        onValidated({
            MERGE0: email,
            MERGE1: firstName,
        });
    }
  
    return (
        <>
        {message && <h3>{message}</h3>}
        {status && <h3>{status}</h3>}
        <form onSubmit={handleSubmit} className="mc__form">
        <h3 className="mc__title">Join our email list for future updates.</h3>
        <div className="mc__field-container">
          <input
            label="First Name"
            onChange={(e) => setFirstName(e.target.value)}
            type="text"
            value={firstName}
            placeholder="Your Name"
          />

          <input
            label="Email"
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            value={email}
            placeholder="your@email.com"
          />

        </div>

        <input
          label="subscribe"
          type="submit"
          formValues={[email, firstName]}
        />
      </form>
      </>
  )
}
