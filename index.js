const mongoose = require('mongoose');

const Dishes = require('./models/dishes');

const url = 'mongodb://localhost:27017/conFusion';  
//const url = 'mongodb+srv://duyquoc:Du631897@cluster0.telwi.mongodb.net/test';
/* const connect = mongoose.connect(url, {useNewUrlParser: true}); */
const connect = mongoose.connect(url);

connect.then((db) => {

    console.log('Connected correctly to server');

    /* var newDish = Dishes({
        name: 'Uthappizza',
        description: 'test'
    }); */
    // thay the cai tren bang cai duoi nay
    Dishes.create({                                    //create roi se auto save, con cach cu phai save()
        name: 'Uthappizza',
        description: 'test'
    })
    // newDish.save();
    .then((dish) => {
        console.log(dish);

        return Dishes.find({});
    })
    .then((dishes) => {
        console.log(dishes);

        return Dishes.remove({});
    })
    .then(() => {
        return mongoose.connection.close();
    })
    .catch((err) => {
        console.log(err);
    });

});