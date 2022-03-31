class Game {
    constructor(location_start, rooms) {
        var dialogue = "1";
        this.location = location_start;
        this.rooms = rooms;
        this.inventory = gear;
        this.loot = killed;
        var current_location = this.location;
        var rooms = this.rooms;
        updateTower(rooms[current_location].level);
        document.getElementById(rooms[current_location].tag).style.color="#9ce62a"; //
    }

    parse(command) {
        window.sessionStorage.setItem('dialogue', "1");
        var words = command.toUpperCase();
        var objects = this.rooms[this.location].objects;
        var target = "";
        for (var i = 0; i < objects.length; i++) {
            if (words.includes(objects[i].obj_name.toUpperCase())) {
                target = objects[i]
                break;
            }
        }
        if(target == ""){ //
            for (var i = 0; i < this.inventory.length; i++) { //
            if (words.includes(this.inventory[i].obj_name.toUpperCase())) { //
                target = this.inventory[i] //
                break; //
                } //
            } //
        } //
        if (target != "") {
            var verbs = target.obj_actions;
            var action = "";
            for (var i = 0; i < verbs.length; i++) {
                if (words.includes(verbs[i].toUpperCase())) {
                    action = verbs[i]
                    break;
                }
            }
            switch (action) {
                case "GO":
                case "ENTER":
                    var previous_location = this.location;
                    this.location = target.obj_destination;
                    var current_location = this.location;
                    var rooms = this.rooms;                    
                    var output = "You emerge in " + target.obj_article + "" + this.rooms[target.obj_destination].name + ". ";                    
                    output += this.rooms[target.obj_destination].description + " ";
                    output += this.listRoomObjects();
                    updateTower(rooms[current_location].level);
                    document.getElementById(rooms[previous_location].tag).style.color="#000000";
                    document.getElementById(rooms[current_location].tag).style.color="#9ce62a";
                    break;
                case "EXAMINE":
                case "LOOK":
                    var output = "You look at "+ target.obj_article +""+ target.obj_name + ". ";
                    output += target.obj_description;
                    break;
                case "SMELL":
                    var output = "You smell the " + target.obj_name + ". ";
                    output += target.obj_smell;
                    break;
                case "RING":
                    if (this.rooms[this.location].objects.length<8){
                        var output = "There is no food served!"; 
                    }else{
                        if(this.rooms[this.location].objects[7].obj_name === "Divine Rat-On-A-Stick"){
                            var output = "You proudly serve "+this.rooms[this.location].objects[7].obj_name+". <br>";
                            output += "You ring the " + target.obj_name + ". <br><br>";   

                            output += "<span style='color: #008000;'>Tork</span>: This is ... better than the Rat-On-A-Stick from the Lamp-Man gave us! Droop, are you the new Lamp-Man?? <br><br>";

                            output += "<span style='color: #E6007e;'>Ellywick</span>: Droop, this is the most perfect kebab I've ever eaten. No, this is the most perfect dinner I've ever eaten. <br><br>";

                            output += "<span style='color: #FFD700;'>Naivara</span>: Ah, Droop! This reminds me of my pet mouse! But it tastes so good I can't stop eating.<br><br>";

                            output += "<span style='color: #00d5ff;'>Sibille</span>: Oh Lathhander, Droop. Did you find another Deck of Cards?! Did you WISH for this?! You could have saved so many people! Still... <br><span style='color: #00d5ff;'>Sibille</span> <i>continues eating</i><br><br>";

                            output += "<span style='color: #FF0000;'>Mistrust</span>: I'm not going to eat this Rat-On-A-Stick... Okay, but I will not take another bite.... Why is this so good?!<br><br>";

                            output += "<span style='color: #0066ff;'>Justice</span>: Hm, fascinating. It is inconceivable that something could taste this excellent.<br><br>";



                            output += " SPECIAL GUEST: <br><br>"

                            output += "<span style='color: #c14413;'>Wargren</span>: Wait, that super important magical item I was sent to bring ... created a Rat-On-A-Stick? And I died to bring this here?.<br><br>";

                            output += "<span style='color: #7c40ff;'>THANK YOU FOR PLAYING!</span><br><br>"

                            output += "<span style='color: #ffffff;'>Created by Alexander Hahn</span><br>"

                            document.getElementById("playerInput").style.display = "none"; 
                        }else if(this.rooms[this.location].objects[7].obj_name === "Twitchy legs of Dragonsbreath"){
                            var output = "You proudly serve "+this.rooms[this.location].objects[7].obj_name+". <br>";
                            output += "You ring the " + target.obj_name + ". <br><br>";   

                            output += "<span style='color: #008000;'>Tork</span>: Hmm! Still moving. Why... is this still moving?<br><br>";

                            output += "<span style='color: #E6007e;'>Ellywick</span>: This is hard and soggy? In a bad way.<br><br>";

                            output += "<span style='color: #FFD700;'>Naivara</span>: I am not eating this. <br><br>";

                            output += "<span style='color: #00d5ff;'>Sibille</span>: Ah. Uhm. Well, good job on the extermination. Maybe toss the corpse next time? <br><br>";

                            output += "<span style='color: #FF0000;'>Mistrust</span>: Many people have tried their hand at assassination, but no one has failed so miserably. Honestly, this is insulting. <br><br>";

                            output += "<span style='color: #0066ff;'>Justice</span>: Spicy...Burnt hair? I've suffered enough, Droop. Does anyone has a Wish spell? I want to undo today. <br><br>";



                            output += "<span style='color: #7c40ff;'>THANK YOU FOR PLAYING!</span><br><br>"

                            output += "<span style='color: #ffffff;'>Created by Alexander Hahn</span><br>"

                            document.getElementById("playerInput").style.display = "none"; 
                        }else if(this.rooms[this.location].objects[7].obj_name === "Hairy meat of Dragonsbreath"){
                            var output = "You proudly serve "+this.rooms[this.location].objects[7].obj_name+". <br>";
                            output += "You ring the " + target.obj_name + ". <br><br>";   

                            output += "<span style='color: #008000;'>Tork</span>: Oooo! Tingle and tickle all the way down? <br><br>";

                            output += "<span style='color: #E6007e;'>Ellywick</span>: Wow! The spice and the soft meat mix in perfect harmony. <br><br>";

                            output += "<span style='color: #FFD700;'>Naivara</span>: This is really good. Hey, do you think we could sell this? It's kind of portable. <br><br>";

                            output += "<span style='color: #00d5ff;'>Sibille</span>: You've made use of the whole carcass, with both skill and respect. I didn't think you had it in you, Droop. <br><br>";

                            output += "<span style='color: #FF0000;'>Mistrust</span>: Decent crispness. Cooked evenly. You've proven your use to me today. <br><br>";

                            output += "<span style='color: #0066ff;'>Justice</span>: Seconds? <br><br>";



                            output += "<span style='color: #7c40ff;'>THANK YOU FOR PLAYING!</span><br><br>"

                            output += "<span style='color: #ffffff;'>Created by Alexander Hahn</span><br>"

                            document.getElementById("playerInput").style.display = "none"; 
                        }else if(this.rooms[this.location].objects[7].obj_name === "Sky-rat of Dragonsbreath"){
                            var output = "You proudly serve "+this.rooms[this.location].objects[7].obj_name+". <br>";
                            output += "You ring the " + target.obj_name + ". <br><br>";   

                            output += "<span style='color: #008000;'>Tork</span>: Hey, no fair. The outsides are still on. <br><br>";

                            output += "<span style='color: #E6007e;'>Ellywick</span>: It's.... It's looking right at me Naivara. <br><br>";

                            output += "<span style='color: #FFD700;'>Naivara</span>: Cursed... this dish is cursed. We should sell it to the nearest sucker and run. <br><br>";

                            output += "<span style='color: #00d5ff;'>Sibille</span>: HOT. Cold?? Did you even cook this or just add spice and call it a day? <br><br>";

                            output += "<span style='color: #FF0000;'>Mistrust</span>: Droop, you idiot. Spice cannot cover the how badly you failed.<br><br>";

                            output += "<span style='color: #0066ff;'>Justice</span>: Ya, Droop, you loser. Get good.<br><br>";



                            output += "<span style='color: #7c40ff;'>THANK YOU FOR PLAYING!</span><br><br>"

                            output += "<span style='color: #ffffff;'>Created by Alexander Hahn</span><br>"

                            document.getElementById("playerInput").style.display = "none"; 
                        }else if(this.rooms[this.location].objects[7].obj_name === "Spicy Sweet Emerad Fruitstew of Dragonsbreath"){
                            var output = "You proudly serve "+this.rooms[this.location].objects[7].obj_name+". <br>";
                            output += "You ring the " + target.obj_name + ". <br><br>";   

                            output += "<span style='color: #008000;'>Tork</span>: Hmm! Creamy. I don't even miss the meat. Where is the meat, though, Droop? <br><br>";

                            output += "<span style='color: #E6007e;'>Ellywick</span>: This pairs well with a rich beer. Spicy-Sweety-Bitter.<br><br>";

                            output += "<span style='color: #FFD700;'>Naivara</span>: The sweetness is perfect. I feel so dexterious, I could do a frontflip! <br><br>";

                            output += "<span style='color: #00d5ff;'>Sibille</span>: I am not your jumping platform, Naivara. Lovely use of ingredients and limiting food waste, Droop. <br><br>";

                            output += "<span style='color: #FF0000;'>Mistrust</span>: Light, rich. Dark, spicy. Perfectly balanced, as all stew should be. <br><br>";

                            output += "<span style='color: #0066ff;'>Justice</span>: Amazin', Droop! This is so spicy, but so good. <br><br>";



                            output += "<span style='color: #7c40ff;'>THANK YOU FOR PLAYING!</span><br><br>"

                            output += "<span style='color: #ffffff;'>Created by Alexander Hahn</span><br>"

                            document.getElementById("playerInput").style.display = "none"; 
                        }else if(this.rooms[this.location].objects[7].obj_name === "Twitchy legs of illusions"){
                            var output = "You proudly serve "+this.rooms[this.location].objects[7].obj_name+". <br>";
                            output += "You ring the " + target.obj_name + ". <br><br>";   

                            output += "<span style='color: #008000;'>Tork</span>: Oooo.. Dancing Legs. Here legs, C'mere legs! Lemme eat you. <br><br>";

                            output += "<span style='color: #E6007e;'>Ellywick</span> <i>is furiously writing sheet music between bites.</i><br><br>";

                            output += "<span style='color: #FFD700;'>Naivara</span>: Very excellent. Just don't sell this to the children, got it? <br><br>";

                            output += "<span style='color: #00d5ff;'>Sibille</span>: Lathander? Are you there? It's me, Sibille.<br><br>";

                            output += "<span style='color: #FF0000;'>Mistrust</span>: Droop. How do you feel about going into business together? I have interested parties.<br><br>";

                            output += "<span style='color: #0066ff;'>Justice</span>: Man. Dude. This is gooooood, haha..<br><br>";



                            output += "<span style='color: #7c40ff;'>THANK YOU FOR PLAYING!</span><br><br>"

                            output += "<span style='color: #ffffff;'>Created by Alexander Hahn</span><br>"

                            document.getElementById("playerInput").style.display = "none";  
                        }else if(this.rooms[this.location].objects[7].obj_name === "Hairy meat of illusions"){
                            var output = "You proudly serve "+this.rooms[this.location].objects[7].obj_name+". <br>";
                            output += "You ring the " + target.obj_name + ". <br><br>";   

                            output += "<span style='color: #008000;'>Tork</span>: Droop. Your food turned the world grey. Bad food. <br><br>";

                            output += "<span style='color: #E6007e;'>Ellywick</span>: Oh man, this is '08 all over again. I swear I wouldn't go down this road again. <br><br>";

                            output += "<span style='color: #FFD700;'>Naivara</span>: Sibille, do you not have a mom? Are you an orphan? Sibille, come with me. <span style='color: #FFD700;'>Naivara</span><i? is furiously trying to abduct a houseplant.</i><br><br>";

                            output += "<span style='color: #00d5ff;'>Sibille</span>: Mom? Mom, I don't want to play here anymore, mom. <br><br>";

                            output += "<span style='color: #FF0000;'>Mistrust</span> <i>does not appear to be moving.</i> <br><br>";

                            output += "<span style='color: #0066ff;'>Justice</span>: No! NOO. The turtles are coming! RUN. <br><br>";



                            output += "<span style='color: #7c40ff;'>THANK YOU FOR PLAYING!</span><br><br>"

                            output += "<span style='color: #ffffff;'>Created by Alexander Hahn</span><br>"

                            document.getElementById("playerInput").style.display = "none"; 
                        }else if(this.rooms[this.location].objects[7].obj_name === "Sky-rat of illusions"){
                            var output = "You proudly serve "+this.rooms[this.location].objects[7].obj_name+". <br>";
                            output += "You ring the " + target.obj_name + ". <br><br>";   

                            output += "<span style='color: #008000;'>Tork</span>: OOoo, full and good. I'm so light, hahaha. <br><br>";

                            output += "<span style='color: #E6007e;'>Ellywick</span>: The bird and mushrooms are perfectly cooked! <br><br>";

                            output += "<span style='color: #FFD700;'>Naivara</span> <i>nibbles bites of mushroom, sneakily trying to steal a wing from Justice.</i><br><br>";

                            output += "<span style='color: #00d5ff;'>Sibille</span>: Do not profane this delicious dish with thievery! I can see you. <br><br>";

                            output += "<span style='color: #FF0000;'>Mistrust</span> <i>eats guiltily.</i><br><br>";

                            output += "<span style='color: #0066ff;'>Justice</span>: I am at peace with who I was in the future and who I am in the past. Thank you, Droop. <br><br>";



                            output += "<span style='color: #7c40ff;'>THANK YOU FOR PLAYING!</span><br><br>"

                            output += "<span style='color: #ffffff;'>Created by Alexander Hahn</span><br>"

                            document.getElementById("playerInput").style.display = "none"; 
                        }else if(this.rooms[this.location].objects[7].obj_name === "Sweet Emerald Fruitstew of illusions"){
                            var output = "You proudly serve "+this.rooms[this.location].objects[7].obj_name+". <br>";
                            output += "You ring the " + target.obj_name + ". <br><br>";   

                            output += "<span style='color: #008000;'>Tork</span>: It is pulling me in?! NO. SmackSmash can jump out of anything! <br><br>";

                            output += "<span style='color: #E6007e;'>Ellywick</span>: Brown and bitter. Sweet like bile. I cannot eat this. <br><br>";

                            output += "<span style='color: #FFD700;'>Naivara</span>: Droop, this is the worse hardship I have ever experienced. And I am, like, Disney-Princess-level cursed. <br><br>";

                            output += "<span style='color: #00d5ff;'>Sibille</span> <i>is looking around, lost.</i><br><br>";

                            output += "<span style='color: #FF0000;'>Mistrust</span>: Effective torture technique, Droop. Fine, what information do you want for the antidote? <br><br>";

                            output += "<span style='color: #0066ff;'>Justice</span>: Noooobody knows... The trouble I've seen. Noooobody knows... The sorrow. <br><br>";



                            output += "<span style='color: #7c40ff;'>THANK YOU FOR PLAYING!</span><br><br>"

                            output += "<span style='color: #ffffff;'>Created by Alexander Hahn</span><br>"

                            document.getElementById("playerInput").style.display = "none";  
                        }else{
                            var output = "There is no food served!";   
                        }
                    }
                    break;
                case "COOK":
                    if (this.rooms[this.location].objects.length<4){
                        var output = "You can't cook without proper ingredients!"; 
                    }else{
                //-----------------------------------Enchanted Salt Shaker--------------------------------------------------------------------------------------------------
                        if(this.rooms[this.location].objects[4].obj_name === "dead Bird" && this.rooms[this.location].objects[5].obj_name === "Enchanted Salt Shaker" || this.rooms[this.location].objects[5].obj_name === "dead Bird" && this.rooms[this.location].objects[4].obj_name === "Enchanted Salt Shaker"){
                            var output = "You start cooking with "+ target.obj_article +""+ target.obj_name + ". <br>";
                            this.rooms[this.location].objects.splice(4, 2); 
                            this.rooms[this.location].objects.push(dishes[0]);
                            output += this.listRoomObjects();
                        }else if(this.rooms[this.location].objects[4].obj_name === "Spider legs" && this.rooms[this.location].objects[5].obj_name === "Enchanted Salt Shaker" || this.rooms[this.location].objects[5].obj_name === "Spider legs" && this.rooms[this.location].objects[4].obj_name === "Enchanted Salt Shaker"){
                            var output = "You start cooking with "+ target.obj_article +""+ target.obj_name + ". <br>";
                            this.rooms[this.location].objects.splice(4, 2); 
                            this.rooms[this.location].objects.push(dishes[0]);
                            output += this.listRoomObjects();
                        }else if(this.rooms[this.location].objects[4].obj_name === "Spider body" && this.rooms[this.location].objects[5].obj_name === "Enchanted Salt Shaker" || this.rooms[this.location].objects[5].obj_name === "Spider body" && this.rooms[this.location].objects[4].obj_name === "Enchanted Salt Shaker" ){
                            var output = "You start cooking with "+ target.obj_article +""+ target.obj_name + ". <br>";
                            this.rooms[this.location].objects.splice(4, 2); 
                            this.rooms[this.location].objects.push(dishes[0]);
                            output += this.listRoomObjects();
                        }else if(this.rooms[this.location].objects[4].obj_name === "Rotten Fruit" && this.rooms[this.location].objects[5].obj_name === "Enchanted Salt Shaker" || this.rooms[this.location].objects[5].obj_name === "Rotten Fruit" && this.rooms[this.location].objects[4].obj_name === "Enchanted Salt Shaker" ){
                            var output = "You start cooking with "+ target.obj_article +""+ target.obj_name + ". <br>";
                            this.rooms[this.location].objects.splice(4, 2); 
                            this.rooms[this.location].objects.push(dishes[4]);
                            output += this.listRoomObjects();
                        }
                    //-----------------------------------Mushrooms--------------------------------------------------------------------------------------------------
                        else if(this.rooms[this.location].objects[4].obj_name === "dead Bird" && this.rooms[this.location].objects[5].obj_name === "Pouch" || this.rooms[this.location].objects[5].obj_name === "dead Bird" && this.rooms[this.location].objects[4].obj_name === "Pouch"){
                            var output = "You start cooking with "+ target.obj_article +""+ target.obj_name + ". <br>";
                            this.rooms[this.location].objects.splice(4, 2); 
                            this.rooms[this.location].objects.push(dishes[7]);
                            output += this.listRoomObjects();
                        }else if(this.rooms[this.location].objects[4].obj_name === "Spider legs" && this.rooms[this.location].objects[5].obj_name === "Pouch" || this.rooms[this.location].objects[5].obj_name === "Spider legs" && this.rooms[this.location].objects[4].obj_name === "Pouch"){
                            var output = "You start cooking with "+ target.obj_article +""+ target.obj_name + ". <br>";
                            this.rooms[this.location].objects.splice(4, 2); 
                            this.rooms[this.location].objects.push(dishes[5]);
                            output += this.listRoomObjects();
                        }else if(this.rooms[this.location].objects[4].obj_name === "Spider body" && this.rooms[this.location].objects[5].obj_name === "Pouch" || this.rooms[this.location].objects[5].obj_name === "Spider body" && this.rooms[this.location].objects[4].obj_name === "Pouch" ){
                            var output = "You start cooking with "+ target.obj_article +""+ target.obj_name + ". <br>";
                            this.rooms[this.location].objects.splice(4, 2); 
                            this.rooms[this.location].objects.push(dishes[6]);
                            output += this.listRoomObjects();
                        }else if(this.rooms[this.location].objects[4].obj_name === "Rotten Fruit" && this.rooms[this.location].objects[5].obj_name === "Pouch" || this.rooms[this.location].objects[5].obj_name === "Rotten Fruit" && this.rooms[this.location].objects[4].obj_name === "Pouch"){
                            var output = "You start cooking with "+ target.obj_article +""+ target.obj_name + ". <br>";
                            this.rooms[this.location].objects.splice(4, 2); 
                            this.rooms[this.location].objects.push(dishes[8]);
                            output += this.listRoomObjects();
                        }
                    //-----------------------------------Ghost Pepper--------------------------------------------------------------------------------------------------
                        else if(this.rooms[this.location].objects[4].obj_name === "dead Bird" && this.rooms[this.location].objects[5].obj_name === "Ghost Pepper" || this.rooms[this.location].objects[5].obj_name === "dead Bird" && this.rooms[this.location].objects[4].obj_name === "Ghost Pepper"){
                            var output = "You start cooking with "+ target.obj_article +""+ target.obj_name + ". <br>";
                            this.rooms[this.location].objects.splice(4, 2); 
                            this.rooms[this.location].objects.push(dishes[4]);
                            output += this.listRoomObjects();
                        }else if(this.rooms[this.location].objects[4].obj_name === "Spider legs" && this.rooms[this.location].objects[5].obj_name === "Ghost Pepper" || this.rooms[this.location].objects[5].obj_name === "Spider legs" && this.rooms[this.location].objects[4].obj_name === "Ghost Pepper"){
                            var output = "You start cooking with "+ target.obj_article +""+ target.obj_name + ". <br>";
                            this.rooms[this.location].objects.splice(4, 2); 
                            this.rooms[this.location].objects.push(dishes[1]);
                            output += this.listRoomObjects();
                        }else if(this.rooms[this.location].objects[4].obj_name === "Spider body" && this.rooms[this.location].objects[5].obj_name === "Ghost Pepper" || this.rooms[this.location].objects[5].obj_name === "Spider body" && this.rooms[this.location].objects[4].obj_name === "Ghost Pepper"){
                            var output = "You start cooking with "+ target.obj_article +""+ target.obj_name + ". <br>";
                            this.rooms[this.location].objects.splice(4, 2); 
                            this.rooms[this.location].objects.push(dishes[2]);
                            output += this.listRoomObjects();
                        }else if(this.rooms[this.location].objects[4].obj_name === "Rotten Fruit" && this.rooms[this.location].objects[5].obj_name === "Ghost Pepper" || this.rooms[this.location].objects[5].obj_name === "Rotten Fruit" && this.rooms[this.location].objects[4].obj_name === "Ghost Pepper" ){
                            var output = "You start cooking with "+ target.obj_article +""+ target.obj_name + ". <br>";
                            this.rooms[this.location].objects.splice(4, 2); 
                            this.rooms[this.location].objects.push(dishes[4]);
                            output += this.listRoomObjects();
                        }

                         //-----------------------------------WRONG ITEMS--------------------------------------------------------------------------------------------------
                         else{
                             var output = "You can't cook without proper ingredients!";
                         }
                    }
                    break;
                case "SHOOT":
                    var output = "You load a bolt into your crossbow and shoot with deadly precision at the " + target.obj_name + ". <br>";
                    this.rooms[this.location].objects.splice(this.rooms[this.location].objects.indexOf(target), 1); 
                    this.rooms[this.location].objects.splice(this.rooms[this.location].objects.length, 0, this.loot[0]);
                    output += this.listRoomObjects();
                    break;
                case "ATTACK":
                    var output = "Facing this " + target.obj_name + " awakens your fury of the small.<br>You charge at the " + target.obj_name + " striking at it multiple times with your rapier!<br>Suddenly your second wind kicks in and in the blink of an eye, you completely dismembered all the appendages, leaving only a lifeless corpse next to its own severed limbs.<br>";
                    this.rooms[this.location].objects.splice(this.rooms[this.location].objects.indexOf(target), 1); 
                    this.rooms[this.location].objects.splice(this.rooms[this.location].objects.length, 0, this.loot[1]);
                    this.rooms[this.location].objects.splice(this.rooms[this.location].objects.length, 0, this.loot[2]);
                    output += this.listRoomObjects();
                    break;
                case "TALK":                   
                    var output = "You say hello to " + target.obj_name + ". <br>";
                    if(this.dialogue === "1"){
                        output += target.obj_dialogue1;
                        this.dialogue = "2"; 
                    }else if(this.dialogue === "2"){
                        output += target.obj_dialogue2;
                        this.dialogue = "3";
                    }else{
                        output += target.obj_dialogue3;
                        this.dialogue = "1";
                    }                    
                    break;
                case "DROP": //
                    if(this.rooms[this.location].objects.length < this.rooms[this.location].limit){                    
                        var output = "You drop the " + target.obj_name + ". "; //                    
                        this.rooms[this.location].objects.push(target);
                        this.inventory.splice(this.inventory.indexOf(target),1);
                        this.listRoomObjects(); // //
                    }else{
                        var output = "There is no more space.";
                    }break;  
                case "TAKE": //                    
                    var output = "You take the " + target.obj_name + ". "; //
                    this.inventory.push(target); //
                    this.rooms[this.location].objects.splice(this.rooms[this.location].objects.indexOf(target), 1); //
                    return output;                      //
                default:
                    return "<span style='color: #FFA500;'>You are unsure of what to do.</span>";
            }
            return output
        }
        if(target == ""){ //
            var verbs_user = ["INVENTORY","HELP","ROLL PERCEPTION"] //
            for (var i = 0; i < verbs_user.length; i++) { //
                if (words.includes(verbs_user[i].toUpperCase())) { //
                    action = verbs_user[i] //
                    break; //
                } //
            } //
            if(action != ""){ //
                switch (action) { //
                case "INVENTORY": //
                    return this.listInventoryObjects(); //
                    break; //
                case "ROLL PERCEPTION": //
                    return this.listRoomObjects(); //
                    break; //
                case "HELP": //
                    return "<span style='color: #FF0000;'>HELP</span><br>Try out different verbs and combine them with an object to see what happens.<br><br>Type <span style='color: #FF0000;'>INVENTORY</span> to check your inventory.<br><br>Type <span style='color: #FF0000;'>ROLL PERCEPTION</span> to look around inside a room.<br><br>Some basic commands include: <span style='color: #FF0000;'>LOOK</span> or <span style='color: #FF0000;'>EXAMINE</span>, <span style='color: #FF0000;'>GO</span> or <span style='color: #FF0000;'>ENTER</span>, <span style='color: #FF0000;'>TAKE</span>, <span style='color: #FF0000;'>DROP</span>, <span style='color: #FF0000;'>TALK</span> and <span style='color: #FF0000;'>SMELL</span>. However, there may be others!<br><br>General tip: Every object that has a color can be examined by <span style='color: #FF0000;'>LOOK</span>ing at it first. The description might give you a clue how to interact with it.<br><br>For example try typing <span style='color: #FF0000;'>Look</span> at the <span style='color: #FF0000;'>crossbow</span> to see its description. "; //
                    break; //
                default: //
                    return "<span style='color: #FFA500;'>You are unsure of what to do.</span>"; //
                } //
            }else{ //
                return "<span style='color: #FFA500;'>You are unsure of what to do.</span>"; //
            } //
        } //
    }

    listRoomObjects() {
        var current_location = this.location;
        var rooms = this.rooms;
        var output = "You can see "
        for (var i = 0; i < rooms[current_location].objects.length; i++) {
            output += ""+rooms[current_location].objects[i].obj_article;
            output += " <span style='color: #7c40ff;'>"+rooms[current_location].objects[i].obj_name+"<span>";
            if (i == rooms[current_location].objects.length - 2) {
                output += "<span style='color: #ffffff;'>, and <span>";
            } else if (i < rooms[current_location].objects.length - 2) {
                output += "<span style='color: #ffffff;'>, <span>";
            } else {
                output += "<span style='color: #ffffff;'>.<span>";
            }
        }
        return output;
    }
    
    listInventoryObjects() { //
        var output = "Your inventory contains "; //
        for (var i = 0; i < this.inventory.length; i++){ //
            output +=""+this.inventory[i].obj_article;
            output += " <span style='color: #7c40ff;'>"+this.inventory[i].obj_name+"<span>";//
            if (i == this.inventory.length - 2) { //
                output += "<span style='color: #ffffff;'>, and <span>"; //
            } else if (i < this.inventory.length - 2) { //
                output += "<span style='color: #ffffff;'>, <span>"; //
            } else { //
                output += "<span style='color: #ffffff;'>.<span>"; //
            } //
        } //
        return output; //
    } //
}

