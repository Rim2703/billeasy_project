module.exports = (sequelize, DataTypes) => {

    const Department = sequelize.define("department", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        name: {
            type: DataTypes.TEXT,
        },
        employee_count: {
            type: DataTypes.INTEGER
        },
        
    })

    return Department

}