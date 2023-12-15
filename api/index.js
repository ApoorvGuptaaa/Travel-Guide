import axios from "axios";

export const getPlacesData = async (bl_lat, bl_lng, tr_lat, tr_lng, type) => {
  try {
    const {
      data: { data },
    } = await axios.get(
      'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary',
      {
        params: {
          bl_latitude: '11.847676',
          tr_latitude: '12.838442',
          bl_longitude: '109.095887',
          tr_longitude: '109.149359',
          restaurant_tagcategory_standalone: '10591',
          restaurant_tagcategory: '10591',
          limit: '30',
          currency: 'USD',
          open_now: 'false',
          lunit: 'km',
          lang: 'en_US'
        },
        headers: {
          'X-RapidAPI-Key': '15e9a79398msh424c516f0c21f98p1513e6jsne1ee6fa70fd9',
          'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
        }
      }
    );

    return data;
  } catch (error) {
    return null;
  }
};
