const ActionButtons = ({ handleReset, handleDownload }) => (
  <>
    <button className="download" onClick={handleDownload}>
      download
    </button>
    <button className="reset" onClick={handleReset}>
      reset
    </button>
  </>
);

export default ActionButtons;
