
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { File } from '@ionic-native/file';

import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { FileOpener } from '@ionic-native/file-opener';
declare var cordova :  any;

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  currentitems : any[] ;

  allItems : any;
  txtContent: string;
  filename: any;

  constructor(public navCtrl: NavController,private fileOpener: FileOpener,private file: File,public http : Http,private iab: InAppBrowser) {

    this.initialaizeitem();
    }
    initialaizeitem() {


    this.currentitems =[
      {
        "songno" : '1.',
        "title" : ' அகோர கஸ்தி பட்டோராய்'
      },
      {
        "songno" : '2.',
        "title" : ' அஞ்சாதிரு, என் நெஞ்சமே'
      },
      {
        "songno" : '3.',
        "title" : ' அதிகாலை இயேசு வந்து'
      },
      {
        "songno" : '4.',
        "title" : ' அதிசயங்களை'
      },
      {
        "songno" : '5.',
        "title" : ' அநாதியான கர்த்தரே'
      },
      {
        "songno" : '6.',
        "title" : ' அருவிகள் ஆயிரமாய்'
      },
      {
        "songno" : '7.',
        "title" : ' அருள்நாதா நம்பி வந்தேன்'
      },
      {
        "songno" : '8.',
        "title" : 'அருள் மாரி எங்குமாகய்'
      },
      {
        "songno" : '9.',
        "title" : ' அல்லேலுயா இப்போது போர்'
      },
      {
        "songno" : '10.',
        "title" : "அலங்கார வாசலாலே"

      },
      {
        "songno" : '11',
        "title"  : "அன்பே விடாமல் சேர்த்துக்கொண்டீர்"
      },
      {
        "songno" : "12",
        "title"  : "அகோர காற்றடித்ததே"
      },
      {
        "songno" : "13",
        "title"  :  "அடியார் வேண்டல் கேளும்",
      },
      {
        "songno" : "14",
        "title"  :  "அநந்த கோடி கூட்டத்தார்",
      },
      {
        "songno" : "15",
        "title"  :  "அதோ, ஓர் ஜீவ வாசலே",
      },
      {
        "songno" : "16",
        "title"  :  "அமைதி அன்பின் ஸ்வாமியே",
      }
    ];
  }

  getItems(ev) {
    // Reset items back to all of the items
      this.initialaizeitem();

    // set val to the value of the ev target
      var val = ev.target.value;

    // if the value is an empty string don't filter the items
      if (val && val.trim() != '') {
      this.currentitems = this.currentitems.filter((item) => {
        return (item.songno.toLowerCase().indexOf(val.toLowerCase()) > -1) ||
        (item.title.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
      console.log(val);
      }
  }
  itemclick(){


  }

}



