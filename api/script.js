async function getData() {
  const url = 'https://weatherapi-com.p.rapidapi.com/current.json?q=53.1%2C-0.13';
  const options = {
    method: 'GET',
    headers: {
      'x-rapidapi-key': '5de6ab0689msha76c47832b017adp15139fjsn71f7d3ef9e39',
      'x-rapidapi-host': 'weatherapi-com.p.rapidapi.com'
    }
  };

  try {
    const response = await fetch(url, options);
    const result = await response.text();
    console.log(result);
  } catch (error) {
    console.error(error);
  }
}

getData();