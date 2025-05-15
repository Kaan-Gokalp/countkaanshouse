const yonlendirici = document.querySelector("#yonlendirici")
const yonlendiriciButon = document.querySelector("#yonlendiriciButon");
const baslaButon = document.querySelector("#baslaButon");
const siyahEkran = document.querySelector("#siyahEkran");
const kaleyeGiris = document.querySelector("#kaleyeGiris");
const kapidakiNot = document.querySelector("#kapidakiNot");

const yonlendiriciBaslik = document.querySelector("#yonlendiriciBaslik");
const yonlendiriciMetin = document.querySelector("#yonlendiriciMetin");

const kapidakiParsomen = document.querySelector("#kapidakiParsomen");
const buyukParsomen = document.querySelector("#buyukParsomen");

const kaleIci = document.querySelector("#kaleIci");
const iceriGir = document.querySelector("#iceriGir");

const bioParsomen1 = document.querySelector("#bioParsomen1");
const bioParsomen2 = document.querySelector("#bioParsomen2");
const bioParsomen = document.querySelector("#bioParsomen");
const bioParsomenSon = document.querySelector("#bioParsomenSon");

const closeBio1 = document.querySelector("#closeBio1");
const closeBio2 = document.querySelector("#closeBio2");

const kaaninOdasi = document.querySelector("#kaaninOdasi");
const kaaninOdasiParsomen = document.querySelector("#kaaninOdasiParsomen");
const parsomenliOkuyucu = document.querySelector("#parsomenliOkuyucu");

const arrowleft = document.querySelector("#arrowleft");
const arrowright = document.querySelector("#arrowright");
const pageNumber = document.querySelector("#pageNumber");

const artifactBaslik = document.querySelector("#artifactBaslik");
const artifactHikaye = document.querySelector("#artifactHikaye");

const leave = document.querySelector("#leave");


yonlendiriciButon.addEventListener("click", () => {
    if (yonlendirici.classList.contains("yonlendiriciButonIceri")) {
        yonlendirici.classList.remove("yonlendiriciButonIceri");
        yonlendirici.classList.add("yonlendiriciButonDisari");
        yonlendiriciButon.innerHTML = ">";
    } else {
        yonlendirici.classList.add("yonlendiriciButonIceri");
        yonlendirici.classList.remove("yonlendiriciButonDisari");
        yonlendiriciButon.innerHTML = "<";
    }
})

baslaButon.addEventListener("click", () => {
    var endingSong = new Audio('narration.mp3');
    endingSong.play();
    siyahEkran.classList.add("siyahEkranCik");
});

kaleyeGit.addEventListener("click", () => {
    var endingSong = new Audio('walking_sound.mp3');
    endingSong.play();
    siyahEkran.innerHTML = "<h1>This place feels really cold...</h1>";
    siyahEkran.classList.remove("siyahEkranCik");
    siyahEkran.classList.add("siyahEkranGir");
    setTimeout(() => {
        yonlendiriciBaslik.innerHTML = "Looks interesting..";
        yonlendiriciMetin.innerHTML = "It seems that there is a note next to the door. Click on it to grab and read.";

        kaleyeGiris.classList.add("display-none");
        kapidakiNot.classList.remove("display-none");

        siyahEkran.classList.add("siyahEkranCik");
        siyahEkran.classList.remove("siyahEkranGir");

        if(yonlendirici.classList.contains("yonlendiriciButonIceri")) {
            yonlendirici.classList.remove("yonlendiriciButonIceri");
        }
    }, 3000);

});

kapidakiParsomen.addEventListener("click", () => {
    buyukParsomen.classList.remove("display-none");
});

iceriGir.addEventListener("click", () => {
    var endingSong = new Audio('walking_sound.mp3');
    endingSong.play();
    siyahEkran.innerHTML = "<h1>It feels really damp in here, maybe I shouldn't have come here...</h1>";
    siyahEkran.classList.remove("siyahEkranCik");
    siyahEkran.classList.add("siyahEkranGir");
    setTimeout(() => {
        yonlendiriciBaslik.innerHTML = "Look at that wall...";
        yonlendiriciMetin.innerHTML = "It looks like there are two writings hung on the wall. Maybe they can give us an idea about what we are doing here.";

        kapidakiNot.classList.add("display-none");
        kaleIci.classList.remove("display-none");

        siyahEkran.classList.add("siyahEkranCik");
        siyahEkran.classList.remove("siyahEkranGir");

        if(yonlendirici.classList.contains("yonlendiriciButonIceri")) {
            yonlendirici.classList.remove("yonlendiriciButonIceri");
        }
    }, 3000);

});

bioParsomen1.addEventListener("click", () => {
    bioParsomen.classList.remove("display-none");
});

closeBio1.addEventListener("click", () => {
    bioParsomen.classList.add("display-none");
});

bioParsomen2.addEventListener("click", () => {
    bioParsomenSon.classList.remove("display-none");
});

