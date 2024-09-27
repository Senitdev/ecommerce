
import { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import iconeArrow from "../../assets/images/popularproduct/arrow-repeat.svg";
import iconeHeart from "../../assets/images/popularproduct/chevron-double-right.svg";
import info from "../../assets/images/popularproduct/info-circle.svg";
import panier from "../../assets/images/popularproduct/panier.png";
import product1 from "../../assets/images/popularproduct/product-1-2.png";
import product10 from "../../assets/images/popularproduct/product-10-2.png";
import product2 from "../../assets/images/popularproduct/product-2-2.png";
import product3 from "../../assets/images/popularproduct/product-3-2.png";
import product4 from "../../assets/images/popularproduct/product-4-2.png";
import product5 from "../../assets/images/popularproduct/product-5-2.png";
import product6 from "../../assets/images/popularproduct/product-6-2.png";
import product7 from "../../assets/images/popularproduct/product-7-2.png";
import product8 from "../../assets/images/popularproduct/product-8-2.png";
import product9 from "../../assets/images/popularproduct/product-9-2.png";
import "../../components/popularProduct/popularproduct.css";
export const PopularProduct=()=>{
    const[show,setShow]=useState(false);
    const handleClose=()=>setShow(false);
    const handleShow=()=>setShow(true);
const ListProdut=[
    {
        titre:"Seeds of Change Organic Quinoa, Brown, & Red Rice",
        image:product1,
        categorie:"snack",
        prix:28.85,
        promotion:32.8,
        auteur:"NestFood",
        statut:"Hot",
        id:1
    },
    {
        titre:"All Natural Italian-Style Chicken Meatballs",
        image:product2,
        categorie:"Hodo Foods",
        prix:52.85,
        promotion:55.8,
        auteur:"Stouffer",
        statut:"Sale",
        id:2
    },
    {
        titre:"Angie’s Boomchickapop Sweet & Salty Kettle Corn",
        image:product3,
        categorie:"Snack",
        prix:48.85,
        promotion:52.8,
        auteur:"StarKist",
        statut:"New",
        id:3
    },
    {
        titre:"Foster Farms Takeout Crispy Classic Buffalo Wings",
        image:product4,
        categorie:"Vegetables",
        prix:48.85,
        promotion:52.8,
        auteur:"NestFood",
        statut:"",
        id:4
    },
    {
        titre:"Blue Diamond Almonds Lightly Salted Vegetables",
        image:product5,
        categorie:"Pet Foods",
        prix:23.85,
        promotion:25.8,
        auteur:"NestFood",
        statut:"-14%",
        id:5
    },
    {
        titre:"Chobani Complete Vanilla Greek Yogurt",
        image:product6,
        categorie:"Hodo Foods",
        prix:54.85,
        promotion:55.8,
        auteur:"NestFood",
        statut:"",
        id:6
    },
    {
        titre:"Canada Dry Ginger Ale - 2 L Bottle - 200ml - 400g",
        image:product7,
        categorie:"Meats",
        prix:32.85,
        promotion:33.8,
        auteur:"NestFood",
        statut:" ",
        id:7
    },
    {
        titre:"Encore Seafoods Stuffed Alaskan Salmon",
        image:product8,
        categorie:"Snack",
        prix:35.85,
        promotion:37.8,
        auteur:"NestFood",
        statut:"Sale",
        id:8
    },
    {
        titre:"Gorton’s Beer Battered Fish Fillets with soft paper",
        image:product9,
        categorie:"Coffes",
        prix:23.85,
        promotion:25.8,
        auteur:"Old El Paso",
        statut:"Hot",
        id:9
    },
    {
        titre:"Haagen-Dazs Caramel Cone Ice Cream Ketchup",
        image:product10,
        categorie:"Cream",
        prix:22.85,
        promotion:24.85,
        auteur:"Tyson",
        id:10
    },
]
const[id,setId]=useState(0);
const HandleClic=(id)=>{
setShow(true);
setId(id);
}


return<div className="popularProduct">
    <p id="pTitre">Popular Product</p>
    <ul className="menuPopular">
        <li>All</li>
        <li>Milks & Dairies</li>
        <li>Coffes & Teas</li>
        <li>Pet Foods</li>
        <li>Meats</li>
        <li>Vegetables</li>
        <li>Fruits</li>
    </ul>
    <ul className="cadrePopular">
        {
            ListProdut.map((produit)=>(
               <li key={produit.id} className="cadrePopular1">
                <ul id="option">
                    <li><img src={info} alt="logo" onClick={()=>HandleClic(produit.id)}></img></li>
                    <li ><img src={iconeArrow} alt="logo" onClick={()=>HandleClic(produit.id)}></img></li>
                    <li><img src={iconeHeart} alt="logo" onClick={()=>HandleClic(produit.id)}></img></li>
                </ul>
                <img src={produit.image} alt="logo" className="imagePopular"></img><br/><span className="popular_categorie">{produit.categorie}</span><br/><span className="titlePopular">{produit.titre}</span><br/><span className="priceNormal">${produit.prix} <span className="prixPromotion">${produit.promotion}</span></span><button className="btn_addShop"><img src={panier} alt="iconePanier" className="Iconepanier"></img>Add</button></li> 
            ))
        }
    </ul>

    {/*Modal */}
    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
         
        <div className="cadrePopular1">
         <p>Id produit:{id}</p>
          <ul>
            {
                <li>Photo image</li>
            }
          </ul>
        </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
}