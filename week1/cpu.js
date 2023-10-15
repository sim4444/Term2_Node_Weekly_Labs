const input = ['simu', 'hani', 'mumy', 'dady', 'manu', 'simu', 'innu', 'nivi', 'pammi']

const scanMembers = (members) => {
    const rankNames = {};
    members.forEach((member, index) => {
        if (rankNames[member]){
            rankNames[member].push(index)
        }else{
            rankNames[member] = [index]
        }
        
    });
    
    return rankNames;

}
const output = scanMembers(input)
console.log(output)