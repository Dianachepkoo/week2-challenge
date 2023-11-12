import React from 'react';
import './styles/yourBotArmy.css'

function YourBotArmy({ army, onRelease, onDischarge }) {
  return (
    <div className="your-bot-army">
    <div className='cards'>
      {army.map((bot) => (
        <div className='card-wrapper'  key={bot.id} onClick={() => onRelease(bot.id)} >
        <div className="bot-card" >
          <img className='avatar' src={bot.avatar_url}  alt={bot.name}/>
          <h2>{bot.name}</h2>
           <p>Health: {bot.health}</p>
            {/* Add other bot details here */}
          
        </div>
      </div>
          
        
      ))}
      </div>
    </div>
  );
}

export default YourBotArmy;
