package com.library.Control;

import com.library.Service.BookService;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpSession;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class RepositoryController {

    ApplicationContext app = new ClassPathXmlApplicationContext("AppConfig.xml") ;
    BookService bookService = app.getBean(BookService.class);

    @RequestMapping("/formAction")
    public String showAllBooks(HttpServletRequest request){
        String value = request.getParameter("option") ;
        if ( value.equalsIgnoreCase("showRepo")) {
            HttpSession session = request.getSession();
            session.setAttribute("repo", bookService);
            return "repo" ;
        }
        else {
            return "book" ;
        }
    }

    @RequestMapping("/add")
    public String addBook(HttpServletRequest request){
        String req = request.getParameter("submission");
        if (req.equalsIgnoreCase("exit")){
            return "home" ;
        }
        else{
            bookService.addBook(request.getParameter("book"));
            return "book" ;
        }
    }
}