closeBio2.addEventListener("click", () => {
    var endingSong = new Audio('walking_sound.mp3');
    endingSong.play();
    bioParsomenSon.classList.add("display-none");

    siyahEkran.innerHTML = "<h1>Oh, what is that sound? It comes from up stairs. Let me go up there...</h1>";
    siyahEkran.classList.remove("siyahEkranCik");
    siyahEkran.classList.add("siyahEkranGir");
    setTimeout(() => {
        yonlendiriciBaslik.innerHTML = "Heading up to where sound comes from";
        yonlendiriciMetin.innerHTML = "We came to upstairs, it looks like Count Kaan's room and there is a pile of parchment papers lying on the floor next to the red couch... What is that?";

        kaleIci.classList.add("display-none");
        kaaninOdasi.classList.remove("display-none");

        siyahEkran.classList.add("siyahEkranCik");
        siyahEkran.classList.remove("siyahEkranGir");

        if(yonlendirici.classList.contains("yonlendiriciButonIceri")) {
            yonlendirici.classList.remove("yonlendiriciButonIceri");
        }
    }, 3000);

});

kaaninOdasiParsomen.addEventListener("click", () => {
    parsomenliOkuyucu.classList.remove("display-none");

    yonlendiriciBaslik.innerHTML = "Inspecting artifacts";
        yonlendiriciMetin.innerHTML = "Use the arrows appear on each side of the page to see different artifacts. You can close this guide now to have a better sight. When you are done reading, click the button 'Leave' to leave his room.";
});

let artifactNumber = 1;

