
const CAT_API = 'https://cat-fact.herokuapp.com';
const getEducationTeam = () => {
    return new Promise((resolve, reject) => {
        //returning an array of the education team
    try {
        const eduArr = [
            { name: 'Roy'},
            { name: 'Amy'},
            { name: 'Josh'},
            { name: 'Rakesh'},
            { name: 'Daniil'}
        ];
        resolve(eduArr);
    }
    catch(err)
    {
    reject(err);
    }
    }); 
};

const generateEl = data => {
    const memberEl = document.createElement('section');
    const heading = document.createElement('h2');
    const catFact = document.createElement('p');

    heading.innerText = data.name;
    catFact.innerText = data.catFact;

    memberEl.appendChild(heading);
    memberEl.appendChild(catFact);

    return memberEl;
};

const generateDOM = eduArr => {
    const eduMemberElements = eduArr.map(eduMember => generateEl(eduMember));
    eduMemberElements.forEach(eduMember => rootEl.appendChild(eduMember));
};

const rootEl = document.createElement('main');
document.querySelector('body').prepend(rootEl);

let eduTeam = [];

getEducationTeam()
    .then(
        eduArr => {
            // console.log('EDU', res)
            // each educantion memeber wants to get a cat facts
            return Promise.all(
            eduArr.map(eduMember => axios.get(`${CAT_API}/facts/random?amount=1`))
            )
        },
        err => console.log('this did not go well', err)
    )
    .then(
        catFacts => {
            catFacts.map((catFact, i) => Object.assign({}, eduTeam[i], {catFact: catFact.data.text}));
        }
    )
    .then(
        // generateDom()
        newEduTeam => generateDOM(newEduTeam)
    )
    .catch(err => console.log('major error', err));