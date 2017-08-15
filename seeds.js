use asteroids;

db.facts.insert([
{ 
  fact_headline: "Asteroid",
  fact_detail: "Asteroids are generally larger chunks of rock that come from the asteroid belt located between the orbits of Mars and Jupiter. Sometimes their orbits get perturbed or altered and some asteroids end up coming closer to the Sun, and therefore closer to Earth.", 
  fact_image: "https://www.tomshw.it/files/2013/12/immagini_contenuti/51766/asteroidsample-02-jpg7e810608-bf8a-4bd9-9ddd-1681f6070b5blarge-jpg803bb89f-19cb-4edd-a8a8-22d68da1597elarger.jpg"
},
{ 
  fact_headline: "Asteroids stand alone from Comets",
  fact_detail: "There are stark differences between asteroids, meteors and comets. Comets are much like asteroids, but might have a more ice, methane, ammonia, and other compounds that develop a fuzzy, cloud-like shell called a coma when it gets closer to the Sun.",
  fact_image: "http://s3-ap-southeast-1.amazonaws.com/subscriber.images/physics/2016/11/25122041/Asteroid-And-Comet.png"
},
{ 
  fact_headline: "Asteroids v Meteors",
  fact_detail: "Space debris smaller than an asteroid are called meteoroids. A meteoroid is a piece of interplanetary matter that is smaller than 1km in size. If they enter Earth’s atmosphere, they gain a different name: Meteor (a shooting star). If any part of a meteoroid survives the fall through the Earth’s atmosphere, it is called a meteorite.",
  fact_image: "http://www.apophis.com/wp-content/uploads/2013/06/asteroid-or-meteor-630x350.jpg"
},
{ 
  fact_headline: "Discovery",
  fact_detail: "In 1801, Giuseppe Piazzi discovered what he believed to be a new planet. He named the object Ceres, after the Roman goddess of the harvest. It was soon realized that this new objects (among others) were not planets. As a result of their similar appearance to stars the objects were named asteroids meaning ‘star shaped’ by William Herschel.",
  fact_image: "http://www.eso.org/sci/php/libraries/lisa/lisa3/proceedings/img69.gif"
},
{ 
  fact_headline: "Asteroid Belt",
  fact_detail: "The majority of the known asteroids in the Solar System orbit the Sun in a band between the orbits of Mars and Jupiter - the Asteroid Belt. Of the hundreds of thousands of asteroids in the Asteroid Belt, there are only around 200 known that exceed 100 km in diameter.",
  fact_image: "http://www.crystalinks.com/asteroidbelt1.jpg"
},
{ 
  fact_headline: "Beginnings",
  fact_detail: "Current theories suggests that the asteroids found in the Asteroid Belt are the remnants of a planet that failed to form during the development of the Solar System. If all the material in the Asteroid Belt were to be combined, the resulting object’s diameter is projected to be at most about half that of Earth’s moon.",
  fact_image: "https://www.phactual.com/wp-content/uploads/2014/12/astbelt4.jpg"

}]
);

