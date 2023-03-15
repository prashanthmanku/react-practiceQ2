const element = (
  // Write your code here.
  <div className="congratsCardApp-Bg-Container">
    <h1 className="heading">Congratulations</h1>
    <div className="congratsCard">
      <img src="https://assets.ccbp.in/frontend/react-js/congrats-card-profile-img.png" />
      <h1 className="name">Kiran V</h1>
      <p className="name-description">
        Vishnu institute of Computer Education and Technology, Bhimavaram
      </p>
      <img src="https://assets.ccbp.in/frontend/react-js/congrats-card-watch-img.png" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
