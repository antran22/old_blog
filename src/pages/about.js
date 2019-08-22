import React from "react";
import { Avatar } from "antd";
import SEO from "../components/seo";
import Layout from "../components/layout";
import avatar from "../images/avatar.jpg";
import style from "./about.module.css";
import Credit from "../components/info/credit";

const AboutPage = () => {
    return (
        <Layout>
            <SEO
                title="Home"
                keywords={[
                    "programming",
                    "music",
                    "blogging",
                    "guitar",
                    "developer",
                ]}
            />
            <div className={style.about}>
                <h1>Coder, Music Lover, Novice Guitarist</h1>
                <Avatar
                    size={256}
                    src={avatar}
                    className={style.avatar + " " + style.block}
                />
                <div className={style.bio + " " + style.block}>
                    <h2>Trần Công Việt An</h2>
                    <ul>
                        <li>
                            <h4>Gender: 👱‍</h4>
                        </li>
                        <li>
                            <h4>Sign: ♓️</h4>
                        </li>
                        <li>
                            <h4>🗓: 22/02/2001</h4>
                        </li>
                        <li>
                            <h4>✉️: vietanisme@gmail.com</h4>
                        </li>
                        <li>
                            <h4>📞: +84 85 527 6631</h4>
                        </li>
                        <li>
                            <h4>🏠: Hanoi, Vietnam</h4>
                        </li>
                    </ul>
                </div>
                <div className={style.hobby + " " + style.block}>
                    <h2>What I love to do</h2>
                    <ul>
                        <li>
                            <h4>Coding</h4>
                        </li>
                        <li>
                            <h4>Listening to music</h4>
                        </li>
                        <li>
                            <h4>Playing Guitar</h4>
                        </li>
                    </ul>
                </div>
                <div className={style.block}>
                    <h2>Favourite albums 📀</h2>
                    <ul>
                        <li>
                            <h4>Revolver {" • "} The Beatles</h4>
                        </li>
                        <li>
                            <h4>
                                The Piper at the Gate of Dawn {" • "} Pink Floyd
                            </h4>
                        </li>
                        <li>
                            <h4>In Rainbows {" • "} Radiohead</h4>
                        </li>
                        <li>
                            <h4>A Night At The Opera {" • "} Queen</h4>
                        </li>
                        <li>
                            <h4>Remain in Light {" • "} Talking Heads</h4>
                        </li>
                    </ul>
                </div>
                <div className={style.block + " " + style.language}>
                    <h2>My Go-to Programming Language</h2>
                    <ul>
                        <li>
                            <h4>Python</h4>
                        </li>
                        <li>
                            <h4>JavaScript</h4>
                        </li>
                        <li>
                            <h4>Golang</h4>
                        </li>
                    </ul>
                </div>
                <div className={style.block}>
                    <h2>My guitars 🎸</h2>
                    <ul>
                        <li>
                            <h4>Chinese Unknown Brand Acoustic</h4>
                        </li>
                    </ul>
                </div>
            </div>
            <div className={style.introduction}>
                <hr />
                <div>
                    <h1>A bit about myself</h1>
                    <p>I describe myself as a learner.</p>
                    <p>
                        Honestly, I learn how to do my hobbies all by myself.
                        I've trained myself in web and app development from
                        friends and online documentations. I can play a bit of
                        guitar by practising with online videos and tabs.
                    </p>
                    <p>
                        Not that I'm bragging. Rather, I think that means I'm
                        more open to changes and suggestions, and I may be a
                        pleasant companion should we ever work together.
                    </p>
                </div>
                <hr />
                <div>
                    <h1>What's the point of this blog anyway?</h1>
                    <br />
                    <p>
                        Mostly, I do this for fun. Ranting about your life is
                        one great way to lift up your mood. Since I don't really
                        have a friend I can talk with about life I'm going to
                        write blogs instead.
                    </p>
                    <p>
                        Even so, I think this blog's going to come in handy. I
                        can use this as my Computer Science journal. I can write
                        a few programming guide or share codes here. Also, this
                        blogs will help me train my writing skill in English.
                    </p>
                    <p>
                        After all, this is how I'll record my life. An online
                        diary (even if it's public, not many people would find
                        out about the page, so I think it still counts as a
                        diary), I guess. Maybe someday, 10 or 20 years later, I
                        might lookback at this and see how I have grown up.
                    </p>
                    <br />
                    <p>Because life is all about learning and growing up.</p>
                </div>
                <hr />
            </div>
            <div className={style.credit}>
                <h1>Credit where it's due</h1>
                <Credit />
            </div>
        </Layout>
    );
};
export default AboutPage;
