import { Button } from "react-bootstrap";
import React from "react";
import { CardDeck, Card } from "react-bootstrap";
import "./Player.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";


const Player = (props) => {
  const player = props.player;
  
  return (
    <div>
      <CardDeck>
        <Card>
          <Card.Img className="playerImg" variant="top" src={player.image} />
          <Card.Body className="PlayerDetailsDisplay">
            <Card.Title>
              <h2>Player Details</h2>
            </Card.Title>
            <Card.Text>
              <h5>
                <b>Name: </b> {player.name}
              </h5>
              <p>
                <b>Country: </b>
                {player.country}
              </p>
              <p>
                <b>Club: </b>
                {player.club}
              </p>
              <p>
                <b>Role: </b>
                {player.role}
              </p>
              <p>
                <b>Salary: $</b>
                {player.salary}
              </p>
            </Card.Text>
          </Card.Body>
          <Card.Footer className="playerSelectBtn">
            <Button
              onClick={() => props.playerSelected(player)}
              variant="success"
            >
              <FontAwesomeIcon icon={faPlus} /> Select Player
            </Button>
          </Card.Footer>
        </Card>
      </CardDeck>
    </div>
  );
};

export default Player;
