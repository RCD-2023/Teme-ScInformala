import { useState, useContext, useEffect } from "react";
import Card from "./shared/Card";
import Button from "./Button";

import FeedbackContext from "../context/FeedbackContext";
//
function FeedbackForm() {
  const [text, setText] = useState("");
  //
  const [btnDisabled, setBtnDisabled] = useState(true);
  //
  const [message, setMessage] = useState("");
  //
  const { addFeedback, feedbackEdit, updateFeedback } =
    useContext(FeedbackContext);
  //
  useEffect(() => {
    if (feedbackEdit.edit === true) {
      setBtnDisabled(false);
      setText(feedbackEdit.item.text);
    }
  }, [feedbackEdit]);
  //
  const handleTextChange = (e) => {
    if (text === "") {
      setBtnDisabled(true);
      setMessage(null);
    } else if (text !== "" && text.trim().length <= 10) {
      setBtnDisabled(true);
      setMessage("textul tre sa fie mai mare de 10 caractere");
    } else {
      setMessage(null);
      setBtnDisabled(false);
    }
    setText(e.target.value);
  };
  //
  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim().length > 10) {
      const newFeedback = {
        text,
      };
      if (feedbackEdit.edit === true) {
        updateFeedback(feedbackEdit.item.id, newFeedback);
      } else {
        addFeedback(newFeedback);
      }

      setText("");
    }
  };
  //
  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>Ce parere ai despre serviciul oferit? </h2>

        <div className='input-group'>
          <input
            onChange={handleTextChange}
            type='text'
            placeholder='scrie un review'
            value={text}
          />
          <Button type='submit'>Send</Button>
        </div>
        {message && <div className='messaage'>{message}</div>}
      </form>
    </Card>
  );
}

export default FeedbackForm;
