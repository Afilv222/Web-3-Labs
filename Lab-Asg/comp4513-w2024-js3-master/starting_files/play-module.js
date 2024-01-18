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
    

      getFirstActName(curName){
        return this.act.find(a => a.name == curName).name
        //return this.act[0].name
      }
    

      getPlayFirstActSceneName(actName,sceneName){
       
        let ca = this.act.find(a => a.name == actName)
       return ca.scene.find(s => s.name == sceneName).name
      }

      getPlayFirstActSceneTitle(actName,sceneName){
        let b = this.act.find(a => a.name == actName)
        return b.scene.find(s => s.name == sceneName).title
      }
    
      getPlayFirstActSceneStage(actName,sceneName){
        let c = this.act.find(a => a.name == actName)
        return c.scene.find(s => s.name == sceneName).stageDirection
      }

      getPlayFirstActSceneSpeech(actName,sceneName){
        let d = this.act.find(a => a.name == actName)
        return d.scene.find(s => s.name == sceneName).speech
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



