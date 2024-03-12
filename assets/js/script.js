let NombreInput = prompt("Ingresa tu nombre");
let CarreraInput = "Desarrollador Web"  // Carrera fija para este ejemplo



document.getElementById("nombreDiv").innerHTML = "<strong>Nombre:</strong> " + NombreInput + "<br><strong>Carrera:</strong> " + CarreraInput;

// Notas para el ramo HTML
let Ramo1Input = "HTML";
let Nota11Input = parseFloat(prompt("Ingrese Nota1 para " + Ramo1Input));
let Nota21Input = parseFloat(prompt("Ingrese Nota2 para " + Ramo1Input));
let Nota31Input = parseFloat(prompt("Ingrese Nota3 para " + Ramo1Input));

document.getElementById("Ramo1").textContent = Ramo1Input;
document.getElementById("Nota11").textContent = Nota11Input;
document.getElementById("Nota21").textContent = Nota21Input;
document.getElementById("Nota31").textContent = Nota31Input;

//promedio de html
let promedio1 = (Nota11Input + Nota21Input + Nota31Input) / 3;
document.getElementById("Promedio1").textContent = promedio1.toFixed(2);

// Notas para el ramo CSS
let Ramo2Input = "CSS";
let Nota12Input = parseFloat(prompt("Ingrese Nota1 para " + Ramo2Input));
let Nota22Input = parseFloat(prompt("Ingrese Nota2 para " + Ramo2Input));
let Nota32Input = parseFloat(prompt("Ingrese Nota3 para " + Ramo2Input));

document.getElementById("Ramo2").textContent = Ramo2Input;
document.getElementById("Nota12").textContent = Nota12Input;
document.getElementById("Nota22").textContent = Nota22Input;
document.getElementById("Nota32").textContent = Nota32Input;

//promedio css
let promedio2 = (Nota12Input + Nota22Input + Nota32Input) / 3;
document.getElementById("Promedio2").textContent = promedio2.toFixed(2);

// Notas para el ramo JavaScript
let Ramo3Input = "JavaScript";
let Nota13Input = parseFloat(prompt("Ingrese Nota1 para " + Ramo3Input));
let Nota23Input = parseFloat(prompt("Ingrese Nota2 para " + Ramo3Input));
let Nota33Input = parseFloat(prompt("Ingrese Nota3 para " + Ramo3Input));

document.getElementById("Ramo3").textContent = Ramo3Input;
document.getElementById("Nota13").textContent = Nota13Input;
document.getElementById("Nota23").textContent = Nota23Input;
document.getElementById("Nota33").textContent = Nota33Input;

//promedio javascript
let promedio3 = (Nota13Input + Nota23Input + Nota33Input) / 3;
document.getElementById("Promedio3").textContent = promedio3.toFixed(2);