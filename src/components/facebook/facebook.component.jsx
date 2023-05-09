import "./facebook.css";

const Facebook = ({ handleOnClick }) => {
  return (
    <div className="facebook-body">
      <p onClick={handleOnClick}>Facebook</p>
    </div>
  );
};

export default Facebook;
