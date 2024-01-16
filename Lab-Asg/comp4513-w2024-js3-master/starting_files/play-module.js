/* In this module, create three classes: Play, Act, and Scene. */

class Play {
    constructor(act) {
       this.act = act;
    }


}

class Act {
    constructor(scene) {
       this.scene = scene;   
    }
}



class Scene {
    constructor(speech) {
       this.speech = speech;  
    }
}



export { Play,Act,Scene }; 



