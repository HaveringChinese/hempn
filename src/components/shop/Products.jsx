import Mask from "../images/Black-Mask.jpg";
import ChewToy from "../images/dogchewtoy.jpg";
import Beanie from "../images/europeanslouchbeanie.jpg";
import Tote from "../images/Farmer_tote__51179.jpg";
import Tee from "../images/goodPlanetsT.jpeg";
import Journal from "../images/hemp-journal.jpg";
import Towels from "../images/Hemp-Kitchen-Towels-Group-800x800.png"
import TP from "../images/Hemp-Toilet-Paper.jpg";
import Cord from "../images/hempcord.jpg";
import Wallet from "../images/slimelinewalletgreen.jpg";
import Toiletry from "../images/Toiletry-Bag.jpg";


const Products = [
  {
  key: 1,
  name: "hemp (raw)",
  description: "Bulk industrial hemp.",
  price: "$.40/lb",
  carbon: 0.15,
  source: Mask
  },
  {
  key: 2,
  name: "Hemp Chew Toy",
  description: "Now your doggos can help fight climate change by chewing on all-natural, biodegradable hemp chew toys. Chow down!",
  price: "$7.99",
  carbon: 1.25,
  source: ChewToy
  },
  {
  key: 3,
  name: "European Slouch Beanie",
  description: "This cozy beanie will be warming you, not the planet.",
  price: "$15.99",
  carbon: 1.1,
  source: Beanie
  },
  {
  key: 4,
  name: "Hemp Tote Bag",
  description: "This tote not only has itself sequestered greenhouse gases, but will also help you avoid using petroleum-based or other single-use shopping bags.",
  price: "$4.99",
  carbon: 0.9,
  source: Tote
  },
  {
  key: 5,
  name: "Hemp T-Shirt",
  description: "Now you can obnoxiously signal that you care about Mother Earth enough to spend slightly more on a 100% hemp, carbon-negative T-shirt. Not all heroes wear capes. Some wear tees.",
  price: "$24.99",
  carbon: 3.3,
  source: Tee 
  },
  {
  key: 6,
  name: "Carbon-Negative Journal",
  description: "We can't fight climate change with a sword, no matter how sharp. This journal can be used to vent your frustration at carbon-intensive industrialists. The pen is mightier!",
  price: "$17.99",
  carbon: 2.5,
  source: Journal
  }, 
  {
  key: 7,
  name: "Hemp Towels",
  description: "These towels will keep you dry, while helping to keep coastal-dwelling loved ones on dry land.",
  price: "$28.99",
  carbon: 5.3,
  source: Towels
  },
  {
  key: 8,
  name: "100% Hemp-based Toilet Paper",
  description: "Gentle on your rump, gentler on our environment.",
  price: "$4.99 / package",
  carbon: 1.4,
  source: TP
  },
  {
  key: 9,
  name: "Hemp Rope",
  description: "For tying together arks to survive glacial melt floods. And other less grown up things.",
  price: "$1.50",
  carbon: 1.6,
  source: Cord
  },
  {
  key: 10,
  name: "Hemp Wallet",
  description: "The first wallet that is 100% green, inside and out.",
  price: "$34.99",
  carbon: 0.9,
  source: Wallet
  },
  {
    key: 11,
    name: "Hemp Toiletry Bag",
    description: "They'll make just about anything out of hemp these days. Isn't it awesome?",
    price: "$37.99",
    carbon: 8.3,
    source: Toiletry
    }
];

export default Products;