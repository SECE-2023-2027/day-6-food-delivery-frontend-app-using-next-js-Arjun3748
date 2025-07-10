import Banner from '../../components/Banner';
import RestaurantCard from '../../components/RestaurantCard';

const restaurants = [
  {
    name: 'Chinese Wok',
    img: 'https://images.unsplash.com/photo-1584270354949-1fe6f8d6e8b3?auto=format&fit=crop&w=800&q=80',
    tags: 'Chinese, Asian, Tibetan',
    price: '₹250 for two',
  },
  {
    name: 'BOX8 - Desi Meals',
    img: 'https://images.unsplash.com/photo-1625921915556-4fa553f81c1d?auto=format&fit=crop&w=800&q=80',
    tags: 'North Indian, Thali, Home Food',
    price: '₹200 for two',
  },
  {
    name: 'Bikanervala',
    img: 'https://images.unsplash.com/photo-1625918676340-cd8327b9c9b7?auto=format&fit=crop&w=800&q=80',
    tags: 'Sweets, South Indian, Snacks',
    price: '₹300 for two',
  },
  {
    name: 'White Hart Pizza',
    img: 'https://images.unsplash.com/photo-1548365328-6087d6ae3f3c?auto=format&fit=crop&w=800&q=80',
    tags: 'Pizza, Burgers, Beverages',
    price: '₹250 for two',
  },
  {
    name: 'Cheeseger Pizza',
    img: 'https://images.unsplash.com/photo-1594007654729-c56f49c49f2a?auto=format&fit=crop&w=800&q=80',
    tags: 'Cheesy Crust Pizza',
    price: '₹300 for two',
  }
];


export default function Home() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      <Banner />
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {restaurants.map((rest, index) => (
          <RestaurantCard key={index} {...rest} />
        ))}
      </div>
    </div>
  );
}
