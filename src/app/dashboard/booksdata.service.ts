import { Injectable } from "@angular/core";

@Injectable ({
  providedIn: 'root'
})

export class bookData{    
    bookData: any = [
        {
            "title": "To Kill a Mockingbird",
            "content": "The unforgettable novel of a childhood in a sleepy Southern town and the crisis of conscience that rocked it.",
            "author": "Harper Lee"
          },
          {
            "title": "1984",
            "content": "A dystopian social science fiction novel and cautionary tale about the dangers of totalitarianism.",
            "author": "George Orwell"
          },
          {
            "title": "Pride and Prejudice",
            "content": "A romantic novel of manners that depicts the British Regency era's societal issues.",
            "author": "Jane Austen"
          },
          {
            "title": "The Great Gatsby",
            "content": "A novel about the American dream and the roaring twenties, focusing on Jay Gatsby's obsession with Daisy Buchanan.",
            "author": "F. Scott Fitzgerald"
          },
          {
            "title": "Moby Dick",
            "content": "A whaling voyage narrative that explores complex themes such as vengeance, obsession, and humanity.",
          }

    ]

    getBookData(){
        return this.bookData;
    }
}