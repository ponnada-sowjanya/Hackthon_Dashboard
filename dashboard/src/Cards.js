import React from "react";
import { useNavigate } from "react-router-dom";
import "./Cards.css";

const Cards = () => {
  const navigate = useNavigate();

  return (
    <div className="container">
      <main>
        <section className="content">
          {/* Registered Section */}
          <h2>Registered</h2>
          <div className="diagonal-line"></div>
          <div className="cards">
            <Card
              imgSrc="/cloudcomputing.jpg"
              altText="Cloud Computing"
              title="Cloud Computing"
              progress={80}
              navigateTo="/cloud-computing"
            />
            <Card
              imgSrc="/cloudcomputing2.jpg"
              altText="AWS Cloud"
              title="AWS Cloud"
              progress={20}
              navigateTo="/aws-cloud"
            />
            <AddCard navigateTo="/explore-more" />
          </div>

          {/* Attended Section */}
          <h2>Attended</h2>
          <div className="diagonal-line"></div>
          <div className="cards">
            <CardWithFeedback
              imgSrc="/ai.jpg"
              altText="Artificial Intelligence"
              title="Artificial Intelligence"
              status="Completed"
              feedbackUrl="/feedback"
            />
          </div>

          {/* Upcoming Section */}
          <h2>Upcoming</h2>
          <div className="diagonal-line"></div>
          <div className="cards">
            <UpcomingCard
              imgSrc="/blockchain 1.jpg"
              altText="Blockchain Technology"
              title="Blockchain Technology"
              status="Coming Soon..."
            />
            <UpcomingCard
              imgSrc="/ml.jpg"
              altText="Machine Learning"
              title="Machine Learning"
              status="Coming Soon..."

            />
          </div>
        </section>
      </main>
    </div>
  );
};

// Card Component
const Card = ({ imgSrc, altText, title, progress, navigateTo }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (navigateTo) navigate(navigateTo);
  };

  return (
    <div className="card" onClick={handleClick}>
      <img src={imgSrc} alt={altText} />
      <p>{title}</p>
      {progress && (
        <>
          <div className="progress-bar">
            <div className="progress" style={{ width: `${progress}%` }}></div>
          </div>
          <p>
            <b>{progress}% completed</b>
          </p>
        </>
      )}
    </div>
  );
};

// Card with Feedback Button
const CardWithFeedback = ({ imgSrc, altText, title, status, feedbackUrl }) => {
  const navigate = useNavigate();

  const handleFeedbackClick = () => {
    if (feedbackUrl) navigate(feedbackUrl);
  };

  return (
    <div className="card">
      <img src={imgSrc} alt={altText} />
      <p>{title}</p>
      <h5>{status}</h5>
      <button className="feedback-btn" onClick={handleFeedbackClick}>
        Feedback Form
      </button>
    </div>
  );
};

// Upcoming Card
const UpcomingCard = ({ imgSrc, altText, title, status, navigateTo }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (navigateTo) navigate(navigateTo);
  };

  return (
    <div className="card" onClick={handleClick}>
      <img src={imgSrc} alt={altText} />
      <p>{title}</p>
      <h5>{status}</h5>
    </div>
  );
};

// Add Card
const AddCard = ({ navigateTo }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (navigateTo) navigate(navigateTo);
  };

  return (
    <div className="card add" onClick={handleClick}>
      <img
        src="/Pluscircle.jpg"
        alt="Add More"
        style={{ width: "150px", height: "150px" }}
      />
      <button>Explore more...</button>
    </div>
  );
};

export default Cards;
