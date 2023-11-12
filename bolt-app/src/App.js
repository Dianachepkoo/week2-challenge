import React, { useState, useEffect } from 'react';
import BotCollection from './BotCollection';
import YourBotArmy from './YourBotArmy';

function App() {
  const [bots, setBots] = useState([]);
  const [enlistedBots, setEnlistedBots] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/bots')
      .then((response) => response.json())
      .then((data) => setBots(data));
  }, []);

  const enlistBot = (bot) => {
    if (!enlistedBots.some((enlistedBot) => enlistedBot.id === bot.id)) {
      console.log('bot');
      setEnlistedBots([...enlistedBots, bot]);
    }
  };

  const releaseBot = (botId) => {
    setEnlistedBots(enlistedBots.filter((bot) => bot.id !== botId));
  };

  const dischargeBot = (botId) => {
    // Remove from frontend
    setEnlistedBots(enlistedBots.filter((bot) => bot.id !== botId));

    // Remove from the server
    fetch(`http://localhost:8001/bots/${botId}`, {
      method: 'DELETE',
    });
  };

  return (
    <div className="container">
      <h1>Welcome to Bot Battlr</h1>
      <YourBotArmy army={enlistedBots} onRelease={releaseBot} onDischarge={dischargeBot} />
      <BotCollection bots={bots} onEnlist={enlistBot} />
    </div>

  );
}

export default App;

