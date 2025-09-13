import React, { useEffect, useState } from "react";
import "./StoreList.css"; // 👈 import CSS file

export default function StoreList() {
  const [stores, setStores] = useState([]);
  const [search, setSearch] = useState("");

  const allStores = [
    { id: 1, name: "SuperMart", address: "Main Road", avgRating: 4 },
    { id: 2, name: "FreshFoods", address: "High Street", avgRating: 3 },
    { id: 3, name: "Daily Needs", address: "Market Area", avgRating: 5 },
    { id: 4, name: "QuickBuy", address: "Station Road", avgRating: 2 },
  ];

  const loadStores = () => {
    const filtered = allStores.filter(
      (s) =>
        s.name.toLowerCase().includes(search.toLowerCase()) ||
        s.address.toLowerCase().includes(search.toLowerCase())
    );
    setStores(filtered);
  };

  useEffect(() => {
    setStores(allStores);
  }, []);

  // Pick rating class dynamically
  const getRatingClass = (rating) => {
    if (rating >= 4) return "high";
    if (rating === 3) return "medium";
    return "low";
  };

  return (
    <div className="store-container">
      <h2 className="store-header">Stores</h2>
      <input
        placeholder="Search stores"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="search-box"
      />
      <button onClick={loadStores} className="search-btn">
        Search
      </button>

      <ul className="store-list">
        {stores.map((s) => (
          <li key={s.id} className="store-item">
            <div className="store-name">{s.name}</div>
            <div className="store-address">{s.address}</div>
            <div className={`store-rating ${getRatingClass(s.avgRating)}`}>
              Avg Rating: {s.avgRating}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
