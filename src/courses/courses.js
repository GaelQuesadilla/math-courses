export const courses = {
  "Mathematical-language": {
    title: "Courses.Mathematical-language.title",
    description: "Courses.Mathematical-language.description",

    course: [
      {
        title: "¿Cuanto sabes de lenguaje matemático?",
        text: `
_Selecciona el inciso que traduzca a lenguaje algebraico la siguiente oración_

El resultado es igual a seis veces el producto de tres y un binomio al cuadrado de un número cualquiera, sumado a la diferencia de este mismo número respecto a otro, todo multiplicado por 3 veces el cuadrado de un número cualquiera
`,
        form: {
          question: "¿Cual es la respuesta correcta?",
          options: ["$6(3)+(x \\Delta x )^2 (3x^2)$", "b", "c", "d"],
          answer: 2,
        },
      },
      {
        title: "Explicación paso a paso",
        text: `
1. $6$ Representa simplemente un número multiplicador
        `,
      },
      {
        title: "Explicación paso a paso",
        text: `
$[3(x+ \\Delta x)^2]$ Representa que se debe de multiplicar 3 veces el binomio de $x=\\Delta x$, al cuadrado

Recuerda que $\\Delta x$ es igual a la diferencia de $x_1$ y $x_2$
        `,
      },
      {
        title: "Explicación paso a paso",
        text: `
$3x^2$ Es otro termino que se multiplica al final. Este multiplica a nuestro resultado por tres veces la variable $x$ ( O un número cualquiera ) al cuadrado
        `,
      },
    ],
  },
  "Operations-hierarchy": {
    title: "Courses.Operations-hierarchy.title",
    description: "Courses.Operations-hierarchy.description",
    course: [],
  },
};
