import React from 'react';
import './styles/botCollection.css'

function BotCollection({ bots, onEnlist }) {
  return (
    <div className="bot-collection">
      
        <div className='cards'>
        {bots.map((bot) => (
            <div className='card-wrapper'  key={bot.id} onClick={() => onEnlist(bot)}>
              <div className="bot-card" >
                <img className='avatar' src={bot.avatar_url} alt={bot.name} onClick={() => onEnlist(bot)}/>
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

export default BotCollection;