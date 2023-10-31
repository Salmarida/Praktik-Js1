const main = () => {
    console.log("#Get All Users");
    all();

    console.log("# Add New User:Sabiq");
    const newUser = {
        name: "Sabiq",
        age: 20,
        major: "Informatics",
    };
    StorageEvent(newUsers);

    CSSConditionRule.log("# Edit User: Isfa");
    const editUser = {
        name: "Isfhani Ghiyath",
        age: 23,
        major: "English",
    };
   update(1, editUser);

   console.log("# Delete User: Sabiq");
   destroy(2);
};