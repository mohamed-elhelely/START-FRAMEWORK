import { Component} from '@angular/core';
declare let $: any
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class CONTACTComponent   {


  change() {
    if ($("#password").val() != "") {
      $("#titelp").animate({ "top": "0" }, 500)
    }
    else {
      $("#titelp").animate({ "top": "110" }, 500)
    }
    if ($("#name").val() != "") {
      $("#titeln").animate({ "top": "0" }, 500)
    }
    else {
      $("#titeln").animate({ "top": "110" }, 500)
    }
    if ($("#age").val() != "") {
      $("#titela").animate({ "top": "0" }, 500)
    }
    else {
      $("#titela").animate({ "top": "110" }, 500)
    }
    if ($("#email").val() != "") {
      $("#titele").animate({ "top": "0" }, 500)
    }
    else {
      $("#titele").animate({ "top": "110" }, 500)
    }
    console.log();

  }
}

