import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  articles = new Array<string>(); //Dichiaro un array di stringhe

  addArticle(spamText: HTMLInputElement, num: HTMLInputElement): boolean 
  {
    console.log(
      `spamText: ${spamText.value} and spamNum: ${num.value}` //Questa notazione permette di inserire il contenuto di variabili dentro a stringhe (usare ALT + 96 per le virgolette)
    );
    
    let cont = Number(num.value);
    
  
    for(let i:number =0; i< cont; i++)
    {
      this.articles.push(spamText.value);
    }

    return false;
  }
}
