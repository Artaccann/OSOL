function setupChapter1Scene(sceneName) {
  characters.length = 0;

  switch (sceneName) {
    case "chapter1":
      base_image = CH1_BACKGROUNDS.window;
      characters.push({ ...CH1_CHARACTERS.maid, position: "center" });
      
      playBackgroundEffect("../Effects/Light.mp4");
  
      break;

    case "ch1_why_am_i_here":
    case "ch1_explain_reality":
    case "ch1_know_nothing":
    case "ch1_play_dead":
    case "ch1_oh_i_know":
    case "ch1_where_am_i":
    case "ch1_who_are_you":
    case "ch1_bad_fingers":
    case "ch1_right_fingers":
    case "ch1_woke_up":
    case "ch1_woke_up_no":
    case "ch1_husband":
    case "ch1_assassination":
    case "ch1_chit_chat":
      base_image = CH1_BACKGROUNDS.window;
      characters.push({ ...CH1_CHARACTERS.maid, position: "center" });
      
      playBackgroundEffect("../Effects/Light.mp4");
    
      break;

    case "ch1_doctor":
    case "ch1_doctor_introduction":
    case "ch1_interruption":
    case "ch1_doctor_confusion":
    case "ch1_doctor_confusion2":
    case "ch1_doctor_confusion3":
    case "ch1_diagnosis":
    case "ch1_doctor_right":
    case "ch1_good":
    case "ch1_good2":
    case "ch1_good3":
    case "ch1_pre-diagnosis":
      base_image = CH1_BACKGROUNDS.window;
      characters.push(
        { ...CH1_CHARACTERS.maid, position: "right", currentEmotion: "scared"},
        { ...CH1_CHARACTERS.doctor, position: "left" }
      );
   
      playBackgroundEffect("../Effects/Light.mp4");
     
      break;

    case "ch1_whole_squad":
    case "ch1_advisor_beef":
    case "ch1_advisor_introduction":
    case "ch1_advisor_beef2":
    case "ch1_luck":
    case "cch1_advisor_beef3":
      base_image = CH1_BACKGROUNDS.window;
      characters.push(
        { ...CH1_CHARACTERS.maid, position: "right" },
        { ...CH1_CHARACTERS.doctor, position: "middle" },
        { ...CH1_CHARACTERS.advisor, position: "left" }
      );
     
      playBackgroundEffect("../Effects/Light.mp4");

      break;

    case "ch1_miriam_gone":
    case "ch1_reigning":
    case "ch1_reigning_yes":
    case "ch1_reigning_yes2":
    case "ch1_reigning_no":
    case "ch1_reigning_no2":
    case "ch1_reigning_no2":
      base_image = CH1_BACKGROUNDS.window;
      characters.push(
        { ...CH1_CHARACTERS.advisor, position: "right" },
        { ...CH1_CHARACTERS.doctor, position: "left" }
      );

      playBackgroundEffect("../Effects/Light.mp4");
    
      break;

      case "ch1_just_doc_agree":
      case "ch1_just_doc_disagree":
      case "ch1_just_doc_again":
      base_image = CH1_BACKGROUNDS.window;
      characters.push(
        { ...CH1_CHARACTERS.doctor, position: "center" }
      );

      playBackgroundEffect("../Effects/Light.mp4");
    
      break;
      case "ch1_noise":
      case "ch1_thorne_go":
      case "ch1_thorne_where":
      case "ch1_thorne_door":
      case "ch1_thorne_who":
      case "ch1_thorne_amnesia":
      case "ch1_thorne_bad_memory":
      case "ch1_thorne_whatthe":
      case "ch1_thorne_see_me":
      case "ch1_thorne_finish":
      case "ch1_thorne_harmed":
      case "ch1_thorne_killed":
      case "ch1_thorne_angry":
      case "ch1_thorne_reassuring":
      case "ch1_thorne_super_sad":
      case "ch1_thorne_sorry":
      case "ch1_thorne_scared":
      case "ch1_thorne_quiet":
      case "ch1_thorne_yell":
      case "ch1_thorne_why":
      case "ch1_thorne_bounty":
      case "ch1_thorne_bold":
      case "ch1_thorne_not_me":
      case "ch1_laziel":

      base_image = CH1_BACKGROUNDS.window;
      characters.push(
        { ...CH1_CHARACTERS.thorne, position: "center" }
      );

      playBackgroundEffect("../Effects/Light.mp4");
    
      break;

      case "ch1_laziel":
      case "ch1_laziel_yell":
      case "ch1_laziel_who":
      case "ch1_laziel_me_too":
      case "ch1_laziel_barge":
      case "ch1_laziel_thornename":
      case "ch1_laziel_not_from_here":


      base_image = CH1_BACKGROUNDS.window;
      characters.push(
        { ...CH1_CHARACTERS.laziel, position: "center" }
      );

      playBackgroundEffect("../Effects/Light.mp4");
    
      break;

    case "#ch1_alone_room":
      base_image = CH1_BACKGROUNDS.window;

      break;

    default:
      console.warn("Neznámá scéna:", sceneName);
  }

  resizeCanvas();
  drawCharacters();
}
