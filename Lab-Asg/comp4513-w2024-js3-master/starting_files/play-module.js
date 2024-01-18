/* In this module, create three classes: Play, Act, and Scene. */

class Play {
    constructor(play) {
       
        this.title = play.title
        this.persona = play.persona
        this.short = play.short 
        this.act = [] 
        
        play.acts.forEach(act => this.act.push(new Act(act)))


    }

    getFirstAct(){
        return this.act[0]
      }
    

      getFirstActName(){
        return this.act[0].name
      }
    

      getPlayFirstActSceneName(){
        return this.act[0].scene[0].name
      }

      getPlayFirstActSceneTitle(){
        return this.act[0].scene[0].title
      }
    
      getPlayFirstActSceneStage(){
        return this.act[0].scene[0].stageDirection
      }

      getPlayFirstActSceneSpeech(){
        return this.act[0].scene[0].speech
      }
    

}

class Act {
    constructor(act) {
        this.name = act.name;
        this.scene = [] 

        act.scenes.forEach(scene => this.scene.push(new Scene(scene)))    
    }



}



class Scene {

    constructor(scene) {
       this.name = scene.name;
       this.speech = scene.speeches;
       this.stageDirection = scene.stageDirection
       this.title = scene.title

    }


    getSpeechName(){
        return this.name
    }
}



export { Play,Act,Scene }; 



