<%@ page language = "java" contentType = "text/html; charset=UTF-8" pageEncoding="UTF-8" isELIgnored = "false"%>
<!DOCTYPE html>
<html>
    <head>
        <title>Library Management </title>
        <meta charset="UTF-8">
    </head>
    <body>
        <h1>WELCOME TO LIBRARY </h1>
        <form action="formAction">
          <label for="option">Choose an option:</label>
          <select id="option" name="option">
            <option value="showRepo">Show Repository</option>
            <option value="addBook">Add Book to Repository</option>
          </select>
          <input type="submit">
        </form>
    </body>
<html>
