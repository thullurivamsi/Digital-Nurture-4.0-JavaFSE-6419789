package com.library.LibraryManagement;

import com.library.Service.BookService;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class LibraryManagementApplication {

	public static void main(String[] args) {


	ApplicationContext app = new ClassPathXmlApplicationContext("ApplicationContext.xml");
	BookService bookService = app.getBean(BookService.class);

	bookService.showAllBooks();

	}
}
