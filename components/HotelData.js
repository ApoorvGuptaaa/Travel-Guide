const HotelData = 
    [
        {
          "photo": {
            "images": {
              "medium": {
                "url": "https://plus.unsplash.com/premium_photo-1675745329954-9639d3b74bbf?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG90ZWx8ZW58MHx8MHx8fDA%3D"
              }
            }
          },
          "name": "Luxury Haven Hotel",
          "location_string": "Ahmedabad, Gujarat",
          "description": "Experience luxury at its best in the heart of Ahmedabad. Modern amenities and exquisite services await you.",
          "rating": 4.8,
          "price_level": "$$$",
          "open_now_text": "Open Now",
          "bearing": "North",
          "cuisine": [
            {"name": "Fine Dining"},
            {"name": "International Cuisine"}
          ]
        },
        {
          "photo": {
            "images": {
              "medium": {
                "url": "https://imgs.search.brave.com/xMWVPy72tRL84L_h3FA1vkcWuwgs8Bgy0AXBbJ0jT44/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJhY2Nlc3Mu/Y29tL2Z1bGwvMjY5/MDc1My5qcGc"
              }
            }
          },
          "name": "Serene Oasis Resort",
          "location_string": "Vadodara, Gujarat",
          "description": "Escape to a tranquil oasis in Vadodara. Nestled in nature, this resort offers a peaceful retreat.",
          "rating": 4.5,
          "price_level": "$$",
          "open_now_text": "Closed Now",
          "bearing": "Southwest",
          "cuisine": [
            {"name": "Local Delights"},
            {"name": "Nature's Cuisine"}
          ]
        },
        {
          "photo": {
            "images": {
              "medium": {
                "url": "https://imgs.search.brave.com/XGAopqI3p58rITcZQwc5IBTEtKjLdkYAOzoDYgdO1R8/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTQw/MDgzNDQ1OC9waG90/by9zdWl0Y2FzZS1p/bi1ob3RlbC1yb29t/LmpwZz9zPTYxMng2/MTImdz0wJms9MjAm/Yz1qcktLbG00YzZH/NUpOZi1DLW05UWRW/M3JXczZXM3BwOUxf/SXRZamdlSmpRPQ"
              }
            }
          },
          "name": "Sunset Paradise Beach Hotel",
          "location_string": "Dwarka, Gujarat",
          "description": "Experience breathtaking sunsets at this beachfront hotel in Dwarka. A perfect blend of luxury and natural beauty.",
          "rating": 4.7,
          "price_level": "$$$",
          "open_now_text": "Open Now",
          "bearing": "West",
          "cuisine": [
            {"name": "Seafood"},
            {"name": "Beachside Dining"}
          ]
        },
        {
          "photo": {
            "images": {
              "medium": {
                "url": "https://imgs.search.brave.com/vG_X0tlj7zz0ROX7FsDiWzcbwEuPcHtOQme8AUvo7Y4/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by9s/dXh1cnktY2xhc3Np/Yy1tb2Rlcm4tYmVk/cm9vbS1zdWl0ZS1o/b3RlbF8xMDU3NjIt/MTc4Ny5qcGc_c2l6/ZT02MjYmZXh0PWpw/Zw"
              }
            }
          },
          "name": "Heritage Charm Palace",
          "location_string": "Junagadh, Gujarat",
          "description": "Immerse yourself in history at this heritage palace in Junagadh. Uncover the charm of the bygone era.",
          "rating": 4.6,
          "price_level": "$$$",
          "open_now_text": "Open Now",
          "bearing": "Northeast",
          "cuisine": [
            {"name": "Royal Dining"},
            {"name": "Cultural Cuisine"}
          ]
        },
        {
          "photo": {
            "images": {
              "medium": {
                "url": "https://imgs.search.brave.com/n_nY2GQR1aj2jyV3uP5gXgYcZD5y8aK7phkrl8weJA4/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by8z/ZC1yZW5kZXJpbmct/YmVhdXRpZnVsLWx1/eHVyeS1iZWRyb29t/LXN1aXRlLWhvdGVs/LXdpdGgtdHZfMTA1/NzYyLTIzMDEuanBn/P3NpemU9NjI2JmV4/dD1qcGc"
              }
            }
          },
          "name": "Tranquil Hills Resort",
          "location_string": "Saputara, Gujarat",
          "description": "Escape to the hills and find tranquility at this resort in Saputara. Panoramic views and serene surroundings await.",
          "rating": 4.4,
          "price_level": "$$",
          "open_now_text": "Open Now",
          "bearing": "Southeast",
          "cuisine": [
            {"name": "Mountain Retreat Dining"},
            {"name": "Local Flavors"}
          ]
        },
        {
          "photo": {
            "images": {
              "medium": {
                "url": "https://imgs.search.brave.com/MO0U04jq4z5-ClXJuXczOGmJ0xPyjkMSntDau3KwMGY/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9wbHVz/LnVuc3BsYXNoLmNv/bS9wcmVtaXVtX3Bo/b3RvLTE2NjE5NjMy/Mzk1MDctN2JkZjQx/YTVlNjZiP3E9ODAm/dz0xMDAwJmF1dG89/Zm9ybWF0JmZpdD1j/cm9wJml4bGliPXJi/LTQuMC4zJml4aWQ9/TTN3eE1qQTNmREI4/TUh4elpXRnlZMmg4/Tlh4OGJIVjRkWEo1/SlRJd2FHOTBaV3ds/TWpCeWIyOXRmR1Z1/ZkRCOGZEQjhmSHd3"
              }
            }
          },
          "name": "Urban Retreat Hotel",
          "location_string": "Surat, Gujarat",
          "description": "Indulge in luxury at this urban retreat in Surat. Modern comforts and a stylish ambiance await discerning travelers.",
          "rating": 4.9,
          "price_level": "$$$$",
          "open_now_text": "Open Now",
          "bearing": "South",
          "cuisine": [
            {"name": "Modern Gastronomy"},
            {"name": "Cityscape Dining"}
          ]
        },
        {
          "photo": {
            "images": {
              "medium": {
                "url": "https://imgs.search.brave.com/cUaGaPQxJMB58qNnVCuXQR6d6TnG25ADyr3aMt7QCWQ/rs:fit:860:0:0/g:ce/aHR0cHM6Ly90aHVt/YnMuZHJlYW1zdGlt/ZS5jb20vYi9sdXh1/cnktaG90ZWwtNDQ4/MDc0Mi5qcGc"
              }
            }
          },
          "name": "Coastal Bliss Resort",
          "location_string": "Porbandar, Gujarat",
          "description": "Discover coastal bliss at this resort in Porbandar. A perfect escape for those seeking sun, sea, and relaxation.",
          "rating": 4.7,
          "price_level": "$$$",
          "open_now_text": "Open Now",
          "bearing": "West",
          "cuisine": [
            {"name": "Coastal Delicacies"},
            {"name": "Seaside Dining"}
          ]
        },
        {
          "photo": {
            "images": {
              "medium": {
                "url": "https://imgs.search.brave.com/WZ0u6eRg2kZpnOZ_YZ6raqnqLmMW4yAy-VwG_kClmb0/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9wbHVz/LnVuc3BsYXNoLmNv/bS9wcmVtaXVtX3Bo/b3RvLTE2NjE5MjM3/MjU3ODItZjczYzk5/MGZiZGRmP3E9ODAm/dz0xMDAwJmF1dG89/Zm9ybWF0JmZpdD1j/cm9wJml4bGliPXJi/LTQuMC4zJml4aWQ9/TTN3eE1qQTNmREI4/TUh4elpXRnlZMmg4/TVRkOGZHeDFlSFZ5/ZVNVeU1HaHZkR1Zz/ZkdWdWZEQjhmREI4/Zkh3dw"
              }
            }
          },
          "name": "Majestic City Hotel",
          "location_string": "Ahmedabad, Gujarat",
          "description": "Experience the majesty of city living at this hotel in Ahmedabad. Modern amenities and a central location await.",
          "rating": 4.6,
          "price_level": "$$$",
          "open_now_text": "Closed Now",
          "bearing": "North",
          "cuisine": [
            {"name": "Cityscape Dining"},
            {"name": "Modern Cuisine"}
          ]
        },
        {
          "photo": {
            "images": {
              "medium": {
                "url": "https://imgs.search.brave.com/LPPZCVUr5_ds1Omt1QfYTKLS1jrVwHBRku3xp1lU9lg/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG4u/cGl4YWJheS5jb20v/cGhvdG8vMjAxNi8w/Ni8xMC8wMS8wNS9o/b3RlbC1yb29tLTE0/NDcyMDFfNjQwLmpw/Zw"
              }
            }
          },
          "name": "Nature's Retreat Resort",
          "location_string": "Dang, Gujarat",
          "description": "Escape to nature's embrace at this retreat in Dang. Surrounded by lush greenery, it's a haven for nature lovers.",
          "rating": 4.5,
          "price_level": "$$",
          "open_now_text": "Open Now",
          "bearing": "Southeast",
          "cuisine": [
            {"name": "Nature's Cuisine"},
            {"name": "Organic Dining"}
          ]
        },
        {
          "photo": {
            "images": {
              "medium": {
                "url": "https://imgs.search.brave.com/xwXdwzAq-NoKwxpe1L1L8rk52nAckwTAHiw4jEcYP1k/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWM0LmRlcG9zaXRw/aG90b3MuY29tLzEw/MTUwNjAvNDY0L2kv/NjAwL2RlcG9zaXRw/aG90b3NfNDY0MjM5/NC1zdG9jay1waG90/by10cmF5LWJyZWFr/ZmFzdC1iZWQtaG90/ZWwtcm9vbS5qcGc"
              }
            }
          },
          "name": "Royal Heritage Hotel",
          "location_string": "Rajkot, Gujarat",
          "description": "Step into the lap of luxury at this royal heritage hotel in Rajkot. Experience regal living and impeccable hospitality.",
          "rating": 4.8,
          "price_level": "$$$$",
          "open_now_text": "Open Now",
          "bearing": "Northeast",
          "cuisine": [
            {"name": "Royal Dining"},
            {"name": "Heritage Cuisine"}
          ]
        },
        {
          "photo": {
            "images": {
              "medium": {
                "url": "https://imgs.search.brave.com/P9m7CCdrMoom-OJcWWcCqFAu5X84klZD2lIHpCmzho4/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by9taW5zay1iZWxh/cnVzLWF1Z3VzdC0y/MDE3LWNvbHVtbnMt/Z3Vlc3Ryb29tLWhh/bGwtcmVjZXB0aW9u/LW1vZGVybi1sdXh1/cnktaG90ZWxfOTc2/OTQtNjU3Mi5qcGc"
              }
            }
          },
          "name": "Harbor View Hotel",
          "location_string": "Jamnagar, Gujarat",
          "description": "Enjoy a harbor view at this hotel in Jamnagar. Modern comforts and scenic surroundings make it a perfect stay.",
          "rating": 4.6,
          "price_level": "$$$",
          "open_now_text": "Open Now",
          "bearing": "West",
          "cuisine": [
            {"name": "Seaside Dining"},
            {"name": "International Cuisine"}
          ]
        },
        {
          "photo": {
            "images": {
              "medium": {
                "url": "https://imgs.search.brave.com/ghY_jZa87Iw1-4Il-_Fuk1L4mftaN5Uzv3n04xyB0NU/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9jZG4u/cGl4YWJheS5jb20v/cGhvdG8vMjAxNy8w/MS8xNC8xMi80OC9o/b3RlbC0xOTc5NDA2/XzY0MC5qcGc"
              }
            }
          },
          "name": "Mountain Lodge Resort",
          "location_string": "Gir, Gujarat",
          "description": "Experience the charm of the mountains at this lodge in Gir. A perfect retreat for wildlife enthusiasts.",
          "rating": 4.4,
          "price_level": "$$",
          "open_now_text": "Open Now",
          "bearing": "Southeast",
          "cuisine": [
            {"name": "Mountain Retreat Dining"},
            {"name": "Wildlife Cuisine"}
          ]
        },
        {
          "photo": {
            "images": {
              "medium": {
                "url": "https://imgs.search.brave.com/9rkNk_NRTxQyYXRcZna1DLLyg5Ts7YxgimX1IHqv7h4/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJhY2Nlc3Mu/Y29tL2Z1bGwvMjY5/MDU1My5qcGc"
              }
            }
          },
          "name": "Sunrise Shores Resort",
          "location_string": "Diu, Gujarat",
          "description": "Wake up to breathtaking sunrises at this beachfront resort in Diu. A perfect blend of luxury and coastal beauty.",
          "rating": 4.7,
          "price_level": "$$$",
          "open_now_text": "Open Now",
          "bearing": "East",
          "cuisine": [
            {"name": "Seafood"},
            {"name": "Beachside Dining"}
          ]
        },
        {
          "photo": {
            "images": {
              "medium": {
                "url": "https://imgs.search.brave.com/CFny6tigTwOq1KBCn_uM-_IqQAUrjeX1ntw6f5fOdy0/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWM1LmRlcG9zaXRw/aG90b3MuY29tLzEw/MDA5NzUvNDYxL2kv/NjAwL2RlcG9zaXRw/aG90b3NfNDYxOTg3/MC1zdG9jay1waG90/by1wYW5vcmFtYS1o/b3RlbC1zZWEtc2lk/ZS5qcGc"
              }
            }
          },
          "name": "Historic Retreat Hotel",
          "location_string": "Bhuj, Gujarat",
          "description": "Step into history at this historic retreat in Bhuj. Immerse yourself in the tales of the past.",
          "rating": 4.5,
          "price_level": "$$$",
          "open_now_text": "Closed Now",
          "bearing": "Northwest",
          "cuisine": [
            {"name": "Historical Dining"},
            {"name": "Cultural Cuisine"}
          ]
        },
        {
          "photo": {
            "images": {
              "medium": {
                "url": "https://imgs.search.brave.com/8AQfG0mlNbkEmAi8ujGLh9BN-WXR9TWZD5cpcNYiBy8/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG4u/cGl4YWJheS5jb20v/cGhvdG8vMjAxNi8x/MC8xMy8wOS8wNi9s/dXh1cnktdmlsbGFz/LTE3MzcxNjdfNjQw/LmpwZw"
              }
            }
          },
          "name": "Jungle Paradise Resort",
          "location_string": "Valsad, Gujarat",
          "description": "Escape to the jungle at this paradise resort in Valsad. A haven for nature and wildlife enthusiasts.",
          "rating": 4.8,
          "price_level": "$$$",
          "open_now_text": "Open Now",
          "bearing": "South",
          "cuisine": [
            {"name": "Jungle Dining"},
            {"name": "Wildlife Cuisine"}
          ]
        },
        {
          "photo": {
            "images": {
              "medium": {
                "url": "https://imgs.search.brave.com/2kq1BmRxGLJYwfpGxSuJBLWJkE-VjitzE2QCOpnJYaE/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9wbHVz/LnVuc3BsYXNoLmNv/bS9wcmVtaXVtX3Bo/b3RvLTE2NjE5NjI0/OTU2NjktZDcyNDI0/NjI2YmRjP3E9ODAm/dz0xMDAwJmF1dG89/Zm9ybWF0JmZpdD1j/cm9wJml4bGliPXJi/LTQuMC4zJml4aWQ9/TTN3eE1qQTNmREI4/TUh4elpXRnlZMmg4/T1h4OGJIVjRkWEo1/SlRJd2FHOTBaV3g4/Wlc1OE1IeDhNSHg4/ZkRBPQ"
              }
            }
          },
          "name": "Pristine Peaks Hotel",
          "location_string": "Saputara, Gujarat",
          "description": "Experience the pristine beauty of the peaks at this hotel in Saputara. A retreat for mountain lovers.",
          "rating": 4.6,
          "price_level": "$$",
          "open_now_text": "Open Now",
          "bearing": "Northeast",
          "cuisine": [
            {"name": "Mountain Dining"},
            {"name": "Local Flavors"}
          ]
        }
          ]
        
        
      
export default HotelData;