import {useState, useEffect} from 'react';
import Player from './Player';
import "./Music.css"


function Music() {
  const [songs] = useState([
    {
      title: "Nàng thơ",
      artist: "Amee",
      img_src: "./images/nangtho.webp",
      src: "./music/nangtho.mp3"
    },
    {
      title: "Nói hoặc không nói",
      artist: "Amee",
      img_src: "./images/noihoackhongnoi.jpg",
      src: "./music/noihoackhongnoi.mp3"
    },
    {
      title: "Shay nắng",
      artist: "Amee",
      img_src: "./images/shaynang.jpg",
      src: "./music/shaynang.mp3"
    },
    {
      title: "Thấy mỗi cô gái yêu anh",
      artist: "Amee",
      img_src: "./images/thaymoicogaiiuanh.jpg",
      src: "./music/thaymoicogaiiuanh.mp3"
    }
  ]);

  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [nextSongIndex, setNextSongIndex] = useState(0);

  useEffect(() => {
    setNextSongIndex(() => {
      if (currentSongIndex + 1 > songs.length - 1) {
        return 0;
      } else {
        return currentSongIndex + 1;
      }
    });
  }, [currentSongIndex]);

  return (
    <div className="Music">
      <Player 
        currentSongIndex={currentSongIndex} 
        setCurrentSongIndex={setCurrentSongIndex} 
        nextSongIndex={nextSongIndex} 
        songs={songs}
      />
    </div>
  );
}

export default Music;
