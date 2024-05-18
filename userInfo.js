
function createUserProfiles(originalNames, modifiedNames) {
    const userProfiles = [];
    for (let i = 0; i < originalNames.length; i++) {
        userProfiles.push({
            id: i + 1,
            originalName: originalNames[i],
            modifiedName: modifiedNames[i]
        });
    }
    return userProfiles;
}


const originalNames = ["Matthew","Paa","Kwesi","Mensah"];
const modifiedNames = ["MATTHEW","paa","KWESI","mensah"];  // This is task two results

const profiles = createUserProfiles(originalNames, modifiedNames);
console.log(profiles);
