import "./styles.css";
import Facebook from "./components/facebook/facebook.component";
import LinkedIn from "./components/linkedIn.component";
import Twitter from "./components/linkedIn.component";
import { useState } from "react";

export default function App() {
  const [isFacebookSelected, setIsFacebookSelected] = useState(false);
  const [isTwitterSelected, setIsTwitterSelected] = useState(false);
  const [isLinkedInSelected, setIsLinkedInSelected] = useState(false);

  const handleClickFacebook = () => {
    if (isFacebookSelected) {
      setIsFacebookSelected(false);
    } else {
      setIsFacebookSelected(true);
    }
  };

  const handleClickTwitter = () => {
    if (isTwitterSelected) {
      setIsTwitterSelected(false);
    } else {
      setIsTwitterSelected(true);
    }
  };

  const handleClickLinkedIn = () => {
    if (isLinkedInSelected) {
      setIsLinkedInSelected(false);
    } else {
      setIsLinkedInSelected(true);
    }
  };

  return (
    <div className="App">
      <h1 onClick={handleClickFacebook}>Hello Isaac</h1>
      <Facebook handleOnClick={handleClickFacebook} />
      <p>
        {isFacebookSelected && (
          <iframe
            title="facebook"
            src="https://www.youtube.com/watch?v=2OJ0MCIsZhM"
          ></iframe>
        )}
      </p>
      <Twitter handleOnClick={handleClickTwitter} />
      <p>
        {isTwitterSelected && (
          <iframe
            title="facebook"
            src="https://www.youtube.com/watch?v=luigDc253mg"
          ></iframe>
        )}
      </p>
      <LinkedIn handleOnClick={handleClickLinkedIn} />
      <p>
        {isLinkedInSelected && (
          <iframe
            title="facebook"
            src="https://www.youtube.com/watch?v=KGVh9P7mLUk"
          ></iframe>
        )}
      </p>
    </div>
  );
}
