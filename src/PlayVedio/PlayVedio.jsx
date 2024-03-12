import React from "react";
import "./PlayVedio.css";
import video1 from "../assets/video.mp4";
import like from "../assets/like.png";
import dislike from "../assets/dislike.png";
import share from "../assets/share.png";
import save from "../assets/save.png";
import jack from "../assets/jack.png";
import user_profile from "../assets/user_profile.jpg";

const PlayVedio = () => {
  return (
    <div className="play-vedio">
      <video src={video1} controls autoPlay muted></video>
      <h3>Best View of the sea and sky with beauteFull gril ❣️❣️</h3>
      <div className="play-video-info">
        <p>1525 Views &bull; 2 days ago</p>
        <div>
          <span>
            <img src={like} alt="" />
            250
          </span>
          <span>
            <img src={dislike} alt="" />
            20
          </span>
          <span>
            <img src={share} alt="" />
            Share
          </span>
          <span>
            <img src={save} alt="" />
            save
          </span>
        </div>
      </div>
      <hr />
      <div className="publisher">
        <img src={jack} alt="" />
        <div>
          <p>GreatStack</p>
          <span>1M Subscribers</span>
        </div>
        <button>Subscribe</button>
      </div>
      <div className="vid-description">
        <p>Channel that makes learing Easy</p>
        <p>Subscribe Grreat To wathc Mroe Tutorials on web deveploment</p>
        <hr />
        <h4>130 Comments</h4>
        <div className="comment">
          <img src={user_profile} alt="" />
          <div>
            <h3>
              jack Nicholson <span>1 day Ago</span>
            </h3>
            <p>
              Web development is the work involved in developing a website for
              the Internet (World Wide Web) or an intranet (a private network).
              Web development can range from developing a simple single static
              page of plain text to complex web applications, ele
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayVedio;
