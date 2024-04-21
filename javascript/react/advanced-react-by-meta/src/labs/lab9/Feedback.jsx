import "./feedback.css";
import FeedbackForm from "./FeedbackForm.jsx";

function Feedback() {
  const handleSubmit = () => {
    console.log("Form submitted!");
  };

  return (
    <div className="Feedback">
      <FeedbackForm onSubmit={handleSubmit} />
    </div>
  );
}

export default Feedback;
