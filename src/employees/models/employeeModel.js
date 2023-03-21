module.exports = (sequelize, DataTypes) => {

    const Employee = sequelize.define("employee", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        name: {
            type: DataTypes.TEXT,
        },
        phone_number:{
            type: DataTypes.TEXT,
        },
        age:{
            type: DataTypes.INTEGER
        },
        department_id: {
            type: DataTypes.INTEGER,
            references: {
              model: { tableName: 'department' }, 
              key: 'id' 
            },
            allowNull: false
        },
            
    },{timestamps: false})

    return Employee

}