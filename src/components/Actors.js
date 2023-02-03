import React, {useEffect, useState} from 'react';
import axios from "axios";
import {useParams} from "react-router-dom";
import './Actors.Module.css'

const Actors = () => {
    const {id} = useParams()
    const [actors, setActors] = useState([]);

    useEffect(() => {
            axios.get(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=${process.env.REACT_APP_MOVIES_API_KEY}`)
                .then(res => {
                    const actors = res.data.cast.slice(0, 5);
                    setActors(actors);
                })
        }
        , [id]);

    return (
        <div className="actors-container">
            <h1 className="actors-title">Actors</h1>
            <ul className="actors-list">
                {actors.map((actor) => (
                    <li className="actors-list-item" key={actor.id}>
                        <img
                            className="actors-list-item-image"
                            src={`https://image.tmdb.org/t/p/w500/${actor.profile_path}`}
                            alt={actor.name}
                        />
                        <div className="actors-list-item-details">
                            <p className="actors-list-item-name">{actor.name}</p>
                            <p className="actors-list-item-character">Character: {actor.character}</p>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Actors;