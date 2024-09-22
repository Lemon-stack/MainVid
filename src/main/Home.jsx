import Notification from "./assets/notifications";
import Arrow from "./assets/arrow";
import SendIcon from "./assets/send";
import YoutubeIcon from "./assets/youtube";
import axios from "axios";
import { useAuth } from "../context/useAuth";
import { useEffect, useState } from "react";
import About from "./about";
import SignOutButton from "./assets/signout";
export default function Home() {
  //   const navigate = useNavigate();
  const [anySearch, setAnySearch] = useState(false);
  const [loading, setLoading] = useState(false);
  const [videos, setVideos] = useState([]);
  const [query, setQuery] = useState("");
  const [notificationOpened, setNotificationOpened] = useState(false);
  const { currentUser } = useAuth();
  const userId = currentUser.uid;
  //   const [error, setError] = useState("");
  //   async function handleLogout(e) {
  //     e.preventDefault();
  //     try {
  //       const result = await logout();
  //       console.log(result);
  //       navigate("/login");
  //     } catch (error) {
  //       const errorMessage = error.message.match(/auth\/([^)]+)/);
  //       setError(errorMessage ? errorMessage[1] : "An error occurred");
  //     }
  //   }

  async function search() {
    setLoading(true);
    try {
      const response = await axios.post(
        "https://lserve.vercel.app/fetch-video",

        { query, userId }
      );
      const res = response.data.video;
      const videoItems = res.items.map((item) => ({
        id: item.id.videoId,
        title: item.snippet.title,
      }));
      setQuery("");
      setVideos(videoItems);
      setAnySearch(true);
      setLoading(false);

      // Process the data.items array which contains the search results
    } catch {
      (error) =>
        console.error("Error fetching the YouTube videos:", error.message),
        setLoading(false);
      //  console.log(response.message)
    }
  }

  useEffect(() => {
    const opened = localStorage.getItem("opened");

    if (opened) {
      setNotificationOpened(true);
    }
  }, []);

  function handleKeyPress(event) {
    if (event.key === "Enter") {
      search();
    }
  }

  return (
    <>
      <div className="max-h-dvh flex flex-col">
        {!notificationOpened && <Notification />}
        <nav className="px-4 lg:px-6 sticky top-0 bg-violet-100 pt-2 flex justify-between w-full">
          <section className="flex items-center text-zinc-800 justify-center">
            <h2 className="text-base font-medium lg:text-xl">MainVid</h2>
            <YoutubeIcon className="size-8 text-zinc-800" />
          </section>
          <section className="flex items-center justify-center gap-4">
            <About />
            <SignOutButton />
          </section>
        </nav>
        <main className="flex flex-col bg-violet-100 items-center justify-center h-dvh">
          <section className="flex flex-col w-full gap-4 lg:px-16 justify-center relative items-center">
            {!anySearch && (
              <div className="flex flex-col items-center px-4 md:px-0 gap-3">
                <h2 className="text-3xl md:text-5xl text-center font-bold">
                  Discover the one video you need
                </h2>
                <p className="text-base md:text-xl mb-4 text-center relative">
                  Skip the long decision process and just dive right in {":)"}
                </p>
              </div>
            )}
            <div className="flex w-full justify-center relative items-center">
              <div className="w-full flex items-center justify-center">
                {!anySearch && (
                  <div className="relative hidden sm:flex">
                    <Arrow className="size-20 absolute transform scale-x-[-1] -left-16 rotate-45 top-[-5rem]" />
                  </div>
                )}
                <input
                  onKeyDown={handleKeyPress}
                  placeholder="be a bit specific..."
                  onChange={(e) => setQuery(e.target.value)}
                  type="text"
                  className="border transition-all ease-in-out px-2.5 -mr-11 text-zinc-700 border-zinc-900/50 outline-none rounded-3xl w-[82%] sm:w-[60%] md:w-[50%] py-1.5"
                />
                <button className="p-1.5 -translate-x-0 rounded-full border-0 ml-2 bg-zinc-900 text-gray-50">
                  {!loading ? (
                    <SendIcon onClick={search} className="size-5" />
                  ) : (
                    <svg
                      aria-hidden="true"
                      className="w-5 h-5 text-gray-200 animate-spin fill-gray-50"
                      viewBox="0 0 100 101"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                        fill="currentColor"
                      />
                      <path
                        d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                        fill="currentFill"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </section>
          <section className="w-full mt-4">
            {videos.map((video) => (
              <div
                key={video.id}
                className="w-full flex flex-col items-center justify-center"
              >
                {/* Embed YouTube video using iframe */}
                <iframe
                  className="rounded-md w-[90%] sm:w-[70%] h-96 lg:w-[50%]"
                  src={`https://www.youtube.com/embed/${video.id}`}
                  title={video.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            ))}
          </section>
        </main>

        <footer className="absolute bottom-0 px-4">
          <p className="text-sm">
            Made with⚡by{" "}
            <a href="https://linkedin.com/in/lemonconfidence">lemon</a>
          </p>
        </footer>
      </div>
    </>
  );
}
