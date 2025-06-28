package com.example ;

public class App
{
    public static int toBinary(int num ) {
        if ( num == 0 ) return 0 ;
        if ( num == 1 ) return 1 ;
        return toBinary(num/2)*10 + (num%2);
    }
}
