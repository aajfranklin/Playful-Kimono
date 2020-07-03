import React from 'react';

function ConditionalError ({ showError, message }) {
  if (!showError) return null;
  return(<span>{message}</span>)
}

export default ConditionalError;