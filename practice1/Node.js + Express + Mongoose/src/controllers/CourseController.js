// Importando as dependências
import Course from "../models/Course.js";

// Vamos exportar um objeto com algumas funções
const CourseController = {
  // Vai retornar todos os cursos de nosso banco de dados
  async index(req, res) {
    let { page, pageSize } = req.query;

    page = parseInt(page, 10) || 1;
    pageSize = parseInt(pageSize, 10) || 50;

    // retorna os cursos de nosso banco de dados
    const courses = await Course.aggregate([
      {
        $facet: {
          metadata: [{ $count: "totalCount" }],
          data: [{ $skip: (page - 1) * pageSize }, { $limit: pageSize }],
        },
      },
    ]);

    console.log(courses);

    // vamos retornar em formato JSON
    return res.json({
      data: courses?.[0]?.data ?? [],
      totalCount: courses[0].metadata?.[0]?.totalCount ?? 0,
      page,
      pageSize,
    });
  },

  async store(req, res) {
    const course = await Course.create(req.body);
    // Vamos retornar o curso que criamos
    return res.json(course);
  },

  // Mostrar o detalhe de um curso
  async show(req, res) {
    const course = await Course.findById(req.params.id);
    // Vamos retornar o course que encontramos
    return res.json(course);
  },

  // Atualizar um curso
  async update(req, res) {
    // procura um curso pelo ID e atualiza ele
    const course = await Course.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    // Vamos retornar o curso que encontramos
    return res.json(course);
  },

  // Excluir um curso
  async delete(req, res) {
    await Course.findByIdAndDelete(req.params.id);
    // Vamos retornar uma mensagem de sucesso sem conteúdo
    return res.status(204).send();
  },
};

export default CourseController;