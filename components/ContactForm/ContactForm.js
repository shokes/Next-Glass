import React, { useState } from 'react';
import axios from 'axios';

const ContactForm = () => {
  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    info: { error: false, msg: null },
  });
  const [inputs, setInputs] = useState({
    name: '',
    email: '',
    message: '',
  });
  const handleServerResponse = (ok, msg) => {
    if (ok) {
      setStatus({
        submitted: true,
        submitting: false,
        info: { error: false, msg: msg },
      });
      setInputs({
        name: '',
        email: '',
        message: '',
      });
    } else {
      setStatus({
        info: { error: true, msg: msg },
      });
    }
  };
  const handleOnChange = (e) => {
    e.persist();
    setInputs((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
    setStatus({
      submitted: false,
      submitting: false,
      info: { error: false, msg: null },
    });
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();
    setStatus((prevStatus) => ({ ...prevStatus, submitting: true }));
    axios({
      method: 'POST',

      url: 'https://formspree.io/f/mzbolyzy/',

      data: inputs,
    })
      .then((response) => {
        handleServerResponse(
          true,
          'Thank you, your message has been submitted.'
        );
      })
      .catch((error) => {
        handleServerResponse(false, error.response.data.error);
      });
  };
  return (
    <main className='border border-white card p-6 w-[56rem] h-[30rem] rounded-lg'>
      <form onSubmit={handleOnSubmit} className='flex flex-col text-lg '>
        <label htmlFor='name'>Name</label>
        <input
          id='name'
          type='name'
          name='_replyto'
          onChange={handleOnChange}
          required
          value={inputs.name}
          className='bg-[#e4b8c7] mb-7 px-1 rounded h-8'
        />
        <label htmlFor='email'>Email</label>
        <input
          id='email'
          type='email'
          name='_replyto'
          onChange={handleOnChange}
          required
          value={inputs.email}
          className='bg-[#e4b8c7] mb-7 px-1 rounded h-8'
        />
        <label htmlFor='message'>Message</label>
        <textarea
          id='message'
          name='message'
          onChange={handleOnChange}
          required
          value={inputs.message}
          className='bg-[#e4b8c7] mb-7 px-1 rounded h-[8rem]'
        />
        <button
          type='submit'
          disabled={status.submitting}
          className='bg-[#37292c] text-gray-200 py-1 rounded'
        >
          {!status.submitting
            ? !status.submitted
              ? 'Submit'
              : 'Submitted'
            : 'Submitting...'}
        </button>
      </form>
      {status.info.error && (
        <div className='error'>Error: {status.info.msg}</div>
      )}
      {!status.info.error && status.info.msg && <p>{status.info.msg}</p>}
    </main>
  );
};

export default ContactForm;
