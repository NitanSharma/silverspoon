export default function Page() {
  const menuItems = [
    {
      category: 'Starters',
      items: [
        {
          name: 'Crispy Spring Rolls',
          price: '₹150',
          image: 'https://images.unsplash.com/photo-1604908177225-6f7d2b6a48d2',
        },
        {
          name: 'Paneer Tikka',
          price: '₹220',
          image: 'https://images.unsplash.com/photo-1627308595181-26307f5b6d9a',
        },
        {
          name: 'Veg Soup',
          price: '₹120',
          image: 'https://images.unsplash.com/photo-1617196035154-5f2e8a3a9d7f',
        },
      ],
    },
    {
      category: 'Main Course',
      items: [
        {
          name: 'Butter Paneer Masala',
          price: '₹280',
          image: 'https://images.unsplash.com/photo-1627308595229-7830a5c47c1f',
        },
        {
          name: 'Dal Makhani',
          price: '₹200',
          image: 'https://images.unsplash.com/photo-1617191518209-2a9196c7a1b2',
        },
        {
          name: 'Veg Biryani',
          price: '₹250',
          image: 'https://images.unsplash.com/photo-1626084637267-612cd6c600f4',
        },
      ],
    },
    {
      category: 'Desserts',
      items: [
        {
          name: 'Gulab Jamun',
          price: '₹100',
          image: 'https://images.unsplash.com/photo-1617196034854-08e4d0c7a83f',
        },
        {
          name: 'Rasgulla',
          price: '₹120',
          image: 'https://images.unsplash.com/photo-1626084637205-38c6b8e6e40a',
        },
        {
          name: 'Chocolate Brownie',
          price: '₹180',
          image: 'https://images.unsplash.com/photo-1606788075761-1c87c4dfd2d6',
        },
      ],
    },
    {
      category: 'Beverages',
      items: [
        {
          name: 'Cold Coffee',
          price: '₹150',
          image: 'https://images.unsplash.com/photo-1587738347111-86c6e98cde0b',
        },
        {
          name: 'Fresh Lime Soda',
          price: '₹90',
          image: 'https://images.unsplash.com/photo-1585238342028-4f42f345b4d2',
        },
        {
          name: 'Masala Chai',
          price: '₹60',
          image: 'https://images.unsplash.com/photo-1626084637277-46f7d6b8453a',
        },
      ],
    },
  ];

  return (
    <main className="min-h-screen py-20 bg-gray-50">
      <section className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Our Menu</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore the flavors of SilverSpoon — crafted with love, tradition,
            and freshness.
          </p>
        </div>

        {/* Menu Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {menuItems.map((section, index) => (
            <div key={index} className="space-y-6">
              <h2 className="text-2xl font-semibold text-gray-800 border-b pb-2">
                {section.category}
              </h2>
              <div className="grid gap-6">
                {section.items.map((item, idx) => (
                  <div
                    key={idx}
                    className="bg-white rounded-2xl shadow-md overflow-hidden"
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-40 object-cover"
                    />
                    <div className="p-4 flex justify-between items-center">
                      <span className="text-gray-700 font-medium">
                        {item.name}
                      </span>
                      <span className="text-gray-900 font-semibold">
                        {item.price}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
