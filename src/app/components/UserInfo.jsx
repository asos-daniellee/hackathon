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
  </div>;