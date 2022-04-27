const User = require('./../../app/models/user')

//Requerimiento 1
// describe("Unit test for User class",()=>
// {
//     test('Create a User object', () => 
//     {
//       const user = new User (1, "carlogilmar", "Carlo", "Bio", "dateCreated", "lastUpdate")
//         expect (user.id).toBe(1)
//         expect (user.userName).toBe("carlogilmar")
//         expect (user.name).toBe("Carlo")
//         expect (user.bio).toBe("Bio")
//         expect (user.dateCreated).toBe("dateCreated")
//         expect (user.lastUpdate).toBe("lastUpdate")
//     });

// });

//Requerimiento 2
// describe("Unit test for User class",()=>{
//     test('Create a User object', () =>{
//         const user = new User (1, "carlogilmar", "Carlo", "Bio", "dateCreated", "lastUpdate")
        
//         expect (user.id).toBe(1)
//         expect (user.userName).toBe("carlogilmar")
//         expect (user.name).toBe("Carlo")
//         expect (user.bio).toBe("Bio")
//         expect (user.dateCreated).not.toBeUndefined()
//         expect (user.lastUpdate).not.toBeUndefined()
//     });
    
// })   



//Requerimiento 3
// describe("Unit test for User class",()=>
// {
//     test('Add getters', () => 
//     {
//       const user = new User (1, "carlogilmar", "Carlo", "Bio")
//         expect (user.getUserName).toBe("carlogilmar")
//         expect (user.getBio).toBe("Bio")
//         expect (user.getDateCreated).not.toBeUndefined()
//         expect (user.getLastUpdate).not.toBeUndefined()
//     })
      
// });


//Requerimiento 4
describe("Unit test for User class",()=>
{
    test('Add setters', () => 
    {
      const user = new User (1, "carlogilmar", "Carlo", "Bio")
        
      user.setUserName = "Gilmar"   
      expect (user.userName).toBe("Gilmar")
        
      user.setBio = "New bio"
      expect (user.bio).toBe("New bio")
    })

    
      
});

