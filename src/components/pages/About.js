import { CarouselProvider, Slide, Slider } from 'pure-react-carousel';
import CountUp from 'react-countup';
import imageAbout1 from "../../assets/about/about-1.png";
import imageAbout2 from "../../assets/about/about-2.png";
import imageAbout3 from "../../assets/about/about-3.png";
import imageAbout4 from "../../assets/about/about-4.png";
import imageAbou5 from "../../assets/about/about-5.png";
import profile1 from "../../assets/about/about-6.png";
import profile2 from "../../assets/about/about-8.png";
import svg1 from "../../assets/about/icon-1.svg";
import svg2 from "../../assets/about/icon-2.svg";
import svg3 from "../../assets/about/icon-3.svg";
import svg4 from "../../assets/about/icon-4.svg";
import svg5 from "../../assets/about/icon-5.svg";
import svg6 from "../../assets/about/icon-6.svg";
import iconefacebook from "../../assets/footer/socialMedia/icon-facebook-white.svg";
import iconetinstagram from "../../assets/footer/socialMedia/icon-instagram-white.svg";
import iconetwitter from "../../assets/footer/socialMedia/icon-twitter-white.svg";
import iconeyoutub from "../../assets/footer/socialMedia/icon-youtube-white.svg";
import { Footer } from "../footer/Footer";
import LinkHome from "../lienHome/LinkHome";
import "../pages/css/about.css";
export const  About=()=>{
const data=[
"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate id est laborum",
"Ius ferri velit sanctus cu, sed at soleat accusata. Dictas prompta et Ut placerat legendos interpre.Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante Etiam sit amet orci eget. Quis commodo odio aenean sed adipiscing. Turpis massa tincidunt dui ut ornare lectus. Auctor elit sed vulputate mi sit amet. Commodo consequat. Duis aute irure dolor in reprehenderit in voluptate id est laborum."
]
const DataBest=[
    {
        id:1,
        titre:"Best Prices & Offers",
        image:svg1,
        contenu:"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form"
    },
    {
        id:2,
        titre:"Wide Assortment",
        image:svg2,
        contenu:"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form"
    },
    {
        id:3,
        titre:"Free Delivery",
        image:svg3,
        contenu:"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form"
    },
    {
        id:4,
        titre:"Easy Returns",
        image:svg4,
        contenu:"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form"
    },
    {
        id:5,
        titre:"100% Satisfaction",
        image:svg5,
        contenu:"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form"
    },
    {
        id:6,
        titre:"Great Daily Deal",
        image:svg6,
        contenu:"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form"
    }
]
const DataFooter=[
    {
        id:6,
        titre1:"Our performance",
        titre2:"Your Partner for e-commerce grocery solution",
        contenu:"Ed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto,Pitatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia"
    }
]
const dataAbout=[
    {
        id:1,
        titre:"Who we are",
        contenu:"Volutpat diam ut venenatis tellus in metus. Nec dui nunc mattis enim ut tellus eros donec ac odio orci ultrices in. ellus eros donec ac odio orci ultrices in."
    },
    {
        id:2,
        titre:"Our history",
        contenu:"Volutpat diam ut venenatis tellus in metus. Nec dui nunc mattis enim ut tellus eros donec ac odio orci ultrices in. ellus eros donec ac odio orci ultrices in."
    },
    {
        id:3,
        titre:"Our mission",
        contenu:"Volutpat diam ut venenatis tellus in metus. Nec dui nunc mattis enim ut tellus eros donec ac odio orci ultrices in. ellus eros donec ac odio orci ultrices in."
    }
]

return<>

    <LinkHome></LinkHome>
    <div>
        <ul className="about_section1">
         <li className="section_A"><img src={imageAbout1} alt="About logo" className="image_about1"></img></li>
         <li className="section_B">
            <p style={{color:"black",fontWeight:"900",fontSize:"30px"}}><span id="more">Welcome to Nest</span></p>
            <p>{data}</p>
        <CarouselProvider
        naturalSlideWidth={50}
        naturalSlideHeight={20}
        totalSlides={3}
        isPlaying
      >
            <Slider>
            <Slide index={0}>
                <img src={imageAbout2} alt="logo slide1" className='image_slide_About'></img>
                <img src={imageAbout4} alt="logo slide3" className='image_slide_About'></img>
                <img src={imageAbout3} alt="logo slide2" className='image_slide_About'></img>
                </Slide>
                <Slide index={1}>
                <img src={imageAbout3} alt="logo slide1" className='image_slide_About'></img>
                <img src={imageAbout2} alt="logo slide3" className='image_slide_About'></img>
                <img src={imageAbout3} alt="logo slide2" className='image_slide_About'></img>
                </Slide>
                <Slide index={0}>
                <img src={imageAbout4} alt="logo slide1" className='image_slide_About'></img>
                <img src={imageAbout3} alt="logo slide3" className='image_slide_About'></img>
                <img src={imageAbout2} alt="logo slide2" className='image_slide_About'></img>
                </Slide>
                </Slider>
                {/*
                <ButtonBack>Back</ButtonBack>
                <ButtonNext>Next</ButtonNext>*/}
                </CarouselProvider>
         </li>
        </ul>
       
                <p style={{textAlign:"center",color:"black",fontSize:"30px", fontWeight:"900", fontFamily:"Quicksand, sans-serif"}}>What We Provide ?</p>
           <ul className='about_section2'>
            {
             DataBest.map((elt)=>(
                <li id="about_A1" key={elt.id}><img src={elt.image} alt="logo" id='image_A1_about'></img><br/><span style={{position:"relative",left:"28%",fontWeight:"700",fontSize:"20px",padding:"5px"}}>{elt.titre}</span><br/><span style={{padding:"5px",fontSize:"18px"}}>{elt.contenu}</span><br/><button style={{background:"white",color:"green",border:"1px solid white",margin:"5px",position:"relative",left:"20%", fontWeight:"700"}}><a href="#more" style={{color:"green"}}>Read more</a></button></li>
             ))   
            } 
           </ul>
           <ul className='about_section3'>
            <li className='_sectionA3'><img src={imageAbou5} alt="logo" style={{width:"100%", margin:"10px",position:"relative", left:"25%"}}></img></li>
            {
                DataFooter.map((elt)=>(
                    <li key={elt.id} className='_sectionB3'><span style={{color:"gray",fontWeight:"400",fontSize:"20px"}}>{elt.titre1}</span><br/><span style={{color:"#253D4E",fontSize:"40px",fontWeight:"700",fontFamily:"Quicksand, sans-serif"}}>{elt.titre2}</span><br/><span style={{color:"gray", fontWeight:"600"}}>{elt.contenu}</span></li>
                ))
                
            }
           </ul>
         <ul className='about_section4'>
          {
            dataAbout.map((elt)=>(
                <li key={elt.id} className='_sectionC1'><span style={{color:"#253D4E",fontSize:"25px",fontWeight:"900",fontFamily:"Quicksand, sans-serif",padding:"10px",marginBottom:"10px"}}>{elt.titre}</span><br/><span style={{padding:"10px",margin:"5px"}}>{elt.contenu}</span></li>
            ))
          }
        </ul>
           <Compteur/>
           <OurTeam/>
    </div>
    <Footer/>
    </>
}
function Compteur(){
    const data=[
        {
            id:1,
            titre:"Glorious years",
            compter:100
        },
       {
        id:2,
        titre:"Happy clients",
        compter:105
       },
       {
        id:3,
        titre:"Projects complete",
        compter:20
       },
  {
    id:5,
    titre:"Team advisor",
    compter:40
  },
  {
    id:6,
    titre:"Products Sale",
    compter:20
  }     
    ]
    return<>
    <ul className='about_section5'>
  {
    data.map((elt)=>(
        <li key={elt.id} className='_section5A'><CountUp end={elt.compter} duration={20} className='_compteur'></CountUp> <span style={{fontFamily:"Quicksand, sans-serif",color:"white",fontSize:"30px",marginTop:"-5px",backgroundColor:"black",textAlign:"center", position:"relative", left:"20%"}}>+</span><br/><span style={{fontSize:"25px",fontWeight:"700", color:"white", backgroundColor:"black"}}>{elt.titre}</span></li>
    ))
  }
    </ul>
    
    </>
}
function OurTeam(){
    const DataDescribe=[
        {
            id:1,
            categorie:"Our Team",
            titre:"Meet Our Expert Team",
            contenu:"Proin ullamcorper pretium orci. Donec necscele risque leo. Nam massa dolor imperdiet neccon sequata congue idsem. Maecenas malesuada faucibus finibus.Proin ullamcorper pretium orci. Donec necscele risque leo. Nam massa dolor imperdiet neccon sequata congue idsem. Maecenas malesuada faucibus finibus"
        }
    ]
    const DataTeam=[
        {
        id:1,
        firstname:"H. Merinda",
        profile:"CEO & Co-Founder",
        tweeter:"",
        picture:profile2,
        facebook:"",
        instagram:""
        },
        {
            id:2,
            firstname:"Dilan Specter",
            profile:"Head Engineer",
            tweeter:"",
            picture:profile1,
            facebook:"",
            instagram:""
            }
    ]
    return<>
    <p style={{textAlign:"center",color:"black",fontSize:"30px", fontWeight:"900", fontFamily:"Quicksand, sans-serif"}}>Our Team </p>
    <ul className='_ourTeam'>
        
        {
            DataDescribe.map((elt)=>(
                <li key={elt.id} className='ourTeam_firstSection'><span style={{color:"green", fontWeight:"700",fontFamily:"Quicksand, sans-serif",margin:"5px",padding:"10px"}}>{elt.categorie}</span><br/><span style={{fontFamily:"Quicksand, sans-serif",fontWeight:"900",fontSize:"50px",margin:"8px",padding:"8px"}}>{elt.titre}</span><br/><span style={{margin:"5px",padding:"5px"}}>{elt.contenu}</span><br/><button style={{backgroundColor:"#3bb77e",height:"40px",width:"60%", border:"1px solid white", borderRadius:"5px",margin:"10px"}}><a href="#more">View All Membres</a></button></li>
            ))
        }
        {
            DataTeam.map((data)=>(
                <li key={data.id} className='ourTeam_lastSection'><img src={data.picture} alt="logo" style={{width:"90%",borderRadius:"10px"}}></img><br/><div className='ourTeam_profil'><span style={{fontSize:"20px",position:"relative",padding:"20%",top:"15%"}}>{data.firstname}</span><br/><span style={{position:"relative",top:"15%",padding:"20%"}}>{data.profile}</span><br/><img src={iconetwitter} alt="logo twitter" className='about_socialMedia'/><img src={iconefacebook} alt="icone facebook" className='about_socialMedia'/><img src={iconetinstagram} alt="icone instagram" className='about_socialMedia'/><img src={iconeyoutub} alt="logo youtub" className='about_socialMedia'/></div></li>
            ))
        }
    </ul>
    </>
}