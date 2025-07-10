export default function RestaurantPage({ params }) {
  const { id } = params;

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Restaurant {id}</h1>
      <p>Menu will be displayed here...</p>
    </div>
  );
}