arrowright.addEventListener("click", () => {
    if (artifactNumber < 4 && artifactNumber >= 1) {
        artifactNumber += 1
    } else {
        artifactNumber = 1;
    }

    pageNumber.innerHTML = artifactNumber;

    if(artifactNumber == 1) {
        artifactBaslik.innerHTML = "God of Justice";
        artifactHikaye.innerHTML = `
        A new day began in the kingdom of Elyria as the sun rose, bathing the city in its soft, golden light. The white stone towers of the castle were shining in the sun, and the aroma of flowers mixed with the smell of fresh baked bread filled the air.  

    But in the castle, a strange stillness reigned. Princess Selene was dead. The guards found her early in the morning lying next to her bed in the royal palace. Princess Selene's body did not appear as someone who had managed to struggle, and the body lay calm and still. There had been no blood. Her lips were as blue as violets, yet she had not been poisoned. Her skin was cold, but, the air was warm. Her fingertips were colored with dark, strange ash that no one could identify as the result of any known fire or plant. It offered no explanations. No guards had seen anyone enter or exit the garden. One of the gardeners said he had seen someone in a hood near the garden days before, but he did not remember anything about the person. His story was unclear.  

    People were talking about it in whispers. Was it magic? A curse from the gods of old? A consequence of the kingdom’s sins? But no one had answers. And, most importantly, no one could bring Selene back. 

    The days to follow, King Alexios ordered a complete investigation. He summoned his best spies, his secret guards, and even foreign diplomats to assist in ruling it out. They interviewed all who were in the palace, which included cooks, all the attendants, and guests from foreign lands. They investigated for any evidence, but did not come up with anything. The royal alchemists investigated the odd ash found around Selene. They conducted every type of test known to them, revealing nothing. "There’s nothing we can suggest," said one of the royal doctors, "it is neither magic nor poison. There is nothing here that we can understand." The King's face showed no expression, darker now with grief and anger. He began no longer speaking to his advisors, he made no decisions; diving faster into his personal world.  

    Alexios spent long hours sitting in the chambers of his daughter, alone. The first to arrive was the Royal doctor, who examined her with a fine tooth comb, but again, nothing could explain her death. No illness. No poison. Just a slight burn on her wrist, like some strange mark, no one is it able to identify. Nothing is anywhere close to whatever sort of symbol or brand these marks could be. And, there were no witnesses. No one saw anything. No servant heard a cry.  

    One day, Alexios locked himself in the old chapel. The chapel had not been used for many years, and it was full of dust. Its stone walls were covered with old statues of forgotten gods, gods that had once been worshipped but now lay broken and forgotten. 

 

The King did not speak for days. He sat in the quiet, reading old scrolls and books. Some of these were from old religions, some were about strange gods and forgotten rituals. He read stories about gods that were made by people, gods that rose from pain and suffering. One book caught his attention. It was about a god that was born not from the heavens, but from grief, from a deep wound. The god had no name, but the book said, “A god can be born in the wound. Let him rise from sorrow.” 

     Alexios didn’t sleep that night. Or the next. He continued to read, to think. The silence of the chapel seemed to fill his mind with new thoughts. His grief for Selene mixed with something darker, something he didn’t fully understand. 

    Days passed, and Alexios began to think more and more about the idea of this god—an unknown god, born from pain, born from a need for justice. He thought about Selene’s death. The killer was still free. There were no answers. And the people—though they mourned her loss—were already moving on, going about their lives without much care. 

    Alexios realized that perhaps justice alone was not enough. People didn’t care about truth or justice unless they had a reason to believe in it. And fear—fear of something greater than themselves—could control them in a way justice could not. He began to wonder: What if a god could change all of this? What if a god could make people fear and obey? The more he thought about it, the more this idea began to take hold. A god who saw everything. A god who judged people, a god who controlled their lives after death. He felt the power this could bring. The power to make people believe, to make them fear, to make them obey. And that was when Alexios knew what he had to do.  

    The king didn’t speak to anyone about his thoughts. Not yet. He knew that if he just told the people about this new god, they might laugh or question him. People didn’t easily trust new beliefs, especially when they came from a ruler’s mouth. So, he made a plan. He would not tell people directly. He would let them hear it from others. He would make it feel like a secret, something powerful that was never meant to be known. People often believe something more strongly when they think they have discovered it themselves. 

    Alexios chose a few trusted servants—people loyal to him for many years. He whispered to them about a god named Yevareth. “Yevareth watches everything,” he told them quietly. “He sees your actions. He sees your thoughts. After you die, he judges your soul.”, “But where did this god come from?” one asked. “From silence. From pain,” Alexios said. “He is born from sorrow. From death that has no answer. Like Selene’s.” He told them to keep it secret. But of course, he knew they wouldn’t. 

    The first rumors started in the market. “I heard the king prays to a new god at night,” one merchant whispered. “A god with no name?”, “No. His name is Yevareth. He judges everyone after death. No secrets are safe from him.” 

    The stories spread. A maid in the palace said she saw the king leave a bowl of gold coins in front of an old statue. A stable boy said he heard strange words from the king’s mouth—words not in any language he knew. Alexios acted surprised when asked. “You heard that?” he said softly to a nobleman. “It’s not for the ears of men. But… perhaps it was meant to be known.” That made people even more curious. They began to talk about Yevareth in their homes, in the streets, in the taverns. At first, it was only gossip. But soon, fear began to grow. “What if he’s real?” they said. “What if he sees me? What if my sins follow me after death?” People who had stolen small things started returning them. Husbands confessed lies to their wives. A man who cheated in a trade gave back extra coins, saying, “I don’t want Yevareth to judge me.” 

    Alexios wanted more than rumors. He needed the people to see proof. So, he created miracles. One night, a fire broke out near the harbor. The wind was strong and could have spread the flames—but it changed direction suddenly. A priest of Yevareth said, “The god turned the fire away from the city.” No one knew the truth: Alexios had ordered the city engineers to build wind barriers months ago. Another time, a farmer’s dead crops started growing again after he prayed at a small shrine to Yevareth. He told everyone that the god had answered him. But in truth, the king had secretly sent his men to bring new seeds and a special tool to the farmer’s land. A child sick with fever was cured overnight after her mother whispered a prayer to Yevareth and washed her in water from the river. In truth, a healer working for the king had secretly given the girl a rare herb hours earlier. But no one knew these details. To the people, the god was real. 

    The temples of the old gods grew quiet. More people now prayed to Yevareth. Small statues were made of black stone, with a single eye carved into the center. The Eye of Yevareth. People placed them at their doors. They believed the god would watch them and protect them from harm—or punish them if they sinned. The king stayed silent most of the time, but sometimes he would be seen praying alone. Once, he knelt beneath the moon, speaking words of thanks for his power, his riches, and his health. Servants saw him and whispered what they had seen. “He thanks the god for everything,” they said. “Even kings must bow before Yevareth.” This made the belief stronger. If even the king feared Yevareth, then everyone else should too. 

    Then, one day, something unexpected happened. A man came to the palace gates. He was shaking. He wore a torn robe, and his feet were bare. He looked like he had not slept in days. “I must speak to the king,” he said. “Yevareth has seen me. I cannot hide anymore.” The guards took him inside. He fell before the throne and began to cry. “I killed the princess,” he said. “I didn’t mean to. It was an accident. But Yevareth sees me. He sees everything. I dream of her face every night.” Alexios stood still. His face was like stone. He had created a god to control others. And now, this god had done his mission. He had found the truth.  

    The confession spread quickly. The man’s name was Eron, a former palace servant dismissed years ago for theft. No one had suspected him of the princess’s death—until now. Eron was taken away. The next morning, he was found dead in his cell, a peaceful expression on his face. No wounds, no signs of struggle. The city mourned. Some said Yevareth had claimed him. Others believed he had found peace through confession. Either way, the god’s power seemed undeniable. 

    After the confession, Alexios became quiet. He spent hours alone, sitting at his desk with a candle and a pen. He wrote page after page, always in silence. At first, no one knew what he was doing. But then he announced it. “I am writing the holy book of Yevareth,” he said. “His words must be known. His will must be followed.” But the truth was different. These were not Yevareth’s words. They were Alexios’s. He wrote rules for living. How to pray. What to wear. What foods to eat, and when. He wrote that people must obey their king, because “the king speaks with Yevareth’s voice.” 

    The people accepted it. They had seen the “miracles.” They had heard the confession. They believed. And so they feared. The book was called The Eye’s Word. It was copied and sent to every town in Elyria. Soon, it was the only book people were allowed to read in public. Even children learned it before they learned to write their own names. 

    Alexios did not rule alone. His advisors had watched his rise carefully. One of them, Lord Merek, came to him late one night. “This god you created,” Merek said, “he can do more than bring peace. He can bring power.”, “What do you mean?” Alexios asked. “If the people fear Yevareth, they will obey you forever,” Merek said. “But we must shape the god. We must make sure his laws… help us.” And so, the book began to change. The advisors added lines. Quietly, secretly. “A noble has the right to correct a poor man’s mistake.”, “Land should be held by the wise, not the simple.”, “To question the king is to question the god.” 

    When people noticed new rules, they were told, “These were always in the book. You just didn’t understand before.” Priests loyal to Alexios repeated the words every day. They taught people how to fear, how to obey, how to kneel. Yevareth was no longer a god of truth. He became a god of power.  

    Alexios noticed the change in the people. They still bowed, still prayed, still gave gifts to the temples—but their eyes looked different now. Not faithful. Not thankful. Afraid, tired, angry. He tried to fix it. He ordered more festivals. More food. More speeches from the priests. But it didn’t work. The more he gave, the less they smiled. Then, one morning, he found something strange on his throne, a scroll. It was tied with black string. 

He opened it and read: “A time will come when the Listener must fall. Only then will the people be free. The god does not want a king, but a sacrifice.” There was no name. No sign of who wrote it. But the message was clear. Someone wanted him gone. At first, he laughed. “A fake prophecy,” he said to his advisors. “Someone playing with fear.” But deep inside, a small voice whispered, What if Yevareth is real now? What if the god you made has grown stronger than you? He ignored the thought. He sent soldiers to search every temple and home for anyone spreading lies. Many were taken away. Some were never seen again. But the fear did not stop the whispers. It made them louder. 

    The advisors met in secret. They had once helped Alexios build the god. Now they feared him. “He listens to no one,” said one. “He thinks he is Yevareth,” said another. 
“If we don’t stop him, the people will rise. And we will fall with him.” So they wrote again. They changed the book—just a few lines, hidden at the end. A “lost chapter,” they said, found in an old temple. It read: “When the Listener becomes proud, his soul must be taken. He must carry the sins of the people into the afterlife. Only then will the world be clean.” They told the priests to read it out loud. They told the people it was the final truth from Yevareth himself. And the people believed. 

    It happened on a cold morning. Alexios stepped onto his balcony to speak to the crowd. But no one spoke. No cheers. No chants. Just silence. He looked down and saw thousands of faces. At the front stood the high priest. And beside him, the advisors. They pointed. A boy walked forward. His hands shook. In them, he held a short blade. “You must carry our sins,” the boy said. Alexios stood still. He had made a god to find justice. He had used it for power. He had changed the world with his lies. Now the god had turned on him. He did not fight. The blade went into his chest. He fell to his knees, then to the ground. Above him, in the temple, the Eye of Yevareth glowed in the morning light. 

The people wept—not for the king, but for their fear, their lost years, their broken families. But they did not destroy the temples. They did not throw away the book. They still prayed to Yevareth. Because they believed. They believed their god had judged the king. And that meant Yevareth was real. The god born from grief and lies had become a god of justice. 

And he was never questioned again. 
        `
    } else if (artifactNumber == 2) {
        artifactBaslik.innerHTML = "Last Night Before the Fight"
        artifactHikaye.innerHTML = `
        The silence slowly filled inside the big arena with thousands of seats. Slow footsteps echoed through the arena, making silence vanish as if it was a cat against a dog. The source of that step sound came in, with a black leather jacket. He looked helpless about the sounds in his mind with his olive-black, innocent and idealess eyes. Sounds were echoing, “tomorrow!”. And then his enormous poster came into sight after he turned right. The shine of his hair was making eyes squint, with the same innocent look again in his eyes. He was looking like a clueless first grader on the first day of school ever. And on the other side, just opposite to his poster, there stood a showy, fancy man. With the eyes of a bloodthirsty tiger, his gaze was fearing everyone. This man, the champion of all, the dancing destroyer, the king of sting, the count of Monte Fisto, the thane of pain, the prince of punch, the master of disaster, the one and only was going to be fighting with him in this snow-white ring tomorrow. Suddenly, he thought about his bloods that would be on this ring tomorrow and murmured, “This is not going to be that clean tomorrow.” Maybe this was going to be his last visit to any place, maybe he was going to die tomorrow. That’s why his talkative mind was not quiet. Maybe tonight was going to be his last sleep. Emotions were invisible, but fear had wrapped around him like ivy. But it was impossible to break this ivy with your muscles, even if he trained a lot for the fight, it was not his muscles that was going to break the ivy called “fear” wrapped around him. It was his soul which brought him here on the last night before the fight. After all, he left the arena with all its silence, to be filled with thousands of people tomorrow.  
        `
    } else if (artifactNumber == 3) {
        artifactBaslik.innerHTML = "Let's Get Serious";
        artifactHikaye.innerHTML = `
        <span style="display: block;">
        Who is this poem for?  </span>
        <span style="display: block;">
        Let me tell you first, not for babies.  </span>
        <span style="display: block;">
        This poem is for grown-ups, serious fourth graders, </span>
        <span style="display: block;">
        Who are already done with their childhood, </span>
        <span style="display: block;">
        Looking towards their adulthood. </span>
        <span style="display: block;">
        Toys and games are so childish and boring, </span>
        <span style="display: block;">
        We need something much more lifeless and boring. </span>
        <span style="display: block;">
        Instead of playing, I would prefer working. </span>
        <span style="display: block;">
        I need </span>
        <span style="display: block;">
        To be responsible. </span>
        <span style="display: block;">
        From the things I don’t even understand, </span>
        <span style="display: block;">
        I need to run between As and Bs, </span>
        <span style="display: block;">
        I need to think about those and these.  </span>
        <span style="display: block;">
        Only time I laugh is saying cheese. </span>
        `
    } else {
        artifactBaslik.innerHTML = "King and Nothing";
        artifactHikaye.innerHTML = `
<span style="display: block;">A birth, given by a mom, quiet and alone in the dark, </span>

<span style="display: block;">And another one, so shining, took the night away from the dark. </span>

<span style="display: block;">No childhood, no friends, only the war, </span>

<span style="display: block;">All the cheer, lots of friends, what is a war? </span>

<span style="display: block;">Lots of wounds, lots of cries, what is a life? </span>

<span style="display: block;">The softest fur, the biggest smile, this is a life. </span>

<span style="display: block;">An orphan, starving to death, but with the heart of a king, </span>

<span style="display: block;">A well-fed body, no heart, but son of a king. </span>

<span style="display: block;">One had no one to back him up in a fight with Hyenas, </span>

<span style="display: block;">And other one saw them miles away, asked his dad, “Are they Hyenas?” </span>

<span style="display: block;">One had nothing to lose, </span>

<span style="display: block;">One had nothing to win. </span>

<span style="display: block;">When the bad times knocked the door, </span>

<span style="display: block;">One already knew what to do when it’s bad. </span>

<span style="display: block;">The other one had no clue, what was the bad? </span>

<span style="display: block;">One had the heart to shine up the darkness, with the heart of a king, </span>

<span style="display: block;">The other one had never been to dark, with the heart of nothing. </span>

<span style="display: block;">Being alone was a part of his life, </span>

<span style="display: block;">And another one, who was alone, for the first time in his life. </span>

<span style="display: block;">Guess what happened… </span>

<span style="display: block;">The one with the heart, beat the dark, </span>

<span style="display: block;">And another one was lost, beaten in the dark. </span>

<span style="display: block;">One created a kingdom, became the king of all, </span>

<span style="display: block;">One ruined the kingdom, became nothing at all. </span>

<span style="display: block;">And at the end of the day, they were both lions, </span>

<span style="display: block;">The father, also known as the king of all, </span>

<span style="display: block;">And the son, also known as nothing at all. </span>
        `
    }
});

