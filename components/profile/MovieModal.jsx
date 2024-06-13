import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSelector } from "react-redux";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";

export default function MovieModal({
  movie,
  isOpen,
  onClose,
  updateMovieNote,
}) {
  const user = useSelector((state) => state.user.value);
  const [rating, setRating] = useState(movie.note);
  const totalStars = 10;

  useEffect(() => {
    setRating(movie.note);
  }, [movie]);

  const handleStarClick = (newRating) => {
    const updatedRating = newRating === rating ? 0 : newRating;
    setRating(updatedRating);
    updateMovieNote(movie.movie._id, updatedRating);
  };

  const renderStars = () => {
    const stars = [];
    for (let i = 1; i <= totalStars; i++) {
      stars.push(
        <FontAwesomeIcon
          key={i}
          icon={faStar}
          className={i <= rating ? "text-[#A759AD]" : "text-white"}
          onClick={() => handleStarClick(i)}
        />
      );
    }
    return stars;
  };

  return (
    <Dialog className="dark" open={isOpen} onOpenChange={onClose}>
      <DialogContent className="dark text-slate-100">
        <DialogHeader>
          <DialogTitle className="text-center text-2xl mb-3 mt-10">
            {movie.movie.title.fr}
            <div className="flex text-sm font-normal justify-around w-1/2 mx-auto">
              <p>{movie.movie.directors}</p>
              <p>{movie.movie.duration} minutes</p>
              <p>{movie.movie.release_date.substring(0, 4)}</p>
            </div>
          </DialogTitle>
          <DialogDescription>
            <img
              src={`https://image.tmdb.org/t/p/original/${movie.movie.backdrop}`}
              alt={`${movie.movie.title.fr} poster`}
              className="w-full h-1/2 object-cover mb-4"
            />
            <p className="line-clamp-6">{movie.movie.synopsis.fr}</p>
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className="-mt-10">
          {rating > 0 && rating ? (
            <>
              <p className="text-right mt-2">Votre note :</p>
              <div className="mt-2 cursor-pointer">{renderStars()}</div>
            </>
          ) : (
            <>
              <p className="text-right mt-2">Notez ce film</p>
              <div className="mt-2 cursor-pointer">{renderStars()}</div>
            </>
          )}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
