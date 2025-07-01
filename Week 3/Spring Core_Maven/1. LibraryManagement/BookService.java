package com.library.Service;

import com.library.Repository.BookRepository;

import java.util.ArrayList;

public class BookService {

    private BookRepository bookRepository ;

    public BookService(BookRepository bookRepository) {
        this.bookRepository = bookRepository ;
    }

    public void showAllBooks() {
        ArrayList<String> books = bookRepository.getRepository() ;
        System.out.println("Books available for service are : ");
        for(String bookName : books )
            System.out.println(bookName);
    }

}
