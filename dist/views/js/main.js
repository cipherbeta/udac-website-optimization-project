/*
Hey Udac review person!

One side note that I noticed when making sure I included
all the changes in the readme - the minifier I used to generate
main.min.js (and conversely popped back into the main file and
beautified to get the below file) replaced all function parameters
with abstract variables. This actually helped me as well,
so I stuck with it in the final copy. Just a forewarning. Thanks!

~ IsaacD
*/

// Listing out all our ingredients
var pizzaIngredients = {};
pizzaIngredients.meats = ["Pepperoni", "Sausage", "Fennel Sausage", "Spicy Sausage", "Chicken", "BBQ Chicken", "Chorizo", "Chicken Andouille", "Salami", "Tofu", "Bacon", "Canadian Bacon", "Proscuitto", "Italian Sausage", "Ground Beef", "Anchovies", "Turkey", "Ham", "Venison", "Lamb", "Duck", "Soylent Green", "Carne Asada", "Soppressata Picante", "Coppa", "Pancetta", "Bresola", "Lox", "Guanciale", "Chili", "Beef Jerky", "Pastrami", "Kielbasa", "Scallops", "Filet Mignon"];
pizzaIngredients.nonMeats = ["White Onions", "Red Onions", "Sauteed Onions", "Green Peppers", "Red Peppers", "Banana Peppers", "Ghost Peppers", "Habanero Peppers", "Jalapeno Peppers", "Stuffed Peppers", "Spinach", "Tomatoes", "Pineapple", "Pear Slices", "Apple Slices", "Mushrooms", "Arugula", "Basil", "Fennel", "Rosemary", "Cilantro", "Avocado", "Guacamole", "Salsa", "Swiss Chard", "Kale", "Sun Dried Tomatoes", "Walnuts", "Artichoke", "Asparagus", "Caramelized Onions", "Mango", "Garlic", "Olives", "Cauliflower", "Polenta", "Fried Egg", "Zucchini", "Hummus"];
pizzaIngredients.cheeses = ["American Cheese", "Swiss Cheese", "Goat Cheese", "Mozzarella Cheese", "Parmesean Cheese", "Velveeta Cheese", "Gouda Cheese", "Muenster Cheese", "Applewood Cheese", "Asiago Cheese", "Bleu Cheese", "Boursin Cheese", "Brie Cheese", "Cheddar Cheese", "Chevre Cheese", "Havarti Cheese", "Jack Cheese", "Pepper Jack Cheese", "Gruyere Cheese", "Limberger Cheese", "Manchego Cheese", "Marscapone Cheese", "Pecorino Cheese", "Provolone Cheese", "Queso Cheese", "Roquefort Cheese", "Romano Cheese", "Ricotta Cheese", "Smoked Gouda"];
pizzaIngredients.sauces = ["Red Sauce", "Marinara", "BBQ Sauce", "No Sauce", "Hot Sauce"];
pizzaIngredients.crusts = ["White Crust", "Whole Wheat Crust", "Flatbread Crust", "Stuffed Crust"];
String.prototype.capitalize = function() {
  return this.charAt(0).toUpperCase() + this.slice(1)
};