arrowleft.addEventListener("click", () => {
    if (artifactNumber <= 4 && artifactNumber > 1) {
        artifactNumber -= 1
    } else {
        artifactNumber = 4;
    }

    pageNumber.innerHTML = artifactNumber;

    if(artifactNumber == 1) {
        artifactBaslik.innerHTML = "God of Justice";
        artifactHikaye.innerHTML = `
        A new day began in the kingdom of Elyria as the sun rose, bathing the city in its soft, golden light. The white stone towers of the castle were shining in the sun, and the aroma of flowers mixed with the smell of fresh baked bread filled the air.  

    But in the castle, a strange stillness reigned. Princess Selene was dead. The guards found her early in the morning lying next to her bed in the royal palace. Princess Selene's body did not appear as someone who had managed to struggle, and the body lay calm and still. There had been no blood. Her lips were as blue as violets, yet she had not been poisoned. Her skin was cold, but, the air was warm. Her fingertips were colored with dark, strange ash that no one could identify as the result of any known fire or plant. It offered no explanations. No guards had seen anyone enter or exit the garden. One of the gardeners said he had seen someone in a hood near the garden days before, but he did not remember anything about the person. His story was unclear.  

    People were talking about it in whispers. Was it magic? A curse from the gods of old? A consequence of the kingdom’s sins? But no one had answers. And, most importantly, no one could bring Selene back. 

    The days to follow, King Alexios ordered a complete investigation. He summoned his best spies, his secret guards, and even foreign diplomats to assist in ruling it out. They interviewed all who were in the palace, which included cooks, all the attendants, and guests from foreign lands. They investigated for any evidence, but did not come up with anything. The royal alchemists investigated the odd ash found around Selene. They conducted every type of test known to them, revealing nothing. "There’s nothing we can suggest," said one of the royal doctors, "it is neither magic nor poison. There is nothing here that we can understand." The King's face showed no expression, darker now with grief and anger. He began no longer speaking to his advisors, he made no decisions; diving faster into his personal world.  

    Alexios spent long hours sitting in the chambers of his daughter, alone. The first to arrive was the Royal doctor, who examined her with a fine tooth comb, but again, nothing could explain her death. No illness. No poison. Just a slight burn on her wrist, like some strange mark, no one is it able to identify. Nothing is anywhere close to whatever sort of symbol or brand these marks could be. And, there were no witnesses. No one saw anything. No servant heard a cry.  

    One day, Alexios locked himself in the old chapel. The chapel had not been used for many years, and it was full of dust. Its stone walls were covered with old statues of forgotten gods, gods that had once been worshipped but now lay broken and forgotten. 

 

The King did not speak for days. He sat in the quiet, reading old scrolls and books. Some of these were from old religions, some were about strange gods and forgotten rituals. He read stories about gods that were made by people, gods that rose from pain and suffering. One book caught his attention. It was about a god that was born not from the heavens, but from grief, from a deep wound. The god had no name, but the book said, “A god can be born in the wound. Let him rise from sorrow.” 

     Alexios didn’t sleep that night. Or the next. He continued to read, to think. The silence of the chapel seemed to fill his mind with new thoughts. His grief for Selene mixed with something darker, something he didn’t fully understand. 

    Days passed, and Alexios began to think more and more about the idea of this god—an unknown god, born from pain, born from a need for justice. He thought about Selene’s death. The killer was still free. There were no answers. And the people—though they mourned her loss—were already moving on, going about their lives without much care. 

    Alexios realized that perhaps justice alone was not enough. People didn’t care about truth or justice unless they had a reason to believe in it. And fear—fear of something greater than themselves—could control them in a way justice could not. He began to wonder: What if a god could change all of this? What if a god could make people fear and obey? The more he thought about it, the more this idea began to take hold. A god who saw everything. A god who judged people, a god who controlled their lives after death. He felt the power this could bring. The power to make people believe, to make them fear, to make them obey. And that was when Alexios knew what he had to do.  

    The king didn’t speak to anyone about his thoughts. Not yet. He knew that if he just told the people about this new god, they might laugh or question him. People didn’t easily trust new beliefs, especially when they came from a ruler’s mouth. So, he made a plan. He would not tell people directly. He would let them hear it from others. He would make it feel like a secret, something powerful that was never meant to be known. People often believe something more strongly when they think they have discovered it themselves. 

    Alexios chose a few trusted servants—people loyal to him for many years. He whispered to them about a god named Yevareth. “Yevareth watches everything,” he told them quietly. “He sees your actions. He sees your thoughts. After you die, he judges your soul.”, “But where did this god come from?” one asked. “From silence. From pain,” Alexios said. “He is born from sorrow. From death that has no answer. Like Selene’s.” He told them to keep it secret. But of course, he knew they wouldn’t. 

    The first rumors started in the market. “I heard the king prays to a new god at night,” one merchant whispered. “A god with no name?”, “No. His name is Yevareth. He judges everyone after death. No secrets are safe from him.” 

    The stories spread. A maid in the palace said she saw the king leave a bowl of gold coins in front of an old statue. A stable boy said he heard strange words from the king’s mouth—words not in any language he knew. Alexios acted surprised when asked. “You heard that?” he said softly to a nobleman. “It’s not for the ears of men. But… perhaps it was meant to be known.” That made people even more curious. They began to talk about Yevareth in their homes, in the streets, in the taverns. At first, it was only gossip. But soon, fear began to grow. “What if he’s real?” they said. “What if he sees me? What if my sins follow me after death?” People who had stolen small things started returning them. Husbands confessed lies to their wives. A man who cheated in a trade gave back extra coins, saying, “I don’t want Yevareth to judge me.” 

    Alexios wanted more than rumors. He needed the people to see proof. So, he created miracles. One night, a fire broke out near the harbor. The wind was strong and could have spread the flames—but it changed direction suddenly. A priest of Yevareth said, “The god turned the fire away from the city.” No one knew the truth: Alexios had ordered the city engineers to build wind barriers months ago. Another time, a farmer’s dead crops started growing again after he prayed at a small shrine to Yevareth. He told everyone that the god had answered him. But in truth, the king had secretly sent his men to bring new seeds and a special tool to the farmer’s land. A child sick with fever was cured overnight after her mother whispered a prayer to Yevareth and washed her in water from the river. In truth, a healer working for the king had secretly given the girl a rare herb hours earlier. But no one knew these details. To the people, the god was real. 

    The temples of the old gods grew quiet. More people now prayed to Yevareth. Small statues were made of black stone, with a single eye carved into the center. The Eye of Yevareth. People placed them at their doors. They believed the god would watch them and protect them from harm—or punish them if they sinned. The king stayed silent most of the time, but sometimes he would be seen praying alone. Once, he knelt beneath the moon, speaking words of thanks for his power, his riches, and his health. Servants saw him and whispered what they had seen. “He thanks the god for everything,” they said. “Even kings must bow before Yevareth.” This made the belief stronger. If even the king feared Yevareth, then everyone else should too. 

    Then, one day, something unexpected happened. A man came to the palace gates. He was shaking. He wore a torn robe, and his feet were bare. He looked like he had not slept in days. “I must speak to the king,” he said. “Yevareth has seen me. I cannot hide anymore.” The guards took him inside. He fell before the throne and began to cry. “I killed the princess,” he said. “I didn’t mean to. It was an accident. But Yevareth sees me. He sees everything. I dream of her face every night.” Alexios stood still. His face was like stone. He had created a god to control others. And now, this god had done his mission. He had found the truth.  

    The confession spread quickly. The man’s name was Eron, a former palace servant dismissed years ago for theft. No one had suspected him of the princess’s death—until now. Eron was taken away. The next morning, he was found dead in his cell, a peaceful expression on his face. No wounds, no signs of struggle. The city mourned. Some said Yevareth had claimed him. Others believed he had found peace through confession. Either way, the god’s power seemed undeniable. 

    After the confession, Alexios became quiet. He spent hours alone, sitting at his desk with a candle and a pen. He wrote page after page, always in silence. At first, no one knew what he was doing. But then he announced it. “I am writing the holy book of Yevareth,” he said. “His words must be known. His will must be followed.” But the truth was different. These were not Yevareth’s words. They were Alexios’s. He wrote rules for living. How to pray. What to wear. What foods to eat, and when. He wrote that people must obey their king, because “the king speaks with Yevareth’s voice.” 

    The people accepted it. They had seen the “miracles.” They had heard the confession. They believed. And so they feared. The book was called The Eye’s Word. It was copied and sent to every town in Elyria. Soon, it was the only book people were allowed to read in public. Even children learned it before they learned to write their own names. 

    Alexios did not rule alone. His advisors had watched his rise carefully. One of them, Lord Merek, came to him late one night. “This god you created,” Merek said, “he can do more than bring peace. He can bring power.”, “What do you mean?” Alexios asked. “If the people fear Yevareth, they will obey you forever,” Merek said. “But we must shape the god. We must make sure his laws… help us.” And so, the book began to change. The advisors added lines. Quietly, secretly. “A noble has the right to correct a poor man’s mistake.”, “Land should be held by the wise, not the simple.”, “To question the king is to question the god.” 

    When people noticed new rules, they were told, “These were always in the book. You just didn’t understand before.” Priests loyal to Alexios repeated the words every day. They taught people how to fear, how to obey, how to kneel. Yevareth was no longer a god of truth. He became a god of power.  

    Alexios noticed the change in the people. They still bowed, still prayed, still gave gifts to the temples—but their eyes looked different now. Not faithful. Not thankful. Afraid, tired, angry. He tried to fix it. He ordered more festivals. More food. More speeches from the priests. But it didn’t work. The more he gave, the less they smiled. Then, one morning, he found something strange on his throne, a scroll. It was tied with black string. 

He opened it and read: “A time will come when the Listener must fall. Only then will the people be free. The god does not want a king, but a sacrifice.” There was no name. No sign of who wrote it. But the message was clear. Someone wanted him gone. At first, he laughed. “A fake prophecy,” he said to his advisors. “Someone playing with fear.” But deep inside, a small voice whispered, What if Yevareth is real now? What if the god you made has grown stronger than you? He ignored the thought. He sent soldiers to search every temple and home for anyone spreading lies. Many were taken away. Some were never seen again. But the fear did not stop the whispers. It made them louder. 

    The advisors met in secret. They had once helped Alexios build the god. Now they feared him. “He listens to no one,” said one. “He thinks he is Yevareth,” said another. 
“If we don’t stop him, the people will rise. And we will fall with him.” So they wrote again. They changed the book—just a few lines, hidden at the end. A “lost chapter,” they said, found in an old temple. It read: “When the Listener becomes proud, his soul must be taken. He must carry the sins of the people into the afterlife. Only then will the world be clean.” They told the priests to read it out loud. They told the people it was the final truth from Yevareth himself. And the people believed. 

    It happened on a cold morning. Alexios stepped onto his balcony to speak to the crowd. But no one spoke. No cheers. No chants. Just silence. He looked down and saw thousands of faces. At the front stood the high priest. And beside him, the advisors. They pointed. A boy walked forward. His hands shook. In them, he held a short blade. “You must carry our sins,” the boy said. Alexios stood still. He had made a god to find justice. He had used it for power. He had changed the world with his lies. Now the god had turned on him. He did not fight. The blade went into his chest. He fell to his knees, then to the ground. Above him, in the temple, the Eye of Yevareth glowed in the morning light. 

The people wept—not for the king, but for their fear, their lost years, their broken families. But they did not destroy the temples. They did not throw away the book. They still prayed to Yevareth. Because they believed. They believed their god had judged the king. And that meant Yevareth was real. The god born from grief and lies had become a god of justice. 

And he was never questioned again. 
        `
    } else if (artifactNumber == 2) {
        artifactBaslik.innerHTML = "Last Night Before the Fight"
        artifactHikaye.innerHTML = `
        The silence slowly filled inside the big arena with thousands of seats. Slow footsteps echoed through the arena, making silence vanish as if it was a cat against a dog. The source of that step sound came in, with a black leather jacket. He looked helpless about the sounds in his mind with his olive-black, innocent and idealess eyes. Sounds were echoing, “tomorrow!”. And then his enormous poster came into sight after he turned right. The shine of his hair was making eyes squint, with the same innocent look again in his eyes. He was looking like a clueless first grader on the first day of school ever. And on the other side, just opposite to his poster, there stood a showy, fancy man. With the eyes of a bloodthirsty tiger, his gaze was fearing everyone. This man, the champion of all, the dancing destroyer, the king of sting, the count of Monte Fisto, the thane of pain, the prince of punch, the master of disaster, the one and only was going to be fighting with him in this snow-white ring tomorrow. Suddenly, he thought about his bloods that would be on this ring tomorrow and murmured, “This is not going to be that clean tomorrow.” Maybe this was going to be his last visit to any place, maybe he was going to die tomorrow. That’s why his talkative mind was not quiet. Maybe tonight was going to be his last sleep. Emotions were invisible, but fear had wrapped around him like ivy. But it was impossible to break this ivy with your muscles, even if he trained a lot for the fight, it was not his muscles that was going to break the ivy called “fear” wrapped around him. It was his soul which brought him here on the last night before the fight. After all, he left the arena with all its silence, to be filled with thousands of people tomorrow.  
        `
    } else if (artifactNumber == 3) {
        artifactBaslik.innerHTML = "Let's Get Serious";
        artifactHikaye.innerHTML = `
        <span style="display: block;">
        Who is this poem for?  </span>
        <span style="display: block;">
        Let me tell you first, not for babies.  </span>
        <span style="display: block;">
        This poem is for grown-ups, serious fourth graders, </span>
        <span style="display: block;">
        Who are already done with their childhood, </span>
        <span style="display: block;">
        Looking towards their adulthood. </span>
        <span style="display: block;">
        Toys and games are so childish and boring, </span>
        <span style="display: block;">
        We need something much more lifeless and boring. </span>
        <span style="display: block;">
        Instead of playing, I would prefer working. </span>
        <span style="display: block;">
        I need </span>
        <span style="display: block;">
        To be responsible. </span>
        <span style="display: block;">
        From the things I don’t even understand, </span>
        <span style="display: block;">
        I need to run between As and Bs, </span>
        <span style="display: block;">
        I need to think about those and these.  </span>
        <span style="display: block;">
        Only time I laugh is saying cheese. </span>
        `
    } else {
        artifactBaslik.innerHTML = "King and Nothing";
        artifactHikaye.innerHTML = `
<span style="display: block;">A birth, given by a mom, quiet and alone in the dark, </span>

<span style="display: block;">And another one, so shining, took the night away from the dark. </span>

<span style="display: block;">No childhood, no friends, only the war, </span>

<span style="display: block;">All the cheer, lots of friends, what is a war? </span>

<span style="display: block;">Lots of wounds, lots of cries, what is a life? </span>

<span style="display: block;">The softest fur, the biggest smile, this is a life. </span>

<span style="display: block;">An orphan, starving to death, but with the heart of a king, </span>

<span style="display: block;">A well-fed body, no heart, but son of a king. </span>

<span style="display: block;">One had no one to back him up in a fight with Hyenas, </span>

<span style="display: block;">And other one saw them miles away, asked his dad, “Are they Hyenas?” </span>

<span style="display: block;">One had nothing to lose, </span>

<span style="display: block;">One had nothing to win. </span>

<span style="display: block;">When the bad times knocked the door, </span>

<span style="display: block;">One already knew what to do when it’s bad. </span>

<span style="display: block;">The other one had no clue, what was the bad? </span>

<span style="display: block;">One had the heart to shine up the darkness, with the heart of a king, </span>

<span style="display: block;">The other one had never been to dark, with the heart of nothing. </span>

<span style="display: block;">Being alone was a part of his life, </span>

<span style="display: block;">And another one, who was alone, for the first time in his life. </span>

<span style="display: block;">Guess what happened… </span>

<span style="display: block;">The one with the heart, beat the dark, </span>

<span style="display: block;">And another one was lost, beaten in the dark. </span>

<span style="display: block;">One created a kingdom, became the king of all, </span>

<span style="display: block;">One ruined the kingdom, became nothing at all. </span>

<span style="display: block;">And at the end of the day, they were both lions, </span>

<span style="display: block;">The father, also known as the king of all, </span>

<span style="display: block;">And the son, also known as nothing at all. </span>
        `
    }
});

leave.addEventListener("click", () => {
    var endingSong = new Audio('endingsong.mp3');
    endingSong.play();
    siyahEkran.innerHTML = `
    <h1>It seems that this is it... End...</h1>
    <p>We have read a lot from his artifacts, and now everything started to make sense. Count Kaan was just a man who wanted peace. He loved manipulation and dark themes, as we can understand from his castle... Back in time when he was alive, he was a quiet person. He loved to think, he loved to write. It was fortunate for him that he met with Heather Peathers in his US experience, an old guide who showed him a lot. Now, it is time to leave his house. We don't know what happened to him. Maybe, he was really tired after his long adventure, and it was time for him to go back. Or maybe, he stepped on that tail. Who knows? </p>
    `;
    siyahEkran.classList.remove("siyahEkranCik");
    siyahEkran.classList.add("siyahEkranGir");
})

