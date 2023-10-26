import { v4 } from 'uuid'

export default function router(app) {
    const courses = [
        {
            id: "66e9aa36-eac0-4667-b0ba-324a4d39cdc9",
            name: "Análise e Desenvolvimento de Sistemas",
            type: "Superior",
        },
        {
            id: "ddd9c637-7bef-416c-b4d1-91d291fbc1c2",
            name: "Técnico em Informática",
            type: "Técnico",
        },
    ];

    app.get("/", (req, res) => {
        res.json("Eu existo!");
    });

    app.get("/courses", (req, res) => {
        // Retorna todo o array de courses
        res.json(courses);
    });

    app.get("/courses/:id", (req, res) => {
        const { id } = req.params;
        const getCourse = courses.find((course) => course.id === id);
        if (!getCourse) {
            res.status(500).json({ error: "Curso não encontrado!" });
        } else {
            res.json(getCourse);
        }
    });

    app.post("/courses", (req, res) => {
        const { name, type } = req.body;
        const newCourse = { id: v4(), name, type };
        courses.push(newCourse);
        res.json(newCourse);
    });

    app.put("/courses/:id", (req, res) => {
        const { id } = req.params;
        const body = req.body;

        const courseIndex = courses.findIndex((course) => course.id === id);

        if (courseIndex < 0) {
            return res.status(500).json({ error: "Curso não encontrado!" });
        }

        const updatedCourse = { id, ...body };
        courses[courseIndex] = updatedCourse;
        res.json(updatedCourse);
    });

    app.delete("/courses/:id", (req, res) => {
        const { id } = req.params;
        const courseIndex = courses.findIndex((course) => course.id === id);

        if (courseIndex < 0) {
            return res.status(500).json({ error: "Curso não encontrado!" });
        }

        courses.splice(courseIndex, 1);
        res.status(200).json({ msg: "Curso excluído com sucesso!" });
    });

}
