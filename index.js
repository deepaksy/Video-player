var person = {
    firstname : "Deepak",
    lastname : "Suryawanshi",
    age : 20,
    eyeColor : "black",
    fullname : function(){
        return this.firstname + " " + this.lastname;
    },
    desc : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos dolore corporis debitis odit officiis enim inventore aliquam repudiandae! Nulla commodi, deserunt distinctio enim iure quos recusandae ducimus, architecto eos, explicabo possimus debitis est? Accusamus.'
};

document.getElementById("demo").innerHTML =
person.desc.toUpperCase();