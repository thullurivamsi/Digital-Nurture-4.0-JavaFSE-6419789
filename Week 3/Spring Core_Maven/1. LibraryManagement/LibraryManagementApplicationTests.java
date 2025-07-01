package com.library.LibraryManagement;

import com.library.Repository.BookRepository;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import java.util.ArrayList;

import static org.junit.jupiter.api.Assertions.*;

public class LibraryManagementApplicationTests {

	private static ApplicationContext app ;
	private BookRepository bookRepository;

	@BeforeAll
	public static void setApp() {
		app = new ClassPathXmlApplicationContext("ApplicationContext.xml");
	}

	@BeforeEach
	public void setBookRepository() {
		bookRepository = app.getBean(BookRepository.class) ;
	}

	@AfterEach
	public void print() {
		System.out.println("Test Completed");
	}

	@Test
	public void test1() {
		assertNotNull(bookRepository.getRepository());
	}

	@Test
	public void test2() {
		ArrayList<String> books = new ArrayList<>();
		books.add("Rich Dad Poor Dad");
		books.add("Think Rich Grow Rich");
		books.add("The Secret");
		books.add("Quiet");
		books.add("Atomic Habits");
		books.add("Think Straight");
		assertEquals(books, bookRepository.getRepository()) ;
	}


}
