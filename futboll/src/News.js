import React from "react";
import { Link } from "react-router-dom";
import Img1 from './Cristiano-Ronaldo-1.jpeg'
import './News.css';

const News = () => {
    return (


        <section className="container main-news section">
            <div align="left " className="col-sm-12 col-md-6 col-xs-12 col-lg-6">
            <div className="row1">
            
                <div className="col-sm-12 col-md-6 col-xs-12 col-lg-6">
                    <img src={Img1} alt=""/>
                    <h3>
                        <a className="font-large" href="">
                            Lajm
                        </a>
                    </h3>
                </div>
             </div>
                <div align="left " className="col-sm-12 col-md-6 col-xs-12 col-lg-6">
                    <div className="row1">
                        <div className="col-md-6 col-sm-12 col-xs-12 col-lg-6">
                            <div className="image image-sm mb-1">
                            <img className="thumb" src={Img1} alt=""/>
                            </div>
                            <h3 className="mb-4">
                        <a  href="">
                            Lajm
                        </a>
                        </h3>
                        <div className="image image-sm mb-1">
                        <img className="thumb" src={Img1} alt=""/>
                        </div>
                        <h3 className="mb-4">
                        <a  href="">
                            Lajm
                        </a>
                        </h3>
                        </div>
                    </div> 
                </div>
                
            </div>
        </section>


    );
}
export default News
