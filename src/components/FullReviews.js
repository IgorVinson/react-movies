import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import axios from "axios";
import './FullReviews.Module.css'

const FullReviews = () => {
    const [reviews, setReviews] = useState([]);
    const {id} = useParams()

    useEffect(() => {
        async function getReviews() {
            const updateReviews = await axios.get(`https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${process.env.REACT_APP_MOVIES_API_KEY}`)
            setReviews(updateReviews.data)
        }
        getReviews()
    }, [id])

    return (
      <>
        <div className="reviews">
          {reviews.length>0?'':<h3>There are no reviews for this movie</h3>}
          <ul>
            {reviews.results?.map((review) => (
              <li key={review.id}>
                <p>{review.author}</p>
                <p>{review.content}</p>
              </li>
            ))}
          </ul>
        </div>
      </>
    );
};

export default FullReviews;