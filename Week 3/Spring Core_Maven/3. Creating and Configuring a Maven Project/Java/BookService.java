package com.library.Service;

import com.library.Repository.BookRepository;

import java.util.ArrayList;

public class BookService {

    private BookRepository bookRepository ;

    public BookService(BookRepository bookRepository) { this.bookRepository = bookRepository ; }

    public void addBook(String bookName) {
        this.bookRepository.addBook(bookName);
    }

    public String toString(){
        StringBuilder string = new StringBuilder() ;
        ArrayList<String> books = bookRepository.getBooks();
        for(String book: books){
            string.append(book) ;
            string.append(", \n");
        }
        return new String(string) ;
    }
}
