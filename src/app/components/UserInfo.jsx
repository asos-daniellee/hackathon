import React from "react";

export const UserInfo = ({ name, jobTitle, email, level, lineManager, career }) => (
  <div className="user-info">
    <div className="personal">
      <img
        src="https://picsum.photos/120/120?random"
        alt={`Picture of ${name}`}
      />
      <h1>{name}</h1>
      <p className="email">{email}</p>
    </div>
    <div>
      <h2>ROLE</h2>
      <p>{career}</p>
      <h2>LEVEL</h2>
      <p>{jobTitle}</p>
      <h2>LINE MANAGER</h2>
      <p>{lineManager}</p>
    </div>
    <div>
      <button className="feedback">ASK FOR FEEDBACK</button>
    </div>

    <div>
      <br/>
    <img className="badges" src="/Badges.jpeg" /> 
    </div>

    <div>
      <h2 className="useful">USEFUL LINKS</h2>
      <br />
      <p>
        <a className="links" href="https://asos.academy" target="_blank">
          ASOS Academy
        </a>
      </p>
      <br />
      <p>
        <a
          className="links"
          href="https://wd3.myworkday.com/asos/d/home.htmld"
          target="_blank"
        >
          Workday
        </a>
      </p>
      <br />
      <p>
        <a
          className="links"
          href="https://www.pluralsight.com/"
          target="_blank"
        >
          Pluralsight
        </a>
      </p>
      <br />
      <p>
        <a className="links" href="https://slack.com/" target="_blank">
          Slack
        </a>
      </p>
      <br />
      <p>
        <a
          className="links"
          href="https://asos.interactgo.com/Interact/Pages/Content/Document.aspx?id=3547"
          target="_blank"
        >
          Privacy Policy
        </a>
      </p>
      <br />
      <br/>
      <p>Version 1.0</p>
    </div>
  </div>
);
