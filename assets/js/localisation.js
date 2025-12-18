document.addEventListener("DOMContentLoaded", () => {
  // ======================= INIT MAP =======================

  const map = L.map("map", {
    scrollWheelZoom: false,
  }).setView([48.8566, 2.3522], 12);

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: "&copy; OpenStreetMap",
  }).addTo(map);

  // Force Leaflet à recalculer la taille (FIX BLANC)
  setTimeout(() => {
    map.invalidateSize();
  }, 200);

  // ======================= DONNÉES =======================

  const locations = [
    {
      jour: "Lundi",
      quartier: "La Défense",
      adresse: "Parvis de La Défense",
      coords: [48.8919, 2.2416],
    },
    {
      jour: "Mardi",
      quartier: "Bastille",
      adresse: "Place de la Bastille",
      coords: [48.8530, 2.3690],
    },
    {
      jour: "Mercredi",
      quartier: "Châtelet",
      adresse: "Place du Châtelet",
      coords: [48.8583, 2.3470],
    },
    {
      jour: "Jeudi",
      quartier: "Montparnasse",
      adresse: "Boulevard du Montparnasse",
      coords: [48.8422, 2.3215],
    },
    {
      jour: "Vendredi",
      quartier: "Bercy Village",
      adresse: "Cour Saint-Émilion",
      coords: [48.8339, 2.3866],
    },
    {
      jour: "Samedi",
      quartier: "Marché de Versailles",
      adresse: "Place du Marché Notre-Dame",
      coords: [48.8049, 2.1351],
    },
  ];

  // ======================= MARKERS =======================

  locations.forEach((loc) => {
    L.marker(loc.coords)
      .addTo(map)
      .bindPopup(
        `<strong>${loc.quartier}</strong><br>${loc.adresse}<br><em>${loc.jour}</em>`
      );
  });
});
