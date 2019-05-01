import React from 'react';
import SocialCard from './SocialCard';

let user1 = {
  name: "Alice Lopez",
  city: "Lisbon, Portugal",
  profilePicture: "https://i.imgur.com/v3CyTw6.jpg",
  backgroundPicture: "/img/lisbon.jpeg",
  commonFollowers: [
    {name: "Bob Wilson", picture:"https://i.imgur.com/uHcuwTI.jpg"},
    {name: "Charlotte White", picture:"https://i.imgur.com/XLrS8wz.jpg"},
    {name: "David Caron", picture:"https://i.imgur.com/3vp5xvl.jpg"},
    {name: "Eric Schmat", picture:"https://i.imgur.com/ZJvGefX.jpg"},
    {name: "Florian Delatour", picture:"https://i.imgur.com/Pfp0e6a.jpg"},
    {name: "Guilherme Giro", picture:"https://i.imgur.com/wq2fNb9.jpg"},
    {name: "Henry Foster", picture:"https://i.imgur.com/OZF9gTB.jpg"},
    {name: "Ines Stark", picture:"https://i.imgur.com/Xtjk87B.jpg"},
    {name: "Jordan Bull", picture:"https://i.imgur.com/S8dm75z.jpg"},
    {name: "Katrin Key", picture:"https://i.imgur.com/nb5kTGn.jpg"},
    {name: "Laura Dorsch", picture:"https://i.imgur.com/oK9mi1F.jpg"},
    {name: "Marion Budd", picture:"https://i.imgur.com/KiAGSwv.jpg"},
  ]
}

let user2 = {
  name: "Bob Wilson",
  city: "London, England",
  profilePicture: "https://i.imgur.com/uHcuwTI.jpg",
  backgroundPicture: "/img/london.jpeg",
  commonFollowers: [
    {name: "Alice Lopez", picture:"https://i.imgur.com/v3CyTw6.jpg"},
    {name: "David Caron", picture:"https://i.imgur.com/3vp5xvl.jpg"},
    {name: "Eric Schmat", picture:"https://i.imgur.com/ZJvGefX.jpg"},
    {name: "Guilherme Giro", picture:"https://i.imgur.com/wq2fNb9.jpg"},
    {name: "Ines Stark", picture:"https://i.imgur.com/Xtjk87B.jpg"},
    {name: "Jordan Bull", picture:"https://i.imgur.com/S8dm75z.jpg"},
    {name: "Marion Budd", picture:"https://i.imgur.com/KiAGSwv.jpg"},
  ]
}

function App() {
  return (
    <div className="App">
      <h1 className="text-center">SocialCard</h1>

      <div className="social-cards-container">
        <SocialCard user={user1} />
        <SocialCard user={user2} />
      </div>
      
    </div>
  );
}

export default App;
