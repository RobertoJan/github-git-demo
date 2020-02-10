'use strict';
/* 
  ==== Santa's Helpers ===
  You're Santa.
  You want figure out a way to check if your elves are complying the Santa Safety Standards of the North Pole Toy Company LTD.

  Each Elf does a series of tasks that are identical.
  The tasks depend on each other.

  All the Elves have to succesfully finish making their toy according to standards to succeed!

  Your Tasks:
  - Write the functions for the 3 Elves correctly
  - The tasks go in the order: getMaterials -> buildToy -> qualityControl -> personalizeToy
  - Fix the errors in the Elf functions, and setup the correct sequence of tasks.
  - Refresh the page as you write code to test!
 */

/* === PREMADE FUNCTIONS - Don't have to touch these! === */
const getEagerElfSuccess = () => {
  return true;
};
const getLazyElfSuccess = () => {
  return false;
};
const getChaosElfSuccess = () => {
  let weightedSuccess = [0,0,0,1,1,1,1,1,1,1];
  return weightedSuccess[Math.floor(Math.random() * weightedSuccess.length)];
};

const getMaterials = (elfName, successChanceFn) => {
  return new Promise((resolve, reject) => {
    console.log(`${elfName}: getting materials...🚚`);
    setTimeout(() => {
      if (successChanceFn()) {
        console.log(`${elfName}: got materials! 🧰`);
        resolve();
      } else {
        console.log(`${elfName}: failed to get materials.`);
        reject(new Error('materials failed.'));
      }
    }, Math.floor(Math.random() * 5 + 1) * 1000);
  });
};

const buildToy = (elfName, successChanceFn) => {
  return new Promise((resolve, reject) => {
    console.log(`${elfName}: building the perfect toy...🔧`);
    setTimeout(() => {
      if (successChanceFn()) {
        console.log(`${elfName}: built toy! 🧸`);
        resolve();
      } else {
        console.log(`${elfName}: failed to build toy.`);
        reject(new Error('building failed.'));
      }
    }, Math.floor(Math.random() * 5 + 1) * 1000);
  });
}

const qualityControl = (elfName, successChanceFn) => {
  return new Promise((resolve, reject) => {
    console.log(`${elfName}: checking for sharp edges, flammibility and play-testing for fun factor...🔍`);
    setTimeout(() => {
      if (successChanceFn()) {
        console.log(`${elfName}: all checked! 💯`);
        resolve();
      } else {
        console.log(`${elfName}: toy does not pass fun standards.`);
        reject(new Error('quality control failed.'));
      }
    }, Math.floor(Math.random() * 5 + 1) * 1000);
  });
}

const personalizeToy = (elfName, successChanceFn) => {
  return new Promise((resolve, reject) => {
    console.log(`${elfName}: packaging and writing message...📝`);
    setTimeout(() => {
      if (successChanceFn()) {
        console.log(`${elfName}: all packaged & ready! 🎁`);
        resolve();
      } else {
        console.log(`${elfName}: failed to package gift properly.`);
        reject(new Error('personalizing failed.'));
      }
    }, Math.floor(Math.random() * 5 + 1) * 1000);
  });
}
/* === PREMADE FUNCTIONS - Don't have to touch these functions above ^ === */

/* === ELF FUNCTIONS: Go through all the TODO's below === */
function elfOne() {
  let name = 'Elf One';
  return new Promise((resolve, reject) => {
    // TODO: Fix and complete the Elf functionality below, in this Promise
    getMaterials(name, getEagerElfSuccess)
    .then (() => {
      buildToy(name, getEagerElfSuccess)
    })
    .then (() => {
      qualityControl(name, getEagerElfSuccess)
    })
    .then (() => {
      personalizeToy(name, getEagerElfSuccess)
    })
    .then(() =>{
      resolve();
    })
    .catch((err) => {
      console.error(`${name}: stopped making gift.`);
      reject();
    });
  });
}

function elfTwo() {
  let name = 'Elf Two';
  return new Promise((resolve, reject) => {
    // TODO: Fix and complete the Elf functionality below, in this Promise
    getMaterials(name, getLazyElfSuccess)
    .catch((err) => {
      console.error(`${name}: stopped making gift.`);
      reject();
    });
  });
}

function elfThree() {
  let name = 'Elf Three';
  return new Promise((resolve, reject) => {
    // TODO: Fix and complete the Elf functionality below, in this Promise
    getMaterials(name, getLazyElfSuccess)
    .catch(null, (err) => {
      console.error(`${name}: stopped making gift.`);
      reject();
    });
  });
}

/* === SANTA's CONTROL PANEL === */
Promise.all([elfOne(), elfTwo(), elfThree()])
.then(() => {
  console.log('🎄🎄🎄 Ready for Christmas!!! 🎄🎄🎄');
})
.catch(() => {
  console.log('==== Not ready for Christmas yet. 😞 ====');
});
