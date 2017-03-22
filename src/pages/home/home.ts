interface Window {
    CorewiseFingerprintAuth: any;
}
declare var window : Window;

import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  registerFingerprint(){

  	        // to register a fingerprint
        window
        .CorewiseFingerprintAuth
		.registerFingerprint(function(successID){
			//on fingerprint registration success it returns the id of the fingerprint that has been stored in the flash memory
			//do something with the id i.e. store it in a db or something

			alert("sucessfully registered fingerprint, its id in flash memory is " + successID);

		},function(error){
		    //do some error handling
                alert(error);
		});

  }
  validateFingerprint(){
      
  	        // to register a fingerprint
        window
        .CorewiseFingerprintAuth
		.validateFingerprint(function(successID){
			//on fingerprint registration success it returns the id of the fingerprint that has been stored in the flash memory
			//do something with the id i.e. store it in a db or something

			alert("sucessfully validated fingerprint, its id in flash memory is " + successID);

		},function(error){
		    //do some error handling
           alert(error);
		});
  }

}
