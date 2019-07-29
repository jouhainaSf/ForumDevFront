import { AbstractControl } from '@angular/forms';

export class PasswordValidators {

    static passwordMatchValidator(control: AbstractControl) {
        let parent = control.parent
        if (parent) {
            let password = parent.get('password').value;
            let confirmPassword = control.value;

            if (password != confirmPassword) {
            return { ConfirmPassword: true };
            } else 
            {
                return null
            }
        } 
        else 
        {
        return null;
        }
    }
}
