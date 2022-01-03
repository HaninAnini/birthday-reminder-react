import React from 'react';
import {data} from "../data";
import {useState} from "react";
import {FaTrashAlt} from "react-icons/fa"

const Card = () => {
  const [persons, setPersons] = useState(data);

  const onClickDelete = (id) => {
    const newClients = persons.filter(item => item.id !== id);
    setPersons(newClients);
  }

  const onClickClear = () => {
    setPersons([]);
  }

  return (
    <section className='persons-list'>
      <h1>{`${persons.length} birthday today`}</h1>
      {persons.map(item => {
        const {id, name, image, age} = item;
        return (
          <article className={"person"} key={id}>
            <img  className={"person-img"} src={image} alt={`${name} photo`}/>
            <div className={"person-data"}>
              <h3>{name}</h3>
              <p>{`${age}years`}</p>
            </div>
            <button  className={"delete-button"} onClick={() => onClickDelete(id)}><FaTrashAlt/></button>
          </article>
        )
      })}
      <button  className={"clear-button"} onClick={onClickClear}> Clear All</button>
    </section>
  );
};

export default Card;
