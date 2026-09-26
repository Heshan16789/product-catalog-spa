
// =========================
// IMAGE IMPORTS
// =========================

// ESPRESSO
import EthiopianEspresso from "../assets/ethiopian-espresso.jpg";
import ClassicEspresso from "../assets/classic-espresso.jpg";
import DoubleEspresso from "../assets/double-espresso.jpg";
import CaramelEspresso from "../assets/caramel-espresso.jpg";

// LATTE
import ClassicLatte from "../assets/classic-latte.jpg";
import VanillaLatte from "../assets/vanilla-latte.jpg";
import CaramelLatte from "../assets/caramel-latte.jpg";
import HazelnutLatte from "../assets/hazelnut-latte.jpg";
import CinnamonLatte from "../assets/cinnamon-latte.jpg";

// COLD BREW
import ClassicColdBrew from "../assets/classic-cold-brew.jpg";
import VanillaColdBrew from "../assets/vanilla-cold-brew.jpg";
import CaramelColdBrew from "../assets/caramel-cold-brew.jpg";
import MochaColdBrew from "../assets/mocha-cold-brew.jpg";
import CoconutColdBrew from "../assets/coconut-cold-brew.jpg";

// PREMIUM
import CeylonPremiumRoast from "../assets/ceylon-premium-roast.jpg";
import EthiopianYirgacheffe from "../assets/ethiopian-yirgacheffe.jpg";
import ColombianSupremo from "../assets/colombian-supremo.jpg";
import BrazilianSantos from "../assets/brazilian-santos.jpg";
import JamaicanBlueMountain from "../assets/jamaican-blue-mountain.jpg";

// CAPPUCCINO
import ClassicCappuccino from "../assets/classic-cappuccino.jpg";
import VanillaCappuccino from "../assets/vanilla-cappuccino.jpg";
import CaramelCappuccino from "../assets/caramel-cappuccino.jpg";
import HazelnutCappuccino from "../assets/hazelnut-cappuccino.jpg";
import CinnamonCappuccino from "../assets/cinnamon-cappuccino.jpg";

// MOCHA
import DarkChocolateMocha from "../assets/dark-chocolate-mocha.jpg";
import WhiteChocolateMocha from "../assets/white-chocolate-mocha.jpg";
import CaramelMocha from "../assets/caramel-mocha.jpg";
import HazelnutMocha from "../assets/hazelnut-mocha.jpg";

// =========================
// PRODUCTS
// =========================

