import React, { useState } from "react";
import lol1 from "./../../Assets/lol1.jpg";
import lol2 from "./../../Assets/lol2.jpg";
import lol3 from "./../../Assets/lol3.jpg";
import lol4 from "./../../Assets/lol4.jpg";
import lol5 from "./../../Assets/lol5.jpg";
import lol6 from "./../../Assets/lol6.jpg";
import lol7 from "./../../Assets/lol7.jpg";
import lol8 from "./../../Assets/lol8.jpg";
import lol9 from "./../../Assets/lol9.jpg";
import lol10 from "./../../Assets/lol10.jpg";
import lol11 from "./../../Assets/lol11.jpg";
import lol12 from "./../../Assets/lol12.jpg";
import lol13 from "./../../Assets/lol13.jpg";
import lol14 from "./../../Assets/lol14.jpg";
import lol15 from "./../../Assets/lol15.jpg";
import lol16 from "./../../Assets/lol16.jpg";
import lol17 from "./../../Assets/lol17.jpg";
import lol18 from "./../../Assets/lol18.jpg";
import lol19 from "./../../Assets/lol19.jpg";
import lol20 from "./../../Assets/lol20.jpg";
import lol21 from "./../../Assets/lol21.jpg";

const Work = () => {
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const workInfoData = [
    {
      image: lol1,
      title: "Drive movie",
      info: "Drive is a great movie!",
      text: "This movie is about a driver who gets involved in a dangerous heist.",
      videoUrl: "https://www.youtube.com/watch?v=KBiOF3y1W0Y",
    },
    {
      image: lol2,
      title: "Spider-Man: No Way Home",
      info: "Spider-Man saves the multiverse!",
      text: "Peter Parker deals with the consequences of revealing his identity as Spider-Man.",
      videoUrl: "https://www.youtube.com/embed/g4Hbz2jLxvQ",
    },
    {
      image: lol3,
      title: "Heat",
      info: "Classic crime drama!",
      text: "A group of professional bank robbers start to feel the heat from police when they unknowingly leave a clue at their latest heist.",
      videoUrl: "https://www.youtube.com/embed/0xbBLJ1WGwQ",
    },
    {
      image: lol4,
      title: "Dunkirk",
      info: "Intense World War II action!",
      text: "Allied soldiers from Belgium, the British Empire, Canada, and France are surrounded by the German Army and evacuated during a fierce battle in World War II.",
      videoUrl: "https://www.youtube.com/embed/F-eMt3SrfFU",
    },
    {
      image: lol5,
      title: "Inception",
      info: "Dream within a dream!",
      text: "A thief who enters the dreams of others to steal secrets from their subconscious.",
      videoUrl: "https://www.youtube.com/embed/YoHD9XEInc0",
    },
    {
      image: lol6,
      title: "The Silence of the Lambs",
      info: "Hannibal Lecter at his best!",
      text: "A young FBI cadet must receive the help of an incarcerated and manipulative cannibal killer to help catch another serial killer, a madman who skins his victims.",
      videoUrl: "https://www.youtube.com/embed/W6Mm8Sbe__o",
    },
    {
      image: lol7,
      title: "Sin City",
      info: "Dark and gritty!",
      text: "A film that explores the dark and miserable town, Basin City, and tells the story of three different people, all caught up in violent corruption.",
      videoUrl: "https://www.youtube.com/embed/dXlaoVq59Hc",
    },
    {
      image: lol8,
      title: "Deja Vu",
      info: "Time-travel thriller!",
      text: "An ATF agent travels back in time to save a woman from being murdered, falling in love with her during the process.",
      videoUrl: "https://www.youtube.com/embed/Q9l-cf_KwKA",
    },
    {
      image: lol9,
      title: "The Prestige",
      info: "Magic and mystery!",
      text: "Two stage magicians engage in competitive one-upmanship in an attempt to create the ultimate stage illusion.",
      videoUrl: "https://www.youtube.com/embed/o4gHCmTQDVI",
    },
    {
      image: lol10,
      title: "The Machinist",
      info: "Christian Bale's transformation!",
      text: "An industrial worker who hasn't slept in a year begins to doubt his own sanity.",
      videoUrl: "https://www.youtube.com/embed/3b3r5eZ5Jp8",
    },
    {
      image: lol11,
      title: "Prisoners",
      info: "Heart-wrenching suspense!",
      text: "When Keller Dover's daughter and her friend go missing, he takes matters into his own hands as the police pursue multiple leads and the pressure mounts.",
      videoUrl: "https://www.youtube.com/embed/bpXfcTF6iVk",
    },
    {
      image: lol12,
      title: "The Covenant",
      info: "Supernatural thriller!",
      text: "Four young men who belong to a supernatural legacy are forced to battle a fifth power long thought to have died out.",
      videoUrl: "https://www.youtube.com/embed/JJo3EEg5xvk",
    },
    {
      image: lol13,
      title: "La La Land",
      info: "Modern musical masterpiece!",
      text: "While navigating their careers in Los Angeles, a pianist and an actress fall in love while attempting to reconcile their aspirations for the future.",
      videoUrl: "https://www.youtube.com/embed/0pdqf4P9MB8",
    },
    {
      image: lol14,
      title: "11.22.63",
      info: "Stephen King's time-travel series!",
      text: "A high school teacher travels back in time to prevent the assassination of John F. Kennedy, but his mission is threatened by Lee Harvey Oswald, falling in love, and the past itself, which doesn't want to be changed.",
      videoUrl: "https://www.youtube.com/embed/NXUx__qQGew",
    },
    {
      image: lol15,
      title: "The Godfather",
      info: "Legendary mafia saga!",
      text: "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
      videoUrl: "https://www.youtube.com/embed/sY1S34973zA",
    },
    {
      image: lol16,
      title: "Forgotten",
      info: "Intense mystery drama!",
      text: "When his kidnapped brother returns, seemingly a different man with no memory of the past 19 days, Jin-seok chases after the truth behind the kidnapping.",
      videoUrl: "https://www.youtube.com/embed/10rMzCEw8rY",
    },
    {
      image: lol17,
      title: "Recalled",
      info: "Gripping psychological thriller!",
      text: "A woman with amnesia begins to unravel the secrets of her past.",
      videoUrl: "https://www.youtube.com/embed/TaKxe-_9C9g",
    },
    {
      image: lol18,
      title: "Burning",
      info: "Haunting psychological drama!",
      text: "Jong-su bumps into a girl who used to live in the same neighborhood, who asks him to look after her cat while she's on a trip to Africa. When back, she introduces Ben, a mysterious guy she met there, who confesses his secret hobby.",
      videoUrl: "https://www.youtube.com/embed/oihHs2Errwk",
    },
    {
      image: lol19,
      title: "The Fighter",
      info: "Inspiring sports drama!",
      text: "Based on the story of Micky Ward, a fledgling boxer who tries to escape the shadow of his more famous but troubled older boxing brother and get his own shot at greatness.",
      videoUrl: "https://www.youtube.com/embed/71l-kIhJ_Y0",
    },
    {
      image: lol20,
      title: "Brother",
      info: "Powerful crime drama!",
      text: "A Japanese gangster is exiled to Los Angeles where his brother lives with a small but respectable multi-racial gang, who he inspires to expand their influence.",
      videoUrl: "https://www.youtube.com/embed/eVTXPUF4Oz4",
    },
    {
      image: lol21,
      title: "Enemy",
      info: "Mind-bending psychological thriller!",
      text: "A man seeks out his exact look-alike after spotting him in a movie.",
      videoUrl: "https://www.youtube.com/embed/FJuaAWrgoUY",
    },
  ];

  const handleBoxClick = (index) => {
    setSelectedMovie(selectedMovie === index ? null : index);
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredMovies = workInfoData.filter((data) =>
    data.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="work">
      <div className="work-section-wrapper">
        <div className="work-section-top">
          <h1 className="primary-heading">Movies List</h1>
          <div className="search">
            <input
              type="text"
              placeholder="Search movies..."
              value={searchQuery}
              onChange={handleSearchChange}
            />
          </div>
        </div>
        <div className="work-section-bottom">
          {filteredMovies.map((data, index) => (
            <div
              className={`work-section-info ${
                selectedMovie === index ? "selected" : "hidden"
              }`}
              key={data.title}
              onClick={() => handleBoxClick(index)}
              style={{
                display:
                  selectedMovie === index || selectedMovie === null
                    ? "block"
                    : "none",
              }}
            >
              <div className="info-boxes-img-container">
                <img src={data.image} alt="" />
                <h2>{data.title}</h2>
              </div>
              {selectedMovie === index && (
                <div className="info-box-details">
                  <button
                    onClick={(e) => {
                      e.stopPropagation(); // يمنع إعادة فتح الكارت
                      setSelectedMovie(null); // يرجع يعرض كل الكروت
                    }}
                    style={{
                      marginTop: "15px",
                      padding: "10px 20px",
                      backgroundColor: "#333",
                      color: "#fff",
                      border: "none",
                      borderRadius: "6px",
                      cursor: "pointer",
                    }}
                  >
                    Back to All Movies
                  </button>
                  <p>{data.info}</p>
                  <p>{data.text}</p>
                  <div className="video-container">
                    <iframe
                      width="560"
                      height="315"
                      src={data.videoUrl}
                      title={data.title}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>

                  {/* ✅ زر العودة لعرض كل الأفلام */}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
