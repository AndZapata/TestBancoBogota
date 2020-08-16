module.exports = (sequelize, Sequelize) => {
  const Person = sequelize.define("person", {
    person_id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    birth: {
      type: Sequelize.DATE,
      allowNull: false,
    },
    father_id: {
      type: Sequelize.INTEGER,
    },
    mother_id: {
      type: Sequelize.INTEGER,
    },
    child_id: {
      type: Sequelize.INTEGER,
    },
    "active/inactive": {
      type: Sequelize.BOOLEAN,
      defaultValue: true,
    },
  });

  Person.belongsTo(Person, { foreignKey: "father_id" });
  Person.belongsTo(Person, { foreignKey: "mother_id" });
  Person.belongsTo(Person, { foreignKey: "child_id" });

  return Person;
};
