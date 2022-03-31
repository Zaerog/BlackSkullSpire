gear = [
    {
        "obj_name": "Studded-Leather armor",
        "obj_article": "a ",
        "obj_description": "This armor has seen better days, but remains functional.",
        "obj_actions": ["LOOK", "EXAMINE"]
    },
    {
        "obj_name": "Elven Rapier",
        "obj_article": "an ",
        "obj_description": "This enchanted rapier, forged by the elves, has a unique design to it. Whenever elves see you wearing it, they seem quite offended.",
        "obj_actions": ["LOOK", "EXAMINE"]
    },
    {
        "obj_name": "Crossbow",
        "obj_article": "a ",
        "obj_description": "This hand crossbow has saved you many times.",
        "obj_actions": ["LOOK", "EXAMINE"]
    }
];

killed = [
    {
        "obj_name": "dead Bird",
        "obj_article": "a ",
        "obj_description": "You probably should remove the bolt before cooking. Serves as <span style='color: #FF0000;'>MAIN INGREDIENT</span>.",
        "obj_actions": ["LOOK", "EXAMINE", "TAKE", "SMELL", "DROP"],
        "obj_smell" : "Smells like chicken. Pairs well with mushrooms."
    },
    {
        "obj_name": "Spider legs",
        "obj_article": "a bunch of ",
        "obj_description": "Mostly dead. Those legs still twitch occasionally, but that will just add to the surprise when served for dinner! Serves as <span style='color: #FF0000;'>MAIN INGREDIENT</span>.",
        "obj_actions": ["LOOK", "EXAMINE", "TAKE", "SMELL", "DROP"],
        "obj_smell" : "The legs smell a bit funky. Pairs well with mushrooms."
    },
    {
        "obj_name": "Spider body",
        "obj_article": "a ",
        "obj_description": "Surprisingly big and hairy. You probably should remove the poison glands before cooking. Serves as <span style='color: #FF0000;'>MAIN INGREDIENT</span>. ",
        "obj_actions": ["LOOK", "EXAMINE", "TAKE", "SMELL", "DROP"],
        "obj_smell" : "You are not certain why the meat smells so strange. Pairs well with something spicy."
    }
];

dishes = [
    {
        "obj_name": "Divine Rat-On-A-Stick",
        "obj_article": "",
        "obj_description": "The most heavenly version of this simple dish is an absolute delicacy. The smell is so aromatic and alluring that resistance is futile. Each bite is an utter explosion of flavors in your mouth, everytime you chew, the rich juices are released in your mouth are pure decadence. But once eaten, the curse takes hold. You experienced divinity in your mouth. Forever longing for more, no other mortal dish will ever fill this empty void.",
        "obj_actions": ["LOOK", "EXAMINE", "TAKE", "SMELL", "DROP"],
        "obj_smell" : "Absolute divine perfection."
    },
    {
        "obj_name": "Twitchy legs of Dragonsbreath",
        "obj_article": "",
        "obj_description": "The crunchy legs should be well done, but the added Ghostpepper appears to make them twich quite a bit. As if they were trying to escape the spicy sauce they are marinated in. They twitching pieces create a unique dining experience, as long as you are able to actually able to eat them as the sauce is essentially pure spicy fire. However if you manage to eat this dish, you gain 3 uses of dragonsbreath.",
        "obj_actions": ["LOOK", "EXAMINE", "TAKE", "SMELL", "DROP"],
        "obj_smell" : "Makes your eyes leak and sets your nostrils on fire just smelling it."
    },
    {
        "obj_name": "Hairy meat of Dragonsbreath",
        "obj_article": "",
        "obj_description": "You considered removing the hair first, but they add a sort of unique stringy texture, a little bit like noodles. However, the spicyness seems to somehow pair really well with this dish and make the hairy noodles soft create balanced flavor! You gain 3 uses of dragonsbreath.",
        "obj_actions": ["LOOK", "EXAMINE", "TAKE", "SMELL", "DROP"],
        "obj_smell" : "Makes your eyes leak and sets your nostrils on fire just smelling it."
    },
    {
        "obj_name": "Sky-rat of Dragonsbreath",
        "obj_article": "",
        "obj_description": "Some cooks insist on removing feathers before cooking, but you know better. The extra fibre guarantees regular bowel movements. That is, if you are able to keep the pure spicyness of the sauce down. But if you do, you gain 3 uses of Dragonsbreath.",
        "obj_actions": ["LOOK", "EXAMINE", "TAKE", "SMELL", "DROP"],
        "obj_smell" : "Makes your eyes leak and sets your nostrils on fire just smelling it."
    },
    {
        "obj_name": "Spicy Sweet Emerad Fruitstew of Dragonsbreath",
        "obj_article": "",
        "obj_description": "This surprisingly sweet and vegan option is a flavorexplosion in your mouth. Somehow the fruit balances with the spicyness of the Ghostpepper and creates a rich and satisfying meal for everyone.",
        "obj_actions": ["LOOK", "EXAMINE", "TAKE", "SMELL", "DROP"],
        "obj_smell" : "Sweet and Spicy. Yummy!"
    },
    {
        "obj_name": "Twitchy legs of illusions",
        "obj_article": "",
        "obj_description": "Did those legs just move? Why do they keep changing colors? If presentation is your favourite aspect of a dish, then this wins hands down. Swirly patterns seem to appear and disappear in the sauce. Anyone eating this will have a very good time.",
        "obj_actions": ["LOOK", "EXAMINE", "TAKE", "SMELL", "DROP"],
        "obj_smell" : "Smells like rainbows."
    },
    {
        "obj_name": "Hairy meat of illusions",
        "obj_article": "",
        "obj_description": "You considered removing the hair first, but they add a sort of unique stringy texture, a little bit like noodles. Moving monochrome triangle seem to be all over the meat. Anyone eating this will have a bad trip.",
        "obj_actions": ["LOOK", "EXAMINE", "TAKE", "SMELL", "DROP"],
        "obj_smell" : "Smells like sad monochrome rainbows."
    },
    {
        "obj_name": "Sky-rat of illusions",
        "obj_article": "",
        "obj_description": "Some cooks insist on removing feathers before cooking, but you know better. Wait, maybe you should have removed the feathers - the bird is attempting to fly away leaving a trail of rainbows behind. Anyone eating this will have a very good time.",
        "obj_actions": ["LOOK", "EXAMINE", "TAKE", "SMELL", "DROP"],
        "obj_smell" : "Smells like rainbows."
    },
    {
        "obj_name": "Sweet Emerald Fruitstew of illusions",
        "obj_article": "",
        "obj_description": "You don't know how, but there is a tree starting to grow out of the bowl. This tree keeps telling you about the eventual heat death of the universe and how existence is utterly pointless. Anyone eating this will have a bad trip. ",
        "obj_actions": ["LOOK", "EXAMINE", "TAKE", "SMELL", "DROP"],
        "obj_smell" : "Smells like sad monochrome rainbows."
    }
];


