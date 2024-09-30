
const options = {
    // Options for alerts (timeout, position, etc.)
    timeout: 5000, // Close alerts after 5 seconds
    position: 'top right',
    transition: 'fade',
  };
  
  const AlertTemplate = ({ message, style, close }) => (
    <div style={style}>
      {message}
      <button onClick={close}>Close</button>
    </div>
  );
  export default {AlertTemplate,options};