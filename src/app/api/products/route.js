export async function GET() {
  const products = [
    {
      id: 1,
      name: "The Brown Metro Movers",
      price: "₹4499",
      image: "/bag1.png",
      description: "Premium leather backpack perfect for daily commute and travel. Features multiple compartments and durable construction."
    },
    {
      id: 2,
      name: "The Metro Movers Black",
      price: "₹5999",
      image: "/bag2.png",
      description: "Sleek black backpack with modern design. Ideal for professionals and students with laptop compartment."
    },
    {
      id: 3,
      name: "The Metro Movers Black",
      price: "₹5499",
      image: "/bag3.png",
      description: "Spacious backpack with ergonomic design. Perfect for outdoor activities and long journeys."
    },
    {
      id: 4,
      name: "The Metro Movers Black",
      price: "₹5499",
      image: "/bag4.png",
      description: "Stylish and functional backpack with water-resistant material. Great for everyday use and travel."
    },
  ];

  return Response.json(products);
}