import { useState } from "react";
import socketIOClient from "socket.io-client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Navbar from "../common/Navbar";

export default function Admin() {
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");

  const handleAddMovie = () => {
    const socket = socketIOClient("http://localhost:3000");
    const movieData = {
      title: title,
    };

    socket.emit("addMovie", movieData);

    setMessage(`Movie ID: ${title} added successfully!`);

    setTitle("");
    setTimeout(() => {
      setMessage("");
    }, 2000);
  };

  const formatDate = (dateString) => {
    const options = { day: "2-digit", month: "short" };
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", options);
  };

  return (
    <>
      <div className="h-screen w-screen flex flex-col items-center bg-black">
        <div className="w-full">
          <Navbar />
        </div>
        <div className="flex-grow flex flex-col items-center justify-center space-y-4">
          <h1 className="text-slate-100 text-4xl mb-10">
            Welcome Paul the boss
          </h1>
          <h3 className="text-center text-2xl mb-3 text-slate-100">
            Add Movie by ID :
          </h3>
          <div className="flex flex-col space-y-1.5">
            <Input
              id="title"
              placeholder="id"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-96"
            />
            <Button
              type="submit"
              variant="gradientPurple"
              className="w-full mb-1"
              onClick={handleAddMovie}
            >
              Submit
            </Button>
          </div>
          {message && (
            <p className="text-center text-green-500 mt-2">{message}</p>
          )}
        </div>
      </div>
    </>
  );
}
