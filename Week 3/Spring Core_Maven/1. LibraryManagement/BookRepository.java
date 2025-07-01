package com.library.Repository;

import java.util.ArrayList;

public class BookRepository {
    ArrayList<String> repository ;

    public BookRepository() {
        repository = new ArrayList<>();
        this.setRepository();
    }

    public void setRepository() {
        repository.add("Rich Dad Poor Dad");
        repository.add("Think Rich Grow Rich");
        repository.add("The Secret");
        repository.add("Quiet");
        repository.add("Atomic Habits");
        repository.add("Think Straight");
    }

    public ArrayList<String> getRepository() {
        return this.repository;
    }
}
