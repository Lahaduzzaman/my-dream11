import { useEffect, useState } from "react";
import "./App.css";
import PlayerData from "./PlayersData/PlayersData.json";
import "bootstrap/dist/css/bootstrap.min.css";
import SelectedPlayer from "./components/SelectedPlayer/SelectedPlayer";
import Player from "./components/Player/Player";
import PlayerSelect from "./components/PlayerSelect/PlayerSelect";


function App() {
  const [players, setPlayers] = useState([]);
  const [selectPlayer, setSelectPlayer] = useState([]);
  useEffect(() => {
    setPlayers(PlayerData);
  }, []);

  const playerSelected = (player) => {
    if (selectPlayer.indexOf(player) === -1) {
      setSelectPlayer([...selectPlayer, player]);
    }
  };
  return (
    <div className="App">
      <header className="headerContainer">
        <h1>My Dream11</h1>
      </header>
      <div className="playersContainer">
        <div className="players">
          {players.map((player) => (
            <div className="playerDetail">
              <Player
                player={player}
                playerSelected={playerSelected}
                key={player.id}
              ></Player>
            </div>
          ))}
        </div>
        <div className="playerSelectContainer">
          <h3>Total Players: {players.length}</h3>
          <PlayerSelect selectPlayer={selectPlayer}></PlayerSelect>
          <br />
          <h5>Club Player Select:</h5>
          {selectPlayer.map((select) => (
            <div>
              <SelectedPlayer select={select} key={select.id}></SelectedPlayer>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default App;
