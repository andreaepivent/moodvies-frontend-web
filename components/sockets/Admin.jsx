import { useState } from "react";
import socketIOClient from "socket.io-client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Calendar } from "@/components/ui/calendar";

export default function Admin() {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState(new Date());
  const [message, setMessage] = useState("");
  const [open, setOpen] = useState(false);

  const handleAddMovie = () => {
    const socket = socketIOClient("http://localhost:3000");
    const movieData = {
      title: title,
      date: formatDate(date),
    };

    socket.emit("addMovie", movieData);

    setMessage(
      `Movie title: ${title} available: ${formatDate(date)} added successfully!`
    );

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
      <div className="h-screen w-screen flex justify-center items-center">
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <Button variant="default" className="w-32 border-2 text-slate-100 ">
              Add Movie
            </Button>
          </DialogTrigger>
          <DialogContent className="dark text-slate-100 sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle className="text-center text-2xl mb-3">
                Add Movie
              </DialogTitle>
            </DialogHeader>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Input
                  id="title"
                  placeholder="Title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  className="rounded-md border"
                  onChange={(e) => setAvailable(e.target.value)}
                />
              </div>
            </div>
            <DialogFooter>
              <Button
                type="submit"
                variant="gradientPurple"
                className="w-full mb-1"
                onClick={handleAddMovie}
              >
                Submit
              </Button>
            </DialogFooter>
            {message && (
              <p className="text-center text-green-500 mt-2">{message}</p>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </>
  );
}
