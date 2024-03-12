const Cart = require('../Models/Cart');

const createCart = async (req, res) => {
  try {
    const { produitId, quantity } = req.body;
    const userId = req.user.userId;

    let cart = await Cart.findOne({ user: userId });

    if (cart) {
      const produits = cart.produits || [];
      const produitIndex = produits.findIndex((p) => p.produit.toString() === produitId);

      if (produitIndex !== -1) {
        produits[produitIndex].quantity += quantity;
      } else {
        produits.push({ produit: produitId, quantity });
      }

      cart.produits = produits;
    } else {
      cart = new Cart({ user: userId, produits: [{ produit: produitId, quantity }] });
    }

    const savedCart = await (await cart.save()).populate({path:'produits.produit',model : 'Produit',});
    res.status(200).json(savedCart);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getCart =  async (req, res) => {
  try {
    const userId = req.user.userId; 
    const cart = await Cart.findOne({ user: userId }).populate('produits.produit');
    if (!cart) {
      return res.status(404).json({ error: 'Panier non trouvé' });
    }
    res.status(200).json(cart);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
const creaseQuantity =async (req,res)=>{
  const { produitId, action } = req.body;
  const userId = req.user.userId;
  const cart = await Cart.findOne({ user: userId });
  if (cart) {
    let produits = cart.produits || [];
    const produitIndex = produits.findIndex((p) => p.produit.toString() === produitId);

    if (produitIndex !== -1) {
      if(action == 'increase'){
        produits[produitIndex].quantity ++;
      }else if(action == 'decrease'){
        if(produits[produitIndex].quantity > 1){
          produits[produitIndex].quantity --;
        }
        else{
          produits = produits.filter((produit,index) =>  index !== produitIndex);
        }
        
      }
    } else {
      return res.status(404).json({message:'product not found in the cart'})
    }

    cart.produits = produits;
    const savedCart = await (await cart.save()).populate({path:'produits.produit',model : 'Produit',});
    return res.status(200).json(savedCart);
  } else {
    return res.status(404).json({message:'cart not found'})
  }
  
}
const deleteCart = async (req, res) => {
  try {
    const { produitId } = req.params;
    const userId = req.user.userId;
    const cart = await Cart.findOne({ user: userId });
    if (cart) {
      let produits = cart.produits || [];
      const produitIndex = produits.findIndex((p) => p.produit.toString() === produitId);
      
      if (produitIndex !== -1) {
        produits = produits.filter(produit => produit.produit != produitId);
      } else {
        return res.status(404).json({message:'product not found in the cart'})
      }
  
      cart.produits = produits;
      const savedCart = await (await cart.save()).populate({path:'produits.produit',model : 'Produit',});
      return res.status(200).json(savedCart);
    } else {
      return res.status(404).json({message:'cart not found'})
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createCart,
  getCart,
  deleteCart,
  creaseQuantity
};
