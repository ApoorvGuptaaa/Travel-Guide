const mockData = [
  {
    "photo": {
      "images": {
        "medium": {
          "url": "https://imgs.search.brave.com/jNGGjsyaPWx-h1bGaUk44gFQKYw6nbPmG6Ehrq88lfw/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTU5/MzcxNzkxL3Bob3Rv/L3Rhai1tYWhhbC1p/bmRpYS5qcGc_cz02/MTJ4NjEyJnc9MCZr/PTIwJmM9TTVqNVdP/Ti1zYjVJYmVGeEU4/d0kzQ1JoRjFsWU8y/UWVGd0diSU1ZZzZm/Yz0"
        }
      }
    },
    "name": "Taj Mahal",
    "location_string": "Agra, India",
    "description": "A stunning white marble mausoleum on the south bank of the Yamuna River in Agra. The Taj Mahal is an iconic symbol of India's rich history and architectural brilliance. Built by the Mughal emperor Shah Jahan in memory of his wife Mumtaz Mahal, it is a UNESCO World Heritage Site and one of the New Seven Wonders of the World."
  },
  {
    "photo": {
      "images": {
        "medium": {
          "url": "https://imgs.search.brave.com/IfGQL1M0MREI7zRW2z40aI0PthFppxIcKIExYGHWqEg/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvOTE1/OTg1MzY0L3Bob3Rv/L2hhd2EtbWFoYWwt/cGFsYWNlLW9mLXdp/bmQtaW4tamFpcHVy/LWluZGlhLmpwZz9z/PTYxMng2MTImdz0w/Jms9MjAmYz1Kak1y/OV9mTjIzQ3ZPb0x6/MlZNMnZ3MEFMSmdW/X1JnYjhzQk1LaU13/eEhBPQ"
        }
      }
    },
    "name": "Hawa Mahal",
    "location_string": "Jaipur, India",
    "description": "Also known as the 'Palace of the Winds,' Hawa Mahal is a palace in Jaipur, India, so named because it was essentially a high screen wall built so the women of the royal household could observe street festivals while unseen from the outside. This architectural marvel is a prominent landmark in the Pink City and reflects the grandeur of Rajput architecture."
  },
  {
    "photo": {
      "images": {
        "medium": {
          "url": "https://imgs.search.brave.com/eEfyLF6ZvPSHtNuTcP0odqHNSJ8x3d0gjpxWqGXWg7c/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTE3/ODM5NTM4MC9waG90/by9naGF0cy1vZi12/YXJhbmFzaS0xNy5q/cGc_cz02MTJ4NjEy/Jnc9MCZrPTIwJmM9/alV4MWEzeVREOHUy/dWxGZ2FRSTZLRU1Y/MG1KYUxXc2xhWDZo/VzRsb1lwRT0"
        }
      }
    },
    "name": "Varanasi Ghats",
    "location_string": "Varanasi, India",
    "description": "The Varanasi Ghats are a series of steps leading to the banks of the Ganges River in Varanasi, India. These ghats are used for rituals and ceremonies, as well as daily bathing. Varanasi, one of the oldest continuously inhabited cities in the world, is a spiritual hub and a center for Hindu pilgrimage."
  },
  {
    "photo": {
      "images": {
        "medium": {
          "url": "https://imgs.search.brave.com/t9dHxtcNZYPGfZDSOnEl1sJN-3ifNatTqJkc0wMDGc4/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTAy/NTMwOTM1MC9waG90/by9sb3R1cy10ZW1w/bGUuanBnP3M9NjEy/eDYxMiZ3PTAmaz0y/MCZjPUFtaVpIU1VU/Qkxhb0hDZE1rRUtu/dnhLa2l6NUpLa3hZ/QVQzYnRyWkhCaGs9"
        }
      }
    },  
    "name": "Lotus Temple",
    "location_string": "New Delhi, India",
    "description": "The Lotus Temple, located in New Delhi, India, is a Bahá'í House of Worship notable for its flowerlike shape. It is open to people of all faiths, promoting the unity of all religions. Surrounded by serene pools and lush gardens, the Lotus Temple is a peaceful oasis in the bustling capital city."
  },
  {
    "photo": {
      "images": {
        "medium": {
          "url": "https://imgs.search.brave.com/imoamtgidDST8xwz4IIBH1XBOCKxCZOw3ghR6SkONi4/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTIx/NjAyNDc4OS9waG90/by9nYXRld2F5LW9m/LWluZGlhLW11bWJh/aS5qcGc_cz02MTJ4/NjEyJnc9MCZrPTIw/JmM9d0J0U1M4bDZi/Qnk0RFF3dUZMajZS/el9kN3ZseHZIRTZ3/VGYxekotTjJqOD0"
        }
      }
    },
    "name": "Gateway of India",
    "location_string": "Mumbai, India",
    "description": "The Gateway of India is a historic monument in Mumbai, overlooking the Arabian Sea. Often referred to as the 'Taj Mahal of Mumbai,' it was built to commemorate the visit of King George V and Queen Mary to Bombay. The grand architecture and coastal location make it a popular tourist destination."
  },
  {
    "photo": {
      "images": {
        "medium": {
          "url": "https://imgs.search.brave.com/L46Y1GecpWSpW59tGFjQo_QX7JLwE0KMvv98-mHvlo0/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/cmFqYXN0aGFudG91/cnBsYW5uZXIuY29t/L2ltYWdlcy9VZGFp/cHVyQ2l0eVBhbGFj/ZS5qcGc"
        }
      }
    },
    "name": "City Palace, Udaipur",
    "location_string": "Udaipur, India",
    "description": "The City Palace in Udaipur is a palace complex known for its architectural features and panoramic views of the city and its surroundings. Built over a period of nearly 400 years, the palace displays a blend of Rajasthani, Mughal, European, and Chinese architectural styles. It stands as a testament to the royal heritage of Udaipur."
  },
  {
    "photo": {
      "images": {
        "medium": {
          "url": "https://imgs.search.brave.com/GzoNObQa6NSRNZKDbyuC47b7hmtBBR9DYVnlZhz6vD8/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTM1/NDc5MDI3My9waG90/by9nb2xkZW4tdGVt/cGxlLmpwZz9zPTYx/Mng2MTImdz0wJms9/MjAmYz11RXJ3UllM/SWlkeTNlQjB3R0Na/T2R6Q2diekt3dld2/R3BmdVYxTDNrdzhV/PQ"
        }
      }
    },
    "name": "Golden Temple",
    "location_string": "Amritsar, India",
    "description": "The Golden Temple, also known as Harmandir Sahib, is the holiest Sikh gurdwara located in the city of Amritsar, Punjab. Known for its stunning golden architecture, the temple attracts millions of visitors and pilgrims from around the world. The serene surroundings and the sacred pond add to the spiritual ambiance of the site."
  },
  {
    "photo": {
      "images": {
        "medium": {
          "url": "https://imgs.search.brave.com/mIGNRQSP_lIxWnRNXNUo9iLDVqPGsa23d1AAQIYu3VM/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9idWd5/YWx2YWxsZXkuY29t/L3dwLWNvbnRlbnQv/dXBsb2Fkcy8yMDE5/LzExL2xha3NobWFu/LWpodWxhLmpwZw"
        }
      }
    },
    "name": "Laxman Jhula, Rishikesh",
    "location_string": "Rishikesh, India",
    "description": "Laxman Jhula is a suspension bridge across the Ganges River in Rishikesh, India. Named after Laxman (brother of Lord Rama), it is a prominent landmark and a popular pilgrimage site. The bridge offers breathtaking views of the river and the surrounding hills, making it a must-visit destination for spiritual seekers and tourists alike."
  },
  {
    "photo": {
      "images": {
        "medium": {
          "url": "https://imgs.search.brave.com/I1CEhtY03Bl9ZB4rkcecQiYNxNOvjayEcnzxdyHLx5w/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvNTEz/Nzg2NDg3L3Bob3Rv/L2hvd3JhaC1icmlk/Z2UuanBnP3M9NjEy/eDYxMiZ3PTAmaz0y/MCZjPVR3YXFFZjFW/aWJJQk94UDZzb0RR/SzZnamEzNHpXOGJW/X3kzUFhaOWJuVjg9"
        }
      }
    },
    "name": "Howrah Bridge",
    "location_string": "Kolkata, India",
    "description": "Howrah Bridge is a cantilever bridge with a suspended span over the Hooghly River, connecting the city of Howrah to Kolkata. An iconic symbol of Kolkata, the bridge is one of the busiest in the world. Illuminated at night, Howrah Bridge offers a stunning view of the cityscape and the river."
  },
  {
    "photo": {
      "images": {
        "medium": {
          "url": "https://imgs.search.brave.com/PyYTW3vEthiUt3Wsw91PgZxw8dOO7m00l98LjRk7Gec/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTcy/MTI0MDMyL3Bob3Rv/L215c29yZS1wYWxh/Y2UtYXQtZHVzay5q/cGc_cz02MTJ4NjEy/Jnc9MCZrPTIwJmM9/cGFPNzRDX2RWc1kx/NEliSzBSTnFzMFRE/LWxTdGVReS1BVzVD/blFGRWJfND0"
        }
      }
    },
    "name": "Mysore Palace",
    "location_string": "Mysuru, India",
    "description": "Mysore Palace is a historical palace in the city of Mysuru, known for its splendid architecture. Once the official residence of the Wodeyar dynasty, the palace is now a museum that showcases royal artifacts and exhibits. Illuminated with thousands of lights during festivals, Mysore Palace is a mesmerizing sight."
  }
];

export default mockData