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
export const DataStore=({type})=>{
const popularProduct=[
    {
        titre:"Seeds of Change Organic Quinoa, Brown, & Red Rice",
        image:product1,
        categorie:"snack",
        prix:28.85,
        promotion:32.8,
        auteur:"NestFood",
        statut:"Hot",
        background:'rgb(240, 105, 132)',
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
        background:'rgb(156, 156, 228)',
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
        background:'rgb(106, 235, 73)',
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
        background:"red",
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
        background:'rgba(221, 78, 78, 0.486)',
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
        background:"red",
        id:6
    },
    {
        titre:"Canada Dry Ginger Ale - 2 L Bottle - 200ml - 400g",
        image:product7,
        categorie:"Meats",
        prix:32.85,
        promotion:33.8,
        auteur:"NestFood",
        statut:"",
        background:"red",
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
        background:'rgb(156, 156, 228)',
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
        background:'rgb(240, 105, 132)',
        id:9
    },
    {
        titre:"Haagen-Dazs Caramel Cone Ice Cream Ketchup",
        image:product10,
        categorie:"Cream",
        prix:22.85,
        promotion:24.85,
        auteur:"Tyson",
        statut:"",
        background:"red",
        id:10
    }
]
}