export const products = [

  // =========================
  // ESPRESSO
  // =========================

  {
    id: 1,
    name: "Ethiopian Espresso",
    price: 3500,
    oldPrice: 5000,
    image: EthiopianEspresso,
    description:
      "Premium Ethiopian espresso with rich chocolate and caramel notes.",
    brand: "Kavya",
    category: "Espresso",
    rating: 4.5,
    stock: 12,
  },

 

  {
    id: 3,
    name: "Classic Espresso",
    price: 3200,
    oldPrice: 4200,
    image: ClassicEspresso,
    description:
      "A classic espresso blend with deep roasted flavors and a balanced finish.",
    brand: "Coffee Herald",
    category: "Espresso",
    rating: 4.4,
    stock: 20,
  },

  {
    id: 4,
    name: "Double Espresso",
    price: 3900,
    oldPrice: 4900,
    image: DoubleEspresso,
    description:
      "Dark roasted coffee with intense flavor, rich crema, and a smoky aroma.",
    brand: "Kavya",
    category: "Espresso",
    rating: 4.6,
    stock: 10,
  },

  {
    id: 5,
    name: "Caramel Espresso",
    price: 4100,
    oldPrice: 5300,
    image: CaramelEspresso,
    description:
      "Smooth espresso with sweet caramel notes and a naturally rich finish.",
    brand: "Bean House",
    category: "Espresso",
    rating: 4.8,
    stock: 14,
  },

  // =========================
  // LATTE
  // =========================

  {
    id: 6,
    name: "Classic Latte",
    price: 3600,
    oldPrice: 4500,
    image: ClassicLatte,
    description:
      "Smooth espresso blended with steamed milk for a creamy coffee experience.",
    brand: "Coffee Herald",
    category: "Latte",
    rating: 4.5,
    stock: 18,
  },

  {
    id: 7,
    name: "Vanilla Latte",
    price: 3900,
    oldPrice: 5000,
    image: VanillaLatte,
    description:
      "Creamy latte infused with sweet vanilla and a smooth espresso base.",
    brand: "Kavya",
    category: "Latte",
    rating: 4.7,
    stock: 13,
  },

  {
    id: 8,
    name: "Caramel Latte",
    price: 4200,
    oldPrice: 5400,
    image: CaramelLatte,
    description:
      "Smooth espresso with steamed milk and delicious caramel flavor.",
    brand: "Bean House",
    category: "Latte",
    rating: 4.8,
    stock: 11,
  },

  {
    id: 9,
    name: "Hazelnut Latte",
    price: 4300,
    oldPrice: 5500,
    image: HazelnutLatte,
    description:
      "Rich espresso and steamed milk combined with roasted hazelnut flavor.",
    brand: "Kavya",
    category: "Latte",
    rating: 4.6,
    stock: 9,
  },

  {
    id: 10,
    name: "Cinnamon Latte",
    price: 4000,
    oldPrice: 5100,
    image: CinnamonLatte,
    description:
      "A creamy latte infused with warm cinnamon and smooth espresso.",
    brand: "Coffee Herald",
    category: "Latte",
    rating: 4.5,
    stock: 16,
  },

  // =========================
  // COLD BREW
  // =========================

  {
    id: 11,
    name: "Classic Cold Brew",
    price: 3400,
    oldPrice: 4300,
    image: ClassicColdBrew,
    description:
      "Slow-steeped cold brew with a smooth texture and naturally sweet flavor.",
    brand: "Bean House",
    category: "Cold Brew",
    rating: 4.4,
    stock: 20,
  },

  {
    id: 12,
    name: "Vanilla Cold Brew",
    price: 3700,
    oldPrice: 4700,
    image: VanillaColdBrew,
    description:
      "Refreshing cold brew blended with a smooth and sweet vanilla flavor.",
    brand: "Kavya",
    category: "Cold Brew",
    rating: 4.6,
    stock: 17,
  },

  {
    id: 13,
    name: "Caramel Cold Brew",
    price: 3900,
    oldPrice: 5000,
    image: CaramelColdBrew,
    description:
      "Smooth cold brew coffee with rich caramel notes and a refreshing finish.",
    brand: "Coffee Herald",
    category: "Cold Brew",
    rating: 4.7,
    stock: 14,
  },

  {
    id: 14,
    name: "Mocha Cold Brew",
    price: 4100,
    oldPrice: 5200,
    image: MochaColdBrew,
    description:
      "Refreshing cold brew combined with rich chocolate and subtle coffee sweetness.",
    brand: "Bean House",
    category: "Cold Brew",
    rating: 4.5,
    stock: 12,
  },

  {
    id: 15,
    name: "Coconut Cold Brew",
    price: 4300,
    oldPrice: 5500,
    image: CoconutColdBrew,
    description:
      "Refreshing cold brew with creamy coconut notes and a smooth tropical finish.",
    brand: "Kavya",
    category: "Cold Brew",
    rating: 4.8,
    stock: 8,
  },

  // =========================
  // PREMIUM
  // =========================

  {
    id: 16,
    name: "Ceylon Premium Roast",
    price: 5400,
    oldPrice: 6700,
    image: CeylonPremiumRoast,
    description:
      "Premium Sri Lankan coffee with a rich aroma, balanced body, and smooth finish.",
    brand: "Ceylon Beans",
    category: "Premium",
    rating: 4.8,
    stock: 10,
  },

  {
    id: 17,
    name: "Ethiopian Yirgacheffe",
    price: 5200,
    oldPrice: 6500,
    image: EthiopianYirgacheffe,
    description:
      "Premium Ethiopian coffee featuring floral aromas, citrus notes, and a clean finish.",
    brand: "Kavya Reserve",
    category: "Premium",
    rating: 4.9,
    stock: 7,
  },

  {
    id: 18,
    name: "Colombian Supremo",
    price: 5500,
    oldPrice: 6800,
    image: ColombianSupremo,
    description:
      "Premium Colombian beans with rich caramel sweetness and balanced acidity.",
    brand: "Bean House Reserve",
    category: "Premium",
    rating: 4.8,
    stock: 6,
  },

  {
    id: 19,
    name: "Brazilian Santos",
    price: 5000,
    oldPrice: 6200,
    image: BrazilianSantos,
    description:
      "Smooth Brazilian coffee with chocolate, nutty, and mild caramel flavors.",
    brand: "Coffee Herald",
    category: "Premium",
    rating: 4.7,
    stock: 9,
  },

  {
    id: 20,
    name: "Jamaican Blue Mountain",
    price: 5800,
    oldPrice: 7200,
    image: JamaicanBlueMountain,
    description:
      "Premium coffee with a smooth body, delicate aroma, and refined flavor profile.",
    brand: "Kavya Reserve",
    category: "Premium",
    rating: 4.9,
    stock: 5,
  },

  // =========================
  // CAPPUCCINO
  // =========================

  {
    id: 21,
    name: "Classic Cappuccino",
    price: 3700,
    oldPrice: 4600,
    image: ClassicCappuccino,
    description:
      "Classic cappuccino made with rich espresso, steamed milk, and creamy foam.",
    brand: "Coffee Herald",
    category: "Cappuccino",
    rating: 4.5,
    stock: 18,
  },

  {
    id: 22,
    name: "Vanilla Cappuccino",
    price: 4000,
    oldPrice: 5100,
    image: VanillaCappuccino,
    description:
      "Creamy cappuccino enhanced with sweet vanilla and a rich espresso base.",
    brand: "Kavya",
    category: "Cappuccino",
    rating: 4.7,
    stock: 14,
  },

  {
    id: 23,
    name: "Caramel Cappuccino",
    price: 4200,
    oldPrice: 5300,
    image: CaramelCappuccino,
    description:
      "Rich cappuccino blended with sweet caramel and creamy milk foam.",
    brand: "Bean House",
    category: "Cappuccino",
    rating: 4.6,
    stock: 12,
  },

  {
    id: 24,
    name: "Hazelnut Cappuccino",
    price: 3900,
    oldPrice: 4900,
    image: HazelnutCappuccino,
    description:
      "A warm and aromatic cappuccino with roasted hazelnut flavor.",
    brand: "Coffee Herald",
    category: "Cappuccino",
    rating: 4.5,
    stock: 15,
  },

  {
    id: 25,
    name: "Cinnamon Cappuccino",
    price: 4500,
    oldPrice: 5700,
    image: CinnamonCappuccino,
    description:
      "Strong espresso combined with creamy milk and a touch of cinnamon.",
    brand: "Kavya",
    category: "Cappuccino",
    rating: 4.8,
    stock: 9,
  },

  // =========================
  // MOCHA
  // =========================

 

  {
    id: 27,
    name: "Dark Chocolate Mocha",
    price: 4400,
    oldPrice: 5500,
    image: DarkChocolateMocha,
    description:
      "Bold espresso combined with rich dark chocolate for a deep mocha flavor.",
    brand: "Kavya",
    category: "Mocha",
    rating: 4.8,
    stock: 11,
  },

  {
    id: 28,
    name: "Caramel Mocha",
    price: 4500,
    oldPrice: 5700,
    image: CaramelMocha,
    description:
      "Smooth chocolate mocha blended with sweet caramel and creamy milk.",
    brand: "Bean House",
    category: "Mocha",
    rating: 4.7,
    stock: 13,
  },

  {
    id: 29,
    name: "White Chocolate Mocha",
    price: 4600,
    oldPrice: 5900,
    image: WhiteChocolateMocha,
    description:
      "Creamy espresso drink with sweet white chocolate and steamed milk.",
    brand: "Kavya",
    category: "Mocha",
    rating: 4.9,
    stock: 8,
  },

  {
    id: 30,
    name: "Hazelnut Mocha",
    price: 4700,
    oldPrice: 6000,
    image: HazelnutMocha,
    description:
      "A rich combination of espresso, chocolate, and roasted hazelnut flavors.",
    brand: "Bean House",
    category: "Mocha",
    rating: 4.8,
    stock: 10,
  },
];