function gotoBottom(id){
   var element = document.getElementById(id);
   element.scrollTop = element.scrollHeight - element.clientHeight;
}

function updateTower(level, tag){
    switch(level){
        case "top":
            document.getElementById("top").style.color="#9ce62a";
            document.getElementById("3").style.color="#000000";
            document.getElementById("2").style.color="#000000";
            document.getElementById("1").style.color="#000000";
            document.getElementById("b").style.color="#000000";
            document.getElementById("o").style.color="#000000";
            document.getElementById("s").style.color="#000000";

            document.getElementById("topr").style.display = "initial";
            document.getElementById("3r").style.display = "none";
            document.getElementById("2r").style.display = "none";
            document.getElementById("1r").style.display = "none";
            document.getElementById("br").style.display = "none";
            document.getElementById("sr").style.display = "none";  
            break;
        case "3":
            document.getElementById("top").style.color="#000000";
            document.getElementById("3").style.color="#9ce62a";
            document.getElementById("2").style.color="#000000";
            document.getElementById("1").style.color="#000000";
            document.getElementById("b").style.color="#000000";
            document.getElementById("o").style.color="#000000";
            document.getElementById("s").style.color="#000000"; 

            document.getElementById("topr").style.display = "none";
            document.getElementById("3r").style.display = "initial";
            document.getElementById("2r").style.display = "none";
            document.getElementById("1r").style.display = "none";
            document.getElementById("br").style.display = "none";
            document.getElementById("sr").style.display = "none";   
            break;
        case "2":
            document.getElementById("top").style.color="#000000";
            document.getElementById("3").style.color="#000000";
            document.getElementById("2").style.color="#9ce62a";
            document.getElementById("1").style.color="#000000";
            document.getElementById("b").style.color="#000000";
            document.getElementById("o").style.color="#000000"; 
            document.getElementById("s").style.color="#000000"; 

            document.getElementById("topr").style.display = "none";
            document.getElementById("3r").style.display = "none";
            document.getElementById("2r").style.display = "initial";
            document.getElementById("1r").style.display = "none";
            document.getElementById("br").style.display = "none";
            document.getElementById("sr").style.display = "none";  
            break;
        case "1":
             document.getElementById("top").style.color="#000000";
            document.getElementById("3").style.color="#000000";
            document.getElementById("2").style.color="#000000";
            document.getElementById("1").style.color="#9ce62a";
            document.getElementById("b").style.color="#000000";
            document.getElementById("o").style.color="#000000"; 
            document.getElementById("s").style.color="#000000"; 

            document.getElementById("topr").style.display = "none";
            document.getElementById("3r").style.display = "none";
            document.getElementById("2r").style.display = "none";
            document.getElementById("1r").style.display = "initial";
            document.getElementById("br").style.display = "none";
            document.getElementById("sr").style.display = "none";  
            break;
        case "b":
            document.getElementById("top").style.color="#000000";
            document.getElementById("3").style.color="#000000";
            document.getElementById("2").style.color="#000000";
            document.getElementById("1").style.color="#000000";
            document.getElementById("b").style.color="#9ce62a";
            document.getElementById("o").style.color="#000000"; 
            document.getElementById("s").style.color="#000000"; 

            document.getElementById("topr").style.display = "none";
            document.getElementById("3r").style.display = "none";
            document.getElementById("2r").style.display = "none";
            document.getElementById("1r").style.display = "none";
            document.getElementById("br").style.display = "initial";
            document.getElementById("sr").style.display = "none";   
            break;
        case "o":
            document.getElementById("top").style.color="#000000";
            document.getElementById("3").style.color="#000000";
            document.getElementById("2").style.color="#000000";
            document.getElementById("1").style.color="#000000";
            document.getElementById("b").style.color="#000000";
            document.getElementById("o").style.color="#9ce62a";
            document.getElementById("s").style.color="#000000"; 

            document.getElementById("topr").style.display = "none";
            document.getElementById("3r").style.display = "none";
            document.getElementById("2r").style.display = "none";
            document.getElementById("1r").style.display = "initial";
            document.getElementById("br").style.display = "none";
            document.getElementById("sr").style.display = "none";    
            break;
        case "s":
            document.getElementById("top").style.color="#000000";
            document.getElementById("3").style.color="#000000";
            document.getElementById("2").style.color="#000000";
            document.getElementById("1").style.color="#000000";
            document.getElementById("b").style.color="#000000";
            document.getElementById("o").style.color="#000000";
            document.getElementById("s").style.color="#9ce62a"; 

            document.getElementById("topr").style.display = "none";
            document.getElementById("3r").style.display = "none";
            document.getElementById("2r").style.display = "none";
            document.getElementById("1r").style.display = "none";
            document.getElementById("br").style.display = "none";
            document.getElementById("sr").style.display = "initial";    
            break;
        default:
            document.getElementById("top").style.color="#000000";
            document.getElementById("3").style.color="#000000";
            document.getElementById("2").style.color="#000000";
            document.getElementById("1").style.color="#000000";
            document.getElementById("b").style.color="#000000";
            document.getElementById("o").style.color="#000000";
            document.getElementById("s").style.color="#000000";

            document.getElementById("topr").style.display = "none";
            document.getElementById("3r").style.display = "none";
            document.getElementById("2r").style.display = "none";
            document.getElementById("1r").style.display = "none";
            document.getElementById("br").style.display = "none";
            document.getElementById("sr").style.display = "none";      //
    }
}


gameobj = new Game("start", rooms)
document.getElementById("log").innerHTML += "<br>" + "You spent a couple minutes to put your studded-leather armor on and grab all your gear: Your elven rapier and your trusty hand crossbow.";
document.getElementById("log").innerHTML += "<br>" + gameobj.listRoomObjects();
const node = document.getElementById("playerInput");
node.addEventListener('keyup', ({
    key
}) => {
    if (key === "Enter") {
        document.getElementById("log").innerHTML += "<br><br>" + gameobj.parse(node.value);
        gotoBottom("log");        
        node.value = "";
    }
})