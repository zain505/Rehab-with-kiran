import React from "react";
import ReactPlayer from "react-player";
import "./YoutubeChannel.css";

const videos = [
    {
        url: "https://youtu.be/mYxcmNs3HOA",
        title: "Featured physiotherapy video by Dr. Kiran Fatima",
    },
    {
        url: "https://youtu.be/wKl8H9d6ItM",
        title: "Physiotherapy insights from Dr. Kiran Fatima",
    },
    {
        url: "https://youtu.be/T6E9KezdKm0",
        title: "Health and rehabilitation guidance from Dr. Kiran Fatima",
    },
];

function VideoCard({ video, featured = false }) {
    return (
        <article className={`yt-video-card${featured ? " yt-video-card--featured" : ""}`}>
            <div className="yt-player-frame">
                <ReactPlayer
                    url={video.url}
                    title={video.title}
                    width="100%"
                    height="100%"
                    controls
                />
            </div>
        </article>
    );
}

function YoutubeChannel() {
    return (
        <section className="yt-section-outer" aria-labelledby="latest-videos-heading">
            <div className="yt-section-inner">
                <header className="yt-section-header">
                    <div className="yt-heading-copy">
                        <p className="yt-eyebrow">Watch &amp; learn</p>
                        <h2 id="latest-videos-heading">Latest videos</h2>
                        <p className="yt-description">
                            Practical physiotherapy insights and trusted guidance to help you move,
                            recover, and feel your best.
                        </p>
                    </div>

                    <a
                        className="yt-channel-link"
                        href="https://www.youtube.com/@kiranPT237"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Visit Dr. Kiran PT on YouTube (opens in a new tab)"
                    >
                        <span className="icon-youtube" aria-hidden="true" />
                        Visit YouTube Channel
                        <span className="yt-link-arrow" aria-hidden="true">&#8599;</span>
                    </a>
                </header>

                <div className="yt-video-gallery">
                    <VideoCard video={videos[0]} featured />
                    <div className="yt-supporting-videos">
                        {videos.slice(1).map((video) => (
                            <VideoCard key={video.url} video={video} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default YoutubeChannel;
