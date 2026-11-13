async function getRandomCat() {
  const url = "https://api.thecatapi.com/v1/images/search?limit=2";

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const result = await response.json();
    console.log(result);
    cuteCat.src = result[0].url;
  } catch (error) {
    console.error(error.message);
  }
}