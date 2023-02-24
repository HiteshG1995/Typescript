abstract class Car {
    

        Wheel(): string{
            return '4 wheeler'
        }
        checkAC(){
            return 'AC is available'
        }
        callFacility(){
            return 'Call facility is supported'
        }  
        

    abstract Price(): number;
    abstract getTotalSeats(): number;
    abstract Color(): string;
    abstract GPSsupport(): string;

    }

    

   

    class Toyota extends Car {

        Price(): number {
            return 340000
        }
        getTotalSeats(): number {
            return 5
        }
        Color(): string {
            return "Blue"
        }
        GPSsupport(): string {
            return "Not supported"
        }

    }

    class Hyundyai extends Car {

        Price(): number {
            return 2300000;
        }
        getTotalSeats(): number {
            return 7
            
        }
        Color(): string {
            return "Black"
        }
        GPSsupport(): string {
            return "Supported"
        }

    }
    
let objToyota = new Toyota()
let objHyundyai = new Hyundyai()

console.log(`****************WELCOME TO SHOWROOM*****************\n`);


console.log(`\nFEATURES OF TOYOTA\n`);

console.log(`Car is "${objToyota.Wheel()}"`);
console.log(`Car "${objToyota.checkAC()}"`);
console.log(`In this "${objToyota.callFacility()}"`);
console.log(`Is GPS supported:=> "${objToyota.GPSsupport()}"`);
console.log(`Color of Toyota car is "${objToyota.Color()}"`);
console.log(`Price of Toyota car is "${objToyota.Price()}"`);
console.log(`Total seats of Toyota car is "${objToyota.getTotalSeats()}"`);

console.log(`---------------------------------------------------------------------`);


console.log(`\nFEATURES OF HYUNDYAI\n`);

console.log(`Car is "${objHyundyai.Wheel()}"`);
console.log(`Car "${objHyundyai.checkAC()}"`);
console.log(`In this "${objHyundyai.callFacility()}"`);
console.log(`Is GPS supported:=> "${objHyundyai.GPSsupport()}"`);
console.log(`Color of Hyundyai car is "${objHyundyai.Color()}"`);
console.log(`Price of Hyundyai car is "${objHyundyai.Price()}"`);
console.log(`Total seats of Hyundyai car is "${objHyundyai.getTotalSeats()}"`);



