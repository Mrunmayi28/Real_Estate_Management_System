import React from "react";
import top from 'C://Users//Mrunmayi//Desktop//Real_Estate_2.0//realestate//src//images//top.png';
import './Landingpage.css';
import house from 'C://Users//Mrunmayi//Desktop//Real_Estate_2.0//realestate//src//images//hero.png';
import divya from 'C://Users//Mrunmayi//Desktop//Real_Estate_2.0//realestate//src//images//Insha.png';
import harshita from 'C://Users//Mrunmayi//Desktop//Real_Estate_2.0//realestate//src//images//divya.png';
import insha from 'C://Users//Mrunmayi//Desktop//Real_Estate_2.0//realestate//src//images//harshita.png'; 

const Landingpage = () => {

    return (
        <>
            <img className='top' src={top} />
            <div className='Para'>
                <div className='thought'>
                    “Owning a home is a keystone of wealth…<br />both financial affluence and<br /> emotional security.”
                </div>
                <div className='author'>-Suze Orman</div>
                <div className='Buttons'>
                    <a className='landbuttons' href='contact'><button>Contact US</button></a>
                    <a className='landbuttons' href='Grid'><button>Go on Search</button></a>
                </div>
            </div>
            <div className='works'>
                <h1>HOW IT WORKS</h1>
                <div className='subworks'>
                    <b>Find a property</b>
                    <p>It is a long established  <br />
                        a reader distracted  </p>
                </div>
                <div className='subworks'>
                    <b>Buy a property</b>
                    <p>It is a long established  <br />
                        a reader distracted  </p>
                </div>
                <div className='subworks'>
                    <b>Investing </b>
                    <p>It is a long established  <br />
                        a reader distracted  </p>
                </div>
            </div>
            <img className='house' src={house} />
            <div className='Para'>
                <div className='thought'>
                    We Are The Best <br />Real Estate Company<br/>
                    <a className='landbuttons' href='Grid'><button>Go on Search</button></a>
                </div>
                </div>
                <div className='works'>
                <h1>TESTIMONALS</h1>
                <div className='subworks'>
                <img className='top' src={insha} /> 
                </div>
                <div className='subworks'>
                <img className='top' src={harshita} /> 
                </div>
                <div className='subworks'>
                <img className='top' src={divya} />  
                </div>
            </div>
            
            <div className='Para'>
                <div className='thought'>
                    We Are The Best <br />Real Estate Company<br/>
                    <a className='landbuttons' href='Grid'><button>Go on Search</button></a>
                </div>
                </div>
        </>
    );
}

export default Landingpage;