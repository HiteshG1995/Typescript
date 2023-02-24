
type Person3 = {
    name: string 
}

type Email = {
    email: string;
}

type Phone = {
    phone: number
}
let details = {
    name: "Hitesh",
    email:"hiteshghadage@gmail.com",
    phone:56467433
}

type ContactDetails = 
& Person3
& Email
& Phone;

function contact(details: ContactDetails) {
    console.log(`Dear ${details.name} .
    I hope you have received our email at ${details.email}.
    We will call you at ${details.phone} shortly ,`) ;
}


