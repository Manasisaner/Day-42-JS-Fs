//UC2-adding regex patterns for each properties
class AddressBook
{
    firstName;
    lastName;
    address;
    city;
    state;
    zip;
    phone;
    email;
    constructor(firstName,lastName,address,city,state,zip,phone,email)
    {
        this.firstName=firstName;
        this.lastName=lastName;
        this.address=address;
        this.city=city;
        this.state=state;
        this.zip=zip;
        this.phone=phone;
        this.email=email;
    }
    get firstName(){return this._firstName;}
    set(firstName)
    {
        let nameRegex= RegExp('^[A-Z]{1}[a-z]{2,}');
        if (nameRegex.test(firstName))
        this._firstName=firstName;
        else throw 'Firstname is invalid';
    }
    get lastName(){return this._lastName;}
    set (lastName)
    {
        let nameRegex= RegExp('^[A-Z]{1}[a-z]{2,}');
        if (nameRegex.test(lastName))
        this._lastName=lastName;
        else throw 'Lastname is invalid';
    }
    get address(){return this._address;}
    set(address)
    {
        let adRegex= RegExp('^[A-Z]{1}[a-z0-9]{3,}');
        if(adRegex.test(address))
        this._address = address;
        else throw 'Address is invalid';
    }
    get city(){ return this._city;}
    set(city)
    {
        let cityRegex = RegExp('^[A-Z]{1}[a-z]{3,}');
        if(cityRegex.test(city))
        this._city=city;
        else throw 'City name is invalid';
    }
    get state(){return this._state;}
    set(state)
    {
        let stateRegex = RegExp('^[A-Z]{1}[a-z]{3,}');
        if(stateRegex.test(state))
        this._state=state;
        else throw 'State name is invalid';
    }
    get zip(){return this._zip;}
    set(zip)
    {
        let zipRegex = RegExp('^[0-9 ]{6}');
        if(zipRegex.test(zip))
        this._zip=zip;
        else throw 'Zip is invalid';
    }
    get phone(){return this._phone;}
    set(phone)
    {
        let phoneRegex = RegExp('^[0-9]{10}');
        if(phoneRegex.test(phone))
        this._phone=phone;
        else throw 'Phone number is invalid';
    }
    get email(){return this._email;}
    set(email)
    {
        let emailRegex = RegExp('^[a-zA-Z0-9]+([+-_.][a-zA-Z0-9]+)*[@][a-zA-Z0-9]+[.][a-zA-Z]+([.][a-zA-Z]{2})*$');
        if(emailRegex.test(email))
        this._email=email;
        else throw 'Email pattern not valid';
    }

    toString()
    {
        return "\nFirstName:"+this.firstName+" ,LastName:"+this.lastName+" ,Address:"+this.address+" ,City:"+this.city+" ,State:"+this.state+" Zip:"+this.zip+" ,Phone:"+this.phone+",Email:"+this.email;
    }
}
try
{
    let address = new AddressBook("Shiva","Kushwaha","Ghat","Banaras","UP",838372,9393932090,"shiva@gmail.com");
    console.log(address);
}
catch(e){
    console.error(e);
}
//UC3-Defining an address book array and storing the addresses
let addressArr = new Array();
try
{
    let address1 = new AddressBook("Ravi","Singh","UP65","VNS","UP",838372,9393932090,"ravi@gmail.com");
    let address2= new AddressBook("Amit","Patel","GJ66","Surat","Gujarat",612302,9982705303,"amit@gmail.com")
    let address3= new AddressBook("Shiva","Patel","GJ67","Surat","Gujarat",612302,9982705303,"shiv@gmail.com")

    addressArr.push(address1);
    addressArr.push(address2);
    addressArr.push(address3);
    console.log(addressArr);
}
catch(e)
{
    console.error(e);
}
//UC4-Searching an address by using the firstname
function SearchName(addressbook)
{
    if(addressbook.firstName=="Amit") return addressbook;
}
let searchResult =addressArr.find(SearchName);
console.log("Result after searching "+searchResult);
//UC5-Delete an element using the firstname
function DeleteAddress(addressbook){
    let resultAddress = SearchName(addressbook);
    var index= addressArr.indexOf(resultAddress);
    return index;
}
let deleteIndex=addressArr.find(DeleteAddress);
console.log(addressArr.splice(deleteIndex,1)+" is deleted")

//UC6-Getting count of total address 
let n=0;
function GetTotal(a){
   if(a!=null){
       ++n;
   }
   return n;
}
console.log("Total count of addresses "+addressArr.reduce(GetTotal,0));
//UC7-Checking for duplicate entries
function CheckDuplicate(a)
{
    if(a.firstName.includes("Punit"))
    ++n;
return n;
}
let count = addressArr.filter(CheckDuplicate);
if(count=1)
{
    console.log("There is no duplicate entry for the name");
}
else if(count>1)
{
    console.log("There is duplicate entry for the given name")

}
//UC8-Getting person's name from a city/state
let peopleFromCity=addressArr.filter(a=>a.city.includes("Surat"));
console.log("People from the given city are: "+peopleFromCity);
//UC9-Viewing person by city/state
function ReturnCityMap(a)
{
    return a.city+ "->"+a.firstName;
}
let addressCityMap= addressArr.map(ReturnCityMap);
console.log("Viewing the people by their city")
console.log(addressCityMap);
//UC10-Getting count of people living in a city/state
console.log("Number of people from that city is: "+peopleFromCity.length);
//UC11-Sorting the address book according to person's name
let sortedArray = addressArr.sort(a=>a.firstName);
console.log(sortedArray);
//UC12 -Sorting the address book according to city,state or zip
let sortedArray_state= addressArr.sort((a,b)=>a.state.localeCompare(b.state));
console.log(sortedArray_state);
let sortedArray_city = addressArr.sort((a,b)=>a.city.localeCompare(b.city));
console.log(sortedArray_city);
let sortedArray_zip = addressArr.sort((a,b)=>(a.zip>b.zip)?1:(b.zip>a.zip)?-1:0);
console.log(sortedArray_zip);