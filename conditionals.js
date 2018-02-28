const maybe = Math.random() < 0.5;
const maybe2 = Math.random() < 0.5;

// if return
// return
function one() {
  if (maybe) {
    return 1;
  }

  return null;
}

// if return
// else return
// implicit return
function two() {
  if (maybe) {
    return 2;
  } else {
    return null
  }
}

// if if return
// else return
// implicit return
function two() {
  if (maybe) {
    if (maybe2) {
      return 2;
    }
  } else {
    return null
  }
}

// if if return
// return
function two() {
  if (maybe) {
    if (maybe2) {
      return 2;
    }
  }

  return null
}

