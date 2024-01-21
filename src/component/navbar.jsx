import "./style.css";
import Logo from "../img/NikkiF.png";
import Email from "../img/emailIcon.png";
export function Navbar() {
  return (
    <div className="NavWrapper" style={{ height: "90px" }}>
      {/* <img src={Logo} className="left" /> */}
      <div className="left">NIKKI F</div>
      <div
        onClick={(e) => {
          window.location.href = "mailto:nuttha.fu@outlook.com";
        }}
        className="right">
        <img className="emailIcon" src={Email} alt="email icon" /> HIRE ME
      </div>
      {/* <div className="right">HIRE ME</div> */}
    </div>
  );
}
