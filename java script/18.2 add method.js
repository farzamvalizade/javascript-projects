let student={
    firstname:"farzam",
    lastname:"valizade",
    age:14,
    status:true,
    fields:["programming","nursing"],
    fullname(){
        return `${this.firstname} ${this.lastname}`
    },
    say_Hello(){
        console.log(`Hello ${this.fullname()}`)
    },
    showFields() {
		this.fields.forEach((field, index) => {
			console.log(`${index + 1}. ${field}`)
		})
    }
}
console.log(student.showFields())