package com.library.Aspects;

import org.aspectj.lang.annotation.After;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Before;
import org.springframework.context.annotation.EnableAspectJAutoProxy;

@Aspect
@EnableAspectJAutoProxy
public class Logger {

    @After("execution(* com.library.LibraryManagementApplication.main(..))")
    public void afterMain(){System.out.println("[LOG] : App is ended....");}

    @Before("execution(* com.library.Control.HomeController.home())")
    public void beforeHome(){System.out.println("[LOG] : Home Page is loading....");}

    @Before("execution(* com.library.Control.RepositoryController.showAllBooks(..))")
    public void beforeShowingAllBooks(){System.out.println("[LOG] : showing books....");}

    @Before("execution(* com.library.Control.RepositoryController.addBook(..))")
    public void beforeAddingBooks(){System.out.println("[LOG] : Adding books....");}
}
