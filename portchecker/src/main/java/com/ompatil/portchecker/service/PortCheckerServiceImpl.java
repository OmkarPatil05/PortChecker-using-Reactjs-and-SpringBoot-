package com.ompatil.portchecker.service;

import org.springframework.stereotype.Service;

import java.net.ServerSocket;

@Service
public class PortCheckerServiceImpl implements PortCheckerService{

    public Boolean getPortInfo(Integer portNumber){
        try{
            ServerSocket serverSocket = new ServerSocket(portNumber);
            serverSocket.close();
        }catch(Exception exception){
            System.out.println("Got Exception, "+portNumber+" port is not free");
            return false;
        }

        System.out.println("No Exception, "+portNumber+" this port is free");
        return true;
    }


}
