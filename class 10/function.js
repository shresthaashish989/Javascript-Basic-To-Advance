class Student{
    constructor(name,postion){
        this.name=name
        this.postion=postion

    }

    //method   under the class all the functio is called metthod

     show(){
        return `student name is ${this.name}.Student postion is ${this.postion}`

    }
}

const hero=new Student('Ashish Shrestha','Fullstack developer')
document.write(hero.show())
