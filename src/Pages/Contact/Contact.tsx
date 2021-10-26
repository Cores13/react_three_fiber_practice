import React, { useContext } from "react";
import "./Contact.css";
import { GlobalState } from "../../GlobalState";
import { motion, AnimatePresence } from "framer-motion";
import { useForm, ValidationError } from "@formspree/react";

export const Contact = () => {
  const [state, handleSubmit] = useForm("xrgrvpgo");

  const store = useContext(GlobalState);
  const [load, setLoad] = store?.load;

  setTimeout(() => {
    setLoad(true);
  }, 500);
  return (
    <AnimatePresence>
      {load && (
        <motion.div
          className='contact'
          transition={{ duration: 1 }}
          initial={{ y: 500, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 5000, opacity: 0 }}>
          <h1 className='contactTitle'>Contact us</h1>
          <p className='contactDesc'>
            VoxMagna is a marketing agency where you can boost your project and
            get more recognition. We have multiple teams of marketing squads,
            including community managers, copywriters, and graphic designers.
            Our goal is to collaborate with projects and make a marketing plan
            that will significantly help it out. We have investors’ trust and
            are experienced in the marketing field. If you need quality
            marketing with best marketing prices, reach out to us.
          </p>
          <form onSubmit={handleSubmit} className='contactUsForm'>
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
        </motion.div>
      )}
    </AnimatePresence>
  );
};