rooms = {
    //---------------------------------------------------Top Level START--------------------------------
    "stairwaytop": {
        "name": "Top level of the Blackskull spire",
        "level": "top",
        "tag": "4",
        "limit": "20",
        "description": "Grass covers the roof of the spire. You have an amazing view of the surrounding valley. The sky is blue, patterned with bright clouds.<br><br> North of you, a telescope and stand perch near the edge of the tower. The south of the roof is dominated by a young looking tree, with a hooded figure resting below. To the west, it is clear enough to make out the distant town of Red Larch.",
        "objects": [
        {
            "obj_name": "downstairs",
            "obj_article": "",
            "obj_description": "These stairs are leading to the third level.",
            "obj_actions": ["LOOK", "EXAMINE", "ENTER", "GO"],
            "obj_destination": "stairway3"
        },
        {
            "obj_name": "Naivara",
            "obj_article": "",
            "obj_description": "She is seems to be trying to pull <span style='color: #E6007e;'>Ellywick</span> away from the telescope.",
            "obj_actions": ["LOOK", "EXAMINE", "TALK"],
            "obj_dialogue1": "<span style='color: #FFD700;'>Naivara</span>: No fair! It's my turn <span style='color: #E6007e;'>Ellywick</span>!",
            "obj_dialogue2": "<span style='color: #FFD700;'>Naivara</span>: I gotta see what Mistrust keeps staring at night, too!",
            "obj_dialogue3": "<span style='color: #FFD700;'>Naivara</span>: Sorry <span style='color: #9ce62a;'>Droop</span>, I know you are busy cooking but I'm not letting you use those mushrooms."
        },
        {
            "obj_name": "Telescope",
            "obj_article": "the ",
            "obj_description": "You are curious what <span style='color: #E6007e;'>Ellywick</span> is looking. It seems to be pointing at a house in Red Larch.",
            "obj_actions": ["LOOK", "EXAMINE"]
        },
        {
            "obj_name": "Ellywick",
            "obj_article": "",
            "obj_description": "She is attached to that telescope, I wonder what she is looking at.",
            "obj_actions": ["LOOK", "EXAMINE", "TALK"],
            "obj_dialogue1": "<span style='color: #E6007e;'>Ellywick</span>: OH MY?!",
            "obj_dialogue2": "<span style='color: #E6007e;'>Ellywick</span>: Hehehehe, <span style='color: #FF0000;'>Mistrust</span> you are such a pig.",
            "obj_dialogue3": "<span style='color: #E6007e;'>Ellywick</span>: Wait no - I'm not done Naivara, Stop pulling on that!"
        },
        {
            "obj_name": "Hooded Figure",
            "obj_article": "",
            "obj_description": "This female elven druid seems to be taking meticulous care with the Tree.",
            "obj_actions": ["LOOK", "EXAMINE", "TALK"],
            "obj_dialogue1": "<span style='color: #68707c;'>Hooded Figure</span>: Just a little longer and this fruit will be absolutely perfect!",
            "obj_dialogue2": "<span style='color: #68707c;'>Hooded Figure</span>: What are you staring at, <span style='color: #9ce62a;'>Goblin</span>?",
            "obj_dialogue3": "<span style='color: #68707c;'>Hooded Figure</span>: Oh, I can't wait to send this fruit to the emerald enclave. I'm sure they will promote me!"
        },
        {
            "obj_name": "Big Tree",
            "obj_article": "a ",
            "obj_description": "This Tree is appearing to grasping at the bright sun in the sky. It's emerald leaves look surreal and gorgous. Even a Goblin can tell that this is no ordinary Tree.",
            "obj_actions": ["LOOK", "EXAMINE"]
        },
        {
            "obj_name": "Rotten Fruit",
            "obj_article": "a ",
            "obj_description": "Apparently this fruit wasn't perfect enough for the druid. It's a little squishy with a unique and soggy texture. Serves as <span style='color: #FF0000;'>MAIN INGREDIENT</span>.",
            "obj_actions": ["LOOK", "EXAMINE", "TAKE", "SMELL", "DROP"],
            "obj_smell" : "The fruit smells almost too sweet. Pairs well with something spicy."
        }]
    },
    //---------------------------------------------------Top Level END--------------------------------
    //---------------------------------------------------Third Level START--------------------------------
    "stairway3": {
        "name": "Stairway on the third level",
        "level": "3",
        "tag": "30",
        "limit": "20",
        "description": "Third level. ",
        "objects": [{
            "obj_name": "upstairs",
            "obj_article": "",
            "obj_description": "These stairs are leading to the top level.",
            "obj_actions": ["LOOK", "EXAMINE", "ENTER", "GO"],
            "obj_destination": "stairwaytop"
        },
        {
            "obj_name": "downstairs",
            "obj_article": "",
            "obj_description": "These stairs are leading to the second level.",
            "obj_actions": ["LOOK", "EXAMINE", "ENTER", "GO"],
            "obj_destination": "stairway2"
        },
        {
            "obj_name": "Torks room",
            "obj_article": "",
            "obj_description": "This door leads to Tork's aka SmackSmash's room.",
            "obj_actions": ["LOOK", "EXAMINE", "ENTER", "GO"],
            "obj_destination": "tork room"
        },
        {
            "obj_name": "Sibilles room",
            "obj_article": "",
            "obj_description": "This door leads to Sibille's room.",
            "obj_actions": ["LOOK", "EXAMINE", "ENTER", "GO"],
            "obj_destination": "sibille room"
        },
        {
            "obj_name": "Mistrusts room",
            "obj_article": "",
            "obj_description": "This door leads to Mistrust's and Justice's room.",
            "obj_actions": ["LOOK", "EXAMINE", "ENTER", "GO"],
            "obj_destination": "mistrust room"
        },
        {
            "obj_name": "Naivaras room",
            "obj_article": "",
            "obj_description": "This door leads to Naivara's room.",
            "obj_actions": ["LOOK", "EXAMINE", "ENTER", "GO"],
            "obj_destination": "naivara room"
        },
        {
            "obj_name": "Ellywicks room",
            "obj_article": "",
            "obj_description": "This door leads to Ellywick's room.",
            "obj_actions": ["LOOK", "EXAMINE", "ENTER", "GO"],
            "obj_destination": "ellywicks room"
        }]
    },
    "tork room": {
        "name": "Torks Room",
        "level": "3",
        "tag": "31",
        "limit": "20",
        "description": "The room of the tall half-orc Barbarian and Blackskull Chieftain. His orcish name is Tork, but he is better known as SmackSmash. Piles of furs scatter the floor near the bed to the north. Bone white and charred black skulls of various shapes and sizes are piled haphazardly on the floor and lone table. The room has a distinctive musk that a Goblin such as you finds reassuring.",
        "objects": [
        {
            "obj_name": "stairway",
            "obj_article": "a ",
            "obj_description": "This door leads to the third level stairway.",
            "obj_actions": ["LOOK", "EXAMINE", "ENTER", "GO"],
            "obj_destination": "stairway3"
        },
        {
            "obj_name": "Trophies",
            "obj_article": "",
            "obj_description": "Several skulls of worthy enemies are mounted around the walls. A Manticore skull to the south, a couple Hydra skulls to the west, but the most impressive trophy is the skull of a Dragon Turtle fastened with thick iron chains at the ceiling of the room.",
            "obj_actions": ["LOOK", "EXAMINE"]
        },        
        {
            "obj_name": "Bed",
            "obj_article": "",
            "obj_description": "The bed is covered in furs of bears.",
            "obj_actions": ["LOOK", "EXAMINE", "SMELL"],
            "obj_smell" : "The bed has a funny smell to it. "
        }]
    },
    "sibille room": {
        "name": "Sibilles Room",
        "level": "3",
        "tag": "33",
        "limit": "20",
        "description": "The room of Sibille. The human cleric and devout disciple of Lathander. The room is spartan, containing a neatly made bed, small shrine and desk. Small plants sit in front of the east facing window.",
        "objects": [
        {
            "obj_name": "stairway",
            "obj_article": "a ",
            "obj_description": "This door leads to the third level stairway.",
            "obj_actions": ["LOOK", "EXAMINE", "ENTER", "GO"],
            "obj_destination": "stairway3"
        },        
        {
            "obj_name": "Shrine",
            "obj_article": "",
            "obj_description": "A shrine devoted to Lathander. There is a golden chalice ontop of it.",
            "obj_actions": ["LOOK", "EXAMINE"]
        },
        {
            "obj_name": "Sibille",
            "obj_article": "",
            "obj_description": "She appears to be kneeling infront of the shrine.",
            "obj_actions": ["LOOK", "TALK"],
            "obj_dialogue1": "<span style='color: #00d5ff;'>Sibille</span>: Droop, what did you cut this time? I can't be constantly mending you like a old blanket.",
            "obj_dialogue2": "<span style='color: #00d5ff;'>Sibille</span>: Don't even think about 'borrowing' anything from me. I really must have a talk with <span style='color: #FFD700;'>Naivara</span> about 'explaining' things to you.",
            "obj_dialogue3": "<span style='color: #00d5ff;'>Sibille</span>: No, don't touch that!"
        }]
    },
    "naivara room": {
        "name": "Naivaras Room",
        "level": "3",
        "tag": "35",
        "limit": "20",
        "description": "The room of Naivara. Against the inner wall sits a bed with a pile of soft blankets. A desk is scattered with papers, with inkpot and quill waiting. A dresser rests in the opposite corner. The elf rogue's room is full of expensive looking knick knacks, most of them probably 'borrowed'. Her skill at 'borrowing' and sneaking exceeds your own. You best move quickly.",
        "objects": [
        {
            "obj_name": "stairway",
            "obj_article": "a ",
            "obj_description": "This door leads to the third level stairway.",
            "obj_actions": ["LOOK", "EXAMINE", "ENTER", "GO"],
            "obj_destination": "stairway3"
        },        
        {
            "obj_name": "Desk",
            "obj_article": "a ",
            "obj_description": "Several letters addressed to an Orphanage in Neverwinter and some unopened letters that bear the seal of wood elven royalty.",
            "obj_actions": ["LOOK", "EXAMINE"]
        },        
        {
            "obj_name": "Pouch",
            "obj_article": "a ",
            "obj_description": "An old leather pouch filled with exotic looking mushrooms.",
            "obj_actions": ["LOOK", "EXAMINE", "TAKE", "SMELL", "DROP"],
            "obj_smell" : "Those mushrooms smell very strong. After taking a deep breath, the mushrooms seem to be moving and their colors appear to be brighter. You better stop for now and save them for Dinner. <span style='color: #FFD700;'>Naivara</span> certainly knows her way around high quality hallucinogenics. Serves as <span style='color: #FF0000;'>SEASONING</span>."
        }]
    },
    "mistrust room": {
        "name": "Mistrusts room",
        "level": "3",
        "tag": "32",
        "limit": "20",
        "description": "This room is shared by the Tieflings Mistrust, a brooding monk whose casual gaze is as frightening as an enraged Tork, and Justice, the Eldrich Knight who suffered from a time related mishap. The room is usually locked for good reason, as gold and silver treasures are prominently displayed. A few chests rest against the wall, locked against wouldbe thieves or cooks. Two beds sit in opposite ends of the room, with small trunks at the foot of each. These also appear locked. Someone so mistrustful might see you being here as a threat. Best get in, get out.",
        "objects": [
        {
            "obj_name": "stairway",
            "obj_article": "a ",
            "obj_description": "This door leads to the third level stairway.",
            "obj_actions": ["LOOK", "EXAMINE", "ENTER", "GO"],
            "obj_destination": "stairway3"
        },        
        {
            "obj_name": "Chest",
            "obj_article": "a ",
            "obj_description": "You didn't realize how much gold they hoarded here. You should come back after Dinner and 'borrow' some.",
            "obj_actions": ["LOOK", "EXAMINE"]
        },        
        {
            "obj_name": "Desk",
            "obj_article": "a ",
            "obj_description": "This Desk is full of odd bottles and mixtures. Something about accelerated hair growth. Now, that you think about it, that might explain Justices new and glorious mustache.",
            "obj_actions": ["LOOK", "EXAMINE"]
        }]
    },
    "ellywicks room": {
        "name": "Ellywicks room",
        "level": "3",
        "tag": "34",
        "limit": "20",
        "description": "This room belongs to the gnome bard known as Ellywick. Her room appears to be filled with a random assortment of objects, both whimsical and malevoent. Brightly coloured silk scarves rest next to rustic wooden statues. A set of instruments rest in the corner, well worn. A wardrobe sits oppsite a bed, heaped with brightly dyed linens.",
        "objects": [
        {
            "obj_name": "stairway",
            "obj_article": "a ",
            "obj_description": "This door leads to the third level stairway.",
            "obj_actions": ["LOOK", "EXAMINE", "ENTER", "GO"],
            "obj_destination": "stairway3"
        },        
        {
            "obj_name": "Wardrobe",
            "obj_article": "a ",
            "obj_description": "As you peak into the wardrobe, you remember how much you enjoy sneaking into Ellywicks room to try her clothing on while embracing your feminine side.",
            "obj_actions": ["LOOK", "EXAMINE"]
        }]
    },
    //---------------------------------------------------Third Level END--------------------------------
    //---------------------------------------------------Second Level START--------------------------------
    "start": {
        "name": "Droops room",
        "level": "2",
        "tag": "21",
        "limit": "20",
        "description": "A typical Goblin's room, you've left your mark on the walls, floor and bed. Food scraps mix with straw, creating a pleasant crunch-squish when you walk. An added bonus, rats will move into the room, providing additional, much needed, protein. The rats here have gotten too smart, though. None are in sight. A chest with your belongings, rightfully stolen, sits next to your torn and unwashed bedding. Home sweet home.",
        "objects": [{
                "obj_name": "Bed",
                "obj_article": "a ",
                "obj_description": "Ah, your cozy bed. It has a very unique smell to it. Mother would be proud.",
                "obj_actions": ["LOOK", "EXAMINE"]
            },
            {
                "obj_name": "Chest",
                "obj_article": "a ",
                "obj_description": "You already grabbed your gear. There is a copy of 'Blackskull Clan Rules' that you authored with <span style='color: #008000;'>Tork</span>. It's mostly pictures, scrawled with a charcoal pencil. A crowbar rests on the bottom, looking well-used.",
                "obj_actions": ["LOOK", "EXAMINE"]
            },
            {
                "obj_name": "Dining Hall",
                "obj_article": "the ",
                "obj_description": "This door connects to the main dinner hall of the spire on the second level.",
                "obj_actions": ["LOOK", "EXAMINE", "ENTER", "GO"],
                "obj_destination": "dinner hall"
            }
        ]
    },
    "dinner hall": {
        "name": "Dining Hall",
        "level": "2",        
        "tag": "22",
        "limit": "8",
        "description": "The Dining Hall is big, with a long dinner table taking up the centre. The room is a wide halfmoon shape, the windows in the opposite wall showing an impressive view of the valley below with bright sunlight streaming in. Far too bright and cheery for your tastes. ",
        "objects": [{
            "obj_name": "stairway",
            "obj_article": "the ",
            "obj_description": "Thats the door leading to the stairway.",
            "obj_actions": ["LOOK", "EXAMINE", "ENTER", "GO"],
            "obj_destination": "stairway2"
        },
        {
            "obj_name": "Droops room",
            "obj_article": "",
            "obj_description": "That's the door leading to my room. I've left my distinctive nail scratches into the oak.",
            "obj_actions": ["LOOK", "EXAMINE", "ENTER", "GO"],
            "obj_destination": "start"
        },
        {
            "obj_name": "guards room",
            "obj_article": "the ",
            "obj_description": "This door is leading to the guard's quarters. We currently have only humans in employ. I should convince Tork that more goblin and hobgoblins would make the clan more sucessful. Humans hardly ever consider stealing candy from children.",
            "obj_actions": ["LOOK", "EXAMINE", "ENTER", "GO"],
            "obj_destination": "guards room"
        },
        {
            "obj_name": "guest quarter",
            "obj_article": "the ",
            "obj_description": "This door is leading to the guest quarters.",
            "obj_actions": ["LOOK", "EXAMINE", "ENTER", "GO"],
            "obj_destination": "guest room"
        },
        {
            "obj_name": "Dining Table",
            "obj_article": "a ",
            "obj_description": "This huge table is just good enough to serve your unique delicacies.",
            "obj_actions": ["LOOK", "EXAMINE"]
        },
        {
            "obj_name": "Serving Dinner for dummies",
            "obj_article": "a book called ",
            "obj_description": "The book contains detailed instructions on properly serving dinner to your clan. First,<span style='color: #FF0000;'>FIND</span> both a main ingredient and seasoning. Then, <span style='color: #FF0000;'>EXAMINE</span> and <span style='color: #FF0000;'>SMELL</span> your ingredients to chose the desired meal to create. <span style='color: #FF0000;'>COOK</span> it in the <span style='color: #FF0000;'>KITCHEN</span>. Once done, <span style='color: #FF0000;'>DROP</span> your finished dish here and <span style='color: #FF0000;'>RING</span> the Dinner Bell. (<span style='color: #FF0000;'>Be careful</span>: This will <span style='color: #FF0000;'>END</span> the game.)",
            "obj_actions": ["LOOK", "EXAMINE"]
        },
        {
            "obj_name": "Dinner Bell",
            "obj_article": "the ",
            "obj_description": "Ring the bell to call everyone for Dinner!",
            "obj_actions": ["LOOK", "EXAMINE","RING"]
        }]
    },
    "stairway2": {
        "name": "Stairway on the second level",
        "level": "2",        
        "tag": "20",
        "limit": "20",
        "description": "Second level. ",
        "objects": [{
            "obj_name": "upstairs",
            "obj_article": "",
            "obj_description": "These stairs are leading to the third level.",
            "obj_actions": ["LOOK", "EXAMINE", "ENTER", "GO"],
            "obj_destination": "stairway3"
        },
        {
            "obj_name": "downstairs",            
            "obj_article": "",
            "obj_description": "These stairs are leading to the entry level.",
            "obj_actions": ["LOOK", "EXAMINE", "ENTER", "GO"],
            "obj_destination": "stairway1"
        },
        {
            "obj_name": "Dining Hall",
            "obj_article": "the ",
            "obj_description": "This door connects to the main dinner hall of the spire on the second level.",
            "obj_actions": ["LOOK", "EXAMINE", "ENTER", "GO"],
            "obj_destination": "dinner hall"
        }]
    },
    "guards room": {
        "name": "Guards room",
        "level": "2",        
        "tag": "23",
        "limit": "20",
        "description": "Currently occupied by some Mercenaries. Mercenaries seems more civilized than your average human. They want gold and food, but will run if it gets too dangerous. They also steal, if given the chance. Almost as good as goblins.",
        "objects": [
        {
            "obj_name": "Dining Hall",            
            "obj_article": "the ",
            "obj_description": "This door connects to the main dinner hall of the spire on the second level.",
            "obj_actions": ["LOOK", "EXAMINE", "ENTER", "GO"],
            "obj_destination": "dinner hall"
        },
        {
            "obj_name": "Chrisp The Fixer",            
            "obj_article": "",
            "obj_description": "The long haired Human guard appears to be fixing some odd looking device.",
            "obj_actions": ["LOOK", "EXAMINE", "TALK"],
            "obj_dialogue1": "<span style='color: #ff0066;'>Chrisp The Fixer</span>: How come i can't smell the giant spider in the storage room?!",
            "obj_dialogue2": "<span style='color: #ff0066;'>Chrisp The Fixer</span>: 'go in tiny opening' - hur dur dur.",
            "obj_dialogue3": "<span style='color: #ff0066;'>Chrisp The Fixer</span>: I also can't enter the strange figure."
        }]
    },
    "guest room": {
        "name": "Guest room",
        "level": "2",
        "tag": "24",
        "limit": "20",
        "description": "Currently unoccupied, thankfully. Tork explained 'guests' to you before. People that you don't kill or steal from, but also don't work for you under threat of injury. They just eat your food. Guests seem completely useless... Until Naivara explained you can 'borrow' from them. As long as you intend to return it before you die, you can keep it. Considering Droop never planned to die, you consider the matter settled.",
        "objects": [
        {
            "obj_name": "Dining Hall",
            "obj_article": "the ",
            "obj_description": "This door connects to the main dinner hall of the spire on the second level.",
            "obj_actions": ["LOOK", "EXAMINE", "ENTER", "GO"],
            "obj_destination": "dinner hall"
        }]
    },
    //---------------------------------------------------Second Level END--------------------------------
    //---------------------------------------------------Ground Level START--------------------------------
    "stairway1": {
        "name": "Stairway on the ground level",
        "level": "1",
        "tag": "10",
        "limit": "20",
        "description": "Ground level. ",
        "objects": [{
            "obj_name": "upstairs",
            "obj_article": "",
            "obj_description": "These stairs are leading to the second level.",
            "obj_actions": ["LOOK", "EXAMINE", "ENTER", "GO"],
            "obj_destination": "stairway2"
        },
        {
            "obj_name": "downstairs",
            "obj_article": "",
            "obj_description": "These stairs are leading to the basement level.",
            "obj_actions": ["LOOK", "EXAMINE", "ENTER", "GO"],
            "obj_destination": "stairwayb"
        },
        {
            "obj_name": "entrance hall",
            "obj_article": "the ",
            "obj_description": "This door leads to the entrance hall of the Blackskull Spire. An intimidating black skull, charred in a fire for hours, stares down at you.",
            "obj_actions": ["LOOK", "EXAMINE", "ENTER", "GO"],
            "obj_destination": "entrance hall"
        },
        {
            "obj_name": "kitchen",
            "obj_article": "the ",
            "obj_description": "This door leads to the kitchen.",
            "obj_actions": ["LOOK", "EXAMINE", "ENTER", "GO"],
            "obj_destination": "kitchen"
        },
        {
            "obj_name": "solarium",
            "obj_article": "the ",
            "obj_description": "This door leads to the solarium.",
            "obj_actions": ["LOOK", "EXAMINE", "ENTER", "GO"],
            "obj_destination": "solarium"
        },
        {
            "obj_name": "servants quarters",
            "obj_article": "the ",
            "obj_description": "This door leads to the servants quarters.",
            "obj_actions": ["LOOK", "EXAMINE", "ENTER", "GO"],
            "obj_destination": "servants quarters"
        }]
    },
    "entrance hall": {
        "name": "Entrance Hall",
        "level": "1",
        "tag": "15",
        "limit": "20",
        "description": "The big entrance hall of the Blackskull Spire. Full of trophies from previous adventures. Sibille always seems to know when something goes missing, eventually. She is uncannily perceptive and distrustful of you.",
        "objects": [
        {
            "obj_name": "stairway",
            "obj_article": "the ",
            "obj_description": "This door leads to the ground level stairway.",
            "obj_actions": ["LOOK", "EXAMINE", "ENTER", "GO"],
            "obj_destination": "stairway1"
        },
        {
            "obj_name": "armory",
            "obj_article": "the ",
            "obj_description": "This door leads to the armory.",
            "obj_actions": ["LOOK", "EXAMINE", "ENTER", "GO"],
            "obj_destination": "armory"
        },
        {
            "obj_name": "outside",
            "obj_article": "the ",
            "obj_description": "This big door leads to the outside.",
            "obj_actions": ["LOOK", "EXAMINE", "ENTER", "GO"],
            "obj_destination": "outside"
        }]
    },
    "kitchen": {
        "name": "Kitchen",
        "level": "1",
        "tag": "11",
        "limit": "6",
        "description": "The fully equipped kitchen that is your domain. The clan respects your complete authority here, despite some being suspicious of your methods. The proof is in the elf pudding, as they say. A well seasoned cast-iron pot rests over the cold fireplace, and stacks of crates and supplies line the walls. Everything is chaotic, and you know precisely where <i>some</i> of the things are. You should start your masterpiece for tonight by gathering ingredients before you return.",
        "objects": [
        {
            "obj_name": "stairway",
            "obj_article": "the ",
            "obj_description": "This door leads to the ground level stairway.",
            "obj_actions": ["LOOK", "EXAMINE", "ENTER", "GO"],
            "obj_destination": "stairway1"
        },
        {
            "obj_name": "solarium",
            "obj_article": "the ",
            "obj_description": "This door leads to the solarium.",
            "obj_actions": ["LOOK", "EXAMINE", "ENTER", "GO"],
            "obj_destination": "solarium"
        },
        {
            "obj_name": "cooking for dummies",
            "obj_article": "a book called: ",
            "obj_description": "<span style='color: #FF0000;'>DROP</span> One <span style='color: #FF0000;'>MAIN INGREDIENT</span> and one <span style='color: #FF0000;'>SEASONING</span> item here and then start <span style='color: #FF0000;'>COOK</span>ing with the cast-iron pot. <br> TIP: <span style='color: #FF0000;'>SMELL</span> ingredients before cooking to figure out what goes well together!",
            "obj_actions": ["LOOK", "EXAMINE", "COOK"]
        },
        {
            "obj_name": "cast-iron pot",
            "obj_article": "the ",
            "obj_description": "Once you decided which 2 ingredients to use, you should come here and start <span style='color: #FF0000;'>COOK</span>ing.",
            "obj_actions": ["LOOK", "EXAMINE", "COOK"]
        }]
    },
    "solarium": {
        "name": "solarium",
        "level": "1",
        "tag": "12",
        "limit": "20",
        "description": "The brightly lit room houses pots and garden beds of various sizes and heights. A collection of herbs are growing in the herb bed and healthy looking vegetables grow in the planters.",
        "objects": [
        {
            "obj_name": "kitchen",
            "obj_article": "the ",
            "obj_description": "This door leads to the kitchen.",
            "obj_actions": ["LOOK", "EXAMINE", "ENTER", "GO"],
            "obj_destination": "kitchen"
        },
        {
            "obj_name": "stairway",
            "obj_article": "a ",
            "obj_description": "This door leads to the ground level stairway.",
            "obj_actions": ["LOOK", "EXAMINE", "ENTER", "GO"],
            "obj_destination": "stairway1"
        },
        {
            "obj_name": "Mistrust",
            "obj_article": "",
            "obj_description": "He seems to be meditating.",
            "obj_actions": ["LOOK", "EXAMINE", "TALK"],
            "obj_dialogue1": "<span style='color: #FF0000;'>Mistrust</span>: Yes. I was meditating. But then you started to talk to me. Don't you have anything better to do than to bother me?",
            "obj_dialogue2": "<span style='color: #FF0000;'>Mistrust</span>: Stop talking to me.",
            "obj_dialogue3": "<span style='color: #FF0000;'>Mistrust</span>: ... ."

        },        
        {
            "obj_name": "Ghost Pepper",
            "obj_article": "a ",
            "obj_description": "Mistrust seems to have a green thumb as he takes care of growing some herbs in here after his meditations. Serves as <span style='color: #FF0000;'>SEASONING</span>",
            "obj_actions": ["LOOK", "EXAMINE", "TAKE", "SMELL", "DROP"],
            "obj_smell" : "Your nostrils are on fire. Your eyes are starting to leak. This will make a great addition for any dish."
        }]
    },
    "servants quarters": {
        "name": "servants quarters",
        "level": "1",
        "tag": "13",
        "limit": "20",
        "description": "Four rustic beds line the far wall, outfitted with linens, neatly folded. Small trunks sit at the end of each one, waiting for guests. It smells of dust and faintly of perfume.",
        "objects": [
        {
            "obj_name": "stairway",
            "obj_article": "a ",
            "obj_description": "This door leads to the ground level stairway.",
            "obj_actions": ["LOOK", "EXAMINE", "ENTER", "GO"],
            "obj_destination": "stairway1"
        }]
    },
    "armory": {
        "name": "Armory",
        "level": "1",
        "tag": "14",
        "limit": "20",
        "description": "An  assortment of gear from is displayed here, in an obnoxious dwarven fashion. The unnatural orderliness is unsettling and you itch to knock over the shiny armor and weapons to return things to comforting disorder. You stop yourself. The dwarven blacksmith downstairs has ears like a cat, and doesn't take kindly to your... redecorating.",
        "objects": [
        {
            "obj_name": "Entrance Hall",
            "obj_article": "a ",
            "obj_description": "This door leads to the entrance hall of the Blackskull Spire. An intimidating black skull, charred in a fire for hours, stares down at you.",
            "obj_actions": ["LOOK", "EXAMINE", "ENTER", "GO"],
            "obj_destination": "entrance hall"
        },
        {
            "obj_name": "Justice",
            "obj_article": "",
            "obj_description": "He appears to be talking to himself.",
            "obj_actions": ["LOOK", "EXAMINE", "TALK"],
            "obj_dialogue1": "<span style='color: #0066ff;'>Justice</span>: Hm. We need to increase our anti-turtle-dragon gear.",
            "obj_dialogue2": "<span style='color: #0066ff;'>Justice</span>: Maybe I should get armor with spikes. Would hot sauce be a deterrent?",
            "obj_dialogue3": "<span style='color: #0066ff;'>Justice</span>: Ah... that crunching sound still haunts me.<br><br> The young tiefling has a far off, haunted look."

        }]
    },
    "outside": {
        "name": "outside",
        "level": "o",
        "tag": "16",
        "limit": "20",
        "description": "The main gate opens to a drawbridge, that would normally span the dizzying drop below. To the side, a shining black golem awaits orders to lower the bridge. He looks perfectly fine.",
        "objects": [
        {
            "obj_name": "Entrance Hall",
            "obj_article": "the ",
            "obj_description": "This door leads to the ground level stairway.",
            "obj_actions": ["LOOK", "EXAMINE", "ENTER", "GO"],
            "obj_destination": "entrance hall"
        },
        {
            "obj_name": "Bridge",
            "obj_article": "a ",
            "obj_description": "This currently raised Bridge is the only way across the chasm below.",
            "obj_actions": ["LOOK", "EXAMINE"]
        },
        {
            "obj_name": "Golem",
            "obj_article": "a ",
            "obj_description": "The large Obsidian Golem is guarding the controls for the raised bridge. It looks pristine, without a scratch.",
            "obj_actions": ["LOOK", "EXAMINE"]
        },
        {
            "obj_name": "Bird",
            "obj_article": "a ",
            "obj_description": "There is this bird sitting ontop of the Golems head. You could probably <span style='color: #FF0000;'>SHOOT</span> it down.",
            "obj_actions": ["LOOK", "EXAMINE", "SHOOT"]
        }]
    },
    //---------------------------------------------------Ground Level END--------------------------------
    //---------------------------------------------------Basement Level START--------------------------------
    "stairwayb": {
        "name": "Stairway on the basement level",
        "level": "b",
        "tag": "b0",
        "limit": "20",
        "description": "Basement level. ",
        "objects": [{
            "obj_name": "upstairs",
            "obj_article": "",
            "obj_description": "These stairs are leading to the ground level.",
            "obj_actions": ["LOOK", "EXAMINE", "ENTER", "GO"],
            "obj_destination": "stairway1"
        },
        {
            "obj_name": "Forge",
            "obj_article": "the ",
            "obj_description": "This door is leading to the forge.",
            "obj_actions": ["LOOK", "EXAMINE", "ENTER", "GO"],
            "obj_destination": "forge"
        },
        {
            "obj_name": "stables",
            "obj_article": "the ",
            "obj_description": "This door is leading to the stables.",
            "obj_actions": ["LOOK", "EXAMINE", "ENTER", "GO"],
            "obj_destination": "stables"
        },
        {
            "obj_name": "storage room",
            "obj_article": "the ",
            "obj_description": "This door is leading to the storage.",
            "obj_actions": ["LOOK", "EXAMINE", "ENTER", "GO"],
            "obj_destination": "storage"
        }]
    },
    "forge": {
        "name": "The Blackskull Forge",
        "level": "b",
        "tag": "b4",
        "limit": "20",
        "description": "You're not sure how that <i>dwarf</i> gets anything done in here. Tools are set out in rigid and disconcerning order. The chaos of creation seems scorned more than embraced here. He does make sturdy weapons though. The room is full of heat from the banked forge. The usual clanging of hammer on steel is absent.",
        "objects": [{
            "obj_name": "stairway",
            "obj_article": "the ",
            "obj_description": "This wooden door leads to the basement level stairs.",
            "obj_actions": ["LOOK", "EXAMINE", "ENTER", "GO"],
            "obj_destination": "stairwayb"
        },
        {
            "obj_name": "dwarven quarters",
            "obj_article": "the ",
            "obj_description": "This door is leading to private quarters of the dwarven blacksmith.",
            "obj_actions": ["LOOK", "EXAMINE", "ENTER", "GO"],
            "obj_destination": "blacksmith"
        },
        {
            "obj_name": "Tork",
            "obj_article": "",
            "obj_description": "My boss. He freed me from captivity by promptly bundling me into captivity until I obeyed him. He appears to be talking to that hairy <span style='color: #804a00;'>dwarf</span>. That explains the lack of clanging.",
            "obj_actions": ["LOOK", "EXAMINE", "TALK"],
            "obj_dialogue1": "<span style='color: #008000;'>Tork</span>: I need more skulls on my armor. Intimidating skulls! That will look good with my pipe!",
            "obj_dialogue2": "<span style='color: #008000;'>Tork</span>: Oh hey Droop! You all busy gathering yummy thingies to eat later?",
            "obj_dialogue3": "<span style='color: #008000;'>Tork</span>: What was that? You want to tunnel downward from HERE to look for ore?"
        },
        {
            "obj_name": "Dwarf",
            "obj_article": "the ",
            "obj_description": "Stupid Dwarf. He appears to be talking to <span style='color: #008000;'>Tork</span>. He appears distracted, now is your chance to jiggery-pokery around.",
            "obj_actions": ["LOOK", "EXAMINE", "TALK"],
            "obj_dialogue1": "<span style='color: #804a00;'>Dwarf</span>: More skulls? Ye daft, lad? Yir right covered in 'em!",
            "obj_dialogue2": "<span style='color: #804a00;'>Dwarf</span>: Aye, Ah believe there is somehin 'neath this tower. Can feel it in me bones!<br><br>He seems distracted.",
            "obj_dialogue3": "<span style='color: #804a00;'>Dwarf</span>: Get out of here ye wee puny <span style='color: #9ce62a;'>Goblin</span>. Just because <span style='color: #008000;'>SmackSmash</span> earned my respect, doesnae mean ye can come in 'ere."
        }]
    },
    "blacksmith": {
        "name": "The dwarven quarters",
        "level": "b",
        "tag": "b3",
        "limit": "20",
        "description": "The dwarves quarters are full of pickaxes and piles of gems and ore.",
        "objects": [{
            "obj_name": "Forge",
            "obj_article": "the ",
            "obj_description": "This door is leading to the forge.",
            "obj_actions": ["LOOK", "EXAMINE", "ENTER", "GO"],
            "obj_destination": "forge"
        },
        {
            "obj_name": "Tiny opening",
            "obj_article": "a ",
            "obj_description": "What is this? This tiny crack in the floor wasn't here before. Maybe I could squeeze through there ...",
            "obj_actions": ["LOOK", "EXAMINE", "ENTER", "GO"],
            "obj_destination": "cave"
        }]
    },
    "stables": {
        "name": "The Stables",
        "level": "b",
        "tag": "b2",
        "limit": "20",
        "description": "There are multiple stalls for winged beasts here, each stall opening up to the sky surrounding the tower. Four Hippogryphs stare at you as expectantly and with thinly veiled hostility as you enter.",
        "objects": [{
            "obj_name": "stairway",
            "obj_article": "the ",
            "obj_description": "This wooden door leads to the basement level stairs.",
            "obj_actions": ["LOOK", "EXAMINE", "ENTER", "GO"],
            "obj_destination": "stairwayb"
        }]
    },
    "storage": {
        "name": "The Storage room",
        "level": "b",
        "tag": "b1",
        "limit": "20",
        "description": "Filled with stuff.",
        "objects": [{
            "obj_name": "stairway",
            "obj_article": "the ",
            "obj_description": "This wooden door leads to the basement level stairs.",
            "obj_actions": ["LOOK", "EXAMINE", "ENTER", "GO"],
            "obj_destination": "stairwayb"
        },
        {
            "obj_name": "Giant Spider",
            "obj_article": "a ",
            "obj_description": "The Giant Spider is hidden behind some boxes but doesn't seem to have noticed you yet. You could probably launch a surprise <span style='color: #FF0000;'>ATTACK</span> and get some spider meat!",
            "obj_actions": ["LOOK", "EXAMINE", "ATTACK"],
            "obj_destination": "stairwayb"
        }]
    },

    //---------------------------------------------------Basement Level END--------------------------------
    //---------------------------------------------------Secret Level START--------------------------------
    "cave": {
        "name": "Hidden Cave",
        "level": "s",
        "tag": "s0",
        "limit": "20",
        "description": "a huge cave with shining crystals appears before you illuminating the area.",
        "objects": [{
            "obj_name": "tiny opening",
            "obj_article": "an ",
            "obj_description": "This crack in the ceiling leads back to the quarters of that dwarf.",
            "obj_actions": ["LOOK", "EXAMINE", "ENTER", "GO"],
            "obj_destination": "blacksmith"
        },
        {
            "obj_name": "Strange Figure",
            "obj_article": "a ",
            "obj_description": "Who is this guy and what is he doing here?!",
            "obj_actions": ["LOOK", "EXAMINE", "TALK"],
            "obj_dialogue1": "<span style='color: #c14413;'>Strange Figure</span>: I can't believe I signed my soul away to a higher being called Hue.",
            "obj_dialogue2": "<span style='color: #c14413;'>Strange Figure</span>: Hey, you are Droop right? I died and was sent here through space and time from another plane just to give you this enchanted salt shaker. You better be thankful for this. You have no idea.",
            "obj_dialogue3": "<span style='color: #c14413;'>Strange Figure</span>: There goes my plan out the window to haunt Lark. I can't believe she argued with that Black Dragon. And now I'm stuck in this plane?"
        },
        {
            "obj_name": "Enchanted Salt Shaker",
            "obj_article": "an ",
            "obj_description": "Looks like an ordinary salt shaker but imbued with polymorphic properties. Serves as <span style='color: #FF0000;'>SEASONING</span>.",
            "obj_actions": ["LOOK", "EXAMINE", "TAKE", "SMELL", "DROP"],
            "obj_smell" : "Smells oddly like ... rat on a stick?! But the most delicous rat on a stick ever created?! This <span style='color: #FF0000;'>SEASONING</span> goes with anything!"
        }]
    }
    //---------------------------------------------------Secret Level END--------------------------------
};