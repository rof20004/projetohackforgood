import * as Yup from 'yup';
import UserSkill from '../models/UserSkill';

class UserSkillController {
  async store(req, res) {
    try {
      const skills = req.body;
      if (!Array.isArray(skills) || skills.length === 0) {
        return res.status(400).json({ error: 'Request data is not valid' });
      }

      const userId = skills[0].userId;
      await UserSkill.destroy({ where: { userId } });
      await UserSkill.bulkCreate(req.body, { validate: true });
      return res.status(200).json({ message: 'Skills added successfully' });
    } catch (error) {
      console.log(error.message);
      return res.status(400).json({ error: 'Error when inserting one or more skills' });
    }
  }

  async index(req, res) {
    try {
      const userId = req.query.userId;
      if (!userId) {
        return res.status(400).json({ error: 'userId was not informed' });
      }

      const userSkill = await UserSkill.findAll({ where: { userId } });
      return res.status(200).json(userSkill);
    } catch (error) {
      console.log(error.message);
      return res.status(400).json({ error: 'User has no skills' });
    }
  }
}

export default new UserSkillController();