// Creating some adjectives for our pizzas
function getAdj(l) {
  switch (l) {
    case "dark":
      var k = ["dark", "morbid", "scary", "spooky", "gothic", "deviant", "creepy", "sadistic", "black", "dangerous", "dejected", "haunted", "morose", "tragic", "shattered", "broken", "sad", "melancholy", "somber", "dark", "gloomy", "homicidal", "murderous", "shady", "misty", "dusky", "ghostly", "shadowy", "demented", "cursed", "insane", "possessed", "grotesque", "obsessed"];
      return k;
    case "color":
      var b = ["blue", "green", "purple", "grey", "scarlet", "NeonGreen", "NeonBlue", "NeonPink", "HotPink", "pink", "black", "red", "maroon", "silver", "golden", "yellow", "orange", "mustard", "plum", "violet", "cerulean", "brown", "lavender", "violet", "magenta", "chestnut", "rosy", "copper", "crimson", "teal", "indigo", "navy", "azure", "periwinkle", "brassy", "verdigris", "veridian", "tan", "raspberry", "beige", "sandy", "ElectricBlue", "white", "champagne", "coral", "cyan"];
      return b;
    case "whimsical":
      var f = ["whimsical", "silly", "drunken", "goofy", "funny", "weird", "strange", "odd", "playful", "clever", "boastful", "breakdancing", "hilarious", "conceited", "happy", "comical", "curious", "peculiar", "quaint", "quirky", "fancy", "wayward", "fickle", "yawning", "sleepy", "cockeyed", "dizzy", "dancing", "absurd", "laughing", "hairy", "smiling", "perplexed", "baffled", "cockamamie", "vulgar", "hoodwinked", "brainwashed"];
      return f;
    case "shiny":
      var d = ["sapphire", "opal", "silver", "gold", "platinum", "ruby", "emerald", "topaz", "diamond", "amethyst", "turquoise", "starlit", "moonlit", "bronze", "metal", "jade", "amber", "garnet", "obsidian", "onyx", "pearl", "copper", "sunlit", "brass", "brassy", "metallic"];
      return d;
    case "noisy":
      var a = ["untuned", "loud", "soft", "shrieking", "melodious", "musical", "operatic", "symphonic", "dancing", "lyrical", "harmonic", "orchestral", "noisy", "dissonant", "rhythmic", "hissing", "singing", "crooning", "shouting", "screaming", "wailing", "crying", "howling", "yelling", "hollering", "caterwauling", "bawling", "bellowing", "roaring", "squealing", "beeping", "knocking", "tapping", "rapping", "humming", "scatting", "whispered", "whispering", "rasping", "buzzing", "whirring", "whistling", "whistled"];
      return a;
    case "apocalyptic":
      var e = ["nuclear", "apocalyptic", "desolate", "atomic", "zombie", "collapsed", "grim", "fallen", "collapsed", "cannibalistic", "radioactive", "toxic", "poisonous", "venomous", "disastrous", "grimy", "dirty", "undead", "bloodshot", "rusty", "glowing", "decaying", "rotten", "deadly", "plagued", "decimated", "rotting", "putrid", "decayed", "deserted", "acidic"];
      return e;
    case "insulting":
      var g = ["stupid", "idiotic", "fat", "ugly", "hideous", "grotesque", "dull", "dumb", "lazy", "sluggish", "brainless", "slow", "gullible", "obtuse", "dense", "dim", "dazed", "ridiculous", "witless", "daft", "crazy", "vapid", "inane", "mundane", "hollow", "vacuous", "boring", "insipid", "tedious", "monotonous", "weird", "bizarre", "backward", "moronic", "ignorant", "scatterbrained", "forgetful", "careless", "lethargic", "insolent", "indolent", "loitering", "gross", "disgusting", "bland", "horrid", "unseemly", "revolting", "homely", "deformed", "disfigured", "offensive", "cowardly", "weak", "villainous", "fearful", "monstrous", "unattractive", "unpleasant", "nasty", "beastly", "snide", "horrible", "syncophantic", "unhelpful", "bootlicking"];
      return g;
    case "praise":
      var h = ["beautiful", "intelligent", "smart", "genius", "ingenious", "gorgeous", "pretty", "witty", "angelic", "handsome", "graceful", "talented", "exquisite", "enchanting", "fascinating", "interesting", "divine", "alluring", "ravishing", "wonderful", "magnificient", "marvelous", "dazzling", "cute", "charming", "attractive", "nifty", "delightful", "superior", "amiable", "gentle", "heroic", "courageous", "valiant", "brave", "noble", "daring", "fearless", "gallant", "adventurous", "cool", "enthusiastic", "fierce", "awesome", "radical", "tubular", "fearsome", "majestic", "grand", "stunning"];
      return h;
    case "scientific":
      var j = ["scientific", "technical", "digital", "programming", "calculating", "formulating", "cyberpunk", "mechanical", "technological", "innovative", "brainy", "chemical", "quantum", "astro", "space", "theoretical", "atomic", "electronic", "gaseous", "investigative", "solar", "extinct", "galactic"];
      return j;
    default:
      var c = ["scientific", "technical", "digital", "programming", "calculating", "formulating", "cyberpunk", "mechanical", "technological", "innovative", "brainy", "chemical", "quantum", "astro", "space", "theoretical", "atomic", "electronic", "gaseous", "investigative", "solar", "extinct", "galactic"];
      return c
  }
}

