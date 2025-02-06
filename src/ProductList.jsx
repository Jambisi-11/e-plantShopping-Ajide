import React, { useState, useEffect } from 'react';
import './ProductList.css';
import CartItem from './CartItem';
import { addItem } from './CartSlice';
import { useDispatch, useSelector } from 'react-redux';

function ProductList() {
    const [showCart, setShowCart] = useState(false); 
    const [showPlants, setShowPlants] = useState(false); 
    const [addedToCart, setAddedToCart] = useState({});
    const cartCount = useSelector((state) =>
        state.cart.items.reduce((total, item) => total + item.quantity, 0)
    );

    const dispatch = useDispatch();

    const plantsArray = [
        {
            category: "Air Purifying Plants",
            plants: [
                {
                    name: "Melon Flower",
                    image: "https://cdn.pixabay.com/photo/2016/04/05/15/57/pansy-1309632_960_720.jpg",
                    description: "Produces oxygen at night, improving air quality.",
                    cost: "$22"
                },
                {
                    name: "Skinny Plant",
                    image: "https://cdn.pixabay.com/photo/2013/10/24/16/00/flowers-200270_960_720.jpg",
                    description: "Filters formaldehyde and xylene from the air.",
                    cost: "$18"
                },
                {
                    name: "Cactus Garden",
                    image: "https://cdn.pixabay.com/photo/2022/12/05/18/53/cactus-7637462_1280.jpg",
                    description: "Removes mold spores and purifies the air.",
                    cost: "$38"
                },
                {
                    name: "Queen of the night",
                    image: "https://cdn.pixabay.com/photo/2019/06/20/13/24/queen-of-the-night-4287128_960_720.jpg",
                    description: "Adds humidity to the air and removes toxins.",
                    cost: "$28"
                },
                {
                    name: "Cactus, Pink flower",
                    image: "https://cdn.pixabay.com/photo/2023/02/01/17/58/cactus-7760970_960_720.jpg",
                    description: "Easy to care for and effective at removing toxins.",
                    cost: "$23"
                },
                {
                    name: "Christmas cactus",
                    image: "https://cdn.pixabay.com/photo/2013/04/12/23/02/christmas-cactus-103118_960_720.jpg",
                    description: "Purifies the air and has healing properties for skin.",
                    cost: "$20"
                }
            ]
        },
        {
            category: "Aromatic Fragrant Plants",
            plants: [
                {
                    name: "Lavender",
                    image: "https://images.unsplash.com/photo-1611909023032-2d6b3134ecba?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                    description: "Calming scent, used in aromatherapy.",
                    cost: "$20"
                },
                {
                    name: "Jasmine",
                    image: "https://images.unsplash.com/photo-1592729645009-b96d1e63d14b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                    description: "Sweet fragrance, promotes relaxation.",
                    cost: "$18"
                },
                {
                    name: "Rosemary",
                    image: "https://cdn.pixabay.com/photo/2019/10/11/07/12/rosemary-4541241_1280.jpg",
                    description: "Invigorating scent, often used in cooking.",
                    cost: "$15"
                },
                {
                    name: "Mint",
                    image: "https://cdn.pixabay.com/photo/2016/01/07/18/16/mint-1126282_1280.jpg",
                    description: "Refreshing aroma, used in teas and cooking.",
                    cost: "$12"
                },
                {
                    name: "Lemon Balm",
                    image: "https://cdn.pixabay.com/photo/2019/09/16/07/41/balm-4480134_1280.jpg",
                    description: "Citrusy scent, relieves stress and promotes sleep.",
                    cost: "$14"
                },
                {
                    name: "Hyacinth",
                    image: "https://cdn.pixabay.com/photo/2019/04/07/20/20/hyacinth-4110726_1280.jpg",
                    description: "Hyacinth is a beautiful flowering plant known for its fragrant.",
                    cost: "$22"
                }
            ]
        },
        {
            category: "Insect Repellent Plants",
            plants: [
                {
                    name: "Oregano",
                    image: "https://cdn.pixabay.com/photo/2015/05/30/21/20/oregano-790702_1280.jpg",
                    description: "The oregano plant contains compounds that can deter certain insects.",
                    cost: "$10"
                },
                {
                    name: "Marigold",
                    image: "https://cdn.pixabay.com/photo/2022/02/22/05/45/marigold-7028063_1280.jpg",
                    description: "Natural insect repellent, also adds color to the garden.",
                    cost: "$8"
                },
                {
                    name: "Geraniums",
                    image: "https://cdn.pixabay.com/photo/2012/04/26/21/51/flowerpot-43270_1280.jpg",
                    description: "Known for their insect-repelling properties while adding a pleasant scent.",
                    cost: "$20"
                },
                {
                    name: "Basil",
                    image: "https://cdn.pixabay.com/photo/2016/07/24/20/48/tulsi-1539181_1280.jpg",
                    description: "Repels flies and mosquitoes, also used in cooking.",
                    cost: "$9"
                },
                {
                    name: "Lavender",
                    image: "https://images.unsplash.com/photo-1611909023032-2d6b3134ecba?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                    description: "Calming scent, used in aromatherapy.",
                    cost: "$20"
                },
                {
                    name: "Catnip",
                    image: "https://cdn.pixabay.com/photo/2015/07/02/21/55/cat-829681_1280.jpg",
                    description: "Repels mosquitoes and attracts cats.",
                    cost: "$13"
                }
            ]
        }
    ];

    const styleObj = {
        backgroundColor: '#4CAF50',
        color: '#fff!important',
        padding: '15px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        fontSize: '20px',
    };
    const styleObjUl = {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '1100px',
    };
    const styleA = {
        color: 'white',
        fontSize: '30px',
        textDecoration: 'none',
    };

    const handleCartClick = (e) => {
        e.preventDefault();
        setShowCart(true); // Set showCart to true when cart icon is clicked
    };
    const handlePlantsClick = (e) => {
        e.preventDefault();
        setShowPlants(true); // Set showAboutUs to true when "About Us" link is clicked
        setShowCart(false); // Hide the cart when navigating to About Us
    };

    const handleContinueShopping = (e) => {
        e.preventDefault();
        setShowPlants(true);
        setShowCart(false);
    };

    const handleAddToCart = (product) => {
        const numericCost = parseFloat(product.cost.replace('$', '')); // Convert cost to number
        if (isNaN(numericCost)) {
            console.error(`Invalid cost format for product: ${product.name}`);
            return;
        }
        const updatedProduct = { ...product, cost: numericCost, quantity: 1 }; // Add quantity if not present
        dispatch(addItem(updatedProduct)); // Dispatch the updated product
        setCartCount(cartCount + 1);
    };

    
    return (
        <div>
            <div className="navbar" style={styleObj}>
                <div className="tag">
                    <div className="luxury">
                        <img src="https://cdn.pixabay.com/photo/2022/10/15/14/55/ornamental-plant-7523304_960_720.jpg" alt="" />
                        <a href="/" style={{ textDecoration: 'none' }}>
                            <div>
                                <h3 style={{ color: 'white' }}>More-Of-You Nursery</h3>
                                <i style={{ color: 'white' }}>Where Greenery Meets Peace</i>
                            </div>
                        </a>
                    </div>
                </div>
                <div style={styleObjUl}>
                    <div> <a href="#" onClick={(e) => handlePlantsClick(e)} style={styleA}>Plants</a></div>
                    <div> <a href="#" onClick={(e) => handleCartClick(e)} style={styleA}><h1 className='cart'>
                        <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            viewBox="0 0 256 256" 
                            id="IconChangeColor" 
                            height="68" 
                            width="68">
                            <rect 
                                width="156" 
                                height="156" 
                                fill="none">
                            </rect>
                            <circle 
                                cx="80" 
                                cy="216" 
                                r="12">
                            </circle>
                            <circle 
                                cx="184" 
                                cy="216" 
                                r="12">
                            </circle>
                            <path 
                                d="M42.3,72H221.7l-26.4,92.4A15.9,15.9,0,0,1,179.9,176H84.1a15.9,15.9,0,0,1-15.4-11.6L32.5,37.8A8,8,0,0,0,24.8,32H8" fill="none" 
                                stroke="#faf9f9" 
                                stroke-linecap="round" 
                                stroke-linejoin="round" 
                                stroke-width="2" 
                                id="mainIconPathAttribute">
                            </path>
                        </svg>
                        {cartCount > 0 && <span className="px-2 py-1 font-bold text-[0.7em] bg-red-600 h-7 w-7  text-center rounded-2xl">{cartCount}</span>}
                    </h1>
                    </a>
                    </div>
                </div>
            </div>
            {!showCart ? (
                
                <div className="product-grid">
                 <div className=''>
                    {plantsArray.map((category, index) => (
                        <div key={index}>
                            <h1><div className='text-[2em] font-bold'>{category.category}</div></h1>
                            <div className="product-list">
                                {category.plants.map((plant) => (
                                    <div className="product-card" key={plant.name}> 
                                    
                                        <img className="w-[95%] h-[30vh] flex justify-center items-center" src={plant.image} alt={plant.name} />
                                        <div className="product-title">{plant.name}</div>
                                        <div className="product-description">{plant.description}</div>
                                        <div className="product-cost">{plant.cost}</div>
                                        <button className="product-button" onClick={() => handleAddToCart(plant)} alert={'Added to Your Cart'}>Add to Cart</button>
                                    </div>
                                ))}
                            </div>
                        </div>
                        
                    ))}
                    </div>
                </div>
            ) : (
                <CartItem onContinueShopping={handleContinueShopping} />
            )}
        </div>
    );
}

export default ProductList;
