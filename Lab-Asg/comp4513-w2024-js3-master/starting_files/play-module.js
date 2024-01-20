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
    

      getActName(curName){
        return this.act.find(a => a.name == curName).name
        //return this.act[0].name
      }
    

      getPlayActSceneName(actName,sceneName){
       
        const act = this.act.find(a => a.name == actName)
       return act.scene.find(s => s.name == sceneName).name
      }

      getPlayActSceneTitle(actName,sceneName){
        const act = this.act.find(a => a.name == actName)
        return act.scene.find(s => s.name == sceneName).title
      }
    
      getPlayActSceneStage(actName,sceneName){
        const act = this.act.find(a => a.name == actName)
        return  act.scene.find(s => s.name == sceneName).stageDirection
      }

      getPlayActSceneSpeech(actName,sceneName){
        const act = this.act.find(a => a.name == actName)
        return  act.scene.find(s => s.name == sceneName).speech
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