// getting a noun for our pizza
function getNoun(j) {
  switch (j) {
    case "animals":
      var f = ["flamingo", "hedgehog", "owl", "elephant", "pussycat", "alligator", "dachsund", "poodle", "beagle", "crocodile", "kangaroo", "wallaby", "woodpecker", "eagle", "falcon", "canary", "parrot", "parakeet", "hamster", "gerbil", "squirrel", "rat", "dove", "toucan", "raccoon", "vulture", "peacock", "goldfish", "rook", "koala", "skunk", "goat", "rooster", "fox", "porcupine", "llama", "grasshopper", "gorilla", "monkey", "seahorse", "wombat", "wolf", "giraffe", "badger", "lion", "mouse", "beetle", "cricket", "nightingale", "hawk", "trout", "squid", "octopus", "sloth", "snail", "locust", "baboon", "lemur", "meerkat", "oyster", "frog", "toad", "jellyfish", "butterfly", "caterpillar", "tiger", "hyena", "zebra", "snail", "pig", "weasel", "donkey", "penguin", "crane", "buzzard", "vulture", "rhino", "hippopotamus", "dolphin", "sparrow", "beaver", "moose", "minnow", "otter", "bat", "mongoose", "swan", "firefly", "platypus"];
      return f;
    case "profession":
      var l = ["doctor", "lawyer", "ninja", "writer", "samurai", "surgeon", "clerk", "artist", "actor", "engineer", "mechanic", "comedian", "fireman", "nurse", "RockStar", "musician", "carpenter", "plumber", "cashier", "electrician", "waiter", "president", "governor", "senator", "scientist", "programmer", "singer", "dancer", "director", "mayor", "merchant", "detective", "investigator", "navigator", "pilot", "priest", "cowboy", "stagehand", "soldier", "ambassador", "pirate", "miner", "police"];
      return l;
    case "fantasy":
      var b = ["centaur", "wizard", "gnome", "orc", "troll", "sword", "fairy", "pegasus", "halfling", "elf", "changeling", "ghost", "knight", "squire", "magician", "witch", "warlock", "unicorn", "dragon", "wyvern", "princess", "prince", "king", "queen", "jester", "tower", "castle", "kraken", "seamonster", "mermaid", "psychic", "seer", "oracle"];
      return b;
    case "music":
      var c = ["violin", "flute", "bagpipe", "guitar", "symphony", "orchestra", "piano", "trombone", "tuba", "opera", "drums", "harpsichord", "harp", "harmonica", "accordion", "tenor", "soprano", "baritone", "cello", "viola", "piccolo", "ukelele", "woodwind", "saxophone", "bugle", "trumpet", "sousaphone", "cornet", "stradivarius", "marimbas", "bells", "timpani", "bongos", "clarinet", "recorder", "oboe", "conductor", "singer"];
      return c;
    case "horror":
      var k = ["murderer", "chainsaw", "knife", "sword", "murder", "devil", "killer", "psycho", "ghost", "monster", "godzilla", "werewolf", "vampire", "demon", "graveyard", "zombie", "mummy", "curse", "death", "grave", "tomb", "beast", "nightmare", "frankenstein", "specter", "poltergeist", "wraith", "corpse", "scream", "massacre", "cannibal", "skull", "bones", "undertaker", "zombie", "creature", "mask", "psychopath", "fiend", "satanist", "moon", "fullMoon"];
      return k;
    case "gross":
      var h = ["slime", "bug", "roach", "fluid", "pus", "booger", "spit", "boil", "blister", "orifice", "secretion", "mucus", "phlegm", "centipede", "beetle", "fart", "snot", "crevice", "flatulence", "juice", "mold", "mildew", "germs", "discharge", "toilet", "udder", "odor", "substance", "fluid", "moisture", "garbage", "trash", "bug"];
      return h;
    case "everyday":
      var e = ["mirror", "knife", "fork", "spork", "spoon", "tupperware", "minivan", "suburb", "lamp", "desk", "stereo", "television", "TV", "book", "car", "truck", "soda", "door", "video", "game", "computer", "calender", "tree", "plant", "flower", "chimney", "attic", "kitchen", "garden", "school", "wallet", "bottle"];
      return e;
    case "jewelry":
      var g = ["earrings", "ring", "necklace", "pendant", "choker", "brooch", "bracelet", "cameo", "charm", "bauble", "trinket", "jewelry", "anklet", "bangle", "locket", "finery", "crown", "tiara", "blingBling", "chain", "rosary", "jewel", "gemstone", "beads", "armband", "pin", "costume", "ornament", "treasure"];
      return g;
    case "places":
      var a = ["swamp", "graveyard", "cemetery", "park", "building", "house", "river", "ocean", "sea", "field", "forest", "woods", "neighborhood", "city", "town", "suburb", "country", "meadow", "cliffs", "lake", "stream", "creek", "school", "college", "university", "library", "bakery", "shop", "store", "theater", "garden", "canyon", "highway", "restaurant", "cafe", "diner", "street", "road", "freeway", "alley"];
      return a;
    case "scifi":
      var m = ["robot", "alien", "raygun", "spaceship", "UFO", "rocket", "phaser", "astronaut", "spaceman", "planet", "star", "galaxy", "computer", "future", "timeMachine", "wormHole", "timeTraveler", "scientist", "invention", "martian", "pluto", "jupiter", "saturn", "mars", "quasar", "blackHole", "warpDrive", "laser", "orbit", "gears", "molecule", "electron", "neutrino", "proton", "experiment", "photon", "apparatus", "universe", "gravity", "darkMatter", "constellation", "circuit", "asteroid"];
      return m;
    default:
      var d = ["robot", "alien", "raygun", "spaceship", "UFO", "rocket", "phaser", "astronaut", "spaceman", "planet", "star", "galaxy", "computer", "future", "timeMachine", "wormHole", "timeTraveler", "scientist", "invention", "martian", "pluto", "jupiter", "saturn", "mars", "quasar", "blackHole", "warpDrive", "laser", "orbit", "gears", "molecule", "electron", "neutrino", "proton", "experiment", "photon", "apparatus", "universe", "gravity", "darkMatter", "constellation", "circuit", "asteroid"];
      return d
  }
}

