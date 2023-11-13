const fruta = "Maçã";

switch (fruta) {
  case "Banana":
    console.log("Banana é a fruta");
    break;
  case "Maçã":
    console.log("A fruta é Maçã");
    break;
}

// Estruturas de repetição

// contador, condição de limite, incremento
for(let i = 0; i < 5; i++) {
    console.log(`O valor de i é: ${i}`);
};

let w = 0;

while(w < 5) {
    console.log(`O valor de W é: ${w}`);
    w++;
};

let j = 0;

do {
    console.log(`O valor de J é: ${j}`)
    j++
} while (j < 5)