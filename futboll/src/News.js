import React from "react";
import { Link } from "react-router-dom";
import Img1 from './Cristiano-Ronaldo-1.jpeg'
import './News.css';


const News = () => {
    return (
        <>
           
             <section className="banner" >
            <div class = "banner-main-content">
                <h2 className="h2">GET THE WORLD'S LATEST FOOTBALL NEWS</h2>
                

                <div class = "current-news-head">
                    <h3>Apple Glasses: What we expect, what we think we are <span>by scott stein</span></h3>

                    <h3>What's it's like to have Elon Musk's old phone number <span>by abrar al-heeti</span></h3>

                    <h3>Watch the exact moment Chris Pratt accidentally deletes 51, 000 emials <span>by goel fashingbauer</span></h3>

                    <h3>Richard Branson's Virgin Orbit will launch a rocket from midair Sunday <span>by eric mack</span></h3>
                </div>
            </div>

            </section>
        
        <main>

            <section class = "main-container-left">
                <h1>FOOTBALL NEWS</h1>
                <div class = "container-top-left">
                    <article>
                         <img className="thumb" src={Img1} alt=""/>
                        <div>
                            <h3>Best Used Cars Under $20, 000 for families</h3>

                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis ea sint, nisi rem earum fugit? Facere veritatis sapiente eveniet quibusdam.</p>

                            <a href = "#">Read More <span></span></a>
                        </div>
                    </article>
                </div>

                <div class = "container-bottom-left">
                    <article>
                    <img className="thumb" src={Img1} alt=""/>
                        <div>
                            <h3>Best smart speakers for the year</h3>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi iure modi animi cupiditate. Explicabo, nihil?</p>

                            <a href = "#">Read More <span></span></a>
                        </div>
                    </article>

                    <article>
                    <img className="thumb" src={Img1} alt=""/>
                        <div>
                            <h3>iPad Pro, reviewed: Has the iPad become my main computer now?</h3>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi iure modi animi cupiditate. Explicabo, nihil?</p>

                            <a href = "#">Read More <span></span></a>
                        </div>
                    </article>
                </div>
            </section>
            

            <section class = "main-container-right">
                <h2>Latest Stories</h2>
                
                <article>
                    <h4>just in </h4>
                    <div>
                        <h2>Here's how to track your stimulus check with the IRS Get My Payment Portal</h2>

                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, repellendus?</p>

                        <a href = "#">Read More <span></span></a>
                    </div>
                    <img className="thumb" src={Img1} alt=""/>
                </article>

                <article>
                    <h4>just in </h4>
                    <div>
                        <h2>The best outdoor games to play with your family</h2>

                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, repellendus?</p>

                        <a href = "#">Read More <span></span></a>
                    </div>
                    <img className="thumb" src={Img1} alt=""/>
                </article>

                <article>
                    <h4>just in </h4>
                    <div>
                        <h2>Why walk? Check out the best electric scooters and e-bikes for 2020</h2>

                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, repellendus?</p>

                        <a href = "#">Read More <span></span></a>
                    </div>
                    <img className="thumb" src={Img1} alt=""/>
                </article>

                <article>
                    <h4>just in </h4>
                    <div>
                        <h2>Disneyland Paris will stream its Lion King stage show Friday night</h2>

                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, repellendus?</p>

                        <a href = "#">Read More <span></span></a>
                    </div>
                    <img className="thumb" src={Img1} alt=""/>
                </article>

                <article>
                    <h4>just in </h4>
                    <div>
                        <h2>Looking at a phone's lock screen also requries a warrant, judge rules</h2>

                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, repellendus?</p>

                        <a href = "#">Read More <span></span></a>
                    </div>
                    <img className="thumb" src={Img1} alt=""/>
                </article>
             </section>
             </main>
        </>


    );
}
export default News
