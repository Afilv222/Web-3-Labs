/* In this module, create three classes: Play, Act, and Scene. */

class Play {
    constructor(play) {
       
        this.title = play.title
        this.persona = play.persona
        this.short = play.short 
        this.act = [] 
        
        play.acts.forEach(act => this.act.push(new Act(act)))


    }

    

    getActName(actName){
        return this.act.map(s => {
            if(actName == s.name){
                    s.scenes.forEach(scenes => {
                    let sceneList = document.querySelector('#sceneList')    
                    let option = document.createElement('option')
                    option.textContent = scenes.name;
                    sceneList.appendChild(option); 
                })   
            } 
        })
    }


    setActFilters(play){
      
        this.act.forEach(a => {
            let actList = document.querySelector('#actList')
            let option = document.createElement('option')
            option.value = a.name;
            option.textContent = a.name;
            actList.appendChild(option);
        });
           
    }

}

class Act {
    constructor(act) {
        this.name = act.name;
        this.scene = [] 
        
        act.scenes.forEach(scene => this.scene.push(new Scene(scene)))    
    }

    setSceneFilters(currentScene){
        console.log(this.scene)
        currentScene.forEach(array => array.forEach(scenes => {
            let sceneList = document.querySelector('#sceneList')
            let option = document.createElement('option')
           // option.value = c.;
            option.textContent = scenes.name;
            sceneList.appendChild(option); 
        }))
    }
}



class Scene {

    constructor(scene) {
       this.scene = scene;         
    }


    getSpeeches(){
        return this.scene.speeches.map(s => s)
    }
}



export { Play,Act,Scene }; 



