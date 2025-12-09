export const unit1 = {
  "curvas-espacio-tangentes": {
    title: "Courses.curvas-espacio-tangentes.title",
    description: "Courses.curvas-espacio-tangentes.description",
    course: [
      {
        title: "Introducción a las curvas en el espacio",
        text: `
Las **curvas en el espacio tridimensional** son trayectorias descritas por una función vectorial **r(t)** que asigna a cada valor de un parámetro _t_ (usualmente tiempo) un punto en el espacio ℝ³.

**Ecuación paramétrica general:**
$$
\\mathbf{r}(t) = \\langle x(t), y(t), z(t) \\rangle
$$

Donde $x(t), y(t), z(t)$ son funciones componentes que describen las coordenadas del punto en función del parámetro.

_¿Cuál es la principal diferencia entre una curva en el plano y una en el espacio?_
        `,
        form: {
          question:
            "Selecciona la afirmación correcta sobre curvas espaciales:",
          options: [
            "Siempre pueden representarse con una función explícita z = f(x,y)",
            "Requieren al menos dos parámetros independientes",
            "Se definen mediante tres funciones de un parámetro real",
            "Son siempre intersecciones de superficies cuadráticas",
          ],
          answer: 2,
        },
        videoUrl: "https://ejemplo.com/videos/curvas-espacio-intro",
      },
      {
        title: "Derivada de funciones vectoriales",
        text: `
La **derivada** de una función vectorial se define como:

$$
\\mathbf{r}'(t) = \\lim_{h \\to 0} \\frac{\\mathbf{r}(t+h) - \\mathbf{r}(t)}{h}
$$

En componentes:
$$
\\mathbf{r}'(t) = \\langle x'(t), y'(t), z'(t) \\rangle
$$

**Interpretación geométrica:** La derivada $\\mathbf{r}'(t)$ es un vector tangente a la curva en el punto $\\mathbf{r}(t)$, siempre que $\\mathbf{r}'(t) \\neq \\mathbf{0}$.

**Ejemplo:** Para $\\mathbf{r}(t) = \\langle \\cos t, \\sin t, t \\rangle$ (hélice circular):
$$
\\mathbf{r}'(t) = \\langle -\\sin t, \\cos t, 1 \\rangle
$$
        `,
        videoUrl: "https://ejemplo.com/videos/derivada-vectorial",
      },
      {
        title: "Vector tangente unitario",
        text: `
El **vector tangente unitario** $\\mathbf{T}(t)$ se obtiene normalizando el vector derivada:

$$
\\mathbf{T}(t) = \\frac{\\mathbf{r}'(t)}{\\| \\mathbf{r}'(t) \\|}
$$

Donde la magnitud (rapidez) es:
$$
\\| \\mathbf{r}'(t) \\| = \\sqrt{[x'(t)]^2 + [y'(t)]^2 + [z'(t)]^2}
$$

**Ejemplo:** Para la hélice $\\mathbf{r}(t) = \\langle \\cos t, \\sin t, t \\rangle$:
$$
\\| \\mathbf{r}'(t) \\| = \\sqrt{(-\\sin t)^2 + (\\cos t)^2 + 1^2} = \\sqrt{2}
$$

Por tanto:
$$
\\mathbf{T}(t) = \\left\\langle \\frac{-\\sin t}{\\sqrt{2}}, \\frac{\\cos t}{\\sqrt{2}}, \\frac{1}{\\sqrt{2}} \\right\\rangle
$$

**Nota:** Cuando $\\| \\mathbf{r}'(t) \\| = 1$, la curva está parametrizada por longitud de arco.
        `,
      },
      {
        title: "Recta tangente a una curva",
        text: `
La **ecuación paramétrica de la recta tangente** en $t = t_0$ es:

$$
\\mathbf{L}(s) = \\mathbf{r}(t_0) + s \\cdot \\mathbf{r}'(t_0), \\quad s \\in \\mathbb{R}
$$

O en forma simétrica, si $\\mathbf{r}'(t_0) = \\langle a, b, c \\rangle$ y $\\mathbf{r}(t_0) = (x_0, y_0, z_0)$:

$$
\\frac{x - x_0}{a} = \\frac{y - y_0}{b} = \\frac{z - z_0}{c}
$$

**Problema de aplicación:** Hallar la recta tangente a la curva $\\mathbf{r}(t) = \\langle t^2, \\ln t, \\sqrt{t} \\rangle$ en $t = 1$.

Solución:
1. Punto: $\\mathbf{r}(1) = \\langle 1, 0, 1 \\rangle$
2. Derivada: $\\mathbf{r}'(t) = \\langle 2t, 1/t, 1/(2\\sqrt{t}) \\rangle$
3. Vector en t=1: $\\mathbf{r}'(1) = \\langle 2, 1, 1/2 \\rangle$
4. Recta: $\\mathbf{L}(s) = \\langle 1 + 2s, s, 1 + s/2 \\rangle$
        `,
        form: {
          question:
            "¿Cuál es el vector tangente a $\\mathbf{r}(t) = \\langle e^t, t^2, \\cos t \\rangle$ en t=0?",
          options: [
            "$\\langle 0, 0, 0 \\rangle$",
            "$\\langle 1, 0, 0 \\rangle$",
            "$\\langle 1, 0, -1 \\rangle$",
            "$\\langle 1, 2, 0 \\rangle$",
          ],
          answer: 2,
        },
      },
      {
        title: "Continuidad y diferenciabilidad",
        text: `
**Teorema:** Una función vectorial $\\mathbf{r}(t)$ es diferenciable si y solo si sus funciones componentes son diferenciables.

**Reglas de derivación:**
1. **Suma:** $(\\mathbf{u} + \\mathbf{v})' = \\mathbf{u}' + \\mathbf{v}'$
2. **Producto por escalar:** $(c\\mathbf{u})' = c'\\mathbf{u} + c\\mathbf{u}'$
3. **Producto punto:** $(\\mathbf{u} \\cdot \\mathbf{v})' = \\mathbf{u}' \\cdot \\mathbf{v} + \\mathbf{u} \\cdot \\mathbf{v}'$
4. **Producto cruz:** $(\\mathbf{u} \\times \\mathbf{v})' = \\mathbf{u}' \\times \\mathbf{v} + \\mathbf{u} \\times \\mathbf{v}'$
5. **Regla de la cadena:** $\\frac{d}{dt} \\mathbf{u}(f(t)) = \\mathbf{u}'(f(t)) \\cdot f'(t)$

**Ejemplo de aplicación:** Si $\\mathbf{u}(t) = \\langle t, t^2 \\rangle$ y $\\mathbf{v}(t) = \\langle \\sin t, \\cos t \\rangle$, hallar $(\\mathbf{u} \\cdot \\mathbf{v})'$ en $t=0$.
        `,
        videoUrl: "https://ejemplo.com/videos/derivacion-vectorial",
      },
      {
        title: "Aplicaciones físicas e ingenieriles",
        text: `
**Interpretaciones físicas:**
- **Posición:** $\\mathbf{r}(t)$
- **Velocidad:** $\\mathbf{v}(t) = \\mathbf{r}'(t)$
- **Rapidez:** $v(t) = \\| \\mathbf{v}(t) \\|$
- **Aceleración:** $\\mathbf{a}(t) = \\mathbf{v}'(t) = \\mathbf{r}''(t)$

**Ejemplo de trayectoria de un proyectil (\\sin resistencia):**
$$
\\mathbf{r}(t) = \\langle v_0 \\cos\\theta \\cdot t, v_0 \\sin\\theta \\cdot t - \\frac{1}{2}gt^2 \\rangle
$$

**En ingeniería:** Estas herramientas se usan en diseño de:
- Trayectorias de robots
- Rutas de vehículos autónomos
- Análisis cinemático de mecanismos
- Diseño de pistas y carreteras

**Ejercicio de síntesis:** Un dron sigue la trayectoria $\\mathbf{r}(t) = \\langle 2\\cos t, 2\\sin t, 0.5t \\rangle$. Determinar su velocidad y aceleración en $t=\\pi/2$. ¿Cuál es su rapidez?
        `,
        form: {
          question:
            "Para un movimiento circular uniforme $\\mathbf{r}(t) = \\langle R\\cos\\omega t, R\\sin\\omega t \\rangle$, ¿cuál es la relación entre velocidad y aceleración?",
          options: [
            "Son paralelas",
            "Son perpendiculares",
            "Forman 45°",
            "Depende del tiempo",
          ],
          answer: 1,
        },
      },
    ],
  },
  "integrales-funciones-vectoriales": {
    title: "Courses.integrales-funciones-vectoriales.title",
    description: "Courses.integrales-funciones-vectoriales.description",
    course: [
      {
        title: "Integrales indefinidas de funciones vectoriales",
        text: `
La **integral indefinida** de una función vectorial $\\mathbf{r}(t) = \\langle f(t), g(t), h(t) \\rangle$ se define componente a componente:

$$
\\int \\mathbf{r}(t) \\, dt = \\left\\langle \\int f(t) \\, dt, \\int g(t) \\, dt, \\int h(t) \\, dt \\right\\rangle + \\mathbf{C}
$$

Donde $\\mathbf{C} = \\langle C_1, C_2, C_3 \\rangle$ es el **vector constante de integración**.

**Ejemplo:** Calcular $\\int \\mathbf{r}(t) \\, dt$ para $\\mathbf{r}(t) = \\langle 3t^2, \\cos t, e^t \\rangle$

**Solución:**
$$
\\int \\mathbf{r}(t) \\, dt = \\left\\langle \\int 3t^2 \\, dt, \\int \\cos t \\, dt, \\int e^t \\, dt \\right\\rangle + \\mathbf{C}
$$
$$
= \\left\\langle t^3, \\sin t, e^t \\right\\rangle + \\langle C_1, C_2, C_3 \\rangle
$$
        `,
        form: {
          question:
            "¿Cuál es la integral de $\\mathbf{r}(t) = \\langle \\frac{1}{t}, 2t, \\sec^2 t \\rangle$?",
          options: [
            "$\\langle \\ln|t|, t^2, \\tan t \\rangle + \\mathbf{C}$",
            "$\\langle \\ln|t|, t^2, \\cot t \\rangle + \\mathbf{C}$",
            "$\\langle t\\ln t, t^2, \\tan t \\rangle + \\mathbf{C}$",
            "$\\langle \\ln|t|, 2t^2, \\tan t \\rangle + \\mathbf{C}$",
          ],
          answer: 0,
        },
        videoUrl: "https://ejemplo.com/videos/integral-vectorial-indefinida",
      },
      {
        title: "Integrales definidas de funciones vectoriales",
        text: `
La **integral definida** de $t = a$ a $t = b$ se calcula como:

$$
\\int_a^b \\mathbf{r}(t) \\, dt = \\left\\langle \\int_a^b f(t) \\, dt, \\int_a^b g(t) \\, dt, \\int_a^b h(t) \\, dt \\right\\rangle
$$

**Interpretación física:** Si $\\mathbf{r}(t)$ representa la velocidad de una partícula, entonces $\\int_a^b \\mathbf{r}(t) \\, dt$ representa el **desplazamiento neto** durante el intervalo $[a, b]$.

**Teorema Fundamental del Cálculo para funciones vectoriales:**
$$
\\int_a^b \\mathbf{r}'(t) \\, dt = \\mathbf{r}(b) - \\mathbf{r}(a)
$$

**Ejemplo:** Calcular $\\int_0^{\\pi} \\langle \\sin t, 2t, e^t \\rangle \\, dt$

**Solución:**
$$
\\int_0^{\\pi} \\langle \\sin t, 2t, e^t \\rangle \\, dt = \\left\\langle \\int_0^{\\pi} \\sin t \\, dt, \\int_0^{\\pi} 2t \\, dt, \\int_0^{\\pi} e^t \\, dt \\right\\rangle
$$
$$
= \\left\\langle [-\\cos t]_0^{\\pi}, [t^2]_0^{\\pi}, [e^t]_0^{\\pi} \\right\\rangle
$$
$$
= \\langle (-\\cos\\pi + \\cos 0), (\\pi^2 - 0), (e^{\\pi} - e^0) \\rangle
$$
$$
= \\langle (1+1), \\pi^2, (e^{\\pi} - 1) \\rangle = \\langle 2, \\pi^2, e^{\\pi} - 1 \\rangle
$$
        `,
        videoUrl: "https://ejemplo.com/videos/integral-vectorial-definida",
      },
      {
        title: "Movimiento de proyectiles: Modelo físico",
        text: `
Consideremos un **proyectil** lanzado desde el origen con velocidad inicial $\\mathbf{v}_0$ y ángulo $\\theta$ sobre la horizontal, en un campo gravitacional uniforme $\\mathbf{g} = \\langle 0, -g, 0 \\rangle$ (ignorando resistencia del aire).

**Condiciones iniciales:**
- Posición inicial: $\\mathbf{r}(0) = \\mathbf{0}$
- Velocidad inicial: $\\mathbf{v}(0) = \\mathbf{v}_0 = \\langle v_0 \\cos\\theta, v_0 \\sin\\theta, 0 \\rangle$
- Aceleración constante: $\\mathbf{a}(t) = \\langle 0, -g, 0 \\rangle$

**Derivación del movimiento:**
1. **Integrar aceleración** para obtener velocidad:
$$
\\mathbf{v}(t) = \\int \\mathbf{a}(t) \\, dt = \\int \\langle 0, -g, 0 \\rangle \\, dt = \\langle 0, -gt, 0 \\rangle + \\mathbf{C}
$$
Con $\\mathbf{v}(0) = \\mathbf{v}_0$, obtenemos $\\mathbf{C} = \\mathbf{v}_0$, entonces:
$$
\\mathbf{v}(t) = \\langle v_0 \\cos\\theta, v_0 \\sin\\theta - gt, 0 \\rangle
$$
        `,
      },
      {
        title: "Trayectoria del proyectil",
        text: `
2. **Integrar velocidad** para obtener posición:
$$
\\mathbf{r}(t) = \\int \\mathbf{v}(t) \\, dt = \\int \\langle v_0 \\cos\\theta, v_0 \\sin\\theta - gt, 0 \\rangle \\, dt
$$
$$
\\mathbf{r}(t) = \\langle v_0 \\cos\\theta \\cdot t, v_0 \\sin\\theta \\cdot t - \\frac{1}{2}gt^2, 0 \\rangle + \\mathbf{C}
$$
Con $\\mathbf{r}(0) = \\mathbf{0}$, obtenemos $\\mathbf{C} = \\mathbf{0}$, entonces:

**Ecuaciones paramétricas de la trayectoria:**
$$
\\begin{cases}
x(t) = v_0 \\cos\\theta \\cdot t \\
y(t) = v_0 \\sin\\theta \\cdot t - \\frac{1}{2}gt^2 \\
z(t) = 0
\\end{cases}
$$

**Ecuación cartesiana** (eliminando t):
De $x = v_0 \\cos\\theta \\cdot t$, obtenemos $t = \\frac{x}{v_0 \\cos\\theta}$

Sustituyendo en $y$:
$$
y = v_0 \\sin\\theta \\cdot \\frac{x}{v_0 \\cos\\theta} - \\frac{1}{2}g\\left(\\frac{x}{v_0 \\cos\\theta}\\right)^2
$$
$$
y = x \\tan\\theta - \\frac{g}{2v_0^2 \\cos^2\\theta} x^2
$$

**Esta es la ecuación de una parábola.**
        `,
        form: {
          question:
            "Si un proyectil se lanza con $v_0 = 50$ m/s y $\\theta = 30^\\circ$, ¿cuál es su alcance máximo (g=9.8 m/s²)?",
          options: ["R ≈ 220.6 m", "R ≈ 127.6 m", "R ≈ 78.4 m", "R ≈ 196.0 m"],
          answer: 0,
        },
        videoUrl: "https://ejemplo.com/videos/trayectoria-proyectil",
      },
      {
        title: "Características del movimiento parabólico",
        text: `
**Tiempo de vuelo total:**
Cuando el proyectil regresa al suelo, $y=0$:
$$
0 = v_0 \\sin\\theta \\cdot t - \\frac{1}{2}gt^2
$$
$$
t(v_0 \\sin\\theta - \\frac{1}{2}gt) = 0
$$
Solución distinta de cero: $t = \\frac{2v_0 \\sin\\theta}{g}$

**Altura máxima:**
Ocurre cuando $v_y = 0$:
$$
v_0 \\sin\\theta - gt = 0 \\Rightarrow t = \\frac{v_0 \\sin\\theta}{g}
$$
Sustituyendo en $y(t)$:
$$
y_{max} = v_0 \\sin\\theta \\cdot \\frac{v_0 \\sin\\theta}{g} - \\frac{1}{2}g\\left(\\frac{v_0 \\sin\\theta}{g}\\right)^2
$$
$$
y_{max} = \\frac{v_0^2 \\sin^2\\theta}{g} - \\frac{v_0^2 \\sin^2\\theta}{2g} = \\frac{v_0^2 \\sin^2\\theta}{2g}
$$

**Alcance máximo:**
Sustituyendo el tiempo de vuelo en $x(t)$:
$$
R = v_0 \\cos\\theta \\cdot \\frac{2v_0 \\sin\\theta}{g} = \\frac{2v_0^2 \\sin\\theta \\cos\\theta}{g} = \\frac{v_0^2 \\sin 2\\theta}{g}
$$
        `,
      },
      {
        title: "Casos especiales y aplicaciones ingenieriles",
        text: `
**Ángulo para alcance máximo:**
$$
\\frac{dR}{d\\theta} = \\frac{2v_0^2 \\cos 2\\theta}{g} = 0 \\Rightarrow \\cos 2\\theta = 0 \\Rightarrow 2\\theta = 90^\\circ \\Rightarrow \\theta = 45^\\circ
$$

**Movimiento con altura inicial $y_0$:**
Si $\\mathbf{r}(0) = \\langle 0, y_0, 0 \\rangle$, entonces:
$$
y(t) = y_0 + v_0 \\sin\\theta \\cdot t - \\frac{1}{2}gt^2
$$

**Aplicaciones en ingeniería:**
1. **Ingeniería civil:** Diseño de rampas, cañerías, sistemas de drenaje
2. **Ingeniería aeroespacial:** Trayectorias de cohetes y misiles
3. **Ingeniería mecánica:** Diseño de mecanismos de lanzamiento
4. **Ingeniería deportiva:** Optimización de lanzamientos en atletismo

**Ejemplo de aplicación:** Un cañón dispara un proyectil desde un acantilado de 100 m de altura con $v_0 = 150$ m/s y $\\theta = 20^\\circ$. Calcular:
a) Tiempo hasta impacto
b) Alcance horizontal
c) Velocidad al momento del impacto
        `,
        form: {
          question:
            "Para un proyectil lanzado desde una altura $y_0$, ¿cómo cambia el tiempo de vuelo respecto al caso $y_0=0$?",
          options: [
            "Aumenta para ambos ángulos",
            "Disminuye para ambos ángulos",
            "Aumenta solo si $\\theta > 45^\\circ$",
            "Depende del signo de $y_0$",
          ],
          answer: 3,
        },
        videoUrl: "https://ejemplo.com/videos/aplicaciones-proyectiles",
      },
      {
        title: "Extensión a tres dimensiones (viento lateral)",
        text: `
Si consideramos una **componente de viento lateral** constante en dirección z, la aceleración es:
$$
\\mathbf{a}(t) = \\langle 0, -g, a_z \\rangle
$$

**Integrando con condiciones iniciales:**
$$
\\mathbf{v}(t) = \\langle v_0 \\cos\\theta, v_0 \\sin\\theta - gt, a_z t \\rangle
$$
$$
\\mathbf{r}(t) = \\langle v_0 \\cos\\theta \\cdot t, v_0 \\sin\\theta \\cdot t - \\frac{1}{2}gt^2, \\frac{1}{2}a_z t^2 \\rangle
$$

**Ejemplo numérico:** Un proyectil se lanza con $v_0 = 100$ m/s, $\\theta = 30^\\circ$, y viento lateral produce $a_z = 2$ m/s². Hallar la posición después de 5 segundos.

**Solución:**
$$
\\mathbf{r}(5) = \\langle 100\\cdot\\cos30^\\circ\\cdot5, 100\\cdot\\sin30^\\circ\\cdot5 - 4.9\\cdot25, \\frac{1}{2}\\cdot2\\cdot25 \\rangle
$$
$$
= \\langle 500\\cdot0.866, 250 - 122.5, 25 \\rangle
$$
$$
= \\langle 433.0, 127.5, 25.0 \\rangle \\text{ metros}
$$

**Importante:** Este modelo ignora resistencia del aire, que en aplicaciones reales requiere ecuaciones diferenciales más complejas.
        `,
        videoUrl: "https://ejemplo.com/videos/proyectiles-3d",
      },
    ],
  },
  "longitud-arco-espacio": {
    title: "Courses.longitud-arco-espacio.title",
    description: "Courses.longitud-arco-espacio.description",
    course: [
      {
        title: "Concepto de longitud de arco en el espacio",
        text: `
La **longitud de arco** de una curva espacial es la generalización natural del concepto de longitud de curva en el plano. Para una curva descrita por $\\mathbf{r}(t) = \\langle x(t), y(t), z(t) \\rangle$ con $t \\in [a, b]$, imaginamos dividirla en segmentos infinitesimales y sumar sus longitudes.

**Analogía física:** Si una partícula recorre la curva, la longitud de arco es la distancia total recorrida, independientemente de cómo varíe la velocidad.

_¿Por qué la longitud de arco es una propiedad intrínseca de la curva?_
        `,
        form: {
          question: "¿Qué propiedad geométrica representa la longitud de arco?",
          options: [
            "La curvatura de la trayectoria",
            "La distancia total a lo largo de la curva entre dos puntos",
            "La proyección de la curva sobre el plano xy",
            "El área bajo la curva paramétrica",
          ],
          answer: 1,
        },
        videoUrl: "https://ejemplo.com/videos/concepto-longitud-arco",
      },
      {
        title: "Derivación de la fórmula de longitud de arco",
        text: `
Consideremos una partición del intervalo $[a, b]$: $a = t_0 < t_1 < \\cdots < t_n = b$.

La longitud de la **poligonal inscrita** es:
$$
L_n = \\sum_{i=1}^n \\| \\mathbf{r}(t_i) - \\mathbf{r}(t_{i-1}) \\|
$$

Por el Teorema del Valor Medio para funciones vectoriales:
$$
\\mathbf{r}(t_i) - \\mathbf{r}(t_{i-1}) \\approx \\mathbf{r}'(\\xi_i) \\Delta t_i
$$
donde $\\xi_i \\in [t_{i-1}, t_i]$ y $\\Delta t_i = t_i - t_{i-1}$.

Entonces:
$$
L_n \\approx \\sum_{i=1}^n \\| \\mathbf{r}'(\\xi_i) \\| \\Delta t_i
$$

Tomando el límite cuando $n \\to \\infty$ y $\\max \\Delta t_i \\to 0$, obtenemos la **integral definida**:

**Fórmula fundamental de longitud de arco:**
$$
L = \\int_a^b \\| \\mathbf{r}'(t) \\| \\, dt = \\int_a^b \\sqrt{[x'(t)]^2 + [y'(t)]^2 + [z'(t)]^2} \\, dt
$$

La existencia de esta integral requiere que $\\mathbf{r}'(t)$ sea continua en $[a, b]$ (curva suave).
        `,
        videoUrl: "https://ejemplo.com/videos/derivacion-longitud-arco",
      },
      {
        title: "Cálculo de longitud de arco: ejemplos fundamentales",
        text: `
**Ejemplo 1:** Hélice circular $\\mathbf{r}(t) = \\langle a\\cos t, a\\sin t, bt \\rangle$ para $t \\in [0, 2\\pi]$.

1. Derivada: $\\mathbf{r}'(t) = \\langle -a\\sin t, a\\cos t, b \\rangle$
2. Magnitud: $\\| \\mathbf{r}'(t) \\| = \\sqrt{(-a\\sin t)^2 + (a\\cos t)^2 + b^2} = \\sqrt{a^2(\\sin^2 t + \\cos^2 t) + b^2} = \\sqrt{a^2 + b^2}$
3. Longitud: $L = \\int_0^{2\\pi} \\sqrt{a^2 + b^2} \\, dt = 2\\pi \\sqrt{a^2 + b^2}$

**Ejemplo 2:** Curva $\\mathbf{r}(t) = \\langle t, t^2, \\frac{2}{3}t^3 \\rangle$ para $t \\in [0, 1]$.

1. $\\mathbf{r}'(t) = \\langle 1, 2t, 2t^2 \\rangle$
2. $\\| \\mathbf{r}'(t) \\| = \\sqrt{1 + 4t^2 + 4t^4} = \\sqrt{(1 + 2t^2)^2} = 1 + 2t^2$
3. $L = \\int_0^1 (1 + 2t^2) \\, dt = \\left[ t + \\frac{2}{3}t^3 \\right]_0^1 = 1 + \\frac{2}{3} = \\frac{5}{3}$

**Nota:** El segundo ejemplo muestra una curva cuya longitud se calcula exactamente porque el radicando es un cuadrado perfecto.
        `,
        form: {
          question:
            "Para $\\mathbf{r}(t) = \\langle e^t\\cos t, e^t\\sin t, e^t \\rangle$ en $[0, 1]$, ¿cuál es $| \\mathbf{r}'(t) |$?",
          options: [
            "$\\sqrt{3}e^t$",
            "$e^t\\sqrt{\\cos t + \\sin t + 1}$",
            "$\\sqrt{2}e^t$",
            "$e^t\\sqrt{2 + \\cos 2t}$",
          ],
          answer: 0,
        },
      },
      {
        title: "Parametrización por longitud de arco",
        text: `
Una curva está **parametrizada por longitud de arco** si el parámetro $s$ satisface $\\| d\\mathbf{r}/ds \\| = 1$ para todo $s$. Esto significa que $s$ mide exactamente la distancia recorrida a lo largo de la curva desde un punto fijo.

**Función longitud de arco:** Dada una curva $\\mathbf{r}(t)$, definimos:
$$
s(t) = \\int_{t_0}^t \\| \\mathbf{r}'(\\tau) \\| \\, d\\tau
$$
donde $t_0$ es el valor del parámetro en el punto inicial.

**Propiedades:**
1. $\\frac{ds}{dt} = \\| \\mathbf{r}'(t) \\| \\geq 0$
2. $s(t)$ es creciente si $\\| \\mathbf{r}'(t) \\| > 0$
3. La función inversa $t(s)$ existe si la curva es regular ($\\mathbf{r}'(t) \\neq \\mathbf{0}$)

**Reparametrización:** La curva reparametrizada es $\\mathbf{R}(s) = \\mathbf{r}(t(s))$, y satisface:
$$
\\left\\| \\frac{d\\mathbf{R}}{ds} \\right\\| = \\left\\| \\mathbf{r}'(t(s)) \\cdot \\frac{dt}{ds} \\right\\| = \\| \\mathbf{r}'(t(s)) \\| \\cdot \\frac{1}{ds/dt} = \\| \\mathbf{r}'(t(s)) \\| \\cdot \\frac{1}{\\| \\mathbf{r}'(t(s)) \\|} = 1
$$
        `,
        videoUrl: "https://ejemplo.com/videos/parametrizacion-longitud-arco",
      },
      {
        title: "Método para reparametrizar por longitud de arco",
        text: `
**Procedimiento sistemático:**

1. **Calcular la función longitud de arco:**
   $$
   s(t) = \\int_{t_0}^t \\| \\mathbf{r}'(\\tau) \\| \\, d\\tau
   $$

2. **Invertir la relación** para obtener $t = t(s)$

3. **Sustituir** en la parametrización original: $\\mathbf{R}(s) = \\mathbf{r}(t(s))$

**Ejemplo:** Reparametrizar la hélice $\\mathbf{r}(t) = \\langle \\cos t, \\sin t, t \\rangle$ por longitud de arco.

**Paso 1:** $\\mathbf{r}'(t) = \\langle -\\sin t, \\cos t, 1 \\rangle$, entonces $\\| \\mathbf{r}'(t) \\| = \\sqrt{\\sin^2 t + \\cos^2 t + 1} = \\sqrt{2}$

**Paso 2:** $s(t) = \\int_0^t \\sqrt{2} \\, d\\tau = \\sqrt{2} t$, luego $t(s) = \\frac{s}{\\sqrt{2}}$

**Paso 3:** $\\mathbf{R}(s) = \\left\\langle \\cos\\left(\\frac{s}{\\sqrt{2}}\\right), \\sin\\left(\\frac{s}{\\sqrt{2}}\\right), \\frac{s}{\\sqrt{2}} \\right\\rangle$

**Verificación:** $\\| \\mathbf{R}'(s) \\| = \\sqrt{\\left[-\\frac{1}{\\sqrt{2}}\\sin(\\cdots)\\right]^2 + \\left[\\frac{1}{\\sqrt{2}}\\cos(\\cdots)\\right]^2 + \\left[\\frac{1}{\\sqrt{2}}\\right]^2} = \\sqrt{\\frac{1}{2} + \\frac{1}{2}} = 1$

**Dificultad práctica:** En muchos casos, la integral $s(t)$ no es invertible analíticamente, requiriendo métodos numéri\\cos.
        `,
      },
      {
        title: "Aplicaciones en cinemática y dinámica",
        text: `
**Interpretación cinemática:** Para una partícula con trayectoria $\\mathbf{r}(t)$:
- $\\frac{ds}{dt} = v(t)$ es la rapidez
- $s(t)$ es la distancia recorrida desde $t_0$

**Componentes intrínsecas de la aceleración:** (Preparación para el próximo tema)
Cuando la curva está parametrizada por longitud de arco:
$$
\\mathbf{a} = \\frac{d^2s}{dt^2} \\mathbf{T} + \\left(\\frac{ds}{dt}\\right)^2 \\kappa \\mathbf{N}
$$
donde $\\mathbf{T}$ es el vector tangente unitario y $\\kappa$ la curvatura.

**Aplicaciones en ingeniería:**
1. **Diseño de carreteras y vías férreas:** Cálculo preciso de longitudes para presupuestos de materiales.
2. **Robótica:** Planificación de trayectorias donde la distancia recorrida es crítica.
3. **Animación por computadora:** Movimiento uniforme de objetos a lo largo de curvas.
4. **Cartografía:** Medición de ríos, \\costas y fronteras.

**Ejemplo ingenieril:** En el tendido de un cable submarino a lo largo de la curva $\\mathbf{r}(t) = \\langle t, 0.1t^2, -0.01t^3 \\rangle$ para $0 \\leq t \\leq 100$ m (coordenadas en metros), calcular la longitud necesaria de cable.

**Solución:** 
$\\mathbf{r}'(t) = \\langle 1, 0.2t, -0.03t^2 \\rangle$
$\\| \\mathbf{r}'(t) \\| = \\sqrt{1 + 0.04t^2 + 0.0009t^4}$
$L = \\int_0^{100} \\sqrt{1 + 0.04t^2 + 0.0009t^4} \\, dt \\approx 1020.5$ m (se requiere integración numérica)
        `,
        form: {
          question:
            "Si un vehículo sigue la curva $\\mathbf{r}(t) = \\langle 3t, 4t, 0 \\rangle$ durante 10 segundos, ¿qué distancia recorre?",
          options: ["30 m", "40 m", "50 m", "60 m"],
          answer: 2,
        },
        videoUrl: "https://ejemplo.com/videos/aplicaciones-longitud-arco",
      },
      {
        title: "Longitud de arco en coordenadas polares y otros sistemas",
        text: `
**Coordenadas polares ($r = r(\\theta)$):**
Parametrización: $\\mathbf{r}(\\theta) = \\langle r(\\theta)\\cos\\theta, r(\\theta)\\sin\\theta \\rangle$

Derivada: $\\mathbf{r}'(\\theta) = \\langle r'\\cos\\theta - r\\sin\\theta, r'\\sin\\theta + r\\cos\\theta \\rangle$

Magnitud: $\\| \\mathbf{r}'(\\theta) \\| = \\sqrt{(r')^2 + r^2}$

Fórmula de longitud en polares:
$$
L = \\int_{\\alpha}^{\\beta} \\sqrt{[r(\\theta)]^2 + \\left[\\frac{dr}{d\\theta}\\right]^2} \\, d\\theta
$$

**Ejemplo:** Espiral de Arquímedes $r(\\theta) = a\\theta$ para $0 \\leq \\theta \\leq 2\\pi$:
$$
L = \\int_0^{2\\pi} \\sqrt{a^2\\theta^2 + a^2} \\, d\\theta = a\\int_0^{2\\pi} \\sqrt{\\theta^2 + 1} \\, d\\theta
$$

**Coordenadas cilíndricas ($r = r(\\theta), z = z(\\theta)$):**
$$
L = \\int_{\\alpha}^{\\beta} \\sqrt{[r(\\theta)]^2 + \\left[\\frac{dr}{d\\theta}\\right]^2 + \\left[\\frac{dz}{d\\theta}\\right]^2} \\, d\\theta
$$

**Aplicación avanzada:** En relatividad general, la longitud de arco se generaliza a intervalos espacio-temporales en variedades riemannianas.
        `,
        videoUrl: "https://ejemplo.com/videos/coordenadas-polares-longitud",
      },
      {
        title: "Resumen y perspectivas",
        text: `
**Resumen de conceptos clave:**

1. **Longitud de arco:** $L = \\int_a^b \\| \\mathbf{r}'(t) \\| \\, dt$
2. **Función longitud de arco:** $s(t) = \\int_{t_0}^t \\| \\mathbf{r}'(\\tau) \\| \\, d\\tau$
3. **Parametrización por longitud de arco:** $\\| d\\mathbf{R}/ds \\| = 1$

**Propiedades importantes:**
- La longitud de arco es independiente de la parametrización
- Es una cantidad escalar positiva
- Para curvas regulares, siempre existe una parametrización por longitud de arco

**Limitaciones y extensiones:**
- Para curvas no suaves (con esquinas), la longitud se define por aproximación poligonal
- En dimensiones superiores, el concepto se generaliza a variedades diferenciables
- En aplicaciones prácticas, a menudo se requiere integración numérica

**Próximo tema:** La parametrización por longitud de arco es fundamental para definir **curvatura** de manera intrínseca, lo que nos llevará al estudio de los vectores normal y binormal.

**Ejercicio de síntesis:** Dada la curva $\\mathbf{r}(t) = \\langle t, \\cosh t, 0 \\rangle$ (catenaria), demostrar que:
1. $\\| \\mathbf{r}'(t) \\| = \\cosh t$
2. La función longitud de arco desde $t=0$ es $s(t) = \\sinh t$
3. Encontrar la parametrización por longitud de arco
        `,
      },
    ],
  },
  "curvatura-vectores-normales": {
    title: "Courses.curvatura-vectores-normales.title",
    description: "Courses.curvatura-vectores-normales.description",
    course: [
      {
        title: "Concepto de curvatura: Medida de la variación angular",
        text: `
La **curvatura** $\\kappa$ (kappa) de una curva es una medida de cuánto se desvía una curva de ser una línea recta en un punto dado. Cuantifica la tasa de cambio de la dirección del vector tangente unitario respecto a la longitud de arco.

**Interpretación geométrica:**
- $\\kappa = 0$: La curva es una línea recta (no hay curvatura).
- $\\kappa$ pequeña: La curva es "suave", se desvía lentamente.
- $\\kappa$ grande: La curva es "cerrada" o tiene un giro brusco.

**Definición formal para curvas parametrizadas por longitud de arco:**
Si $\\mathbf{r}(s)$ está parametrizada por longitud de arco, entonces:
$$
\\kappa(s) = \\left\\| \\frac{d\\mathbf{T}}{ds} \\right\\|
$$
donde $\\mathbf{T}(s) = \\mathbf{r}'(s)$ es el vector tangente unitario.

**Radio de curvatura:** $\\rho = \\frac{1}{\\kappa}$ (radio del círculo osculador).
        `,
        form: {
          question: "¿Qué representa geométricamente la curvatura?",
          options: [
            "La velocidad de cambio de la rapidez",
            "La tasa de cambio de la dirección del vector tangente respecto a la longitud de arco",
            "El ángulo total girado por la curva",
            "La distancia desde la curva al origen",
          ],
          answer: 1,
        },
        videoUrl: "https://ejemplo.com/videos/concepto-curvatura",
      },
      {
        title: "Cálculo de curvatura para parametrizaciones generales",
        text: `
Para una curva $\\mathbf{r}(t)$ con parámetro arbitrario $t$, la curvatura se calcula mediante:

**Fórmula general (teorema):**
$$
\\kappa(t) = \\frac{\\| \\mathbf{r}'(t) \\times \\mathbf{r}''(t) \\|}{\\| \\mathbf{r}'(t) \\|^3}
$$

**Demostración esquemática:**
Sabemos que $\\mathbf{T} = \\frac{\\mathbf{r}'}{\\| \\mathbf{r}' \\|}$ y $\\frac{d\\mathbf{T}}{ds} = \\frac{d\\mathbf{T}/dt}{ds/dt}$.

Usando la regla del cociente y propiedades del producto vectorial, se llega a:
$$
\\frac{d\\mathbf{T}}{ds} = \\frac{\\mathbf{r}' \\times (\\mathbf{r}'' \\times \\mathbf{r}')}{\\| \\mathbf{r}' \\|^4}
$$

Aplicando la identidad del triple producto vectorial $\\mathbf{a} \\times (\\mathbf{b} \\times \\mathbf{a}) = \\|\\mathbf{a}\\|^2 \\mathbf{b} - (\\mathbf{a} \\cdot \\mathbf{b})\\mathbf{a}$, y tomando norma, obtenemos la fórmula dada.

**Caso especial:** Si la curva está en el plano $\\mathbb{R}^2$, se puede usar:
$$
\\kappa(t) = \\frac{|x'y'' - y'x''|}{(x'^2 + y'^2)^{3/2}}
$$
        `,
        videoUrl: "https://ejemplo.com/videos/formula-curvatura-general",
      },
      {
        title: "Vectores del triedro de Frenet: Tangente, Normal y Binormal",
        text: `
Para una curva espacial suave, definimos el **triedro de Frenet** (o marco de Frenet-Serret) en cada punto:

1. **Vector tangente unitario:**
$$
\\mathbf{T}(t) = \\frac{\\mathbf{r}'(t)}{\\| \\mathbf{r}'(t) \\|}
$$

2. **Vector normal principal unitario:**
$$
\\mathbf{N}(t) = \\frac{\\mathbf{T}'(t)}{\\| \\mathbf{T}'(t) \\|}
$$
Siempre que $\\mathbf{T}'(t) \\neq \\mathbf{0}$. Este vector apunta hacia el centro de curvatura.

3. **Vector binormal unitario:**
$$
\\mathbf{B}(t) = \\mathbf{T}(t) \\times \\mathbf{N}(t)
$$
Este vector es perpendicular al plano osculador.

**Relación con la curvatura:**
$$
\\frac{d\\mathbf{T}}{ds} = \\kappa \\mathbf{N}
$$
Es decir, la derivada del vector tangente respecto a la longitud de arco tiene magnitud $\\kappa$ y dirección $\\mathbf{N}$.
        `,
        form: {
          question:
            "¿Cuál es la relación correcta entre los vectores del triedro de Frenet?",
          options: [
            "$\\mathbf{N} = \\mathbf{B} \\times \\mathbf{T}$",
            "$\\mathbf{B} = \\mathbf{T} \\times \\mathbf{N}$",
            "$\\mathbf{T} = \\mathbf{N} \\times \\mathbf{B}$",
            "$\\mathbf{N} = \\mathbf{T} \\times \\mathbf{B}$",
          ],
          answer: 1,
        },
      },
      {
        title: "Planos asociados a una curva: Osculador, Normal y Rectificante",
        text: `
En cada punto de una curva espacial, podemos definir tres planos importantes:

1. **Plano osculador:** Contiene a $\\mathbf{T}$ y $\\mathbf{N}$.
   - **Ecuación:** $(\\mathbf{R} - \\mathbf{r}(t_0)) \\cdot \\mathbf{B} = 0$
   - Es el plano que "mejor se ajusta" a la curva en ese punto.

2. **Plano normal:** Contiene a $\\mathbf{N}$ y $\\mathbf{B}$.
   - **Ecuación:** $(\\mathbf{R} - \\mathbf{r}(t_0)) \\cdot \\mathbf{T} = 0$
   - Es perpendicular a la dirección tangente.

3. **Plano rectificante:** Contiene a $\\mathbf{T}$ y $\\mathbf{B}$.
   - **Ecuación:** $(\\mathbf{R} - \\mathbf{r}(t_0)) \\cdot \\mathbf{N} = 0$
   - Es perpendicular al vector normal principal.

**Ejemplo:** Para la hélice $\\mathbf{r}(t) = \\langle a\\cos t, a\\sin t, bt \\rangle$:
- $\\mathbf{T} = \\frac{\\langle -a\\sin t, a\\cos t, b \\rangle}{\\sqrt{a^2 + b^2}}$
- $\\mathbf{N} = \\langle -\\cos t, -\\sin t, 0 \\rangle$
- $\\mathbf{B} = \\frac{\\langle b\\sin t, -b\\cos t, a \\rangle}{\\sqrt{a^2 + b^2}}$

El plano osculador en $t=0$ tiene ecuación: $b y - a (z - 0) = 0$.
        `,
        videoUrl: "https://ejemplo.com/videos/planos-frenet",
      },
      {
        title: "Círculo osculador y centro de curvatura",
        text: `
El **círculo osculador** es el círculo que mejor aproxima a la curva en un punto dado. Está contenido en el plano osculador y tiene:

- **Radio:** $\\rho = \\frac{1}{\\kappa}$ (radio de curvatura)
- **Centro de curvatura:** $\\mathbf{C} = \\mathbf{r}(t_0) + \\rho \\mathbf{N}$

**Ecuación paramétrica del círculo osculador:**
$$
\\mathbf{R}(\\theta) = \\mathbf{C} + \\rho (\\cos\\theta \\, \\mathbf{N} + \\sin\\theta \\, \\mathbf{T})
$$
para $\\theta \\in [0, 2\\pi]$.

**Ejemplo:** Para la parábola $y = x^2$ en el punto $(0,0)$:
1. Parametrización: $\\mathbf{r}(t) = \\langle t, t^2 \\rangle$
2. En $t=0$: $\\mathbf{r}'(0) = \\langle 1, 0 \\rangle$, $\\mathbf{r}''(0) = \\langle 0, 2 \\rangle$
3. Curvatura: $\\kappa = \\frac{|1\\cdot2 - 0\\cdot0|}{(1^2 + 0^2)^{3/2}} = 2$
4. Radio: $\\rho = \\frac{1}{2}$
5. Vector normal: $\\mathbf{N} = \\langle 0, -1 \\rangle$ (apunta hacia el centro de curvatura)
6. Centro: $\\mathbf{C} = \\langle 0,0 \\rangle + \\frac{1}{2}\\langle 0, -1 \\rangle = \\langle 0, -\\frac{1}{2} \\rangle$

El círculo osculador tiene centro en $(0, -0.5)$ y radio 0.5.
        `,
        form: {
          question:
            "Para una curva con $\\kappa = 0.1$, ¿cuál es el radio del círculo osculador?",
          options: ["0.1", "1", "10", "100"],
          answer: 2,
        },
      },
      {
        title: 'Torsión: Medida de la "torcedura" espacial',
        text: `
Mientras la curvatura mide cuánto se dobla una curva, la **torsión** $\\tau$ (tau) mide cuánto se tuerce fuera del plano osculador.

**Definición:**
$$
\\tau = -\\frac{d\\mathbf{B}}{ds} \\cdot \\mathbf{N}
$$

**Fórmula computacional (para parámetro arbitrario $t$):**
$$
\\tau(t) = \\frac{(\\mathbf{r}' \\times \\mathbf{r}'') \\cdot \\mathbf{r}'''}{\\| \\mathbf{r}' \\times \\mathbf{r}'' \\|^2}
$$

**Interpretación geométrica:**
- $\\tau = 0$: La curva es plana (está contenida en un plano fijo).
- $\\tau > 0$: La curva se tuerce en la dirección de $\\mathbf{B}$.
- $\\tau < 0$: La curva se tuerce en la dirección opuesta.

**Fórmulas de Frenet-Serret (sistema completo):**
$$
\\begin{cases}
\\frac{d\\mathbf{T}}{ds} = & \\kappa \\mathbf{N} \\
\\frac{d\\mathbf{N}}{ds} = & -\\kappa \\mathbf{T} + \\tau \\mathbf{B} \\
\\frac{d\\mathbf{B}}{ds} = & -\\tau \\mathbf{N}
\\end{cases}
$$

Estas ecuaciones describen completamente la geometría de la curva.
        `,
        videoUrl: "https://ejemplo.com/videos/torsion-formulas-frenet",
      },
      {
        title: "Fórmulas alternativas y casos especiales",
        text: `
**1. Curvas en el plano ($z(t) = 0$):**
$$
\\kappa = \\frac{|x'y'' - y'x''|}{(x'^2 + y'^2)^{3/2}}
$$

**2. Curva dada explícitamente ($y = f(x)$):**
Haciendo $x = t$, $y = f(t)$:
$$
\\kappa(x) = \\frac{|f''(x)|}{[1 + (f'(x))^2]^{3/2}}
$$

**3. En coordenadas polares ($r = r(\\theta)$):**
$$
\\kappa(\\theta) = \\frac{|r^2 + 2r'^2 - r r''|}{(r^2 + r'^2)^{3/2}}
$$

**4. Para curvas con rapidez constante ($\\| \\mathbf{r}'(t) \\| = c$):**
$$
\\kappa(t) = \\frac{\\| \\mathbf{r}''(t) \\|}{c^2}
$$

**5. Fórmula usando solo primeras derivadas (para curvas planas):**
Si $\\theta(t)$ es el ángulo que forma $\\mathbf{T}$ con el eje $x$, entonces:
$$
\\kappa(t) = \\left| \\frac{d\\theta}{ds} \\right| = \\frac{|\\theta'(t)|}{\\| \\mathbf{r}'(t) \\|}
$$

**Ejemplo:** Para la cardioide $r(\\theta) = a(1 + \\cos\\theta)$:
$$
r' = -a\\sin\\theta, \\quad r'' = -a\\cos\\theta
$$
$$
\\kappa(\\theta) = \\frac{|a^2(1+\\cos\\theta)^2 + 2a^2\\sin^2\\theta + a^2(1+\\cos\\theta)\\cos\\theta|}{[a^2(1+\\cos\\theta)^2 + a^2\\sin^2\\theta]^{3/2}}
$$
        `,
      },
      {
        title: "Aplicaciones en ingeniería y diseño",
        text: `
**1. Diseño de carreteras y vías férreas:**
- La curvatura determina la velocidad segura máxima: $v_{max} = \\sqrt{\\mu g \\rho}$ (donde $\\mu$ es coeficiente de fricción).
- Se usan curvas de transición (clothoides) donde $\\kappa$ varía linealmente con la longitud.

**2. Robótica y cinemática:**
- En brazos robóti\\cos, la curvatura afecta los esfuerzos mecáni\\cos.
- Trayectorias suaves (curvatura continua) evitan vibraciones y desgaste.

**3. Animación por computadora:**
- Curvas de Bézier y B-splines usan conceptos de curvatura para suavizado.
- El movimiento de cámaras virtuales requiere control de curvatura.

**4. Ingeniería biomédica:**
- Estudio de curvas en espiral del ADN (hélice con curvatura y torsión constantes).
- Diseño de stents y catéteres que siguen trayectorias anatómicas.

**5. Ingeniería aeronáutica:**
- Diseño de perfiles alares (curvatura del intradós y extradós).
- Trayectorias de vuelo con restricciones de curvatura máxima.

**Ejemplo de aplicación:** En el diseño de una curva de carretera, se requiere que el radio mínimo sea 200 m. ¿Cuál es la curvatura máxima permitida?
$$
\\kappa_{max} = \\frac{1}{\\rho_{min}} = \\frac{1}{200} = 0.005 \\text{ m}^{-1}
$$

Si un vehículo viaja a 25 m/s (90 km/h), la aceleración centrípeta sería:
$$
a_c = \\frac{v^2}{\\rho} = \\frac{25^2}{200} = 3.125 \\text{ m/s}^2
$$
        `,
        form: {
          question:
            "En diseño de carreteras, ¿por qué se usan curvas de transición (clothoides)?",
          options: [
            "Para reducir \\costos de construcción",
            "Para permitir un cambio gradual de curvatura",
            "Para aumentar la velocidad máxima",
            "Para reducir la longitud total",
          ],
          answer: 1,
        },
        videoUrl: "https://ejemplo.com/videos/aplicaciones-curvatura",
      },
      {
        title: "Ejercicios de síntesis y resumen",
        text: `
**Problema 1:** Para la curva $\\mathbf{r}(t) = \\langle t, t^2, t^3 \\rangle$, calcular en $t=1$:
a) Curvatura $\\kappa$
b) Vectores $\\mathbf{T}$, $\\mathbf{N}$, $\\mathbf{B}$
c) Ecuación del plano osculador

**Solución:**
1. $\\mathbf{r}'(1) = \\langle 1, 2, 3 \\rangle$, $\\mathbf{r}''(1) = \\langle 0, 2, 6 \\rangle$, $\\mathbf{r}'''(1) = \\langle 0, 0, 6 \\rangle$
2. $\\mathbf{r}' \\times \\mathbf{r}'' = \\langle 6, -6, 2 \\rangle$, norma = $\\sqrt{76}$
3. $\\|\\mathbf{r}'\\| = \\sqrt{14}$, $\\kappa = \\frac{\\sqrt{76}}{(\\sqrt{14})^3} = \\frac{\\sqrt{76}}{14\\sqrt{14}}$
4. $\\mathbf{T} = \\frac{\\langle 1, 2, 3 \\rangle}{\\sqrt{14}}$
5. Continuar cálculo...

**Resumen de fórmulas clave:**
1. **Curvatura:** $\\kappa = \\frac{\\| \\mathbf{r}' \\times \\mathbf{r}'' \\|}{\\| \\mathbf{r}' \\|^3}$
2. **Torsión:** $\\tau = \\frac{(\\mathbf{r}' \\times \\mathbf{r}'') \\cdot \\mathbf{r}'''}{\\| \\mathbf{r}' \\times \\mathbf{r}'' \\|^2}$
3. **Vectores de Frenet:** $\\mathbf{T} = \\frac{\\mathbf{r}'}{\\|\\mathbf{r}'\\|}$, $\\mathbf{N} = \\frac{\\mathbf{T}'}{\\|\\mathbf{T}'\\|}$, $\\mathbf{B} = \\mathbf{T} \\times \\mathbf{N}$

**Relaciones importantes:**
- $\\mathbf{T} \\cdot \\mathbf{T} = \\mathbf{N} \\cdot \\mathbf{N} = \\mathbf{B} \\cdot \\mathbf{B} = 1$
- $\\mathbf{T} \\cdot \\mathbf{N} = \\mathbf{N} \\cdot \\mathbf{B} = \\mathbf{B} \\cdot \\mathbf{T} = 0$
- $\\mathbf{T}' = \\kappa \\mathbf{N}$, $\\mathbf{B}' = -\\tau \\mathbf{N}$, $\\mathbf{N}' = -\\kappa \\mathbf{T} + \\tau \\mathbf{B}$

**Próximo tema:** Estos conceptos serán la base para analizar las componentes tangencial y normal de la aceleración.
        `,
      },
    ],
  },
  "componentes-aceleracion": {
    title: "Courses.componentes-aceleracion.title",
    description: "Courses.componentes-aceleracion.description",
    course: [
      {
        title: "Descomposición intrínseca de la aceleración",
        text: `
En el estudio del movimiento curvilíneo, la **aceleración** se puede descomponer en dos componentes ortogonales: una **tangencial** (en la dirección del movimiento) y otra **normal** (perpendicular al movimiento). Esta descomposición es intrínseca a la curva y proporciona información física fundamental.

**Problema fundamental:** Dada una partícula con vector posición $\\mathbf{r}(t)$, encontrar una expresión para $\\mathbf{a}(t)$ en términos del triedro de Frenet $\\{\\mathbf{T}, \\mathbf{N}, \\mathbf{B}\\}$.

**Resultado clave (teorema):**
$$
\\mathbf{a}(t) = a_T \\mathbf{T} + a_N \\mathbf{N}
$$
donde:
- $a_T = \\frac{d}{dt}v(t)$ es la **componente tangencial** (cambio en magnitud de velocidad)
- $a_N = \\kappa v^2$ es la **componente normal** (cambio en dirección de velocidad)

No existe componente en la dirección de $\\mathbf{B}$ para la aceleración instantánea.
        `,
        form: {
          question:
            "¿Qué información física proporciona la componente tangencial de la aceleración?",
          options: [
            "El cambio en la dirección del movimiento",
            "La tasa de cambio de la rapidez",
            "La tendencia a salirse del plano osculador",
            "La distancia al centro de curvatura",
          ],
          answer: 1,
        },
        videoUrl:
          "https://ejemplo.com/videos/introduccion-componentes-aceleracion",
      },
      {
        title: "Deducción formal de las componentes",
        text: `
Partimos de la definición de velocidad y aceleración:
$$
\\mathbf{v}(t) = \\frac{d\\mathbf{r}}{dt}, \\quad \\mathbf{a}(t) = \\frac{d\\mathbf{v}}{dt}
$$

Expresamos la velocidad en términos del vector tangente unitario:
$$
\\mathbf{v}(t) = v(t) \\mathbf{T}(t)
$$
donde $v(t) = \\| \\mathbf{v}(t) \\|$ es la rapidez.

Derivamos usando la regla del producto:
$$
\\mathbf{a}(t) = \\frac{d}{dt}[v(t) \\mathbf{T}(t)] = \\frac{dv}{dt} \\mathbf{T}(t) + v(t) \\frac{d\\mathbf{T}}{dt}
$$

Aplicamos la regla de la cadena: $\\frac{d\\mathbf{T}}{dt} = \\frac{d\\mathbf{T}}{ds} \\frac{ds}{dt}$

Recordando que $\\frac{ds}{dt} = v(t)$ y $\\frac{d\\mathbf{T}}{ds} = \\kappa \\mathbf{N}$, obtenemos:
$$
\\frac{d\\mathbf{T}}{dt} = v(t) \\kappa \\mathbf{N}
$$

Sustituyendo:
$$
\\mathbf{a}(t) = \\frac{dv}{dt} \\mathbf{T} + v(t) \\cdot [v(t) \\kappa \\mathbf{N}]
$$

Finalmente:
$$
\\mathbf{a}(t) = \\underbrace{\\frac{dv}{dt}}_{a_T} \\mathbf{T} + \\underbrace{\\kappa v^2}_{a_N} \\mathbf{N}
$$

Esta es la **descomposición de Frenet** de la aceleración.
        `,
        videoUrl:
          "https://ejemplo.com/videos/deduccion-componentes-aceleracion",
      },
      {
        title: "Fórmulas computacionales prácticas",
        text: `
Para calcular las componentes \\sin necesidad del triedro de Frenet completo:

**Componente tangencial:**
$$
a_T = \\frac{d}{dt}v(t) = \\frac{\\mathbf{v} \\cdot \\mathbf{a}}{v} = \\frac{\\mathbf{r}'(t) \\cdot \\mathbf{r}''(t)}{\\| \\mathbf{r}'(t) \\|}
$$

**Componente normal:**
$$
a_N = \\kappa v^2 = \\frac{\\| \\mathbf{v} \\times \\mathbf{a} \\|}{v} = \\frac{\\| \\mathbf{r}'(t) \\times \\mathbf{r}''(t) \\|}{\\| \\mathbf{r}'(t) \\|}
$$

**Magnitud de la aceleración:**
$$
\\| \\mathbf{a} \\| = \\sqrt{a_T^2 + a_N^2}
$$

**Demostración de $a_T = \\frac{\\mathbf{v} \\cdot \\mathbf{a}}{v}$:**
Derivando $v^2 = \\mathbf{v} \\cdot \\mathbf{v}$:
$$
\\frac{d}{dt}(v^2) = 2\\mathbf{v} \\cdot \\mathbf{a} \\Rightarrow 2v \\frac{dv}{dt} = 2\\mathbf{v} \\cdot \\mathbf{a} \\Rightarrow a_T = \\frac{dv}{dt} = \\frac{\\mathbf{v} \\cdot \\mathbf{a}}{v}
$$

**Demostración de $a_N = \\frac{\\|\\mathbf{v} \\times \\mathbf{a}\\|}{v}$:**
Usando $\\|\\mathbf{v} \\times \\mathbf{a}\\| = \\|v\\mathbf{T} \\times (a_T\\mathbf{T} + a_N\\mathbf{N})\\| = v a_N \\|\\mathbf{T} \\times \\mathbf{N}\\| = v a_N$
        `,
        form: {
          question:
            "Para $\\mathbf{r}(t) = \\langle 3\\cos t, 3\\sin t, 4t \\rangle$, ¿cuál es $a_T$?",
          options: ["0", "3", "5", "25"],
          answer: 0,
        },
      },
      {
        title: "Interpretación física de las componentes",
        text: `
**Componente tangencial ($a_T$):**
- **Significado físico:** Mide el cambio en la **rapidez** (magnitud de la velocidad).
- **Efecto sobre el movimiento:** 
  - $a_T > 0$: La partícula **acelera** (aumenta su rapidez).
  - $a_T < 0$: La partícula **desacelera** (disminuye su rapidez).
  - $a_T = 0$: Movimiento **uniforme** (rapidez constante).
- **Ejemplo:** En un automóvil que toma una curva, el acelerador o freno controlan $a_T$.

**Componente normal ($a_N$):**
- **Significado físico:** Mide el cambio en la **dirección** del movimiento.
- **Relación con la fuerza centrípeta:** $F_N = m a_N = m \\kappa v^2$
- **Efecto sobre el movimiento:** Responsable de mantener la partícula en su trayectoria curvilínea.
- **Caso especial movimiento rectilíneo:** $a_N = 0$ (no hay cambio de dirección).
- **Ejemplo:** En una curva, $a_N$ es la "fuerza" que sientes hacia el exterior de la curva.

**Ejemplo ilustrativo:** Un satélite en órbita circular:
- $a_T = 0$ (rapidez constante)
- $a_N = \\frac{v^2}{R}$ (aceleración centrípeta, donde $R$ es el radio orbital)
        `,
        videoUrl:
          "https://ejemplo.com/videos/interpretacion-fisica-componentes",
      },
      {
        title: "Movimiento circular: caso paradigmático",
        text: `
Para una partícula en **movimiento circular uniforme** de radio $R$:
$$
\\mathbf{r}(t) = \\langle R\\cos(\\omega t), R\\sin(\\omega t), 0 \\rangle
$$

**Cálculo explícito:**
1. Velocidad: $\\mathbf{v}(t) = \\langle -R\\omega\\sin(\\omega t), R\\omega\\cos(\\omega t), 0 \\rangle$
2. Rapidez: $v = R\\omega$ (constante)
3. Aceleración: $\\mathbf{a}(t) = \\langle -R\\omega^2\\cos(\\omega t), -R\\omega^2\\sin(\\omega t), 0 \\rangle$

**Componentes:**
- Tangencial: $a_T = \\frac{d}{dt}(R\\omega) = 0$
- Normal: $a_N = \\kappa v^2 = \\frac{1}{R} \\cdot (R\\omega)^2 = R\\omega^2$

**Verificación con fórmulas:**
$$
a_T = \\frac{\\mathbf{v} \\cdot \\mathbf{a}}{v} = \\frac{0}{R\\omega} = 0
$$
$$
a_N = \\frac{\\| \\mathbf{v} \\times \\mathbf{a} \\|}{v} = \\frac{R^2\\omega^3}{R\\omega} = R\\omega^2
$$

**Interpretación:** En movimiento circular uniforme, toda la aceleración es normal (centrípeta), dirigida hacia el centro del círculo.
        `,
        form: {
          question:
            "En movimiento circular uniforme, ¿cómo se relacionan $a_N$, $v$ y $R$?",
          options: [
            "$a_N = \\frac{v}{R}$",
            "$a_N = \\frac{v^2}{R}$",
            "$a_N = vR$",
            "$a_N = \\frac{R}{v^2}$",
          ],
          answer: 1,
        },
      },
      {
        title: "Aplicaciones en dinámica: Fuerzas tangencial y normal",
        text: `
Por la segunda ley de Newton $\\mathbf{F} = m\\mathbf{a}$, la descomposición de la aceleración induce una descomposición de la fuerza:

**Fuerza tangencial:**
$$
F_T = m a_T = m \\frac{dv}{dt}
$$
- Responsable de cambiar la rapidez.
- Ejemplos: fuerza del motor, fuerza de frenado, resistencia del aire en la dirección del movimiento.

**Fuerza normal (centrípeta):**
$$
F_N = m a_N = m \\kappa v^2
$$
- Responsable de cambiar la dirección.
- Siempre apunta hacia el centro de curvatura.
- Ejemplos: fuerza de fricción lateral en una curva, tensión en una cuerda de péndulo, fuerza gravitacional en órbitas.

**Ecuaciones del movimiento en coordenadas intrínsecas:**
$$
\\begin{cases}
m \\frac{dv}{dt} = F_T \\
m \\frac{v^2}{\\rho} = F_N
\\end{cases}
$$
donde $\\rho = 1/\\kappa$ es el radio de curvatura.

**Aplicación importante:** Para un vehículo que toma una curva de radio $R$ con coeficiente de fricción estática $\\mu_s$, la velocidad máxima segura es:
$$
v_{max} = \\sqrt{\\mu_s g R}
$$
ya que $F_N = m v^2/R$ y la fricción máxima es $F_{friccion}^{max} = \\mu_s m g$.
        `,
        videoUrl: "https://ejemplo.com/videos/aplicaciones-dinamica",
      },
      {
        title: "Ejemplos de ingeniería: Peraltes y transiciones",
        text: `
**1. Diseño de curvas peraltadas:**
En carreteras y vías férreas, se inclina la superficie (peralte) para que la componente normal de la fuerza normal proporcione parte de la fuerza centrípeta.

**Análisis:** Para un vehículo en una curva peraltada con ángulo $\\theta$:
- Fuerzas: peso ($mg$), fuerza normal ($N$), fricción ($f$)
- Ecuaciones:
  $$
  \\begin{cases}
  N\\sin\\theta + f\\cos\\theta = \\frac{mv^2}{R} \\
  N\\cos\\theta - f\\sin\\theta = mg
  \\end{cases}
  $$
- \\sin fricción ($f=0$): $v_{ideal} = \\sqrt{gR\\tan\\theta}$

**2. Transiciones en vías férreas:**
Al entrar/salir de una curva, se usa una **clotoide** (espiral de Euler) donde la curvatura varía linealmente con la longitud de arco: $\\kappa(s) = \\frac{s}{A^2}$.
- Esto produce una variación suave de $a_N$.
- Evita cambios brus\\cos en la aceleración normal que causarían incomodidad o descarrilamiento.

**3. Diseño de montañas rusas:**
- En la cima de un loop: $a_N = \\frac{v^2}{R} - g$ (hacia abajo)
- En el fondo: $a_N = \\frac{v^2}{R} + g$ (hacia arriba)
- Se diseña para que $a_N$ esté dentro de límites seguros (< 5g típicamente).

**Cálculo de ejemplo:** Un tren de 200,000 kg toma una curva de 500 m de radio a 25 m/s. Calcular la fuerza centrípeta.
$$
F_N = m \\frac{v^2}{R} = 200,000 \\times \\frac{25^2}{500} = 250,000 \\text{ N}
$$
        `,
      },
      {
        title: "Movimiento en 3D: ¿Por qué no hay componente binormal?",
        text: `
Una pregunta natural es: ¿Por qué $\\mathbf{a}$ no tiene componente en la dirección de $\\mathbf{B}$?

**Respuesta matemática:** De la derivación vimos que $\\frac{d\\mathbf{T}}{dt}$ está en el plano osculador ($\\mathbf{T}$-$\\mathbf{N}$), por lo que su producto con $v$ también. Más formalmente:

Del triedro de Frenet, sabemos que $\\frac{d\\mathbf{T}}{ds} = \\kappa \\mathbf{N}$, que está en la dirección de $\\mathbf{N}$, no tiene componente en $\\mathbf{B}$.

**Interpretación física:** La aceleración instantánea es el cambio en el vector velocidad. Como $\\mathbf{v}$ es siempre tangente a la trayectoria, su cambio puede tener:
1. Componente en la dirección de $\\mathbf{T}$: cambio en magnitud
2. Componente en la dirección de $\\mathbf{N}$: cambio en dirección dentro del plano osculador

Un cambio en la dirección de $\\mathbf{B}$ implicaría que la curva se "tuerce" fuera del plano osculador, pero esta torsión (medida por $\\tau$) no aparece en la **aceleración instantánea**, \\sino en la derivada del vector binormal.

**Ejemplo:** Una hélice tiene $\\tau \\neq 0$, pero:
$$
\\mathbf{a}_{helice} = -a\\omega^2\\cos(\\omega t)\\mathbf{i} - a\\omega^2\\sin(\\omega t)\\mathbf{j}
$$
que está en el plano xy (plano osculador instantáneo), \\sin componente en $\\mathbf{k}$.
        `,
        form: {
          question:
            "¿Por qué la aceleración instantánea no tiene componente en la dirección binormal?",
          options: [
            "Porque el vector velocidad siempre es perpendicular a $\\mathbf{B}$",
            "Porque la derivada del vector tangente está en el plano osculador",
            "Porque la torsión siempre es cero",
            "Porque la aceleración es siempre paralela al vector normal",
          ],
          answer: 1,
        },
        videoUrl: "https://ejemplo.com/videos/componente-binormal-aceleracion",
      },
      {
        title: "Casos especiales y fórmulas alternativas",
        text: `
**1. Movimiento con rapidez constante ($v = cte$):**
$$
\\mathbf{a} = \\kappa v^2 \\mathbf{N} = \\frac{v^2}{\\rho} \\mathbf{N}
$$
Toda la aceleración es normal (centrípeta).

**2. Movimiento rectilíneo ($\\kappa = 0$):**
$$
\\mathbf{a} = \\frac{dv}{dt} \\mathbf{T}
$$
Toda la aceleración es tangencial.

**3. En coordenadas polares (movimiento plano):**
Para $\\mathbf{r} = r\\mathbf{e}_r$:
$$
\\mathbf{a} = (\\ddot{r} - r\\dot{\\theta}^2)\\mathbf{e}_r + (r\\ddot{\\theta} + 2\\dot{r}\\dot{\\theta})\\mathbf{e}_{\\theta}
$$
Donde:
- $a_T$ está relacionado con $(r\\ddot{\\theta} + 2\\dot{r}\\dot{\\theta})$
- $a_N$ está relacionado con $(\\ddot{r} - r\\dot{\\theta}^2)$

**4. Fórmula para $a_N$ \\sin calcular $\\kappa$:**
$$
a_N = \\sqrt{\\| \\mathbf{a} \\|^2 - a_T^2} = \\sqrt{\\| \\mathbf{a} \\|^2 - \\left(\\frac{\\mathbf{v} \\cdot \\mathbf{a}}{\\| \\mathbf{v} \\|}\\right)^2}
$$

**5. Relación con el radio de curvatura:**
$$
\\rho = \\frac{v^2}{a_N} = \\frac{\\| \\mathbf{v} \\|^3}{\\| \\mathbf{v} \\times \\mathbf{a} \\|}
$$

**Ejemplo:** Para $\\mathbf{r}(t) = \\langle t, t^2, t^3 \\rangle$ en $t=1$:
- $\\mathbf{v}(1) = \\langle 1, 2, 3 \\rangle$, $\\mathbf{a}(1) = \\langle 0, 2, 6 \\rangle$
- $v = \\sqrt{14}$, $\\mathbf{v} \\cdot \\mathbf{a} = 0+4+18=22$
- $a_T = 22/\\sqrt{14} \\approx 5.88$
- $\\|\\mathbf{a}\\| = \\sqrt{0+4+36} = \\sqrt{40} \\approx 6.32$
- $a_N = \\sqrt{40 - (22^2/14)} = \\sqrt{40 - 34.57} \\approx 2.33$
        `,
      },
      {
        title: "Aplicaciones avanzadas en ingeniería",
        text: `
**1. Sistemas de guiado inercial:**
1. **Acelerómetros** miden $\\mathbf{a}$ en el sistema de referencia del vehículo.
2. Se transforma a coordenadas inerciales usando giroscopios.
3. Se integra $\\mathbf{a}$ para obtener velocidad y posición.
4. La descomposición $a_T$/$a_N$ ayuda a corregir errores de deriva.

**2. Análisis de esfuerzos en mecanismos:**
En un **brazo robótico** que sigue una trayectoria curvilínea:
- $a_T$ determina el torque necesario para acelerar/desacelerar las masas.
- $a_N$ determina las fuerzas radiales en las articulaciones.

**3. Diseño de pistas de carreras:**
- **Óvalos:** Combinación de tramos rectos ($a_N=0$) y curvas ($a_N$ alta).
- **Curvas bankeadas:** Se calcula el ángulo óptimo para la velocidad de diseño.
- **Zonas de frenado:** Donde $a_T$ es negativa y grande en magnitud.

**4. Medicina deportiva:**
- En carreras de Fórmula 1, los pilotos experimentan hasta 5g en $a_N$ durante las curvas.
- Se estudian los efectos de $a_T$ y $a_N$ en el cuerpo humano.

**Problema de diseño:** Se necesita diseñar una rampa de salida para bicicletas BMX que consiste en un cuarto de círculo de radio 3 m seguido de un tramo recto. Si un ciclista entra al arco circular a 6 m/s y sale a 8 m/s, calcular:
1. $a_T$ y $a_N$ en el punto medio del arco (suponiendo aceleración tangencial constante).
2. La fuerza normal que ejerce la rampa sobre el ciclista de 70 kg.

**Solución esquemática:**
1. $v_{prom} = 7$ m/s en el punto medio
2. $a_T = (8^2 - 6^2)/(2 \\cdot \\text{longitud arco}) = \\cdots$
3. $a_N = v_{prom}^2/R = 49/3 \\approx 16.33$ m/s²
4. $F_N = m\\sqrt{a_T^2 + (a_N + g)^2}$ (considerando gravedad)
        `,
        form: {
          question:
            "En un sistema de guiado inercial, ¿para qué se usa la descomposición $a_T$/$a_N$?",
          options: [
            "Para medir la altitud",
            "Para corregir errores de deriva en la estimación de posición",
            "Para determinar la orientación",
            "Para calcular el consumo de combustible",
          ],
          answer: 1,
        },
        videoUrl:
          "https://ejemplo.com/videos/aplicaciones-avanzadas-ingenieria",
      },
      {
        title: "Resumen y conclusiones",
        text: `
**Ecuaciones fundamentales:**
1. $\\mathbf{a} = a_T \\mathbf{T} + a_N \\mathbf{N}$
2. $a_T = \\frac{dv}{dt} = \\frac{\\mathbf{v} \\cdot \\mathbf{a}}{v}$
3. $a_N = \\kappa v^2 = \\frac{\\|\\mathbf{v} \\times \\mathbf{a}\\|}{v}$

**Interpretaciones clave:**
- $a_T$: Cambio en **rapidez** (magnitud de velocidad).
- $a_N$: Cambio en **dirección** (necesario para trayectorias curvas).

**Casos límite:**
- **Movimiento rectilíneo:** $\\kappa = 0 \\Rightarrow a_N = 0$
- **Movimiento uniforme:** $dv/dt = 0 \\Rightarrow a_T = 0$
- **Movimiento circular uniforme:** $a_T = 0$, $a_N = v^2/R$

**Aplicaciones prácticas:**
1. **Seguridad vehicular:** Diseño de curvas con peralte adecuado.
2. **Ingeniería aeroespacial:** Trayectorias de cohetes y satélites.
3. **Robótica:** Control preciso de manipuladores.
4. **Deportes:** Diseño de instalaciones deportivas.

**Relación con temas anteriores:**
- La curvatura $\\kappa$ determina $a_N$.
- Los vectores de Frenet $\\mathbf{T}$ y $\\mathbf{N}$ proporcionan la base natural.
- La longitud de arco $s$ da el parámetro intrínseco.

**Próximo tema:** Veremos cómo estas ideas se extienden a **coordenadas polares**, útiles para problemas con simetría radial.

**Ejercicio final:** Una partícula se mueve según $\\mathbf{r}(t) = \\langle e^t\\cos t, e^t\\sin t \\rangle$. Demostrar que:
1. $a_T = \\sqrt{2}e^t$
2. $a_N = \\sqrt{2}e^t$
3. $\\|\\mathbf{a}\\| = 2e^t$
4. El ángulo entre $\\mathbf{a}$ y $\\mathbf{v}$ es constante e igual a 45°.
        `,
      },
    ],
  },
  "velocidad-aceleracion-polares": {
    title: "Courses.velocidad-aceleracion-polares.title",
    description: "Courses.velocidad-aceleracion-polares.description",
    course: [
      {
        title: "Sistema de coordenadas polares: Vectores unitarios móviles",
        text: `
El **sistema de coordenadas polares** es particularmente útil para describir movimientos con simetría radial o rotacional. A diferencia de las coordenadas cartesianas con vectores unitarios fijos ($\\mathbf{i}, \\mathbf{j}, \\mathbf{k}$), en polares los vectores unitarios dependen de la posición.

**Definición de los vectores unitarios polares:**

1. **Vector radial unitario** $\\mathbf{e}_r$:
   - Dirección: Apunta radialmente hacia afuera desde el origen.
   - Expresión en cartesianas: $\\mathbf{e}_r = \\langle \\cos\\theta, \\sin\\theta \\rangle$

2. **Vector transversal unitario** $\\mathbf{e}_\\theta$:
   - Dirección: Perpendicular a $\\mathbf{e}_r$, en dirección de $\\theta$ creciente (antihorario).
   - Expresión en cartesianas: $\\mathbf{e}_\\theta = \\langle -\\sin\\theta, \\cos\\theta \\rangle$

**Propiedades importantes:**
- Ortogonalidad: $\\mathbf{e}_r \\cdot \\mathbf{e}_\\theta = 0$
- Norma unitaria: $\\|\\mathbf{e}_r\\| = \\|\\mathbf{e}_\\theta\\| = 1$
- Dependencia angular: $\\frac{d\\mathbf{e}_r}{d\\theta} = \\mathbf{e}_\\theta$, $\\frac{d\\mathbf{e}_\\theta}{d\\theta} = -\\mathbf{e}_r$
        `,
        form: {
          question:
            "¿Cuál es la expresión correcta de $\\mathbf{e}_r$ en coordenadas cartesianas?",
          options: [
            "$\\langle \\cos\\theta, \\sin\\theta \\rangle$",
            "$\\langle -\\sin\\theta, \\cos\\theta \\rangle$",
            "$\\langle r\\cos\\theta, r\\sin\\theta \\rangle$",
            "$\\langle \\sin\\theta, \\cos\\theta \\rangle$",
          ],
          answer: 0,
        },
        videoUrl: "https://ejemplo.com/videos/vectores-unitarios-polares",
      },
      {
        title: "Derivadas temporales de los vectores unitarios polares",
        text: `
Los vectores unitarios polares cambian con el tiempo cuando la partícula se mueve, ya que $\\theta = \\theta(t)$. Esto es crucial para calcular velocidades y aceleraciones.

**Derivadas usando regla de la cadena:**
Dado que $\\mathbf{e}_r = \\mathbf{e}_r(\\theta(t))$ y $\\mathbf{e}_\\theta = \\mathbf{e}_\\theta(\\theta(t))$, tenemos:

1. **Derivada de $\\mathbf{e}_r$:**
$$
\\frac{d\\mathbf{e}_r}{dt} = \\frac{d\\mathbf{e}_r}{d\\theta} \\cdot \\frac{d\\theta}{dt} = \\mathbf{e}_\\theta \\cdot \\dot{\\theta}
$$

2. **Derivada de $\\mathbf{e}_\\theta$:**
$$
\\frac{d\\mathbf{e}_\\theta}{dt} = \\frac{d\\mathbf{e}_\\theta}{d\\theta} \\cdot \\frac{d\\theta}{dt} = (-\\mathbf{e}_r) \\cdot \\dot{\\theta} = -\\dot{\\theta} \\mathbf{e}_r
$$

**Notación de puntos:** $\\dot{\\theta} = \\frac{d\\theta}{dt}$, $\\ddot{\\theta} = \\frac{d^2\\theta}{dt^2}$, $\\dot{r} = \\frac{dr}{dt}$, $\\ddot{r} = \\frac{d^2r}{dt^2}$

**Resumen de fórmulas clave:**
$$
\\boxed{\\frac{d\\mathbf{e}_r}{dt} = \\dot{\\theta} \\mathbf{e}_\\theta}
$$
$$
\\boxed{\\frac{d\\mathbf{e}_\\theta}{dt} = -\\dot{\\theta} \\mathbf{e}_r}
$$

Estas relaciones muestran que la tasa de cambio de los vectores unitarios está directamente relacionada con la velocidad angular $\\dot{\\theta}$.
        `,
        videoUrl: "https://ejemplo.com/videos/derivadas-vectores-polares",
      },
      {
        title: "Vector posición en coordenadas polares",
        text: `
En coordenadas polares, el vector posición se expresa de manera más simple que en cartesianas:

**Expresión del vector posición:**
$$
\\mathbf{r}(t) = r(t) \\mathbf{e}_r(\\theta(t))
$$

Donde:
- $r(t)$: Distancia radial desde el origen (coordenada radial)
- $\\theta(t)$: Ángulo respecto al eje x positivo (coordenada angular)
- $\\mathbf{e}_r$: Vector unitario radial que depende de $\\theta(t)$

**Observaciones importantes:**
1. No hay componente en $\\mathbf{e}_\\theta$ en el vector posición.
2. El vector $\\mathbf{r}$ es siempre paralelo a $\\mathbf{e}_r$.
3. La magnitud de $\\mathbf{r}$ es simplemente $|\\mathbf{r}| = |r|$.

**Ejemplo:** Para una partícula en $r=3$ m, $\\theta=45^\\circ$:
$$
\\mathbf{r} = 3\\mathbf{e}_r = 3\\langle \\cos45^\\circ, \\sin45^\\circ \\rangle = 3\\left\\langle \\frac{\\sqrt{2}}{2}, \\frac{\\sqrt{2}}{2} \\right\\rangle = \\left\\langle \\frac{3\\sqrt{2}}{2}, \\frac{3\\sqrt{2}}{2} \\right\\rangle
$$

**Comparación con cartesianas:** En coordenadas cartesianas, $\\mathbf{r} = \\langle r\\cos\\theta, r\\sin\\theta \\rangle$, que es equivalente pero menos compacta.
        `,
        form: {
          question:
            "¿Por qué el vector posición en polares no tiene componente en $\\mathbf{e}_\\theta$?",
          options: [
            "Porque $\\mathbf{e}_\\theta$ es siempre cero",
            "Porque la posición está definida solo por la distancia radial desde el origen",
            "Porque $\\mathbf{e}_r$ y $\\mathbf{e}_\\theta$ son paralelos",
            "Por convención matemática",
          ],
          answer: 1,
        },
      },
      {
        title: "Velocidad en coordenadas polares: Derivación completa",
        text: `
Para encontrar la velocidad, derivamos el vector posición $\\mathbf{r} = r\\mathbf{e}_r$ respecto al tiempo:

**Aplicando regla del producto:**
$$
\\mathbf{v} = \\frac{d\\mathbf{r}}{dt} = \\frac{d}{dt}(r \\mathbf{e}_r) = \\frac{dr}{dt} \\mathbf{e}_r + r \\frac{d\\mathbf{e}_r}{dt}
$$

**Sustituyendo $\\frac{d\\mathbf{e}_r}{dt} = \\dot{\\theta}\\mathbf{e}_\\theta$:**
$$
\\mathbf{v} = \\dot{r} \\mathbf{e}_r + r \\dot{\\theta} \\mathbf{e}_\\theta
$$

**Componentes de la velocidad:**
1. **Componente radial:** $v_r = \\dot{r}$
   - Mide el cambio en la distancia al origen.
   - $v_r > 0$: La partícula se aleja del origen.
   - $v_r < 0$: La partícula se acerca al origen.

2. **Componente transversal:** $v_\\theta = r\\dot{\\theta}$
   - Mide la velocidad perpendicular a la dirección radial.
   - Relacionada con el "barrido angular".

**Magnitud de la velocidad:**
$$
v = \\| \\mathbf{v} \\| = \\sqrt{v_r^2 + v_\\theta^2} = \\sqrt{\\dot{r}^2 + (r\\dot{\\theta})^2}
$$

**Ejemplo:** Planeta en órbita circular ($r = R$ constante):
- $\\dot{r} = 0$ (no hay movimiento radial)
- $v = R\\dot{\\theta}$ (velocidad puramente transversal)
        `,
        videoUrl: "https://ejemplo.com/videos/velocidad-coordenadas-polares",
      },
      {
        title: "Aceleración en coordenadas polares: Derivación detallada",
        text: `
Derivamos la expresión de velocidad para obtener la aceleración:

**Partiendo de:** $\\mathbf{v} = \\dot{r}\\mathbf{e}_r + r\\dot{\\theta}\\mathbf{e}_\\theta$

**Aplicando regla del producto a cada término:**
$$
\\mathbf{a} = \\frac{d\\mathbf{v}}{dt} = \\frac{d}{dt}(\\dot{r}\\mathbf{e}_r) + \\frac{d}{dt}(r\\dot{\\theta}\\mathbf{e}_\\theta)
$$

**Primer término:** $\\frac{d}{dt}(\\dot{r}\\mathbf{e}_r) = \\ddot{r}\\mathbf{e}_r + \\dot{r}\\frac{d\\mathbf{e}_r}{dt} = \\ddot{r}\\mathbf{e}_r + \\dot{r}(\\dot{\\theta}\\mathbf{e}_\\theta)$

**Segundo término:** $\\frac{d}{dt}(r\\dot{\\theta}\\mathbf{e}_\\theta) = \\frac{d}{dt}(r\\dot{\\theta})\\mathbf{e}_\\theta + r\\dot{\\theta}\\frac{d\\mathbf{e}_\\theta}{dt}$
Donde:
- $\\frac{d}{dt}(r\\dot{\\theta}) = \\dot{r}\\dot{\\theta} + r\\ddot{\\theta}$
- $\\frac{d\\mathbf{e}_\\theta}{dt} = -\\dot{\\theta}\\mathbf{e}_r$

Entonces:
$$
\\frac{d}{dt}(r\\dot{\\theta}\\mathbf{e}_\\theta) = (\\dot{r}\\dot{\\theta} + r\\ddot{\\theta})\\mathbf{e}_\\theta + r\\dot{\\theta}(-\\dot{\\theta}\\mathbf{e}_r)
$$

**Sumando todos los términos:**
$$
\\mathbf{a} = [\\ddot{r}\\mathbf{e}_r + \\dot{r}\\dot{\\theta}\\mathbf{e}_\\theta] + [(\\dot{r}\\dot{\\theta} + r\\ddot{\\theta})\\mathbf{e}_\\theta - r\\dot{\\theta}^2\\mathbf{e}_r]
$$

**Agrupando componentes:**
$$
\\mathbf{a} = (\\ddot{r} - r\\dot{\\theta}^2)\\mathbf{e}_r + (r\\ddot{\\theta} + 2\\dot{r}\\dot{\\theta})\\mathbf{e}_\\theta
$$

**Fórmula final de aceleración en polares:**
$$
\\boxed{\\mathbf{a} = (\\ddot{r} - r\\dot{\\theta}^2)\\mathbf{e}_r + (r\\ddot{\\theta} + 2\\dot{r}\\dot{\\theta})\\mathbf{e}_\\theta}
$$
        `,
        form: {
          question:
            "En la expresión $\\mathbf{a} = (\\ddot{r} - r\\dot{\\theta}^2)\\mathbf{e}_r + (r\\ddot{\\theta} + 2\\dot{r}\\dot{\\theta})\\mathbf{e}_\\theta$, ¿qué representa el término $-r\\dot{\\theta}^2$?",
          options: [
            "Aceleración angular",
            "Aceleración centrípeta",
            "Aceleración de Coriolis",
            "Aceleración tangencial",
          ],
          answer: 1,
        },
        videoUrl: "https://ejemplo.com/videos/aceleracion-coordenadas-polares",
      },
      {
        title: "Interpretación física de los términos de aceleración",
        text: `
**Componente radial $a_r = \\ddot{r} - r\\dot{\\theta}^2$:**
1. **$\\ddot{r}$:** Aceleración radial propiamente dicha (cambio en la tasa de acercamiento/alejamiento).
2. **$-r\\dot{\\theta}^2$:** **Aceleración centrípeta** (siempre negativa, apunta hacia el origen).
   - Necesaria para mantener el movimiento curvilíneo.
   - En movimiento circular puro: $a_r = -R\\omega^2$ (donde $\\omega = \\dot{\\theta}$).

**Componente transversal $a_\\theta = r\\ddot{\\theta} + 2\\dot{r}\\dot{\\theta}$:**
1. **$r\\ddot{\\theta}$:** Aceleración angular escalada por el radio.
   - Relacionada con el torque aplicado.
2. **$2\\dot{r}\\dot{\\theta}$:** **Aceleración de Coriolis.**
   - Aparece cuando hay movimiento radial ($\\dot{r} \\neq 0$) y movimiento angular ($\\dot{\\theta} \\neq 0$) simultáneos.
   - Es perpendicular tanto a la velocidad radial como a la angular.

**Ejemplo físico:** Un patinador que gira y acerca los brazos al cuerpo:
- Al reducir $r$ ($\\dot{r} < 0$) manteniendo momento angular constante ($r^2\\dot{\\theta} = cte$):
  - $\\dot{\\theta}$ aumenta (se gira más rápido)
  - El término de Coriolis $2\\dot{r}\\dot{\\theta}$ es significativo
        `,
        videoUrl:
          "https://ejemplo.com/videos/interpretacion-terminos-aceleracion",
      },
      {
        title: "Caso especial: Movimiento circular",
        text: `
Para **movimiento circular** ($r = R$ constante):

**Condiciones:**
- $\\dot{r} = 0$, $\\ddot{r} = 0$
- $\\dot{\\theta} = \\omega$ (velocidad angular, posiblemente variable)

**Velocidad:**
$$
\\mathbf{v} = R\\omega \\mathbf{e}_\\theta \\quad \\text{(puramente transversal)}
$$
Magnitud: $v = R|\\omega|$

**Aceleración:**
$$
\\mathbf{a} = (-R\\omega^2)\\mathbf{e}_r + (R\\dot{\\omega})\\mathbf{e}_\\theta
$$

**Subcasos importantes:**

1. **Movimiento circular uniforme ($\\omega$ constante):**
   - $\\dot{\\omega} = 0$
   - $\\mathbf{a} = -R\\omega^2\\mathbf{e}_r$ (puramente centrípeta, hacia el centro)

2. **Movimiento circular no uniforme ($\\omega$ variable):**
   - Componente radial: $a_r = -R\\omega^2$ (centrípeta)
   - Componente transversal: $a_\\theta = R\\alpha$ donde $\\alpha = \\dot{\\omega}$ (aceleración angular)

**Ejemplo numérico:** Un disco gira con $\\theta(t) = 2t^2$ rad. En $t=1$ s, $R=0.5$ m:
- $\\omega = \\dot{\\theta} = 4t = 4$ rad/s
- $\\alpha = \\ddot{\\theta} = 4$ rad/s²
- $v = R\\omega = 0.5\\times4 = 2$ m/s
- $a_r = -R\\omega^2 = -0.5\\times16 = -8$ m/s²
- $a_\\theta = R\\alpha = 0.5\\times4 = 2$ m/s²
- $\\|\\mathbf{a}\\| = \\sqrt{(-8)^2 + 2^2} = \\sqrt{68} \\approx 8.25$ m/s²
        `,
        form: {
          question:
            "En movimiento circular uniforme, ¿cuál es la dirección de la aceleración?",
          options: [
            "Puramente tangencial ($\\mathbf{e}_\\theta$)",
            "Puramente radial hacia afuera",
            "Puramente radial hacia adentro",
            "Tiene componentes radial y tangencial",
          ],
          answer: 2,
        },
      },
      {
        title: "Momento angular y fuerzas centrales",
        text: `
**Momento angular en polares:**
Para una partícula de masa $m$, el momento angular respecto al origen es:
$$
\\mathbf{L} = \\mathbf{r} \\times \\mathbf{p} = \\mathbf{r} \\times (m\\mathbf{v})
$$

En coordenadas polares ($\\mathbf{r} = r\\mathbf{e}_r$, $\\mathbf{v} = \\dot{r}\\mathbf{e}_r + r\\dot{\\theta}\\mathbf{e}_\\theta$):
$$
\\mathbf{L} = m r \\mathbf{e}_r \\times (\\dot{r}\\mathbf{e}_r + r\\dot{\\theta}\\mathbf{e}_\\theta) = m r^2 \\dot{\\theta} (\\mathbf{e}_r \\times \\mathbf{e}_\\theta)
$$

Como $\\mathbf{e}_r \\times \\mathbf{e}_\\theta = \\mathbf{k}$ (vector unitario perpendicular al plano):
$$
\\mathbf{L} = m r^2 \\dot{\\theta} \\mathbf{k}
$$

**Magnitud del momento angular:** $L = m r^2 \\dot{\\theta}$

**Fuerzas centrales:**
Una fuerza es **central** si $\\mathbf{F} = F(r)\\mathbf{e}_r$ (siempre radial, solo depende de $r$).

**Consecuencias:**
1. El torque $\\boldsymbol{\\tau} = \\mathbf{r} \\times \\mathbf{F} = \\mathbf{0}$ (paralelos)
2. $\\frac{d\\mathbf{L}}{dt} = \\boldsymbol{\\tau} = \\mathbf{0}$ ⇒ $\\mathbf{L}$ es constante
3. $r^2\\dot{\\theta} = \\frac{L}{m} =$ constante (segunda ley de Kepler)

**Ejemplo: Movimiento planetario bajo gravedad:**
- $\\mathbf{F} = -\\frac{GMm}{r^2}\\mathbf{e}_r$ (fuerza central atractiva)
- Momento angular constante ⇒ áreas iguales en tiempos iguales
        `,
        videoUrl:
          "https://ejemplo.com/videos/momento-angular-fuerzas-centrales",
      },
      {
        title: "Aplicaciones en ingeniería: Mecanismos y robótica",
        text: `
**1. Mecanismos de biela-manivela:**
- Conversión de movimiento rotacional a lineal y viceversa.
- En coordenadas polares: La manivela tiene $r$ constante, $\\theta$ variable.
- El pistón tiene movimiento puramente radial ($\\theta$ constante).

**Análisis cinemático:**
Para una manivela de longitud $R$, velocidad angular constante $\\omega$:
- Posición: $\\mathbf{r} = R\\mathbf{e}_r(\\theta)$ con $\\theta = \\omega t$
- Velocidad: $\\mathbf{v} = R\\omega\\mathbf{e}_\\theta$
- Aceleración: $\\mathbf{a} = -R\\omega^2\\mathbf{e}_r$

**2. Brazos robóti\\cos articulados:**
- Coordenadas polares son ideales para robots con articulaciones rotacionales.
- Cada articulación define un $\\theta_i$, cada eslabón define un $r_i$.

**Ecuaciones de movimiento:**
Para un robot de 2 grados de libertad ($r$ y $\\theta$ variables):
$$
\\begin{cases}
F_r = m(\\ddot{r} - r\\dot{\\theta}^2) \\
F_\\theta = m(r\\ddot{\\theta} + 2\\dot{r}\\dot{\\theta})
\\end{cases}
$$
Donde $F_r$ y $F_\\theta$ son las fuerzas que deben aplicar los actuadores.

**3. Sistemas de seguimiento por radar:**
- Objetos se localizan por $(r, \\theta)$.
- Las derivadas $\\dot{r}$ y $\\dot{\\theta}$ dan velocidad relativa.
- Los términos de Coriolis son cruciales para predicción precisa.

**Ejemplo de diseño:** Un brazo robótico debe mover una carga de 5 kg desde $(r=0.5\\text{m}, \\theta=0)$ hasta $(r=1.0\\text{m}, \\theta=90^\\circ)$ en 2 segundos, con perfiles suaves. Calcular fuerzas máximas requeridas.
        `,
        form: {
          question:
            "En un mecanismo biela-manivela con manivela de longitud $R$ y velocidad angular constante $\\omega$, ¿qué tipo de aceleración experimenta el extremo de la manivela?",
          options: [
            "Solo aceleración tangencial",
            "Solo aceleración centrípeta",
            "Aceleración centrípeta y tangencial",
            "Solo aceleración de Coriolis",
          ],
          answer: 1,
        },
        videoUrl: "https://ejemplo.com/videos/aplicaciones-ingenieria-polares",
      },
      {
        title: "Extensión a coordenadas cilíndricas y esféricas",
        text: `
**Coordenadas cilíndricas:** $(r, \\theta, z)$ - Extensión natural de polares a 3D.

**Vectores unitarios:** $\\mathbf{e}_r$, $\\mathbf{e}_\\theta$, $\\mathbf{e}_z$ (este último fijo)

**Vector posición:** $\\mathbf{r} = r\\mathbf{e}_r + z\\mathbf{e}_z$

**Velocidad:** $\\mathbf{v} = \\dot{r}\\mathbf{e}_r + r\\dot{\\theta}\\mathbf{e}_\\theta + \\dot{z}\\mathbf{e}_z$

**Aceleración:** $\\mathbf{a} = (\\ddot{r} - r\\dot{\\theta}^2)\\mathbf{e}_r + (r\\ddot{\\theta} + 2\\dot{r}\\dot{\\theta})\\mathbf{e}_\\theta + \\ddot{z}\\mathbf{e}_z$

**Coordenadas esféricas:** $(\\rho, \\theta, \\phi)$ - Para problemas con simetría esférica.

**Relaciones con cartesianas:**
$$
\\begin{cases}
x = \\rho\\sin\\phi\\cos\\theta \\
y = \\rho\\sin\\phi\\sin\\theta \\
z = \\rho\\cos\\phi
\\end{cases}
$$

**Vectores unitarios:** $\\mathbf{e}_\\rho$, $\\mathbf{e}_\\theta$, $\\mathbf{e}_\\phi$ (todos móviles)

**Velocidad en esféricas (avanzado):**
$$
\\mathbf{v} = \\dot{\\rho}\\mathbf{e}_\\rho + \\rho\\dot{\\phi}\\mathbf{e}_\\phi + \\rho\\sin\\phi\\dot{\\theta}\\mathbf{e}_\\theta
$$

**Aplicación:** En ingeniería aeroespacial para trayectorias de misiles y satélites.
        `,
        videoUrl: "https://ejemplo.com/videos/extension-coordenadas-3d",
      },
      {
        title: "Resumen y ecuaciones fundamentales",
        text: `
**Resumen de fórmulas en coordenadas polares:**

1. **Vectores unitarios:**
   - $\\mathbf{e}_r = \\langle \\cos\\theta, \\sin\\theta \\rangle$
   - $\\mathbf{e}_\\theta = \\langle -\\sin\\theta, \\cos\\theta \\rangle$

2. **Derivadas temporales:**
   - $\\frac{d\\mathbf{e}_r}{dt} = \\dot{\\theta}\\mathbf{e}_\\theta$
   - $\\frac{d\\mathbf{e}_\\theta}{dt} = -\\dot{\\theta}\\mathbf{e}_r$

3. **Posición:** $\\mathbf{r} = r\\mathbf{e}_r$

4. **Velocidad:** $\\mathbf{v} = \\dot{r}\\mathbf{e}_r + r\\dot{\\theta}\\mathbf{e}_\\theta$

5. **Aceleración:** $\\mathbf{a} = (\\ddot{r} - r\\dot{\\theta}^2)\\mathbf{e}_r + (r\\ddot{\\theta} + 2\\dot{r}\\dot{\\theta})\\mathbf{e}_\\theta$

**Casos especiales importantes:**

1. **Movimiento radial puro ($\\dot{\\theta}=0$):**
   - $\\mathbf{v} = \\dot{r}\\mathbf{e}_r$, $\\mathbf{a} = \\ddot{r}\\mathbf{e}_r$

2. **Movimiento circular ($\\dot{r}=0$):**
   - $\\mathbf{v} = r\\dot{\\theta}\\mathbf{e}_\\theta$
   - $\\mathbf{a} = -r\\dot{\\theta}^2\\mathbf{e}_r + r\\ddot{\\theta}\\mathbf{e}_\\theta$

3. **Movimiento con momento angular constante ($r^2\\dot{\\theta}=h$):**
   - $\\dot{\\theta} = h/r^2$
   - $a_\\theta = 0$ (solo fuerza central)

**Consejos para resolución de problemas:**
1. Identificar si el problema tiene simetría radial o angular.
2. Elegir coordenadas polares cuando $r$ y/o $\\theta$ sean naturales.
3. Recordar que los vectores unitarios cambian con el tiempo.
4. Para fuerzas centrales, usar conservación del momento angular.

**Ejercicio de síntesis:** Una partícula se mueve en espiral según $r(t) = e^{-t}$, $\\theta(t) = 2t$. Calcular:
1. Velocidad y aceleración en $t=0$
2. Componentes tangencial y normal de la aceleración
3. Radio de curvatura de la trayectoria en $t=0$

**Solución guiada:**
1. $r(0)=1$, $\\dot{r}(0)=-1$, $\\ddot{r}(0)=1$, $\\dot{\\theta}(0)=2$, $\\ddot{\\theta}(0)=0$
2. $\\mathbf{v}(0) = -1\\mathbf{e}_r + 2\\mathbf{e}_\\theta$
3. $\\mathbf{a}(0) = (1 - 1\\times4)\\mathbf{e}_r + (0 + 2\\times(-1)\\times2)\\mathbf{e}_\\theta = (-3\\mathbf{e}_r - 4\\mathbf{e}_\\theta)$
4. Continuar cálculo...
        `,
      },
    ],
  },
};
