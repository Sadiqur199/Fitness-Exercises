export const exerciseOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '423bab179amsh95bc6939ee1da26p15a607jsnb80aeab106c1',
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
  }
};

export const youtubeOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com',
    'X-RapidAPI-Key': '423bab179amsh95bc6939ee1da26p15a607jsnb80aeab106c1',
  },
};

export const fetchData = async (url, options) => {
  const res = await fetch( url, options);
  const data = await res.json();
  return data;
};