class School {
  constructor(name, level, numberOfStudents) {
    this._name = name;
    this._level = level;
    this._numberOfStudents = numberOfStudents;
  }
  
  get name(){
    return this._name;
  }
  
  get level(){
    return this._level;
  }
  
  get numberOfStudents(){
    return this._numberOfStudents;
  }
  
  set numberOfStudents(newNumberOfStudents) {
    if (typeof newNumberOfStudents === 'number'){
    	this._numberOfStudents = number;
    } else {
      console.log('Invalid input: numberOfStudents must be set to a Number.');
    }
  }
  
  quickFacts(){
    console.log(`${this.name} educates ${this.numberOfStudents} students at the ${this.level} school level.`);
  }
  
  static pickSubstituteTeacher(substituteTeachers){
    let randomTeacherIndex = Math.floor(Math.random() * substituteTeachers.length );
    return substituteTeachers[randomTeacherIndex];
  }
}

class PrimarySchool extends School{
  constructor(name, numberOfStudents,pickupPolicy){
    super(name, 'primary', numberOfStudents);
    this._pickupPolicy = pickupPolicy;
  }
  get pickupPolicy(){
    return this._pickupPolicy;
  }
}

class MiddleSchool extends School{
  
}

class HighSchool extends School{
  constructor(name, numberOfStudents, sportsTeams){
    super(name, 'high', numberOfStudents);
    this._sportsTeams = sportsTeams;
  }
  
  get sportsTeams(){
    console.log(this._sportsTeams);
    return this._sportsTeams;
  }
  
  
}

class SchoolCatalog{
  constructor(arrayOfSchools){
    this._arrayOfSchools = arrayOfSchools;
  }
  addSchool(schoolItem){
    if (schoolItem instanceof School){
      this._arrayOfSchools.push(schoolItem)
    } else {
      console.log('You are trying to add a non-School item');
    }
  }
  get arrayOfSchools(){
    console.log(this._arrayOfSchools);
    return this._arrayOfSchools;
  }
}
const mirceaEliade = new PrimarySchool('Mircea Eliade', 514, 'Students must be picked up by a parent, guardian or a family member over the age of 13');
//console.log(mirceaEliade.level);
//mirceaEliade.quickFacts();
//let teachersArray = ['Helen', 'Jane', 'Joe', 'Allan'];
//console.log(teachersArray.length);

//console.log(School.pickSubstituteTeacher(teachersArray));
//console.log(School.pickSubstituteTeacher(['Jamal Crawford', 'Lou Williams', 'J. R. Smith', 'James Harden', 'Jason Terry', 'Manu Ginobli']));
//alSmith.sportsTeams


const alSmith = new HighSchool('Al E. Smith', 415, ['Baseball', 'Basketball', 'Volleyball', 'Track and Field']);
const colegiulCarol = new HighSchool('Colegiul Carol', 764, ['Basketball', 'Football']);
const elenaCuza = new HighSchool('Elena Cuza', 352, ['Innot', 'Baseball']);
const stefanOdobleja = new HighSchool('Stefan Odobleja', 654, ['Sah', 'Fotbal']);

const arrayOfHighSchools = [];

arrayOfHighSchools.push(alSmith);
arrayOfHighSchools.push(colegiulCarol);
arrayOfHighSchools.push(elenaCuza);

//console.log(arrayOfHighSchools);

const highSchoolCatalog = new SchoolCatalog(arrayOfHighSchools);
highSchoolCatalog.arrayOfSchools;

highSchoolCatalog.addSchool(stefanOdobleja);

highSchoolCatalog.arrayOfSchools;



