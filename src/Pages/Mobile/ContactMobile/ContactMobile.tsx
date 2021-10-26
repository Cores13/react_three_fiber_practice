import React, { useEffect, useContext } from "react";
import { Footer } from "../Components/Footer/Footer";
import { Navbar } from "../Components/Navbar/Navbar";
import "./ContactMobile.css";
import { useForm, ValidationError } from "@formspree/react";
import { GlobalState } from "../../../GlobalState";

interface Props {}

export const ContactMobile = (props: Props) => {
  const [state, handleSubmit] = useForm("xrgrvpgo");
  const store = useContext(GlobalState);
  const [site, setSite] = store.sites;

  useEffect(() => {
    setSite("contact");
  }, [setSite, site]);
  return (
    <>
      <Navbar />
      <div
        className='MOBILEcontact'
        style={{ paddingBottom: state.succeeded ? "170px" : "55px" }}>
        <div className='MOBILEcontactThumbnail'></div>
        <div className='MOBILEcontactContent'>
          <div className='MOBILEcontactLeft'>
            <h1 className='MOBILEcontactTitle'>Contact us</h1>
            <p className='MOBILEcontactDesc'>
              We welcome exciting new projects with pleasure. If you want more
              recognition, quality marketing and a marketing team, or simply
              need help with managing your communities, feel free to contact us.
            </p>
          </div>
          <div className='MOBILEcontactRight'>
            <form onSubmit={handleSubmit} className='MOBILEcontactUsForm'>
              {state.succeeded ? (
                <>
                  <h1 className='successMsg' style={{ color: "#4BB543" }}>
                    Message sent successfully!
                  </h1>
                </>
              ) : null}
              <label htmlFor='name'>Name:</label>
              <input id='name' type='name' name='name' placeholder='Name' />
              <label htmlFor='organization'>Organization:</label>
              <input
                id='organization'
                type='text'
                name='organization'
                placeholder='Organization'
              />
              <label htmlFor='email'>E-mail:</label>
              <input
                id='email'
                type='email'
                name='email'
                placeholder='example@example.com'
              />
              <ValidationError
                prefix='Email'
                field='email'
                errors={state.errors}
              />
              <label htmlFor='message'>Message:</label>
              <textarea
                id='message'
                name='message'
                placeholder='Your message ...'
              />
              <ValidationError
                prefix='Message'
                field='message'
                errors={state.errors}
              />
              <button
                className='contactUsBtn'
                type='submit'
                disabled={state.submitting}>
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
