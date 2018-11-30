import React from "react";


export const UserInfo = ({ name, jobTitle, email, level, lineManager }) =>
  <div className="user-info">
    <div className="personal">
      <img src="https://picsum.photos/120/120?random" alt={`Picture of ${name}`} />
      <h1>{name}</h1>
      <p className="email">{email}</p>
    </div>
    <div>
      <h2>ROLE</h2>
      <p>{jobTitle}</p>
      <h2>LEVEL</h2>
      <p>{level}</p>
      <h2>LINE MANAGER</h2>
      <p>{lineManager}</p>
    </div>
    <div>
      <button className="feedback">ASK FOR FEEDBACK</button>
    </div>

    <div>
      <h2>USEFUL LINKS</h2>
      <a href='https://asos.academy' target="_blank" >ASOS Academy</a>
      <br/>
      <a href='https://wd3.myworkday.com/asos/d/home.htmld' target="_blank">Workday</a>
      <br/>
      <a href='https://www.pluralsight.com/' target="_blank">Pluralsight</a>
      <br/>
      <a href='https://slack.com/' target="_blank">Slack</a>
      <br/>
      <a href='https://asos.interactgo.com/Interact/Pages/Content/Document.aspx?id=3547' target="_blank">Privacy Policy</a>
      <p>Version 1.0</p>
    </div>
  </div>;