// defining the 'master' categories for each pizza
var adjectives = ["dark", "color", "whimsical", "shiny", "noisy", "apocalyptic", "insulting", "praise", "scientific"];
var nouns = ["animals", "everyday", "fantasy", "gross", "horror", "jewelry", "places", "scifi"];

// Generating out our pizza name. Pulls an adjective from the list provided, pulls a name, finds the length of each string, then capitalizes the first letter and returns the complete string.
function generator(c, g) {
  var b = getAdj(c);
  var f = getNoun(g);
  var a = parseInt(Math.random() * b.length);
  var e = parseInt(Math.random() * f.length);
  var d = "The " + b[a].capitalize() + " " + f[e].capitalize();
  return d
}

// Randomly picks an adjective and noun from the master list, then calls/returns our generator function to define the list to a final name.
function randomName() {
  var a = parseInt(Math.random() * adjectives.length);
  var b = parseInt(Math.random() * nouns.length);
  return generator(adjectives[a], nouns[b])
}

// Randomly selects a meat ingredient.
var selectRandomMeat = function() {
  var a = pizzaIngredients.meats[Math.floor((Math.random() * pizzaIngredients.meats.length))];
  return a
};

// Randomly selects a non-meat ingredient.
var selectRandomNonMeat = function() {
  var a = pizzaIngredients.nonMeats[Math.floor((Math.random() * pizzaIngredients.nonMeats.length))];
  return a
};

// Randomly selects a cheese.
var selectRandomCheese = function() {
  var a = pizzaIngredients.cheeses[Math.floor((Math.random() * pizzaIngredients.cheeses.length))];
  return a
};

// Randomly selects a sauce.
var selectRandomSauce = function() {
  var a = pizzaIngredients.sauces[Math.floor((Math.random() * pizzaIngredients.sauces.length))];
  return a
};

