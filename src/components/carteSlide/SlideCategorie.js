import { CarouselProvider, Slide, Slider } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import vegetable from "../../assets/images/catslide/cat-1.png";
import peach from "../../assets/images/catslide/cat-11.png";
import oganic from "../../assets/images/catslide/cat-12.png";
import cake from "../../assets/images/catslide/cat-13.png";
import coffe from "../../assets/images/catslide/cat-14.png";
import headphone from "../../assets/images/catslide/cat-15.png";
import { default as redApple, default as strabery } from "../../assets/images/catslide/cat-2.png";
import snack from "../../assets/images/catslide/cat-3.png";
import blackplum from "../../assets/images/catslide/cat-4.png";
import custard from "../../assets/images/catslide/cat-5.png";
import "../carteSlide/slidecategorie.css";
import CartProduct from '../carteproduct/CartProduct';
import { PopularProduct } from '../popularProduct/PopularProduct';
export const SlideCategorie=()=>{
    const liste=[
        {
            image:cake,
            titre:"Cake & Milk",
            id:1,
            color:"#fff3eb"
        },
        {
            image:oganic,
            titre:"Oganic kiwi",
            id:2,
            color:"#fff3eb"
        },
        {
            image:peach,
            titre:"Peach",
            id:3,
            color:"#ECFFEC"
        },
        {
            image:redApple,
            titre:"Red Apple",
            id:4,
            color:"#fff3eb"
        },
        {
            image:snack,
            titre:"Snack",
            id:5,
            color:"#fff3eb"
        },
        {
            image:vegetable,
            titre:"Vegetable",
            id:6,
            color:"#FFF3FF"
        },
        {
            image:strabery,
            titre:"StrawBerry",
            id:7,
            color:"#F2FCE4"
        },
        {
            image:blackplum,
            titre:"Black plum",
            id:8,
            color:"#FEEFEA"
        },

        {
            image:custard,
            titre:"Custard apple",
            id:9,
            color:"#FFFCEB"
        },
        {
            image:coffe,
            titre:"Coffee & Tea",
            id:10,
            color:"#FEEFEA"
        },
        {
            image:headphone,
            titre:"Headphone",
            id:11,
            color:"#ECFFEC"
        },

    ]
    return<>
    <div className="slidecategorie">
    <CarouselProvider
        naturalSlideWidth={60}
        naturalSlideHeight={100}
        totalSlides={2}
        isPlaying
      >
    <ul className="slide_titre">
         <p id="p1">Featured Categories</p>
        <li>Cake & Milk</li>
        <li>Coffes & Teas</li>
        <li>Pet Foods</li>
        <li>Vegetables</li>
    </ul>
    <Slider>
    <Slide index={0}>
    <ul className="slide_titre2">
        {
            liste.map((eltmt)=>(
              <li key={eltmt.id} style={{background:eltmt.color}}><img src={eltmt.image} alt="logo" className="imageslide"/> {eltmt.titre}</li>
              
            ))
        }
    </ul>
    </Slide>
    <Slide index={1}>
    <ul className="slide_titre2">
        {
            liste.map((eltmt)=>(
              <li key={eltmt.id} style={{background:eltmt.color}}><img src={eltmt.image} alt="logo" className="imageslide"/> {eltmt.titre}</li>
              
            ))
        }
    </ul>
    </Slide>
    </Slider>
    </CarouselProvider>
    {/*Carte product composant */}
<CartProduct/>
{/*Popular Product*/}
<PopularProduct/>
{/*Best sells 
<BestSellsProduct/>*/}
    </div>
    </>
}