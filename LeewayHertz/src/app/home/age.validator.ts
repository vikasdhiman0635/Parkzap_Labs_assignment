import { AbstractControl } from "@angular/forms";

export function ageValidator(control: AbstractControl): { [key: string]: boolean } |null
{    
    // age: Date;

    const age = control.get('age');

    cal:Number;

    message: Boolean;

    if (this.age.pristine) {
        const bdate = new Date(this.age.pristine);
        const timeDiff = Math.abs(Date.now() - bdate.getTime());
        this.cal = Math.floor((timeDiff / (1000 * 3600 * 24)) / 365);
    }
    console.log(this.cal);

    if (this.cal <= 18) {
        // this.message = true;
        return {
            'mismatch' :true
        }
    }
    else {
        return {
            'mismatch' :false
        }
    }

    // if(password.pristine || cpassword.pristine)
    // {
    //     return null;
    // }

    // return password && cpassword && password.value!=cpassword.value ? 
    // {
    //     'mismatch' : true
    // }: null;

    // return this.message;
}