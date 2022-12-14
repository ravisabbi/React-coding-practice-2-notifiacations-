const Notification = (props) => {
  //  Write your code here.
  const { className, src, cardText } = props;
  return (
    <div className={`div ${className}`}>
      <img className="logo" src={src} />
      <p className="discription">{cardText}</p>
    </div>
  );
};

const element = (
  //  Write your code here.
  <div>
    <h1 class="heading">Notifications</h1>
    <div className="notifications-container">
      <Notification
        className="msg-card1"
        src="https://assets.ccbp.in/frontend/react-js/primary-icon-img.png"
        cardText="Information Message"
      />
      <Notification
        className="msg-card2"
        src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
        cardText="Success Message"
      />
      <Notification
        className="msg-card3"
        src="https://assets.ccbp.in/frontend/react-js/warning-icon-img.png"
        cardText="Warning Message"
      />
      <Notification
        className="msg-card4"
        src="https://assets.ccbp.in/frontend/react-js/danger-icon-img.png"
        cardText="Danger Message"
      />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
