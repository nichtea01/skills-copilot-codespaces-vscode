function skillsMember() {
    var member = {
        name: 'John Doe',
        age: 30,
        skills: ['js', 'html', 'css'],
        address: {
            city: 'New York',
            country: 'USA'
        },
        getSkills: function () {
            return this.skills;
        }
    };
    console.log(member.getSkills());
}