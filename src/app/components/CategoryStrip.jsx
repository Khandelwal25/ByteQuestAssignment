"use client";

const categories = [
  { name: "All Bags", icon: "/allbags.png" },
  { name: "Vanity Pouch", icon: "/vanitypouch.png" },
  { name: "Tote Bag", icon: "/totebag.png" },
  { name: "Duffle Bag", icon: "/dufflebag.png" },
  { name: "Laptop Sleeve", icon: "/laptopsleeve.png" },
  { name: "Messenger Bags", icon: "/messengerbag.png" },
  { name: "Slings Bags", icon: "/slingbag.png" },
  { name: "Handbags", icon: "/handbags.png" },
];

export default function CategoryStrip() {
  return (
    <div className="w-full bg-black text-white py-4 md:py-6">
      <div className="flex items-center justify-start md:justify-center gap-8 md:gap-16 overflow-x-auto px-4 md:px-10 scrollbar-hide">
        {categories.map((cat) => (
          <div
            key={cat.name}
            className="flex flex-col items-center cursor-pointer hover:opacity-80 transition min-w-fit"
          >
            <img
              src={cat.icon}
              alt={cat.name}
              className="h-12 w-12 md:h-16 md:w-16 mb-2 md:mb-3 invert object-contain"
            />
            <p className="text-xs md:text-sm tracking-wide whitespace-nowrap">{cat.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
