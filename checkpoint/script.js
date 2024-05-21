// const array1 = [1, 2, 3, 4, 5];

// const arrayOdd = array1.filter((values) => values%2 == 1)

// console.log(arrayOdd);


const team = {
    members: "",
    membersNumber: "", 
}

class Team {
    constructor(members, membersNumber){
        this._members = members;
        this._membersNumber = membersNumber;
    }

    get members(){
        return this._members
    }
    get membersNumber(){
        return this._membersNumber
    }

    set members(newMembers){
        this._members = newMembers
    }
    set membersNumber(newMembersNumber){
        this._membersNumber = newMembersNumber;
    }
}



const team1 = new Team(["juan", "raul", "victor"], 3)

const membersDiv = document.getElementById("members")

team1.members.forEach((member) => {
    const memberP = document.createElement("p")
    memberP.textContent = member;
    membersDiv.appendChild(memberP);
});

const obj = {
    appendChild: (parametro) => {
        console.log(parametro);
    }
}

obj.appendChild("hola")