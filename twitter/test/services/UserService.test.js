const UserService = require("./../../app/services/UserService")
//Requerimientos del Sprint 2: Interacción con el modelo
describe("Test for UserService",()=>
{
    test ("1). Create a new user using the UserService",()=>{
        const user = UserService.create(1, "carlogilmar", "Carlo")
        expect(user.userName).toBe("carlogilmar")
        expect(user.name).toBe("Carlo")
        expect(user.id).toBe(1)
        expect(user.bio).not.toBeUndefined()

    })

})

//Requerimiento 2: Prueba de unidad
describe("Test for UserService getInfo",()=>
{
    test("2). Get all user data in a list",()=>{
    const user = UserService.create(1, "carlogilmar", "Carlo", "Sin bio")
    const userInfoList = UserService.getInfo(user)
    expect(userInfoList[0]).toBe(1)
    expect(userInfoList[1]).toBe("carlogilmar")
    expect(userInfoList[2]).toBe("Carlo")
    expect(userInfoList[3]).toBe("Sin bio")
    })

})

//Requerimiento 3
describe("Test for UserService Update userName",()=>
{
    test("3). Update userName",()=>
    {
        const user = UserService.create(1, "carlogilmar", "Carlo", "Sin bio")
        UserService.updateUserUsername(user, "carlog")
        expect(user.userName).toBe("carlog")
    })
    
})

//Requerimiento 4
describe("Test for UserService list of usernames",()=>
{
    test("4). Given a list of users give me the list of usernames",()=>
    {
        const user1 = UserService.create(1, "carlogilmar1", "Carlo")
        const user2 = UserService.create(1, "carlogilmar2", "Carlo")
        const user3 = UserService.create(1, "carlogilmar3", "Carlo")
        const usernames = UserService.getAllUsernames([user1, user2, user3])
        expect(usernames).toContain("carlogilmar1")
        expect(usernames).toContain("carlogilmar2")
        expect(usernames).toContain("carlogilmar3")
    })
        
})
    