db.timeline.insert([
  { 
    timeline_headline: "Solar System Formation",
    timeline_date: "4.5bn years ago",
    timeline_detail: "A solar nebula condenses to form the planets, moons, asteroids and comets of our solar system. The planets’ gravity propels comets outward to form the distant Oort cloud, and funnels most asteroids into a belt between Mars and Jupiter." ,
    timeline_image: "http://bear.joneskilmartingr.netdna-cdn.com/news/wp-content/uploads/Solar-System.jpg"
  },
  { 
    timeline_headline: "The Late Heavy Bombardment",
    timeline_date: "3.8bn years ago",
    timeline_detail: "Many massive impacts from debris left over after planet building, batter the Earth and Moon, and the inner planets, Mercury, Venus and Mars. The impacts are large enough to keep much of their surfaces molten." ,
    timeline_image: "http://www.lpl.arizona.edu/~hubbard/PtyS206/Lectures2/11Blammo.gif"
  },
  { 
    timeline_headline: "Yucatan Impact",
    timeline_date: "65 million years ago",
    timeline_detail: "Asteroid crashes into what is now Mexico’s Yucatan peninsula, forming a 300-km-wide crater called Chixculub. The resulting global hail of red-hot debris sets fires and soot and dust everywhere creating an “impact winter” leading to the death of the dinosaurs." ,
    timeline_image: "http://www.sciencemag.org/sites/default/files/styles/article_main_large/public/images/gg_60212W_Crater.jpg?itok=U5HowQh7"
  },
  { 
    timeline_headline: "Arizona Impact",
    timeline_date: "50,000 years ago",
    timeline_detail: "A 50-metre-wide, nickel-iron meteorite slams into what is now Arizona, forming Meteor Crater – Earth’s best-preserved large impact crater, 4 km across." ,
    timeline_image: "http://bestwesternarizona.com/img/attractions/az-attr-crater.jpg"
  },
  { 
    timeline_headline: "Flashes in the Sky",
    timeline_date: "312AD",
    timeline_detail: "Roman Emperor Constantine claims to see a vision of a cross in the sky, causing his conversion to Christianity. Some think this was a comet, others that it was the flash of a meteorite impact.",
    timeline_image: "http://static.thanhniennews.com/Uploaded/thuyvi/2015_07_09/light_MQWA.jpg?width=840"
  },
  { 
    timeline_headline: "First Discovery",
    timeline_date: "1801",
    timeline_detail: "The first asteroid, Ceres is discovered, by Italian astronomer Giovanni Piazza.",
    timeline_image: "https://img.purch.com/w/660/aHR0cDovL3d3dy5zcGFjZS5jb20vaW1hZ2VzL2kvMDAwLzAxNy8zODAvb3JpZ2luYWwvZGF3bi12ZXN0YS1wbGFuZXRzLmpwZw=="
  },
  { 
    timeline_headline: "Siberian Comet 'Hydrogen Bomb'",
    timeline_date: "1908",
    timeline_detail: "An airburst over Tunguska, Siberia, caused by an exploding comet flattens trees over hundreds of square miles, and the boom is heard thousands of miles away. The blast released 500 kilotons of energy – the equivalent of a hydrogen bomb.",
    timeline_image: "https://upload.wikimedia.org/wikipedia/commons/b/bb/Russia-CIA_WFB_Map--Tunguska.png"
  },
  { 
    timeline_headline: "Chixculub Revelation",
    timeline_date: "1990",
    timeline_detail: "The Chixculub impact crater in Mexico, now buried deep below ground, is finally identified and tied to the impact that killed the dinosaurs.",
    timeline_image: "http://www.dailygalaxy.com/.a/6a00d8341bf7f753ef019b02741149970c-600wi"
  },
  { 
    timeline_headline: "Future Contingencies Outlined",
    timeline_date: "1992",
    timeline_detail: "US Congress-appointed panel proposes Spaceguard program to search for all near-Earth asteroids larger than 1 kilometre across within 10 years.",
    timeline_image: "http://images.slideplayer.com/19/5891107/slides/slide_10.jpg"
  },
  { 
    timeline_headline: "Contingency Plans",
    timeline_date: "1995",
    timeline_detail: "The NEAT, Near-Earth Asteroid Tracking, project begins at an air-force tracking telescope in Hawaii. The rate of near-Earth asteroid, NEA, discovery increases more than tenfold.",
    timeline_image: "https://www.nasa.gov/images/content/592667main_pia14734-43_1600-1200.jpg"
  },
  { 
    timeline_headline: "First Impact?",
    timeline_date: "1996",
    timeline_detail: "The first discovery is made of an asteroid with an orbit computed to have a possibility of striking Earth.",
    timeline_image: "http://www.bibliotecapleyades.net/imagenes_ciencia/asteroids_comets60_08.jpg"
  },
  { 
    timeline_headline: "Torino Scale",
    timeline_date: "1999",
    timeline_detail: "The Torino Scale is published by astronomer Rick Binzel. It is an attempt to quell public fears about future near-Earth asteroid discoveries that have some small chance of striking Earth. Scale: 0 (zero risk) to 10 (global devastation).",
    timeline_image: "http://wwwcdn.skyandtelescope.com/wp-content/uploads/TorinoScale_M.gif"
  },
  { 
    timeline_headline: "1950DA, Impact?",
    timeline_date: "2001",
    timeline_detail: "An asteroid is discovered that still has highest known possibility of a impact. 1950 DA has 1-in-600 chance of striking Earth in 2880.",
    timeline_image: "https://www.jpl.nasa.gov/images/asteroid/1950da_orbit_browse.jpg"
  },
  { 
    timeline_headline: "Apophis, Deadly Impact?",
    timeline_date: "2004",
    timeline_detail: "The highest number yet on the Torino Scale is reported in Dec '04 –  level 4. The asteroid is called Apophis and this has since reduced the threat level 1. NASA’s Deep Impact spacecraft becomes first object deliberately sent into comet collision (Tempel 1).",
    timeline_image: "http://media4.s-nbcnews.com/i/msnbc/Components/Interactives/Technology_Science/Space/99942_Apophis_x.gif"
  },
  { 
    timeline_headline: "NASA Tensions Hightened",
    timeline_date: "2005",
    timeline_detail: "The US Congress directs NASA to extend search for NEAs to all objects larger than 150-metres-wide, rather than those wider than 1 km.",
    timeline_image: "https://pbs.twimg.com/profile_images/571330447095787520/FvrBLmei.png"
  },
  { 
    timeline_headline: "Apophis Fly-by",
    timeline_date: "2029",
    timeline_detail: "Apophis will make the closest approach to Earth ever predicted for a sizable asteroid on 13 Apr. It will be visible to the naked eye and the Earth’s gravity will change its orbit. Apophis may impact Earth in 2036. The chances now stand at 1:6250.",
    timeline_image: "https://i.ytimg.com/vi/xGC6BcWBdIw/hqdefault.jpg"
  },
  { 
    timeline_headline: "'2006 CS' Devestation?",
    timeline_date: "2082",
    timeline_detail: "Asteroid '2006 CS' has a mere 1-in-77 million chance of striking Earth on 12 March – but it is 2.1 km across. An impact of that size could kill off most life on Earth. 2006 CS is by far the largest on the current list of objects with a small risk of impact.",
    timeline_image: "https://c.tadst.com/gfx/750x500/asteroid-10-things.jpg?1"
  },
  { 
    timeline_headline: "2004 VD17 - Small But Mighty",
    timeline_date: "2102",
    timeline_detail: "Possible impact by 2004 VD17 on 2 May. This asteroid has only a 1-in-2777 chance of impact, but it is 580 m across and capable of continent-scale devastation." ,
    timeline_image: "https://upload.wikimedia.org/wikipedia/ru/thumb/9/98/%D0%9E%D1%80%D0%B1%D0%B8%D1%82%D0%B0_%D0%B0%D1%81%D1%82%D0%B5%D1%80%D0%BE%D0%B8%D0%B4%D0%B0_144898.png/440px-%D0%9E%D1%80%D0%B1%D0%B8%D1%82%D0%B0_%D0%B0%D1%81%D1%82%D0%B5%D1%80%D0%BE%D0%B8%D0%B4%D0%B0_144898.png"
  },
  { 
    timeline_headline: "The End of Days?",
    timeline_date: "2880",
    timeline_detail: "Asteroid 1950DA has the greatest known probability of a major impact, on 16 March. The present odds are 1 in 600, and at about 1.1 km across, the asteroid is large enough to devastate most life on the planet.",
    timeline_image: "https://i.ytimg.com/vi/AvXDa8hyT80/maxresdefault.jpg"
  }]
);