// import React, { useEffect, useState } from "react";

// const FetchMovie = () => {
//   const [movies, setMovies] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchMovies = async () => {
//       const url = `/api/trailers/?film_id=315541`;

//       try {
//         const response = await fetch(url);
//         if (!response.ok) {
//           throw new Error(`HTTP error! status: ${response.status}`);
//         }
//         const data = await response.json();
//         if (
//           data.trailers &&
//           data.trailers.high &&
//           data.trailers.high.length > 0
//         ) {
//           const movie = data.trailers.high[0].film_trailer;
//           setMovies(movie);
//         } else {
//           throw new Error("No movie data found");
//         }
//         setLoading(false);
//       } catch (err) {
//         setError(err);
//         setLoading(false);
//       }
//     };

//     fetchMovies();
//   }, []);

//   if (loading) return <div>Loading...</div>;
//   if (error) return <div>Error: {error.message}</div>;

//   return (
//     <div>
//       <h1>Now Showing</h1>
//       <video className="w-96 h-96" autoPlay loop muted>
//         <source src={movies} />
//       </video>
//     </div>
//   );
// };

// export default FetchMovie;
