# intro

# chapter1
{NARRATE} What is this?

{NARRATE} Where am I?

{NARRATE} Am I dead?

{NARRATE} Is this what death is like?

{NARRATE} Hello?

{NARRATE} Hello!

{NARRATE} HELLOOOO!?

<!--ADD PLAYER VOICE-->
{NARRATE} ...

{NARRATE} ...

{NARRATE} "Your Majesty?"

Maid [sad]: Your Majesty, are you awake?

["Who are you?"](#ch1_woke_up) 
["No."](#ch1_woke_up_no) 
["..."](#ch1_play_dead) 

# ch1_woke_up_no
Maid [angry]: ...  

{GOTO ch1_woke_up in 0}
# ch1_play_dead

Maid [sad]: *sigh*

Maid [sad]: Poor thing.

Maid [scared]: It has been days...

Maid [sad]: She must've been in such a shock.

Maid [sad]: I wonder if the Doc will come up with something to help her.

Player: Ugh-

{GOTO ch1_woke_up in 0}

# ch1_woke_up
Maid [scared]: Her Majesty has woken up!  

Maid [scared]: Call the doctor. 

Maid [sad]: Your Majesty, are you alright?

Maid [sad]: ...

Maid [scared]: Your Majesty? How many fingers do you see?

["None?"](#ch1_right_fingers) 
["One, two, three… six? No seven!"](#ch1_bad_fingers) 
[“Who are you? Where am I?”](#ch1_know_nothing) 



# ch1_right_fingers
Maid [happy]: Oh thank god.

Maid [sad]: We really thought you were dead there for a second.

Player: I definitely- *cough* *cough* felt like it. 

Player: Could you get me some water?

Maid [happy]: Of course! There you are.

Player: Thanks.

Maid [neutral]: You are welcome your Majesty.

["Why do you keep saying that? Who are you?"](#ch1_who_are_you) 
["I am no Majesty as far as I know."](#ch1_know_nothing) 
["How did I get here?"](#ch1_where_am_i) 

# ch1_bad_fingers
Maid [scared]: Oh- alright... 

Maid [sad]: Do you feel any pain Your Majesty?

Player: *cough* *cough* a little bit.

Player: Could you get me some water?

Maid [happy]: Of course! There you are.

Player: Thanks.

Maid [neutral]: You are welcome Your Majesty.

["Why do you keep saying that? Who are you?"](#ch1_who_are_you) 
["I am no Majesty as far as I know."](#ch1_know_nothing) 
["How did I get here?"](#ch1_where_am_i) 

# ch1_who_are_you

Maid [sad]: I am Miriam, my Lady. Your personal maid.

Maid [sad]: Do you not recognize me?

["Miriam… Right…"](#ch1_oh_i_know)
[“I may have a little brain fog, sorry.”](#ch1_why_am_i_here) 
["Of course I don't! I've never been here."](#ch1_know_nothing) 


# ch1_where_am_i

Maid [scared]: Get where? Here? Your chambers, Your Majesty?

Player: My what, now?

Maid [sad]: These are your chambers, Your Majesty. Do you not recognize them?

["Oh… right… My chambers…"](#ch1_oh_i_know) 
[“Why am I here?”](#ch1_why_am_i_here) 
["Of course I don't! I've never been here."](#ch1_know_nothing) 

# ch1_oh_i_know

Maid [sad]: ...

Maid [sad]: Do you remember what happened, Your Majesty?

["Not really..."](#ch1_why_am_i_here) 
[“I was reading a book in a library when suddenly...”](#ch1_explain_reality) 

# ch1_why_am_i_here

Maid [sad]: You must be still in shock, Your Majesty. 

Maid [sad]: You were assassinated when strolling outside.

Player: I was WHAT?

Maid [scared]: You and your husband were-

Player: Me and WHO?

[Ask about the assassination](#ch1_assassination)
[Ask about the husband](#ch1_husband) 
[Let her talk](#ch1_chit_chat) 

# ch1_explain_reality

Maid [scared]: ...

Maid [scared]: This is bad...

Maid [scared]: Really, really bad...

Maid [scared]: We should wait for the doctor...

{GOTO ch1_doctor in 0}

# ch1_know_nothing

Maid [scared]: Oh no... it's worse than we thought.

Maid [scared]: Do you remember anything? Anything at all?

["Not really..."](#ch1_why_am_i_here) 
[“I was reading a book in a library when suddenly...”](#ch1_explain_reality) 

# ch1_husband

Player: I- I have a husband?

Maid [sad]: Well…

Maid [sad]: You had.

Maid [sad]: I am so sorry.

Maid [sad]: He didn’t make it. The attack was directed mainly at him and-

Doctor: *cough* *cough*

{GOTO ch1_doctor in 0}

# ch1_assassination

Player: Hey- Hold on. Hold up the horses…

Player: What do you mean I was ‘assassinated’?

Maid [sad]: There was an surprise attack on you and your husband when you were strolling in the gardens. 

Maid [sad]: The guards were quick to react and save you, but the damage was not minor and the shock- 

Maid [sad]: if must be why you are so disoriented now.

{GOTO ch1_doctor in 0}

# ch1_chit_chat

Maid [sad]: It was beautiful day.

Maid [sad]: You and your husband, the King, desicted to take a stroll outside.

Maid [scared]: Suddenly, there was a loud noice.

Maid [scared]: I heard it even in the servant headquarters!

Maid [scared]: There was quite the commotion.

Maid [sad]: And when the guards got to the gardens.

Maid [sad]: The king has been already dead and you...

Maid [sad]: We thought you were too!

Maid [sad]: You were laying there so lifelessly...

{GOTO ch1_doctor in 0}

# ch1_doctor

Doctor [angry]: Miriam… I think that’s quite enough.

Doctor [neutral]: Don’t you see, you are distressing the queen with your needles gossip?

Maid [sad]: ...

[And you are?](#ch1_doctor_introduction)
[Don't you see you are interrupting us?](#ch1_interruption) {+maid}
[You are right... thanks.](#ch1_doctor_right) {-maid}


# ch1_doctor_right

Maid [sad]: ...

Doctor [happy]: How are you feeling, Your Majesty?

[Confused.](#ch1_doctor_confusion)
[I had better days...](#ch1_doctor_confusion) 
[Good.](#ch1_good) {-maid}

# ch1_interruption
 
Maid [happy]: ...

Doctor [scared]: My apologies, Your Majesty.

Doctor [scared]: I'm simply looking out for your health.

{GOTO ch1_doctor_introduction in 0}

# ch1_doctor_introduction

Doctor [neutral]: ...

Doctor [neutral]: I am the royal doctor, Your Majesty. 

Doctor [happy]: Theodorik Ambrosius von Eberhardt-Valmeusen is my name.

Maid [neutral]: But we all call him Doc. 

Maid [happy]: It's easier that way. 

Doctor [neutral]: ...

Doctor [neutral]: Anyway... How are you feeling, Your Majesty?

[Confused.](#ch1_doctor_confusion)
[I had better days...](#ch1_doctor_confusion) 
[Good.](#ch1_good) {-maid}

# ch1_doctor_confusion

Doctor [neutral]: I figured as much.

Doctor [neutral]: Do you feel any pain?

[No.](#ch1_doctor_confusion2)
[Yes.](#ch1_doctor_confusion2) 

# ch1_doctor_confusion2

Doctor [neutral]: Alright.

Doctor [neutral]: Do you have any vision problems?

[No.](#ch1_doctor_confusion3)
[Yes.](#ch1_doctor_confusion3) 

# ch1_doctor_confusion3

Doctor [neutral]: Hmmm.

Doctor [neutral]: And do you remember what happended?

[Not really...](#ch1_diagnosis)
[Yes.](#ch1_good) 

# ch1_good

Maid [angry]: She is lying.

Maid [sad]: She doesn't remember things.

Maid [sad]: Well most of them...

Doctor [scared]: !!!

Doctor [scared]: Is that true, Your Majesty?

[Miriam must be imagining things](#ch1_good2) {-maid}
[Maybe?](#ch1_diagnosis) 

# ch1_good2

Maid [angry]: ...

Maid [angry]: I would never.

Maid [angry]: Her Majesty has hard time remembering basic things.

[It's bold to accuse the Queen of lying.](#ch1_good3) {-maid}
[She is right.](#ch1_pre-diagnosis) 

# ch1_good3

Maid [scared]: Ha!

Maid [sad]: I will do anything if it's to help you, Your Majesty. 

{GOTO ch1_pre-diagnosis in 0}

# ch1_pre-diagnosis

Doctor [neutral]: Is that right?

Doctor [neutral]: You DID ask me about my name, Your Majesty...

Player: Not your name to be precise.

Doctor [angry]: ...

Doctor [neutral]: Do you really not remember anything?

[It's true.](#ch1_diagnosis) 

# ch1_diagnosis

Doctor [neutral]: Hmmmm...

Doctor [neutral]: That is unfortunate.

Doctor [neutral]: But not necesarily unexpected.

Doctor [neutral]: Your body has gone through a shock.

Doctor [neutral]: You may have hit your head...

Doctor [neutral]: Or you are blocking out the memories to shield your mind...

Doctor [neutral]: I've seen such with the military men, when they get back.

Doctor [neutral]: Alright.

Doctor [neutral]: You have temporary amnesia.

Maid [angry]: I could've diagnosed that.

Doctor [angry]: ...

Doctor [angry]: You insolent child-

{GOTO ch1_whole_squad in 0}

# ch1_whole_squad

Advisor [angry]: What's all this squacking about?

Advisor [scared]: Oh!

Advisor [scared]: Your Majesty! You are awake!

Advisor [neutral]: What a wonderful news.

[You definitely seem happy.](#ch1_advisor_beef) {-advisor}
[Who are you?](#ch1_advisor_introduction) 

# ch1_advisor_beef

Advisor [scared]: I am just surprised, Your Majesty.

Advisor [neutral]: We have been slowly losing hope...

Maid [angry]: Well I haven't. 

Advisor [angry]: ...

Advisor [neutral]: What unnecessary comment.

Advisor [neutral]: I can see what was all the noise about now.

Advisor [angry]: Miriam.

Maid [angry]: ...

[Don't be rude.](#ch1_advisor_beef2) {-advisor}
[Who are you to say such things?](#ch1_advisor_introduction) 

# ch1_advisor_beef2
Advisor [angry]: My apologies. I didn't mean to.

Maid [happy]: ...

Advisor [neutral]: I came by to check if you were feeling better, Your Majesty.

Player: I don't see how that is any of your business.

{GOTO ch1_advisor_introduction in 0}

# ch1_advisor_introduction

Advisor [surprised]: ???

Advisor [neutral]: I am the King's advisor. 

Advisor [sad]: Or I was...

Advisor [neutral]: Don't you remember me, Your Majesty?

Doctor [neutral]: Her Majesty, has amnesia for the time being.

Maid [sad]: She didn't recognize me either. 

Advisor [happy]: ...

Advisor [sad]: That is horrible.

Advisor [neutral]: How confusing that must be.

Advisor [neutral]: And scary. 

Advisor [neutral]: Don't worry, Your Majesty.

Advisor [neutral]: I will work my hardest to help you remember all the important things.

Maid [neutral]: I'm sure you will.

Advisor [angry]: ...

Advisor [neutral]: Miriam? Would you mind stepping out of the room for a minute?

Advisor [neutral]: I will need to discuss confidential information with the Doc and the Queen.

Maid [surprised]: ...

[She may stay.](#ch1_advisor_beef3) {+maid}
[He is right. You should go.](#ch1_miriam_gone) {-maid}
[...](#ch1_miriam_gone) 

# ch1_advisor_beef3

Maid [happy]: Thank you, Your Majesty. 

Maid [neutral]: But I do need to go and DO my work.

Advisor [neutral]: ...

Maid [neutral]: I will be around if you need me.

Maid [neutral]: If you excuse me.

{GOTO ch1_miriam_gone in 0}

# ch1_miriam_gone

Doctor [scared]: I should take my leave too.

Doctor [neutral]: I need to prepare medicine for the Queen, now that she is awake.

Advisor [neutral]: Stay for a little longer Doc.

Advisor [neutral]: I need to discuss the matter of handling royal matters.

Player: Royal matters?

Doctor [neutral]: What do I have to do with that?

Advisor [neutral]: Well we need to decide whenever the queen is fit to reign the country...

Advisor [sad]: in this state...

[Excuse me?](#ch1_reigning)
[If I am fit to do what now?](#ch1_reigning)

# ch1_reigning

Doctor [scared]: Well...

Doctor [neutral]: She may be a little bit confused for now.

Doctor [neutral]: But I do think a few day of rest will do wonders.

Advisor [neutral]: We don't have the time.

Advisor [neutral]: The people need a strong ruler now. 

Advisor [sad]: After the King... is no longer with us.

Advisor [neutral]: The kingdom has been in chaos.

Advisor [neutral]: We need to act now.

[I can do it.](#ch1_reigning_yes)
[That's too much.](#ch1_reigning_no)

# ch1_reigning_yes

Advisor [scared]: Are you sure, Your Majesty?

Advisor [neutral]: I wouldn't want you to push yourself.

Advisor [neutral]: I prepared a paper that would grant me the permission to oversee the royal matters.

Advisor [happy]: All you need to do is sign.

Doctor [neutral]: If the queen feels like she is fit to reign. 

Doctor [neutral]: I don't see a problem, why not?


[Exactly what the Doc said.](#ch1_reigning_yes2) {-advisor}
[I wouldn't want to burden you.](#ch1_reigning_yes2)
[Can I see the paper?](#ch1_reigning_no)

# ch1_reigning_yes2

Advisor [angry]: ...

Advisor [neutral]: This is importatn matter.

Advisor [neutral]: I think you should think of it some more.

Advisor [neutral]: I will come by later.

{GOTO ch1_just_doc_again in 0}

# ch1_reigning_no

Advisor [happy]: The paper I prepared is basically a temporary solution.

Advisor [happy]: All it does is grant me permission to act in your stead.

Advisor [neutral]: Until you recover... that is.

Advisor [happy]: I would keep you informed of course. 

Advisor [happy]: All I need is your signature, Your Majesty.

[Seems shady.](#ch1_reigning_yes2)
[Sure. Give it to me.](#ch1_reigning_no2)

# ch1_reigning_no2

Doctor [scared]: I think Her Majesty, should think some more about this.

Doctor [neutral]: She did just wake up.

Doctor [sad]: Maybe we should gran her more time?

{GOTO ch1_reigning_yes2 in 0}

# ch1_just_doc_again

Doctor [neutral]: He is persistent that one.

Doctor [happy]: Don't let it phase you, Your Majesty.

Doctor [neutral]: He will do his work even if you don't sign.

Doctor [neutral]: If I may be so bold and advise you.

Doctor [neutral]: Don't.

Doctor [neutral]: He is not bad person... 

Doctor [neutral]: But something seems off. 

[You don't say.](#ch1_just_doc_agree) {+doctor}
[No, he seems nice.](#ch1_just_doc_disagree) {-doctor}

# ch1_just_doc_agree

Doctor [happy]: You seem like you are quick to catch up.

Doctor [happy]: I'm glad to see you are better.

Doctor [neutral]: We were all worried.

Doctor [neutral]: Now if you excuse me.

Doctor [neutral]: I will go prepare the medicine. 

{GOTO ch1_noise in 0}

# ch1_just_doc_disagree

Doctor [neutral]: ...

Doctor [neutral]: I hope you are right.

Doctor [neutral]: Now if you excuse me.

Doctor [neutral]: I will go prepare the medicine. 

{GOTO ch1_noise in 0}

<!--------------THORNE----------------->

# ch1_noise

Thorne [neutral_hooded]: Comfortable are we?

Player: God, you scared me!

Player: Who are you?

Thorne [neutral_hooded]: Definitely not God.

Player: Ha. ha. Very funny. 

[How did you get here? I didn't hear the door open.](#ch1_thorne_where)
[Who are you?](#ch1_thorne_who)
[Go away.](#ch1_thorne_go)

# ch1_thorne_go

Player: I'm not really in a mood for jokes right now.

Player: Whoever you are, can you go away?

{GOTO ch1_thorne_who in 0}

# ch1_thorne_where

Thorne [neutral_hooded]: The window. 

Thorne [neutral_hooded]: It's not that difficult, once you get the hang of it.

Player: ...

[Should I be scared?](#ch1_thorne_scared)
[Do you know what door is? The wooden thing in the wall...](#ch1_thorne_door) {-angry}
[Who the hell are you?](#ch1_thorne_who)

# ch1_thorne_door

Thorne [angry_hooded]: ...

Thorne [angry_hooded]: I know what a door is.

Thorne [neutral_hooded]: I just couldn't walk past the guards like it's nothing.

{GOTO ch1_thorne_who in 0}

# ch1_thorne_who

Thorne [scared_hooded]: Wait. You don't remember me?

Player: You see, you are not the only one asking me that today.

[I have really bad memory.](#ch1_thorne_bad_memory)
[I have amnesia.](#ch1_thorne_amnesia)

# ch1_thorne_amnesia

Thorne [sad_hooded]: Oh...

{GOTO ch1_thorne_harmed in 0}

# ch1_thorne_bad_memory

Thorne [neutral_hooded]: I imagined you'd remember ME, after what happened in the garden.

Player: Wait... you are the assassin?

Thorne [sad_hooded]: ...

[What the hell are you doing here?](#ch1_thorne_whatthe)
[Help!](#ch1_thorne_yell)

# ch1_thorne_whatthe

Player: Shouldn't you be like... hiding or something?

Thorne [sad_hooded]: ...

Thorne [sad_hooded]: I wanted to see you.

[See me?](#ch1_thorne_see_me)
[To finish the job?](#ch1_thorne_finish)
[Help!](#ch1_thorne_yell)

# ch1_thorne_see_me

Player: Did I catch your eye on your murder mission?

Thorne [scared_hooded]: ...

Thorne [sad_hooded]: I came to apologize.

{GOTO ch1_thorne_sorry in 0}


# ch1_thorne_finish

Thorne [happy_hooded]: No!

Thorne [neutral_hooded]: ...

Thorne [sad_hooded]: You were not supposed to be there.

Thorne [sad_hooded]: There was no reason to harm you-

[But there was one to kill my husband?](#ch1_thorne_killed) {-thorne}
[Well you did.](#ch1_thorne_harmed)
[Guards!](#ch1_thorne_yell)

# ch1_thorne_harmed

Thorne [sad_hooded]: I didn't mean to hurt you.

Thorne [sad_hooded]: If anything I pushed you, to get out of the way.

Thorne [sad_hooded]: But then you hit your head- 

{GOTO ch1_thorne_sorry in 0}


# ch1_thorne_killed

Thorne [angry_hooded]: ...

Thorne [angry_hooded]: You wouldn't understand anyway. 

Thorne [neutral_hooded]: But there was actually.

Thorne [neutral_hooded]: I would do it again if I had to.

[And you came here to tell me that?](#ch1_thorne_angry) {-thorne}
[That's reassuring.](#ch1_thorne_reassuring)
[Help!](#ch1_thorne_yell)

# ch1_thorne_angry
Thorne [angry_hooded]: ...

{GOTO ch1_thorne_reassuring}

# ch1_thorne_reassuring

Thorne [happy_hooded]: You are taking it pretty well, for a mourning widow. 

Player: Well...

[You could say, we weren't that close](#ch1_thorne_super_sad)
[Oh no, I am super sad.](#ch1_thorne_super_sad)
[Help!](#ch1_thorne_yell)


# ch1_thorne_super_sad

Thorne [scared_hooded]: Sure... 

{GOTO ch1_thorne_bounty in 0}

# ch1_thorne_sorry

Thorne [sad_hooded]: Look I'm sorry. 

Thorne [sad_hooded]: This was all a really bad accident.

[You accidentally killed my husband?](#ch1_thorne_angry)
[You came here to say sorry?](#ch1_thorne_why)
[Guards!](#ch1_thorne_yell)

# ch1_thorne_scared

Thorne [neutral_hooded]: Maybe.

Thorne [neutral_hooded]: Depends.

Thorne [neutral_hooded]: I'm here to talk, but if you yell...

Thorne [neutral_hooded]: I will have to make you quiet.

[Help!](#ch1_thorne_yell)
[Look, I don't want to talk.](#ch1_thorne_go)
[Make me quiet?](#ch1_thorne_quiet)

# ch1_thorne_quiet

Thorne [neutral_hooded]: Yes.

Thorne [neutral_hooded]: Like your husband. 

[Help!](#ch1_thorne_yell)
[Wait... You are the one who did it?](#ch1_thorne_who)

# ch1_thorne_yell

Thorne [happy_hooded]: SHHHH!

Thorne [happy_hooded]: Do you not have any sense of-

Thorne [happy_hooded]: Nevermind.

Thorne [happy_hooded]: I will come back later...

[Wait. Who are you anyway?](#ch1_thorne_who)

# ch1_thorne_why

Thorne [happy_hooded]: Yes.

Thorne [happy_hooded]: That and ask for you to take back the bounty.


[What bounty?](#ch1_thorne_bounty)
[Huh?](#ch1_thorne_bounty)
[Guards!](#ch1_thorne_yell)

# ch1_thorne_bounty

Thorne [happy_hooded]: Could you get rid of the prize on my head?

Thorne [happy_hooded]: It's getting pretty tiring.

[You've got some nerve.](#ch1_thorne_bold)
[I didn't do that](#ch1_thorne_not_me)
[Guards!](#ch1_thorne_yell)

# ch1_thorne_bold

Player: Do I seem like, I had the time to do something like that?

Thorne [neutral_hooded]: Well, you definitely seem liky someone who can undo that.

{GOTO ch1_thorne_not_me}

# ch1_thorne_not_me

Player: I have no clue what you are talking about.

Thorne [neutral_hooded]: If it wasn't your idea, it had to be someone who acted in your stead.

Player: ...

Player: There is one person-

{GOTO ch1_laziel in 0}

# ch1_laziel

Laziel [scared]: Sorry to interrupt your rest Your Majesty but-

Thorne [happy_hooded]: I will come back.

Laziel [neutra]: No- Wait- Come back!

[I really hate how people just barge into my room.](#ch1_laziel_barge)
[*sigh* And who are you?](#ch1_laziel_who)
[Guards!](#ch1_laziel_yell)

# ch1_laziel_yell

Laziel [scared]: I am the "guards".

Laziel [scared]: If anything you should've called earlier, Your Majesty.

[What's your name?](#ch1_laziel_who)
[I was about to, before you barged in.](#ch1_laziel_barge)

# ch1_laziel_who

Laziel [sad]: You may not believe me, Your Majesty.

Laziel [sad]: But I don't know.

Laziel [sad]: This might sound crazy.

Laziel [sad]: But I am not from this world.

[Hold on, me too!](#ch1_laziel_me_too)

# ch1_laziel_me_too

Laziel [scared]: ...

Laziel [happy]: Really?

Player: I was reading a book in a library when suddenly-

Laziel [happy]: NO WAY! It was the same for me.

Laziel [happy]: You are REAL!

Laziel [happy]: I mean like- from the real world!

Laziel [happy]: Thank god!

Laziel [happy]: I thought I was stuck here alone!

[Let's talk](#start_chat)

# start_chat
{EXECUTE switchToChat}


# ch1_laziel_barge

Laziel [scared]: I am so so sorry! But this was important.

Laziel [sad]: Well it was...

Laziel [neutral]: Do you know who that was?

[Not really.](#ch1_laziel_thornename)
[The assassin apparently.](#ch1_laziel_thornename)
[Just a weird guy.](#ch1_laziel_thornename)

# ch1_laziel_thornename

Laziel [neutral]: His name is Thorne.

Player: Thorn in my ass- 

Laziel [sad]: ...

Player: ...

Player: Nevermind, continue...

Laziel [neutral]: You may not believe me, but he is not the bad guy.

[How would you know?](#ch1_laziel_not_from_here)
[That is suspicious...](#ch1_laziel_not_from_here)

# ch1_laziel_not_from_here

Laziel [sad]: This might sound crazy...

Laziel [sad]: But I am not from this world-

[Hold on, me too!](#ch1_laziel_me_too)



<!--Doctor [happy]: Do you want to hear a joke?

[Yes!](#ch1_joke_yes) {+doctor}
[Not really.](#ch1_joke_no) {-doctor}
[I'd rather not.](#ch1_joke_no) {-doctor}

GOOD RELATIONSHIP-
# ch1_joke_yes

Doctor: Alright.

Doctor: Here is a joke.

Doctor: JOKE

Doctor: Hahaha.

Doctor [neutral]: Now. This is the end.

Doctor: Really.

Doctor: Really, really.

Doctor [angry]: *ugh*

Doctor: Goodbye.

{IF doctor >= 1} Doctor [happy]: I will see you soon!

{IF doctor <= -1} Doctor [angry]: Don't come back!

[Wait! Come back!](#ch1_comeback)

# ch1_joke_no
BAD RELATIONSHIP
Doctor [angry]: *ugh*

Doctor: Goodbye.

{IF doctor >= 1} Doctor [happy]: I will see you soon!

{IF doctor <= -1} Doctor [angry]: Don't come back!

[Wait! Come back!](#ch1_comeback)

# ch1_comeback

{IF doctor >= 1} Doctor [happy]: Yes? Can I help you with something?

{IF doctor <= -1} Doctor [angry]: Don't talk to me. Leave. -->
