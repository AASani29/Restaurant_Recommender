import { fetchRestaurantsFromGooglePlaces } from "../utils/apiClient.js";

export const getRestaurants = async (req, res) => {
    const { location, term, price, dietaryRestrictions } = req.body;

    try {
        const restaurants = await fetchRestaurantsFromGooglePlaces({
            location,
            term,
            price,
            dietaryRestrictions,
        });
        res.status(200).json(restaurants);
    } catch (error) {
        console.error("Error fetching restaurants:", error.message);
        res.status(500).json({ message: "Failed to fetch restaurants" });
    }
};