// Randomly selects a crust... Pretzel, anyone?
var selectRandomCrust = function() {
  var a = pizzaIngredients.crusts[Math.floor((Math.random() * pizzaIngredients.crusts.length))];
  return a
};

// Returns the ingredient from a specified section above and returns it as a list item for our DOM.
var ingredientItemizer = function(a) {
  return "<li>" + a + "</li>"
};

// Randomly define a few quick variables for randomization purposes. var a, g, and f are used in the for loops to determine how many ingredients of each category will make it into our final generated pizza. Var e is an empty that we use to assist with insertion into our DOM.
var makeRandomPizza = function() {
  var e = "";
  var a = Math.floor((Math.random() * 4));
  var g = Math.floor((Math.random() * 3));
  var f = Math.floor((Math.random() * 2));
  // Loop through var d, add a random meat every tick
  for (var d = 0; d < a; d++) {
    e = e + ingredientItemizer(selectRandomMeat())
  }
  // Loop through var d, add a random nonmeat every tick
  for (var c = 0; c < g; c++) {
    e = e + ingredientItemizer(selectRandomNonMeat())
  }
  // Loop through var d, add a random cheese every tick
  for (var b = 0; b < f; b++) {
    e = e + ingredientItemizer(selectRandomCheese())
  }
  // There can only be one sauce. Unless you've just downed a 40 and are feeling reckless. Up to you. But this will only generate one.
  e = e + ingredientItemizer(selectRandomSauce());
  // Generates a single crust.
  e = e + ingredientItemizer(selectRandomCrust());
  // var e, when returned, will include all of our individual <li> tags with random ingredients added inbetween.
  return e
};

// Takes the randomized pizza we've now put together and creates a dom element for it.
var pizzaElementGenerator = function(d) {
  // defines our vars for the function.
  var c, f, e, a, g, b;
  // applies dom elements to each respective var.
  c = document.createElement("div");
  f = document.createElement("div");
  e = document.createElement("img");
  a = document.createElement("div");
  // starting with our container div, adding classes, an id modified by our generator function above, and setting some quick styles.
  c.classList.add("randomPizzaContainer");
  c.style.width = "33.33%";
  c.style.height = "325px";
  c.id = "pizza" + d;
  // setting a width for the div that's going to hold our image
  f.style.width = "35%";
  // setting source for our image tag, and adding a bootstrap responsive class to it
  e.src = "images/pizza.png";
  e.classList.add("img-responsive");
  // appending our image onto our image div
  f.appendChild(e);
  // now appending our image div into the container div
  c.appendChild(f);
  // setting a width for the text div that's going to hold our pizza name
  a.style.width = "65%";
  // creating a new h4 element
  g = document.createElement("h4");
  // popping in the name generated by randomName();
  g.innerHTML = randomName();
  // appending randomName(); to our text div
  a.appendChild(g);
  // creating our ingredient unordered list
  b = document.createElement("ul");
  // adding in our ingredients generated by makeRandomPizza();
  b.innerHTML = makeRandomPizza();
  // appending our makeRandomPizza(); list underneath our randomName();
  a.appendChild(b);
  // appending all our text onto the container div
  c.appendChild(a);
  // returns the whole dom element for a single, fully randomly generated pizza.
  return c
};

