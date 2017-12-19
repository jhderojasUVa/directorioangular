import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'acentos',
  pure: false
})
export class AcentosPipe implements PipeTransform {
  public transform(value) {
    if (!value) {
      return;
    }
    //console.log("ACENTOS PIPE");
    //console.log("VALUE ");
    //console.log(value);
    //var tittles = "ÃÀÁÄÂÈÉËÊÌÍÏÎÒÓÖÔÙÚÜÛãàáäâèéëêìíïîòóöôùúüûÑñÇç";
    //var original = "AAAAAEEEEIIIIOOOOUUUUaaaaaeeeeiiiioooouuuunncc";
    var tittles = "ÃÀÁÄÂÈÉËÊÌÍÏÎÒÓÖÔÙÚÜÛãàáäâèéëêìíïîòóöôùúüûÇç";
    var original = "AAAAAEEEEIIIIOOOOUUUUaaaaaeeeeiiiioooouuuucc";
    for (var i = 0; i < tittles.length; i++) {
        value = value.replace(tittles.charAt(i), original.charAt(i)).toLowerCase();
    };
    //console.log(value);
    value=encodeURI(value);
    return value;
  }
}
