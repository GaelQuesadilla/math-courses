export const courses = {
  // 1
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
          options: [
            "$6(3)+(x \\Delta x )^2 (3x^2)$",
            "$3x^2[6(3)+x+\\Delta x^2]$",
            "$6[3(x+\\Delta d)^2]3x^2$",
          ],
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

  //2
  "Operations-hierarchy": {
    title: "Courses.Operations-hierarchy.title",
    description: "Courses.Operations-hierarchy.description",
    course: [
      {
        title: "¿Qué sabes de la jerarquía de operaciones?",
        text: `
_Selecciona la respuesta correcta de la siguiente operación utilizando la jerarquía de operaciones:_
        `,

        form: {
          question: "$x= 8(4-2\\sqrt36)+7(3-2/2)^2$",

          options: ["$x=-36$", "$x=-6$", "$x=-124$", "$x=777$"],
          answer: 0,
        },
      },
      {
        title: "Explicación paso a paso",
        text: `
Primero resolvemos los símbolos de agrupación según la jerarquía de operaciones, que serian los paréntesis. $(4-2\\sqrt 36), (3-2/2) $
        `,
      },
      {
        title: "Explicación paso a paso",
        text: `

Dentro de los paréntesis seguimos con las raíces o exponente si no hay mas persistentes dentro de estos, si no hay ninguno de estos seguimos con la multiplicación o división, recordando que se realiza primero de izquierda a derecha. 
$$
x= 8(4-2\\sqrt36)+7(3-2/2)^2 
$$
$$
x=8(4-2(6))+7(3-1)^2
$$
$$
x=8(4-12)+7(3-1)^2
$$
        `,
      },
      {
        title: "Explicación paso a paso",
        text: `
Terminamos de resolver lo que hay dentro de los paréntesis con el ultimo paso de la jerarquía de operaciones que seria la suma y resta, resolviéndolo primero de izquierda a derecha.
$$
x=8(4-12)+7(3-1)^2
$$
$$
x=8(-8)+7(2)^2
$$
        `,
      },
      {
        title: "Explicación paso a paso",
        text: `
Continuamos con las raíces o exponentes una vez acabado con los paracentesis. En este caso solo con el exponente ya que no tenemos una raíz que resolver. 
$$
x=8(-8)+7(2)^2
$$
$$
x=8(-8)+7(4)
$$
        `,
      },
      {
        title: "Explicación paso a paso",
        text: `
Seguimos con la división o multiplicación según el caso.
$$
x=8(-8)+7(4)
$$
$$
x=-64+28
$$
        `,
      },
      {
        title: "Explicación paso a paso",
        text: `
Y finalizamos con la suma o resta.
$$
x=-64+28
$$
$$
x=-36
$$
        `,
      },
    ],
  },
  // 3
  "Solution-and-verification": {
    title: "Courses.Solution-and-verification.title",
    description: "Courses.Solution-and-verification.description",

    course: [
      {
        title: "Soluciona lo siguiente",
        text: `
_Da solución a la siguiente ecuación de primer grado y comprueba su resultado:_
`,
        form: {
          question:
            "El doble de un numero y su mitad suman 45 ¿Cual es el numero?",
          options: ["$x=4$", "$x=24$", "$x=18$"],
          answer: 2,
        },
      },
      {
        title: "Explicación paso a paso",
        text: `
1. Identificar la pregunta y ponerle un nombre.
En este ejemplo nos preguntan sobre un numero, al ser un numero tenemos que ponerle un nombre que en álgebra es una letra. 
$$
n=número
$$
        `,
      },
      {
        title: "Explicación paso a paso",
        text: `
2. Escribirlo en forma de ecuación.
“El doble de un numero” , la palabra “doble” hace referencia a la multiplicación, específicamente el multiplicar un valor por 2. Entonces, multiplicamos nuestro numero por 2.

$$
2n
$$

“Y su mitad” hace referencia a una división. Así que dividimos entre 2 nuestro numero. 
$$
n/2
$$
        `,
      },
      {
        title: "Explicación paso a paso",
        text: `
3. Resolver.
En este caso como tenemos una ecuación con solo una fracción, se recomienda hacer una multiplicación a la ecuación entera por el denominador para así eliminarlo y resolverlo mas fácil. Como aquí el denominador es 2 vamos a multiplicar toda la ecuación por 2, porque se puede y sigue siendo una ecuación equivalente. 
$$
(2) 2n + n/2 = 45
$$
$$
4n + n2/2 = 90
$$

        `,
      },
      {
        title: "Explicación paso a paso",
        text: `
$3x^2$ Es otro termino que se multiplica al final. Este multiplica a nuestro resultado por tres veces la variable $x$ ( O un número cualquiera ) al cuadrado
        `,
      },
      {
        title: "Explicación paso a paso",
        text: `
Simplificamos y quitamos el denominador. 

$$
4n + n = 90
$$
Después seguiría pasar las letras a un lado de la igualdad y los que no la tengan al otro, pero como en este caso ya lo tenemos así no sera necesario este paso. 
$$
4n + n = 90
$$

        `,
      },
      {
        title: "Explicación paso a paso",
        text: `
Realizamos las operaciones 
$$
5n = 90
$$
Como queremos quitar el 5 porque le estorba al valor que deseamos encontrar, dividimos toda la ecuación por ese mismo numero.
$$
5/ (5n = 90)
$$
$$
n = 18
$$
        `,
      },
      {
        title: "Explicación paso a paso",
        text: `
Comprobación:
Sustituimos la variable de nuestro numero por su valor en la ecuación inicial.
$$
n = numero
$$
$$
n = 18
$$
$$
2n + n/2 = 45
$$
$$
2(18) + 18/2 = 45
$$

Realizamos las operaciones recordando jerarquía de operaciones, primero multiplicación y división y luego sumas y restas. 
$$
2(18) + 18/2 = 45
$$
$$
36 + 9 = 45
$$
$$
45 = 45
$$
        `,
      },
      {
        title: "Explicación paso a paso",
        text: `
Por ultimo paso tenemos que dar la respuesta con palabras.

**Respuesta: El numero es 18.**
        `,
      },
    ],
  },
};
