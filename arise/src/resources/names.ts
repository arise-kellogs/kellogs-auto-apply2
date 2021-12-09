import shuffle = require('lodash.shuffle');

export const namesList: string[] = [
    "Mario Speedwagon",
    "Petey Cruiser",
    "Anna Sthesia",
    "Paul Molive",
    "Anna Mull",
    "Gail Forcewind",
    "Paige Turner",
    "Bob Frapples",
    "Walter Melon",
    "Nick R. Bocker",
    "Barb Ackue",
    "Buck Kinnear",
    "Greta Life",
    "Ira Membrit",
    "Shonda Leer",
    "Brock Lee",
    "Maya Didas",
    "Rick O'Shea",
    "Pete Sariya",
    "Monty Carlo",
    "Sal Monella",
    "Sue Vaneer",
    "Cliff Hanger",
    "Barb Dwyer",
    "Terry Aki",
    "Cory Ander",
    "Robin Banks",
    "Jimmy Changa",
    "Barry Wine",
    "Wilma Mumduya",
    "Buster Hyman",
    "Poppa Cherry",
    "Zack Lee",
    "Don Stairs",
    "Saul T. Balls",
    "Peter Pants",
    "Hal Appeno ",
    "Otto Matic",
    "Moe Fugga",
    "Graham Cracker",
    "Tom Foolery",
    "Al Dente",
    "Bud Wiser",
    "Polly Tech",
    "Holly Graham",
    "Frank N. Stein",
    "Cam L. Toe",
    "Pat Agonia",
    "Tara Zona",
    "Barry Cade",
    "Phil Anthropist ",
    "Marvin Gardens",
    "Phil Harmonic ",
    "Arty Ficial",
    "Will Power",
    "Donatella Nobatti",
    "Juan Annatoo",
    "Stew Gots",
    "Anna Rexia",
    "Bill Emia",
    "Curt N. Call",
    "Max Emum",
    "Minnie Mum",
    "Bill Yerds",
    "Hap E. Birthday",
    "Matt Innae",
    "Polly Science",
    "Tara Misu",
    "Ed U. Cation",
    "Gerry Atric",
    "Kerry Oaky",
    "Midge Itz",
    "Gabe Lackmen",
    "Mary Christmas",
    "Dan Druff",
    "Jim Nasium",
    "Angie O. Plasty",
    "Ella Vator",
    "Sal Vidge",
    "Bart Ender",
    "Artie Choke",
    "Hans Olo",
    "Marge Arin",
    "Hugh Briss",
    "Gene Poole",
    "Ty Tanic",
    "Manuel Labor",
    "Lynn Guini",
    "Claire Voyant",
    "Peg Leg",
    "Jack E. Sack",
    "Marty Graw",
    "Ash Wednesday",
    "Olive Yu",
    "Gene Jacket",
    "Tom Atoe",
    "Doug Out",
    "Sharon Needles",
    "Beau Tie",
    "Serj Protector",
    "Marcus Down",
    "Warren Peace",
    "Bud Jet",
    "Barney Cull",
    "Marion Gaze",
    "Eric Shun",
    "Mal Practice",
    "Ed Itorial",
    "Rick Shaw",
    "Paul Issy",
    "Ben Effit",
    "Kat E. Gory",
    "Justin Case",
    "Louie Z. Ana",
    "Aaron Ottix",
    "Ty Ballgame",
    "Anne Fibbiyon",
    "Barry Cuda",
    "John Withawind",
    "Joe Thyme",
    "Mary Goround",
    "Marge Arita",
    "Frank Senbeans",
    "Bill Dabear",
    "Ray Zindaroof",
    "Adam Zapple",
    "Lewis N. Clark",
    "Matt Schtick",
    "Sue Shee",
    "Chris P. Bacon",
    "Doug Lee Duckling",
    "Mason Protesters",
    "Sil Antro",
    "Cal Orie",
    "Sara Bellum",
    "Al Acart",
    "Marv Ellis",
    "Evan Shlee",
    "Terry Bull",
    "Mort Ission",
    "Mark Ette",
    "Ken Tucky",
    "Louis Ville",
    "Colin Oscopy",
    "Fred Attchini",
    "Al Fredo",
    "Penny Tration",
    "Reed Iculous",
    "Chip Zinsalsa",
    "Matt Uhrafact",
    "Jack Dup",
    "Mike Roscope",
    "Lou Sinclark",
    "Faye Daway",
    "Javy Cado",
    "Tom Ollie",
    "Sam Buca",
    "Phil Anderer",
    "Sam Owen",
    "Mary Achi",
    "Ray Cyst",
    "Curtis E. Flush",
    "Holland Oats",
    "Helen Highwater",
    "Eddy Kitt",
    "Al Toesacks",
    "Sir Kim Scision",
    "Elle Bowdrop",
    "Yu Tube",
    "Ellis Dee",
    "Anna Lytics",
    "Sara Bellum",
    "Penny Trate",
    "Phil Erup",
    "Jenna Side",
    "Mary Nara",
    "Mick Donalds",
    "Amber Alert",
    "Vic Tory",
    "Bobby Pin",
    "Dom Inate",
    "Hugh Miliation",
    "Christian Mingle",
    "Juan Soponatime",
    "Dante Sinferno",
    "Ed Zupp",
    "Sarah Yevo",
    "Jess Thetip",
    "Arthur Itis",
    "Faye Sbook",
    "Carrie R. Pigeon",
    "Rachel Slurs",
    "Ty Pryder",
    "Cole Slaw",
    "Pat Ernity",
    "Deb Utant",
    "Luke Warm",
    "Travis Tee",
    "Clara Fication",
    "Paul Itician",
    "Deb Utant",
    "Moe Thegrass",
    "Carol Sell",
    "Scott Schtape",
    "Cody Pendant",
    "Frank Furter",
    "Barry Dalive",
    "Mort Adella",
    "Ray Diation",
    "Mack Adamia",
    "Farrah Moan",
    "Theo Retical",
    "Eda Torial",
    "Mae O'Nayse",
    "Bella Ruse",
    "Yuri thra",
    "Tucker Doubt",
    "Cara Larm",
    "Abel Body",
    "Sal Ami",
    "Colin Derr",
    "Cathy Derr",
    "Colin O'Scopy",
    "Mel Anoma",
    "Adam Up",
    "Lou Zing",
    "Mark Key",
    "Sven Gineer",
    "Mick Rib",
    "Benny Ficial",
    "Genie Inabottle",
    "Gene Therapy",
    "Reggie Stration",
    "Lou Ow",
    "Lance Dorporal",
    "Lou Tenant",
    "Nick Knack",
    "Patty Whack",
    "Reuben Sandwich",
    "Hugo Slavia",
    "Aaron Spacemuseum",
    "Petey Atricks",
    "Dan Delion",
    "Terry Torial",
    "Cal Q. Later",
    "Jen Trification",
    "Indy Nile",
    "Ray Volver",
    "Minnie Strone",
    "Gustav Wind",
    "Paul Samic",
    "Vinny Gret",
    "Joyce Tick",
    "Cliff Diver",
    "Earl E. Riser",
    "Cooke Edoh",
    "Jen Youfelct",
    "Reanne Carnation",
    "Paul Misunday",
    "Chris P. Cream",
    "Gio Metric",
    "Caire Innet",
    "Marsha Mello",
    "Manny Petty",
    "Val Adictorian",
    "Lucy Tania",
    "Jaques Amole"
];

export const getName = () => {
    const name = shuffle(namesList)[0];
    return name || "Bilbo Baggins";
}