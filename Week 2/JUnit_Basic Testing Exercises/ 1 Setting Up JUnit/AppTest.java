package com.example;


import static org.junit.Assert.*;

import org.junit.Test;

public class AppTest 
{

    @Test
    public void testTrueCase1() {
        assertEquals(110, App.toBinary(6));
    }

    @Test
    public void testTrueCase2() {
        assertEquals(1011, App.toBinary(11));
    }

    @Test
    public void testBasicCase1() {
        assertEquals(0, App.toBinary(0));
    }

    @Test
    public void testBasicCase2() {
        assertEquals(1, App.toBinary(1));
    }

}
