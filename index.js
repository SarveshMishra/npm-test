module.exports = async function getProducts() {
	const axios = require("axios");
	var result;

	await axios
		.get("https://fakestoreapi.com/products")
		.then((products) => {
			result= products.data;
		})
		.catch((err) => {
			console.log(err);
		});
	return result;
};
