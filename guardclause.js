//GUARD CLAUSE
function sayWelcome(nombre) {
  if (typeof nombre == "number") {
    return;
  }

  if (typeof nombre == "boolean") {
    return;
  }

  console.log(`Welcome ${nombre}`);
}

// sayWelcome("Claudia");
// sayWelcome(15);
// sayWelcome(true);
// =====================
