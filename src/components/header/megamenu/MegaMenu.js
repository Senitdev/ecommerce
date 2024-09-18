import barMenu from '../../../assets/images/megaMenu/bannerMenu.png';
import '../megamenu/megamenu.css';
const MegaMenu=()=>{
return<>
<div className='megamenu'>
    <div className='megamenu1'>
    <ul>
        <div className='titre'>Fruits & Vegetables</div>
        <li>Meat & Poultry</li>
        <li>Fresh Vegetables</li>
        <li>Herbs & Seasonings</li>
        <li>Cuts & Sprouts</li>
        <li>Exotic Fruits & Veggies</li>
        <li>Packaged Produce</li>
    </ul>
    </div>
    <div className='megamenu2'>
    <ul>
        <div className='titre'>Packaged Produce</div>
        <li>Breakfast & Dairy</li>
        <li>Milk & Flavoured Milk</li>
        <li>Butter and Margarine</li>
        <li>Eggs Substitutes</li>
        <li>Marmalades</li>
        <li>Sour Cream</li>
        <li>Sour Cream</li>
        <li>Cheese</li>
    </ul>
    </div>
    <div className='megamenu3'>
    <ul>
        <div className='titre'>Meat & Seafood</div>
        <li>Breakfast Sausage</li>
        <li>Dinner Sausage</li>
        <li>Chicken</li>
        <li>Sliced Deli Meat</li>
        <li>Wild Caught Fillets</li>
        <li>Crab and Shellfish</li>
    </ul>
    </div>
    <div className='megamenu4'>
        <div className='option'>
        <ul>
            <li className='titreH1'>Hot deals</li>
            <li className='titreH2'>Don't miss Trending</li>
            <li className='titreH3'>Save to 50%</li>
            <button className='btnShow'>Show now</button>
        </ul>
        </div>
        <img src={barMenu} alt="Logo bar menu" className='logoMenu'/>
    </div>
</div>
</>
}
export default MegaMenu;
