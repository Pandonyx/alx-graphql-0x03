import React, { useState } from 'react';

const ErrorProneComponent: React.FC = () => {
  const [shouldError, setShouldError] = useState(false);

  if (shouldError) {
    throw new Error('Test error from ErrorProneComponent');
  }

  return (
    <div>
      <button onClick={() => setShouldError(true)}>
        Trigger Error
      </button>
    </div>
  );
};

export default ErrorProneComponent;