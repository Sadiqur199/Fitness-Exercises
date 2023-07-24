
export const exerciseOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
    'X-RapidAPI-Key': '87da0421b8msh892eed53424f292p1e3bd2jsn9cfd26d8dbb4',
  }
};

 export const youtubeOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com',
    'X-RapidAPI-Key': '87da0421b8msh892eed53424f292p1e3bd2jsn9cfd26d8dbb4',
  }
};

export const fetchData = async (url, options) => {
  const res = await fetch(url, options);
  const data = await res.json();
  return data;
};
