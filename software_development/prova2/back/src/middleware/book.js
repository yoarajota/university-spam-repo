import _ from "lodash";

const book = [
  { name: "_id", type: "text", disabled: true, description: "Identificador" },
  { name: "title", type: "string", description: "Título" },
  {
    name: "description",
    type: "textarea",
    description: "Descrição",
    validations: [{ type: "min_char", value: 30 }],
  },
  {
    name: "pageCount",
    type: "number",
    description: "Contagem de Páginas",
    validations: [
      { type: "min", value: 10 },
      { type: "not_null", value: 1 },
    ],
  },
  {
    name: "excerpt",
    type: "textarea",
    description: "Excerto",
    validations: [{ type: "max_char", value: 425 }],
  },
  {
    name: "publishDate",
    type: "date",
    description: "Data de Publicação",
    validations: [{ type: "not_null", value: 1 }],
  },
];

const validate = (state) => {
  for (let key in state) {
    const { validations, description } = _.find(book, (o) => o.name === key);

    if (validations) {
      for (const validation of validations) {
        switch (validation.type) {
          case "min":
            if ((state[key] || 0) < validation.value) {
              throw Error(
                `O valor de ${description} deve ser maior que ${validation.value}!`
              );
            }
            break;
          case "min_char":
            if ((state[key]?.length || 0) < validation.value) {
              throw Error(
                `O tamanho de ${description} deve ser maior que ${validation.value}!`
              );
            }
            break;
          case "max_char":
            if ((state[key]?.length || 0) > validation.value) {
              throw Error(
                `O tamanho de ${description} deve ser menor que ${validation.value}!`
              );
            }
            break;
          case "not_null":
            if (validation.value && !state[key]) {
              throw Error(`${description} é obrigatório!`);
            }
            break;
          default:
            break;
        }
      }
    }
  }
};

const validationMiddleware = (req, res, next) => {
  const state = req.body;

  try {
    validate(state);
    next();
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: error.message });
  }
};

export default validationMiddleware;