// Function that takes a gander at sizeSlider when called, and does a case switch depending on the current input value of the switch. Logs to console if something breaks.
var resizePizzas = function(b) {
  window.performance.mark("mark_start_resize");
// Note - changed from original code, querySelector() in the switch cases below was swapped out with getElementbyId() to be more performant.
  function c(e) {
    switch (e) {
      case "1":
        document.getElementById("pizzaSize").innerHTML = "Small";
        return;
      case "2":
        document.getElementById("pizzaSize").innerHTML = "Medium";
        return;
      case "3":
        document.getElementById("pizzaSize").innerHTML = "Large";
        return;
      default:
        console.log("bug in changeSliderLabel")
    }
  }
  // Calls our switch our whatever parameter is thrown into resizePizzas.
  c(b);

  // similar to prior switch, defines newWidth value which updates across CSS to change pizza size to 1/4 container width, 1/3 container width, and 1/2 container width respectfully.
  function a(g) {
    switch (g) {
      case "1":
        newWidth = 25;
        break;
      case "2":
        newWidth = 33.3;
        break;
      case "3":
        newWidth = 50;
        break;
      default:
        console.log("bug in sizeSwitcher")
    }
    // Selects all our .randomPizzaContainer generated by pizzaElementGenerator();. Changed from querySelectorAll to getElementsByClassName to be more performant
    var f = document.getElementsByClassName("randomPizzaContainer");
    // Iterates through the number of pizzas available on page, and sets their new width based on var newWidth.
    for (var e = 0; e < f.length; e++) {
      f[e].style.width = newWidth + "%"
    }
  }
  // Calls our newWidth switch using the resizePizzas(); parameter.
  a(b);

  // Timing voodoo stuff that I don't quite understand. But it works! Appears to me it's marking the time between the detection of the initial switch @ sizeSwitcher and the completion of the layout change.
  window.performance.mark("mark_end_resize");
  window.performance.measure("measure_pizza_resize", "mark_start_resize", "mark_end_resize");
  var d = window.performance.getEntriesByName("measure_pizza_resize");
  console.log("Time to resize pizzas: " + d[d.length - 1].duration + "ms")
};
window.performance.mark("mark_start_generating");

// We've got two pizzas already premade in the dom - this for loop iterates with that offset to make sure we display exactly 100 pizzas in total. We define pizzasDiv outside of the for loop so we only have to call it once.
var pizzasDiv = document.getElementById("randomPizzas");
for (var i = 2; i < 100; i++) {
  // append those additional pizzas onto the end of the randomPizzas div.
  pizzasDiv.appendChild(pizzaElementGenerator(i))
}

// More timing voodoo, marks the start of pizza generation (save the two premade ones) and the end, and gives the time between.
window.performance.mark("mark_end_generating");
window.performance.measure("measure_pizza_generation", "mark_start_generating", "mark_end_generating");
var timeToGenerate = window.performance.getEntriesByName("measure_pizza_generation");
console.log("Time to generate pizzas on load: " + timeToGenerate[0].duration + "ms");
var frame = 0;

// displays average scripting time to generate the last 10 frames.
function logAverageFrame(d) {
  // defines junker vars, sets c to length of function parameter
  var c = d.length;
  var b = 0;
  for (var a = c - 1; a > c - 11; a--) {
    b = b + d[a].duration
  }
  console.log("Average scripting time to generate last 10 frames: " + b / 10 + "ms")
}

// more or less scatters pizzas willy-nilly across the background. Calls logAverageFrame(); for performance metrics.
function updatePositions() {
  frame++;
  window.performance.mark("mark_start_frame");
  var b = document.querySelectorAll(".mover");
  // Moved document.body.scrollTop out of loop and defined it here so we don't have to touch on the DOM each time
  var scrollValue = (document.body.scrollTop / 1250);
  for (var d = 0; d < b.length; d++) {
    var a = Math.sin(scrollValue + (d % 5));
    b[d].style.left = b[d].basicLeft + 100 * a + "px"
  }
  window.performance.mark("mark_end_frame");
  window.performance.measure("measure_frame_duration", "mark_start_frame", "mark_end_frame");
  if (frame % 10 === 0) {
    var c = window.performance.getEntriesByName("measure_frame_duration");
    logAverageFrame(c)
  }
}
window.addEventListener("scroll", updatePositions);

document.addEventListener("DOMContentLoaded", function() {
  var b = 256;
  var d = 8; // halved our columns to fit better
  var e = window.innerHeight;
  var f = Math.ceil(e / b) * d; // calculates out our rows based on window innerheight
  for (var a = 0; a < f; a++) {
    c = document.createElement("img");
    c.className = "mover";
    // defined an id so we can keep a count of the pizzas in the background
    c.id = "mover" + (a + 1);
    c.src = "images/pizza.png";
    c.style.height = "100px";
    c.style.width = "73.333px";
    c.basicLeft = (a % d) * b;
    c.style.top = (Math.floor(a / d) * b) + "px";
    // Changed from querySelector to getElementById for performance
    document.getElementById("movingPizzas1").appendChild(c)
  }
  updatePositions()
});
