document.addEventListener("DOMContentLoaded", () => {
	// Initialisation de la carte
	const map = L.map("map").setView([48.8566, 2.3522], 12); // Paris

	// Fond OpenStreetMap
	L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
		attribution: "© OpenStreetMap contributors",
	}).addTo(map);

	// Emplacements Street Fusion
	const locations = [
		{
			name: "La Défense",
			coords: [48.8924, 2.2369],
			info: "Parvis de La Défense<br>11h30 - 14h30",
		},
		{
			name: "Bastille",
			coords: [48.853, 2.369],
			info: "Place de la Bastille<br>11h30 - 14h30",
		},
		{
			name: "Châtelet",
			coords: [48.8583, 2.347],
			info: "Place du Châtelet<br>11h30 - 14h30 | 18h00 - 22h00",
		},
		{
			name: "Montparnasse",
			coords: [48.8422, 2.3215],
			info: "Boulevard du Montparnasse<br>11h30 - 14h30",
		},
		{
			name: "Bercy Village",
			coords: [48.8335, 2.3868],
			info: "Cour Saint-Émilion<br>11h30 - 14h30 | 18h00 - 22h00",
		},
		{
			name: "Versailles",
			coords: [48.8049, 2.1204],
			info: "Marché Notre-Dame<br>12h00 - 23h00",
		},
	];

	// Ajout des marqueurs
	locations.forEach((loc) => {
		L.marker(loc.coords)
			.addTo(map)
			.bindPopup(`<strong>${loc.name}</strong><br>${loc.info}`);
	});
});