const schema = mongoose.Schema({
    name: String
});

schema.methods.userName = function () {
    console.log(this.get('name'));
};

const User = mongoose.model('User', schema);

const user = new User({
    name: 'Admin'
});

user.save()
    .then(() => user.userName());