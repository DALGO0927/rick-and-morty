import React from 'react';
import Card from '../Card/Card';
import styles from '../Cards/Cards.module.css'

const Cards = (props) => {
  const { characters, onClose } = props;
  return (
    <div className="cards_section">
      <h2 className="card_title">Listado de personajes</h2>
      <div className={styles.card_container}>
        {characters.map((character, index) => (
          <Card
            key={index}
            id={character.id}
            name={character.name}
            species={character.species}
            gender={character.gender}
            image={character.image}
            status={character.status}
            origin={character.origin}
            onClose={() => onClose(character.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default Cards;

