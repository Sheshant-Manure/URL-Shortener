import React from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styles from './URLShortener.module.css';

const URLShortener = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:8080/url', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ url: document.getElementById('inputURL').value }),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const responseData = await response.json();
      // Use responseData as needed
      console.log(responseData);
      // Display a success toast notification
      toast.success('Short URL generated successfully');
    } catch (error) {
      console.error('Error during URL generation:', error);

      // Display an error toast notification
      toast.error('Error generating short URL. Please try again.');
    }
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit}>
        <input type='text' id='inputURL' placeholder='Paste/Type URL here' />
        <button type='submit'>Generate Short URL</button>
      </form>
    </div>
  );
};

export default URLShortener;
