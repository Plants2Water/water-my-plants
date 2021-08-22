exports.seed = function(knex, Promise) {
    return knex('plants').insert([
// 1
        {   species: 'Chlorophytum Comosum', 
            name: "Spider Plant",
            water_interval: 3,
            last_watered: "2021-08-22",
            photo_url: "https://www.houseplantsexpert.com/image-files/spiderplant.jpg",
            notes: "The spider plant is easy to care for and maintain - that's very popular in many countries. It has been grown indoors for over 200 years and flowers ( white) from the stems in the summer and spring. The flowers then produce baby Spiders that can be used for creating new plants. This is one of the easiest plants to grow/maintain, which has made it so popular, and a great beginners choice.",
            user_id: 1
        },
// 2
        {   species: 'Aloe', 
            name: "Aloe Vera ",
            water_interval: 5,
            last_watered: "2021-08-21",
            photo_url: "https://www.houseplantsexpert.com/image-files/aloevera.jpg",
            notes: "Aloe Vera is a succulent leaf plant that is well known for its health and beauty benefits. These are said to originate from Africa and they are grown/cultivated in various countries and homes, because they tolerate various conditions very well. The Aloe V is another popular and easy plant to care for. Take care of one well then you'll soon have pups to create new Aloe's.",
            user_id: 1
        },
// 3
        {   species: 'Spathiphyllum Wallisii', 
            name: "Peace Lily",
            water_interval: 7,
            last_watered: "2021-08-21",
            photo_url: "https://www.houseplantsexpert.com/image-files/peace-lily.jpg",
            notes: "The Peace Lily is one of my all time favorites. Its minimalistic look, and the charming white flower (spathe) that blossoms makes it a great choice of plant for the home or office. These can be sensitive to the wrong amount of water and sunlight. The leaves have a nice glossy appearance which also makes this a popular and attractive plant. Once a plant matures you may divide sections for propagation.",
            user_id: 1
        },
// 4
        {   species: 'Crassula Ovata', 
            name: "Jade Plant",
            water_interval: 7,
            last_watered: "2021-08-19",
            photo_url: "https://www.houseplantsexpert.com/image-files/jade.jpg",
            notes: "The Jade plant is another common house plant that grows with a thick trunk and shiny oval shaped leaves. This is also a plant that I remember having in the home while growing up. Mother propagated (using leaf cuttings) many Jades, so we had plenty around the house. These are fairly easy to care for until they grow much larger.",
            user_id: 4
        },
// 5
        {   species: 'Crassula Ovata', 
            name: "Jade Plant",
            water_interval: 7,
            last_watered: "2021-08-19",
            photo_url: "https://www.houseplantsexpert.com/image-files/jade.jpg",
            notes: "The Jade plant is another common house plant that grows with a thick trunk and shiny oval shaped leaves. This is also a plant that I remember having in the home while growing up. Mother propagated (using leaf cuttings) many Jades, so we had plenty around the house. These are fairly easy to care for until they grow much larger.",
            user_id: 4
        }, 
// 6   
        {   species: 'Saintpaulia', 
            name: "African Violet",
            water_interval: 2,
            last_watered: "2021-08-23",
            photo_url: "https://www.houseplantsexpert.com/image-files/african-violet.jpg",
            notes: "The African violet is a wonderful flowering type species that will flower at anytime of the year with proper care and conditions provided. These can be harder to take care of than the ones mentioned previously, but that just means they need a bit MORE love-and-attention. These need to have dead flowers and damaged leaves removed asap.",
            user_id: 3
        },
// 7  
        {   species: 'Ficus Benjamina', 
            name: "Weeping Fig ",
            water_interval: 11,
            last_watered: "2021-08-19",
            photo_url: "https://www.houseplantsexpert.com/image-files/weeping-fig.jpg",
            notes: "The Jade plant is another common house plant that grows with a thick trunk and shiny oval shaped leaves. This is also a plant that I remember having in the home while growing up. Mother propagated (using leaf cuttings) many Jades, so we had plenty around the house. These are fairly easy to care for until they grow much larger.",
            user_id: 3
        },    
// 8
        {   species: 'Peperomia', 
            name: "Baby Rubber Plant ",
            water_interval: 4,
            last_watered: "2021-08-11",
            photo_url: "https://www.houseplantsexpert.com/assets/images/baby_rubber_plant.jpg",
            notes: "Peperomias have become very common house plants including the Peperomia obtusifolia. Succulent rounded type leaves from the various cultivars may be dark green, mottled or variegated and they're relatively easy to propagate. They are flowering plants that produce flower spikes, but these flowers are non-showy.",
            user_id: 1
        },
        
// 9
        {   species: 'Vriesea Splendens', 
            name: "Flaming Sword",
            water_interval: 3,
            last_watered: "2021-08-24",
            photo_url: "https://www.houseplantsexpert.com/image-files/jade.jpg",
            notes: "The flaming sword plant (botanical name : vriesea splendens) is one of the most popular vriesea bromeliads grown indoors. This species features a red sword like flower head which can grow up to 2ft tall and displays attractive mottled leaves. The foliage and flower bract makes this plant stand out among all bromeliads.",
            user_id: 1
        },
// 10
        {   species: 'Tillandsia Caput Medusae', 
            name: "Medusa's Head ",
            water_interval: 7,
            last_watered: "2021-08-19",
            photo_url: "https://www.houseplantsexpert.com/image-files/tillandsia-caputmedusae.jpg",
            notes: "This species is a flowering air plant from the bromeliads family and is one of the most popular of the Tillandsia genus.",
            user_id: 1
        },
    ]);
  };