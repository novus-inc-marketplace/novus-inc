import React, { useEffect, useState } from 'react';

function Spinner() {
  const [showSpinner, setShowSpinner] = useState(true);

  useEffect(() => {
    // Simulate a loading delay
    const timer = setTimeout(() => {
      setShowSpinner(false);
    }, 1000); // Adjust delay as needed

    return () => clearTimeout(timer);
  }, []);

  if (!showSpinner) return null;

  return (
    <div
      id="spinner"
      className="show bg-dark position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center"
    >
      <div
        className="spinner-grow text-primary"
        style={{ width: '3rem', height: '3rem' }}
        role="status"
      >
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
}

export default Spinner;