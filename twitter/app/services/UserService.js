const User = require("./../models/user")
//const user = [1,"carlogilman", "Carlo","Sin bio"]

class UserService{
    
    static create(id, userName, name){
        return new User(id, userName, name, "Sin bio")
    }
    
    static getInfo(User){ // es una función que ejecutará cualquier objeto instanciado de esta clase
        return [User.id, User.userName, User.name, User ="Sin bio"]
    }
    
    static updateUserUsername(User, newUserName){
        return User.userName = newUserName
    }

    static getAllUsernames([user1, user2, user3]){
        return [user1.userName, user2.userName, user3.userName]
    }
}     


    
    


   
               

    
    
    

module.exports = UserService