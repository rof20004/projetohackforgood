import Skill from '../models/Skill';

class SkillController {
  async store(req, res) {
    const skillExists = await Skill.findOne({
      where: { description: req.body.description },
    });

    if (skillExists) {
      return res.status(400).json({ error: 'Skill already exists.' });
    }

    const { description } = await Skill.create(req.body);

    return res.json({
      description,
    });
  }

  async index(req, res) {
    const skill = await Skill.findAll();

    return res.json({ skill });
  }

  async update(req, res) {
    const { skillId, description } = req.body;

    const skill = await Skill.findByPk(skillId);

    if (description !== skill.description) {
      const skillExists = await Skill.findOne({ where: { description } });

      if (skillExists) {
        return res.status(400).json({ error: 'Skill already exists' });
      }
    }

    const response = await skill.update(req.body);

    return res.json({ response });
  }

  async delete(req, res) {
    const { skillId } = req.body;

    const skillExists = await Skill.findByPk(skillId);

    if (!skillExists) {
      return res.json({ error: 'Skill does not exist' });
    }

    await Skill.destroy({
      where: { id: req.body.skillId },
    });

    return res.json();
  }
}

export default new SkillController();
