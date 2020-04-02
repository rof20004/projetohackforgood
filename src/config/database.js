module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: 'docker',
  database: 'abewa',
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};
