class User{
    constructor(id, userName, name, bio, dateCreated, lastUpdate )
    {
        //Requerimiento 1
        this.id = id,
        this.userName = userName,
        this.name = name,
        this.bio = bio,
        this.dateCreated = dateCreated,
        this.lastUpdate = lastUpdate

        //Requerimiento 2
        // this.id = id,
        // this.userName = userName,
        // this.name = name,
        // this.bio = bio,
        // this.dateCreated = new Date(),
        // this.lastUpdate = new Date()
        
        
    }

    //Requerimiento 3
    // get getUserName (){
    //     return this.userName
    // }

    // get getBio (){
    //     return this.bio
    // }

    // get getDateCreated (){
    //     return this.dateCreated
    // }

    // get getLastUpdate (){
    //     return this.lastUpdate
    // }

    
    //Requerimiento 4
    // set setUserName(newUserName){
    //     this.userName = newUserName
    // }
    
    // set setBio(newBio){
    //     this.bio = newBio
    // }

       
}

module.exports = User