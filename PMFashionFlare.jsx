import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

const products = {
  Saries: [
    { id: 1, name: "Silk Sari", price: 2500, image: "/images/silk_sari.jpg" },
    { id: 2, name: "Cotton Sari", price: 1800, image: "/images/cotton_sari.jpg" },
    { id: 5, name: "Banarasi Sari", price: 3000, image: "/images/banarasi_sari.jpg" },
    { id: 6, name: "Kanjivaram Sari", price: 4500, image: "/images/kanjivaram_sari.jpg" },
    { id: 9, name: "Chiffon Sari", price: 2800, image: "/images/chiffon_sari.jpg" },
  ],
  "3 Pieces": [
    { id: 3, name: "Designer 3 Piece", price: 3200, image: "/images/designer_3piece.jpg" },
    { id: 4, name: "Casual 3 Piece", price: 2000, image: "/images/casual_3piece.jpg" },
    { id: 7, name: "Embroidered 3 Piece", price: 3500, image: "/images/embroidered_3piece.jpg" },
    { id: 8, name: "Festive 3 Piece", price: 4000, image: "/images/festive_3piece.jpg" },
    { id: 10, name: "Luxury 3 Piece", price: 5000, image: "/images/luxury_3piece.jpg" },
  ],
  Lehenga: [
    { id: 11, name: "Bridal Lehenga", price: 15000, image: "/images/bridal_lehenga.jpg" },
    { id: 12, name: "Party Wear Lehenga", price: 9000, image: "/images/party_lehenga.jpg" },
    { id: 13, name: "Designer Lehenga", price: 12000, image: "/images/designer_lehenga.jpg" },
  ],
  Kurti: [
    { id: 14, name: "Casual Kurti", price: 2000, image: "/images/casual_kurti.jpg" },
    { id: 15, name: "Embroidered Kurti", price: 3000, image: "/images/embroidered_kurti.jpg" },
    { id: 16, name: "Party Wear Kurti", price: 3500, image: "/images/party_kurti.jpg" },
  ],
};

export default function PMFashionFlare() {
  const [category, setCategory] = useState("Saries");
  const [cart, setCart] = useState([]);
  const [priceRange, setPriceRange] = useState(5000);
  const [checkoutOpen, setCheckoutOpen] = useState(false);
  
  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const totalPrice = cart.reduce((total, item) => total + item.price + 100, 0);

  return (
    <div className="p-4 bg-gradient-to-r from-pink-200 to-sky-300 min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-6 text-pink-800">PM Fashion Flare</h1>
      <h2 className="text-center text-lg text-gray-700">Owned by Proma Barua</h2>
      <div className="flex space-x-4 mb-6 justify-center">
        {Object.keys(products).map((cat) => (
          <Button key={cat} onClick={() => setCategory(cat)} className="px-4 py-2 border rounded-lg bg-white text-pink-600 hover:bg-pink-100">
            {cat}
          </Button>
        ))}
      </div>
      <div className="mb-6">
        <label className="block mb-2 font-semibold text-pink-800">Price Range: {priceRange} BDT</label>
        <input
          type="range"
          min="500"
          max="15000"
          value={priceRange}
          onChange={(e) => setPriceRange(e.target.value)}
          className="w-full"
        />
      </div>
      <div className="grid grid-cols-2 gap-4">
        {products[category].filter(p => p.price <= priceRange).map((product) => (
          <Card key={product.id} className="cursor-pointer hover:shadow-lg transition bg-white">
            <CardContent className="p-4">
              <img src={product.image} alt={product.name} className="w-full h-40 object-cover mb-2" />
              <h2 className="text-lg font-bold mb-2 text-pink-800">{product.name}</h2>
              <p className="mb-2 text-gray-700">{product.price} BDT</p>
              <Button className="w-full bg-pink-500 text-white hover:bg-pink-700" onClick={() => addToCart(product)}>Add to Cart</Button>
            </CardContent>
          </Card>
        ))}
      </div>
      {cart.length > 0 && (
        <div className="mt-6 p-6 border rounded-lg bg-pink-100">
          <h2 className="text-xl font-bold mb-4 text-pink-800">Cart</h2>
          {cart.map((item, index) => (
            <p key={index} className="mb-1 text-gray-700">{item.name} - {item.price + 100} BDT</p>
          ))}
          <p className="font-semibold mt-2 text-pink-800">Total Price: {totalPrice} BDT</p>
          <Button className="mt-4 w-full bg-pink-600 text-white hover:bg-pink-800" onClick={() => setCheckoutOpen(true)}>Checkout</Button>
        </div>
      )}
      <footer className="mt-12 p-4 bg-pink-800 text-white text-center rounded">
        <p>&copy; 2025 PM Fashion Flare | Privacy Policy | Terms & Conditions</p>
      </footer>
    </div>
  );
}
